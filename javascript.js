const button = document.querySelector(".button")

const buttonBox = button.getBoundingClientRect();
const centerX = buttonBox.left + buttonBox.width/2 - window.pageXOffset;
const centerY = buttonBox.top + buttonBox.height/2 - window.pageYOffset;
let isTurnable = false;

function toggleIsTurnable() {
    isTurnable = !isTurnable;
}

function rotateButton(e) {
    if (isTurnable) {
        const radians = Math.atan2(e.clientX - centerX, e.clientY - centerY);
        let degree = (radians * (180 / Math.PI) * -1) + 180;
        if (degree >= 135 && degree <= 180) {
            degree = 135
        } else {
            if (degree <= 225 && degree >= 180) {
                degree = 225
            }
        }
        button.style.transform = "rotate("+degree+"deg)";
    }
}

button.addEventListener("mousedown", toggleIsTurnable);
window.addEventListener("mouseup", toggleIsTurnable);
window.addEventListener("mousemove", rotateButton);

window.addEventListener("dragend", toggleIsTurnable);
window.addEventListener("dragover", rotateButton);

