
/*  Full screen     */

document.querySelector('.fullscreen').addEventListener('click', toggleScreen);
function toggleScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
    else {
        if (document.fullscreenEnabled) {
            document.exitFullscreen();
        }
    }
}

/*      Constants    */

const switcherBlur = document.querySelector(".switcher-blur");
const switcherInvert = document.querySelector(".switcher-invert");
const switcherSepia = document.querySelector(".switcher-sepia");
const switcherSaturate = document.querySelector(".switcher-saturate");
const switcherHue = document.querySelector(".switcher-hue");

const outputBlur = document.querySelector(".output-blur");
const outputInvert = document.querySelector(".output-invert");
const outputSepia = document.querySelector(".output-sepia");
const outputSaturate = document.querySelector(".output-saturate");
const outputHue = document.querySelector(".output-hue");

const img = document.querySelector("#image");

const reset = document.querySelector(".btn-reset");


/*    Input       */

outputBlur.textContent = switcherBlur.value;
outputInvert.textContent = switcherInvert.value;
outputSepia.textContent = switcherSepia.value;
outputSaturate.textContent = switcherSaturate.value;
outputHue.textContent = switcherHue.value;

switcherBlur.oninput = function() {
    outputBlur.textContent = this.value;
}

switcherInvert.oninput = function() {
    outputInvert.textContent = this.value;
}

switcherSepia.oninput = function() {
    outputSepia.textContent = this.value;
}

switcherSaturate.oninput = function() {
    outputSaturate.textContent = this.value;
}

switcherHue.oninput = function() {
    outputHue.textContent = this.value;
}

/* Change filter */

switcherBlur.addEventListener('input', updateFilterValue);
switcherInvert.addEventListener('input', updateFilterValue);
switcherSepia.addEventListener('input', updateFilterValue);
switcherSaturate.addEventListener('input', updateFilterValue);
switcherHue.addEventListener('input', updateFilterValue);

function updateFilterValue() {
    img.style.filter = `
    blur(${switcherBlur.value}px)
    invert(${switcherInvert.value}%)
    sepia(${switcherSepia.value}%)
    saturate(${switcherSaturate.value}%)
    hue-rotate(${switcherHue.value}deg)    
    `;
}

/*  reset */
reset.onclick = function() {
    switcherBlur.value = switcherBlur.defaultValue;
    outputBlur.textContent = switcherBlur.defaultValue;

    switcherInvert.value = switcherInvert.defaultValue;
    outputInvert.textContent = switcherInvert.defaultValue;

    switcherSepia.value = switcherSepia.defaultValue;
    outputSepia.textContent = switcherSepia.defaultValue;

    switcherSaturate.value = switcherSaturate.defaultValue;
    outputSaturate.textContent = switcherSaturate.defaultValue;

    switcherHue.value = switcherHue.defaultValue;
    outputHue.textContent = switcherHue.defaultValue;

    img.style.filter = `
    blur(${switcherBlur.defaultValue}px)
    invert(${switcherInvert.defaultValue}%)
    sepia(${switcherSepia.defaultValue}%)
    saturate(${switcherSaturate.defaultValue}%)
    hue-rotate(${switcherHue.defaultValue}deg)    
    `;
}







