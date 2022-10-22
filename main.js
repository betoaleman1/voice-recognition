var x=0

var y=0

draw_circle="";
draw_rectangle="";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="el sitema está escuchando, puedas hablar";
    recognition.start();
}
recognition.onresult = function(event) { console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "La voz se reconoció como: " + content;
    if(content =="círculos") { x = Math.floor(Math.random() * 900);
         y = Math.floor(Math.random() * 600);
         document.getElementById("status").innerHTML = "Se empezó a dibujar un círculo ";
          draw_circle = "set"; 
        }
        if(content =="rectángulos") { x = Math.floor(Math.random() * 900);
             y = Math.floor(Math.random() * 600);
              document.getElementById("status").innerHTML = "Se empezó a dibujar un rectángulo ";
               draw_rectangle = "set";
             } 
            }
            function setup() { canvas = createCanvas(900, 600); }

            function draw() { if(draw_circle == "set") { radius = Math.floor(Math.random() * 100);
                 circle(x, y, radius); document.getElementById("status").innerHTML = "Se dibujó un círculo. ";
                  draw_circle = ""; } if(draw_rectangle == "set") { rect(x,y,70,50);
                     document.getElementById("status").innerHTML = "Se dibujó un rectángulo. ";
                      draw_rectangle = ""; 
                    } 
                }
