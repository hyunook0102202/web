
var cute = prompt('바우에게 할 말을 남겨주세요!');

document.write('바우에게..' + cute);

function changeImage() {
    let image1 = document.getElementById("bow1234");
    image1.src = "bow.jpg";
    image1.style.width = "30%";
    image1.style.height = "30%";
}

function reImage() {
    let originImage = document.getElementById("bow1234");
    originImage.src = "bow3.jpg";
    originImage.style.width = "30%";
    originImage.style.height = "30%";
}

