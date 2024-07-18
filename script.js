let valueDisplays = document.querySelectorAll(".number");

let interval = 5000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue === endValue){
            clearInterval(counter);
        }
    })
});


let displaysValue = document.querySelectorAll(".number1");
let interval1 = 6000;

displaysValue.forEach((displayValue) => {
    let startValue = 500;
    let endValue = parseInt(displayValue.getAttribute("data-val"));
    let duration = Math.floor(interval1 / endValue);
    let counter = setInterval(function(){
        startValue -= 1;
        displayValue.textContent = startValue;
        if(startValue === endValue){
            clearInterval(counter);
        }
    });

});




const track = document.getElementById("slider");

const handleOnDown = (e) => 
    track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = 
        parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth;

    const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = 
            parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage =
            Math.max(Math.min(nextPercentageUnconstrained, 0), -70);

    track.dataset.percentage = nextPercentage;
    
    track.animate({
        transform: `translateX(${nextPercentage}%)`
    }, { duration: 1200, fill: "forwards" });
}

window.onmousedown = (e) => handleOnDown(e);

window.ontouchstart = (e) => handleOnDown(e.touches[0]);

window.onmouseup = (e) => handleOnUp(e);

window.ontouchend = (e) => handleOnUp(e.touches[0]);

window.onmousemove = (e) => handleOnMove(e);

window.ontouchmove = (e) => handleOnMove(e.touches[0]);

