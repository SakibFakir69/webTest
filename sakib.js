





let button=document.getElementById("button");
let input=document.getElementById("input");
let box=document.getElementById("box")

let text=0;
button.addEventListener("click",()=>{
    if(input.value== " "){
        alert("Enter your value");
        text.stop();
    }
    text++;
    let div=document.createElement("div");
    let li=document.createElement("p");
    li.style.fontSize="1.2em";
    li.style.color="green";
    li.style.fontWeight="blod";
    div.appendChild(li);
    box.appendChild(div);
    li.innerText=`${text} `+input.value;
    input.value= " ";
})