
window.addEventListener('keydown', function(event) {
    
    const key = event.key.toUpperCase();  
    const audio = document.getElementById(key);
    if(audio == null){ 
        return;
     }
     else{
        const box = "Box"+key;
        const pad = document.getElementById(box);
        pad.style.borderColor = "#f0a500";
        pad.style.backgroundColor = "#f0a500"
        pad.style.MozTransform = 'scale(1.1)';
        pad.style.WebkitTransform = 'scale(1.1)';
        audio.currentTime = 0;
        audio.play();
        setTimeout(function(){ pad.style.borderColor = "white";
         pad.style.backgroundColor = "transparent"
         pad.style.MozTransform = 'scale(1.0)';
         pad.style.WebkitTransform = 'scale(1.0)';
         }, 200);
     }
  
});