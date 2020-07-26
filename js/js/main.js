/*let a = 35;
let b = 'Привет, ';
let db = 'Мир!';
let c = true;
let d = 5;

a = prompt ('Напишите значение переменной а');

if (a == 37) {
alert ('a == 37');

} else {
	alert ('что-то другое');
}

for (
	let i = 0; 
	i < 5; 
	i++
	) 
{
	alert (i);
}


let user = {
	'name': 'Петья',
	'surname': 'Васичкин',
	'age': 25,
}

alert (user.name)

let mas = ['Петья',' Васичкин', 25 ]

alert (mas[2]);


function doMagic (a,b) {
alert (a + b);
}

doMagic (5,5);
*/

var btn = document.getElementById ('btn');
btn.onclick = function () {
	let text = document.querySelector ('p.intro');
	text.classList.add ('red');
	let img = document.querySelector ('.desktop');
	img.style.display = 'none';
	document.querySelector ('.skill-change').style.marginLeft = '50px';
}


$(function () {
    $(window).scroll(function() {
        $('#learn .section-title').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+650) {
                $(this).addClass("animate__backInLeft");
            }
        });
    })
   });