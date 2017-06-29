var url = 'https://6ed07515.ngrok.io/jarvis'

var isListening = false;
		var recognition;
		var final_transcript = '';
		var interim_transcript = '';
		var result = '';
		var start_timestamp;
		var detectedText = document.getElementById("detectedText");
		
		function btnClick(){
			console.log("isListening-->"+isListening);
			if(isListening){
				console.log("need to stop..");
				isListening = false;
				document.getElementById("btn").innerHTML = 'Listen';
				recognition.stop();
			}else{
				console.log("need to start..");
				isListening = true;
				document.getElementById("btn").innerHTML = 'Stop';
				startListening();
			}
		}

		function startListening() {
			console.log("starting to listen...");
			
			final_transcript = '';
			interim_transcript = '';
			start_timestamp = event.timeStamp;
			detectedText.innerHTML = final_transcript;
			
			recognition.lang = "en-GB";
			recognition.start();

		}

		function initPage() {
			if (!('webkitSpeechRecognition' in window)) {
				console.log("need upgrade...");
				upgrade();
			} else {
				console.log("no upgrade required...");
				recognition = new webkitSpeechRecognition();
				recognition.continuous = false;
				recognition.interimResults = true;

				recognition.onstart = function() {
					console.log("onstart...");
				};

				recognition.onresult = function(event) {
					console.log("onresult...");
					interim_transcript = '';
					final_transcript = '';
					result = '';

					for (var i = event.resultIndex; i < event.results.length; ++i) {
						if (event.results[i].isFinal) {
							final_transcript += event.results[i][0].transcript;
						} else {
							interim_transcript += event.results[i][0].transcript;
						}
					}
					console.log("Interim-->" + interim_transcript);
					console.log("Detected-->" + final_transcript);
					if(final_transcript.length > 1 ){
						getResult(final_transcript,
							function(resp){
								var reply = resp.response;
								textToSpeech(reply);
								document.getElementById("result").innerHTML = reply;
							},
							function(){
								
							}
						);
						
					}
					detectedText.innerHTML = final_transcript;
					isListening = false;
					document.getElementById("btn").innerHTML = 'Listen';
				}

				recognition.onerror = function(event) {
					console.log("onerror...");

					if (event.error == 'no-speech') {
						console.log('info_no_speech');
						alert('no speech detected');
					}
					if (event.error == 'audio-capture') {
						console.log('info_no_microphone');
						alert('no microphone detected');
					}
					if (event.error == 'not-allowed') {
						console.log('info_not_allowed');
						if (event.timeStamp - start_timestamp < 100) {
							console.log('info_blocked');
							alert('info_blocked');
						} else {
							console.log('info_denied');
							alert('denied');
						}
					}
				};

				recognition.onend = function() {
					console.log("onend...");
				};
			}
		}
		
		function getResult(query, success, error) {
			
			var query = '{"query":"'+query+'"}';
			console.log('Query-->'+query);
		    var xhttp = new XMLHttpRequest();
		    xhttp.onreadystatechange = function() {
		        if (this.readyState == 4 && this.status == 200) {
		        	console.log('Response-->'+this.responseText);
		        	var resp = JSON.parse(this.responseText);
					if(success)
						success(resp);
		        	
		       }
		    };
		    xhttp.open("POST", url, true);
		    xhttp.setRequestHeader("Content-type", "application/json");
		    xhttp.setRequestHeader("Accept", "application/json");
		    xhttp.send(query); 
		}

		function textToSpeech(speech){
			var msg = new SpeechSynthesisUtterance(speech);
			var voices = window.speechSynthesis.getVoices();
	        msg.default = false;
	        msg.voice = voices.filter(function(voice) { return voice.name == 'Google UK English Male'; })[0];
	        msg.lang = 'en-GB'; //Also added as for some reason android devices used for testing loaded spanish language 
        
			// var voices = window.speechSynthesis.getVoices();
			// msg.voice = voices[2]; // Note: some voices don't support altering params
			// msg.voiceURI = 'male';
			// msg.volume = 1; // 0 to 1
			// msg.rate = 1.3; // 0.1 to 10
			// msg.pitch = 1; //0 to 2
			// msg.text = speech;
			// msg.lang = 'en-US';

			// msg.onend = function(e) {
			//   console.log('Finished in ' + event.elapsedTime + ' seconds.');
			// };
			window.speechSynthesis.speak(msg);
		}
