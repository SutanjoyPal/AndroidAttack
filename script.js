score = 0;
cross = true;
flag = true;

 let audio = new Audio("2019-12-11_-_Retro_Platforming_-_David_Fesliyan.mp3");
 let audiogo = new Audio('negative_beeps-6008.mp3');
 let audioj = new Audio('cartoon-jump-6462.mp3');
 let audiom = new Audio('quick-swhooshing-noise-80898.mp3');

document.onkeydown = function (e) {
    if(parseInt(e.keyCode) && flag){
        audio.play();
    }
    // console.log(e.keyCode);
    if (e.keyCode == 38 || e.keyCode == 32) {
        audioj.load();
        audioj.play();
        audioj.loop=false;
        ele = document.querySelector('.hero');
        ele.classList.add('heroanime');
        setTimeout(() => {
            ele.classList.remove('heroanime');
        }, 800);
    }
    else if (e.keyCode == 39) {
        audiom.load();
        audiom.play();
        audiom.loop=false;
        ele = document.querySelector('.hero');
        ex = parseInt(window.getComputedStyle(ele, null).getPropertyValue('left'));
        ele.style.left = ex + 100 + "px";
    }
    else if (e.keyCode == 37) {
        audiom.load();
        audiom.play();
        audiom.loop=false;
        ele = document.querySelector('.hero');
        ex = parseInt(window.getComputedStyle(ele, null).getPropertyValue('left'));
        ele.style.left = ex - 100 + "px";
    }
}

setInterval(() => {
    h = document.querySelector('.hero');
    v = document.querySelector('.villian');
    go = document.querySelector('.gameover');

    hx = parseInt(window.getComputedStyle(h, null).getPropertyValue('left'));
    hy = parseInt(window.getComputedStyle(h, null).getPropertyValue('bottom'));

    vx = parseInt(window.getComputedStyle(v, null).getPropertyValue('left'));
    vy = parseInt(window.getComputedStyle(v, null).getPropertyValue('bottom'));

    offsetX = Math.abs(hx - vx);
    offsetY = Math.abs(hy - vy);

    // console.log(offsetX,offsetY);

    if (offsetX < 100 && offsetY < 70) {
        go.style.visibility = 'visible';
        v.classList.remove('villiananime');
        audiogo.load();
        audiogo.play();
        audiogo.loop=false;
    
        audio.pause();
        flag=false;
        cross = false;
    }
    else if (offsetX < 150 && cross) {
        score += 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 500);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(v, null).getPropertyValue('animation-duration'));
            v.style.animationDuration = (aniDur - 0.03) + 's';
            console.log(aniDur);
        }, 500);

    }

}, 100);

function updatescore(score) {
    scoreCont.innerHTML = "Your Score: " + score;
}