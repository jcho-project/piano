// Link audio while keydown
window.addEventListener('keydown', playSound);

// Remove playing class
const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// Add playing
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) {
        return; // Stop the function from running all together
    }
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add('playing');
};

// Remove transition function
function removeTransition(e) {
    if(e.propertyName !== 'transform') {
        return; //Skip if the property is not transform
    }
    this.classList.remove('playing');
};