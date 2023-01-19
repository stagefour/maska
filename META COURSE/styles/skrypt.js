var canvas = document.getElementById("my_canvas");
var context = canvas.getContext ("2d");
var szerokosc = canvas.offsetWidth;
var wysokosc = canvas.offsetHeight;



const speed = 2;
var position = 10;
var moveSpeed = speed;
var radius = wysokosc / 10;
var szerokoscRuchu = szerokosc - radius;
var wysokoscPilki = (wysokosc / 2);

console.log (context);
console.log (szerokosc);
console.log (wysokosc);



function moveBall () {
    if (position + radius > szerokoscRuchu) {
        moveSpeed = -speed;
    } else if (position - radius < 0) {
        moveSpeed = speed;
    };
    position += moveSpeed;
};

function drawBall () {
    context.clearRect (0, 0, szerokosc, wysokosc);
    context.fillStyle = "#62687f";
    context.beginPath ();
    context.arc(position, wysokoscPilki, radius, 0, 2 * Math.PI);
    context.fill();
};

function animate () {
    moveBall();
    drawBall();
    window.requestAnimationFrame(animate);
};

window.requestAnimationFrame(animate);

