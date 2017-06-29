// dev by caothetoan
var commands = [
    "Hello, I'm Jarvis",
    "I'm here to help you",
    'I <span class="question">question</span> things',
	'I <span class="make">make</span> things',
	'I <span class="code">code</span> things',

    "There're the commands that you can request:",
	"please turn on the lights",
"turn on the lamp",
"switch on the lamp",
"switch the lights off",
"start the motor",
"start engine",
"turn off the lamp",
"stop the motor",
"stop motor",
"please stop the washing machine",
"can you start the sewing machine",
"engine is faulty, stop it",
"start the machine",
"turn on the fan",
"switch on the LED",
"switch off the TV",
"turn the machine on",
"move forward",
"move backward",
"move up",
"move down",
"turn right",
"turn left",
"please go left",
"please go right",
"go forward",
"go backward",
"move forward for 10 seconds",
"go up the stairs",
"move the box up to the second floor",
"turn down the volume",
"turn up the volume",
"it's getting dark",
"its dark now",
"it is very dark in here",
"why its dark?",
"play a song",
"play a Linkin Park song",
"play some song",
"I would like to hear a song",
"I love listening to Metallica",
"play something rocking",

];

function startTyping() {
    $(".verb").typed({
        //place space before strings otherwise doesnt render with html tags properly
        strings: commands,
        typeSpeed: 80,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: false,
        preStringTyped: function (curStringPos) {

            //$('#carousel').carousel('next')

            if (curStringPos == 2) {
                // remove first blank png so that it doesnt show again
                $("#placeholder-slide").remove();
            }

        }
    })
}
startTyping();


$(function () {
    $("#btnHideChat").click(function () {
        $('#chatBody').toggle();
        $("#btnHideChat span").toggleClass('fa-chevron-up');
    });
    
})
