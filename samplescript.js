const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');
const palitan1 = document.getElementById('changeBackground');
const palitan2 = document.getElementById('profile');
const palitan3 = document.getElementById('toggleDetails');
const palitan4 = document.getElementById('details');
let palitandin = true;

buttonname.addEventListener("click", function(){
        studentname.textContent = "Efrelyn Cabrea";
    }
)

palitan1.addEventListener("click", function(){
        if (palitandin == true){
            palitan2.style.backgroundColor = "#ebf4f2e1";
            palitandin = false;
        }
        else{
            palitan2.style.backgroundColor = "";
            palitandin = true;
        }
    }
)

palitan3.addEventListener("click", function(){
        if (palitan4.style.display === "none"){
            palitan4.style.display = "block";
        }
        else{
            palitan4.style.display = "none";
        }
    }
)