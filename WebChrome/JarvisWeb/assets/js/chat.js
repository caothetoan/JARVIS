// dev by caothetoan

var url = window.Configuration.rootApiUrl;
// set the focus to the input box
document.getElementById("wisdom").focus();

var lexUserId = 'chatbot-demo' + Date.now();
var sessionAttributes = {};

function pushChat() {

    // if there is text to be sent...
    var wisdomText = document.getElementById('wisdom');
    if (wisdomText && wisdomText.value && wisdomText.value.trim().length > 0) {

        // disable input to show we're sending it
        var wisdom = wisdomText.value.trim();
        wisdomText.value = 'Thinking...';
        wisdomText.locked = true;

        // send it to the Lex runtime
        var params = {
            botAlias: '$LATEST',
            botName: 'BookTrip',
            inputText: wisdom,
            userId: lexUserId,
            sessionAttributes: sessionAttributes
        };
        showRequest(wisdom);

        sendRequest(wisdom,
            function (data) {
                if (data) {
                    // capture the sessionAttributes for the next cycle
                    sessionAttributes = data.sessionAttributes;
                    // show response and/or error/dialog status
                    showResponse(data);

                    textToSpeech(data);
                    document.getElementById("result").innerHTML = data;

                }

                // re-enable input
                wisdomText.value = '';
                wisdomText.locked = false;
            },
            function (err) {
                if (err) {
                    console.log(err, err.stack);
                    showError('Error:  ' + err.message + ' (see console for details)')
                }
            }
        );

    }//
    // we always cancel form submission
    return false;
}
function sendRequest(query, success, error) {
    var query = '{"query":"' + query + '"}';
    console.log('Query-->' + query);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log('Response-->' + this.responseText);
            var resp = JSON.parse(this.responseText);
            if (success)
                success(resp.response);

        }
    };
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.send(query);
}
function showRequest(daText) {

    var conversationDiv = document.getElementById('conversation');
   
    //  <div class="direct-chat-info clearfix">
    //    <span class="direct-chat-name pull-left">You</span>
    //    <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
    //  </div>
   
    var requestPara = document.createElement("div");
    requestPara.className = 'direct-chat-msg';

    var direct_chat_img = document.createElement("img");
    direct_chat_img.className = 'direct-chat-img';
    direct_chat_img.src = '/assets/img/avatar5.png';
    direct_chat_img.alt = 'user';
    requestPara.appendChild(direct_chat_img);


    var direct_chat_text = document.createElement("div");
    direct_chat_text.className = 'direct-chat-text';


    direct_chat_text.appendChild(document.createTextNode(daText));
    direct_chat_text.appendChild(document.createElement('br'));

    requestPara.appendChild(direct_chat_text);

    //var requestPara = document.createElement("P");
    //requestPara.className = 'userRequest';
    //requestPara.appendChild(document.createTextNode(daText));

    conversationDiv.appendChild(requestPara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
}

function showError(daText) {

    var conversationDiv = document.getElementById('conversation');
    var errorPara = document.createElement("P");
    errorPara.className = 'lexError';
    errorPara.appendChild(document.createTextNode(daText));
    conversationDiv.appendChild(errorPara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
}

function showResponseSimple(lexResponse) {

    var conversationDiv = document.getElementById('conversation');

    var responsePara = document.createElement("P");
    responsePara.className = 'lexResponse panel-body';
    if (lexResponse) {
        responsePara.appendChild(document.createTextNode(lexResponse));
        responsePara.appendChild(document.createElement('br'));
    }
    if (lexResponse.dialogState === 'ReadyForFulfillment') {
        responsePara.appendChild(document.createTextNode(
            'Ready for fulfillment'));
        // TODO:  show slot values
    } else {
        //responsePara.appendChild(document.createTextNode(
        //'(' + lexResponse.dialogState + ')'));
    }
    conversationDiv.appendChild(responsePara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
}

function showResponse(lexResponse) {

    var conversationDiv = document.getElementById('conversation');
   
    //  <div class="direct-chat-info clearfix">
    //    <span class="direct-chat-name pull-left"> Jarvis</span>
    //    <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
    //  </div>
   
    var responsePara = document.createElement("div");
    responsePara.className = 'direct-chat-msg right';
    if (lexResponse) {
        var direct_chat_img = document.createElement("img");
        direct_chat_img.className = 'direct-chat-img';
        direct_chat_img.src = '/assets/img/robot108.png';
        direct_chat_img.alt = 'bot';

        responsePara.appendChild(direct_chat_img);

        var direct_chat_text = document.createElement("div");
        direct_chat_text.className = 'direct-chat-text';


        direct_chat_text.appendChild(document.createTextNode(lexResponse));
        direct_chat_text.appendChild(document.createElement('br'));

        responsePara.appendChild(direct_chat_text);
    }

    conversationDiv.appendChild(responsePara);
    conversationDiv.scrollTop = conversationDiv.scrollHeight;
}

