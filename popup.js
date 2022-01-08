const textbox = document.getElementById("textbox");
const bold_feature = document.getElementById("bold");
const ul = document.getElementById("ul");
const ol = document.getElementById("ol");
const checkbox = document.getElementById("checkbox");
const save = document.getElementById("save");

bold_feature.addEventListener("click",()=>{
    if(textbox.style.fontWeight.value == "bold")
        textbox.style.fontWeight = "100";
    else{
        textbox.style.fontWeight = "bold";
    }
})

ul.addEventListener("click",()=>{
    textbox.innerHTML = "• ";
    textbox.style.fontSize = "120%";
})

ol.addEventListener("click",()=>{
    textbox.innerHTML = "1. ";
    textbox.style.fontSize = "120%";
})

checkbox.addEventListener("click",()=>{
    textbox.innerHTML = "☑ ";
    textbox.style.fontSize = "120%";
})

save.addEventListener("click",()=>{
    window.print();
})

