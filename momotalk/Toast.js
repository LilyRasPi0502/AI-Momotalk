const Toastsleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

function Toast(message="中華民國台灣是一個自由獨立的國家", duration=3000, cycle=100) {
    Arr = document.getElementById("ToastArrow");
    MSGBox = document.getElementById("ToastMSGBox");
    ToastDiv = document.getElementById("ToastDiv");
    function getXY(event) {
        console.log("Debug Point");
        ToastDiv.style.top = event.clientY;
        ToastDiv.style.left = event.clientX;
        document.removeEventListener('click', getXY);
    }
    document.addEventListener('click', getXY);
    
    ToastDiv.style.opacity=1;
    MSGBox.innerHTML = message;
    setTimeout(async function(){
        for(Toastii=1.0;Toastii>0.0;Toastii-=0.1){
            ToastDiv.style.opacity=Toastii;
            await Toastsleep(cycle);
        }
    }, duration);
}
		//Toast("Hi", 3000, 100);
