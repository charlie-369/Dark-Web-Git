let enddate=" 28 august 12:00 PM 2024"
document.getElementById("end-date").innerText=enddate;
let input = document.querySelectorAll("input");

function clock(){
    let end = new Date(enddate);
    let now = new Date()

    let diff = (end-now)/1000;

    if(diff < 0) return
   
    input[0].value = Math.floor(diff /3600 /24);

    input[1].value = Math.floor(diff/3600) % 24;

    input[2].value = Math.floor(diff/ 60) % 60;

    input[3].value = Math.floor(diff) % 60;
    
}


setInterval(()=>{
    clock()
},1000)