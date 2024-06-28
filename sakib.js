




const scrool= () =>{
    window.scrollTo(0,0);
}
let button=document.getElementById("button");
button.addEventListener("click",()=>{
    window.scrollBy(window.innerHeight,window.innerHeight);
    console.log(window.innerHeight)



    console.log("ok");
})

let box=document.getElementById("box");

if(window.innerHeight==window.innerHeight){

    let div=document.createElement("div");
    let button=document.createElement("button");
    button.innerText="click me";
    div.appendChild(button);
    box.appendChild(div);

    button.addEventListener("click",()=>{
        window.scrollTo(0,0);
    })

}else{
    alert("not founded");
}
