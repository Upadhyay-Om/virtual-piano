window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyE1 = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio || !keyE1) return; //stop the function from running all together
    
    if (!keyE1.classList.contains('playing')){
        keyE1.classList.add('playing');
    }
    
    audio.currentTime = 0; //rewind to the start
    audio.play();
});
window.addEventListener('keyup',function(e){
    const keyE1 = document.querySelector(`div[data-key="${e.keyCode}"`);
    if (!keyE1) return;
    keyE1.classList.remove('playing');
});
// Mouse Clicks 
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => {
    key.addEventListener('click',function(e){
        const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`)
        if (!audio) return;

        key.classList.add('playing')
        audio.currentTime = 0;
        audio.play();
        setTimeout(() => {
            key.classList.remove('playing');
        }, 200);

    })
});