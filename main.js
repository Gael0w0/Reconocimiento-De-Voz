x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "El Sistema Esta Escuchando. Porfavo habla :>";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "La Voz Se Reconocio Como: " + content;
    if(content =="Circulo")
    {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Se Empezo A Dibujar Un Circulo ";
        draw_circle = "set";
    }
    if(content == "Rectangulo")
{
    x = Math.floor(Math.random() * 900);
    y = Math.floor(Math.random() * 600);
    document.getElementById("status").innerHTML = "Se Empezo A Dibujar Un Rectangulo ";
    draw_rect = "set";
}
}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if(draw_circle == "set")
    {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Se Dibujo Un Circulo ";
        draw_circle = "";
    }

    if(draw_rect == "set")
{
    rect(x,y,70,50);
    document.getElementById("status").innerHTML = "Se Dibujo Un Rectangulo ";
    draw_rect = "";
}
}