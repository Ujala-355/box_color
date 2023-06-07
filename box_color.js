const box=document.getElementById("id1");

const xhr=new XMLHttpRequest();
const red=document.getElementById("box1");
red.onclick=function(){
    box.style.backgroundColor="red";
    xhr.open("GET", "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json");
    xhr.onloadend = postAjaxFunction;
    xhr.send();
    
    
};
let postAjaxFunction = function () {
    if (xhr.status === 200) {
        box.innerHTML = "Successful";
        let response = JSON.parse(xhr.responseText);
        alert(response);
    } else {
        box.innerHTML = "Something went wrong.";
    }
}
const yellow=document.getElementById("box2");
yellow.onclick=function(){
    box.style.backgroundColor="yellow";
}
const blue=document.getElementById("box3");
blue.onclick=function(){
    box.style.backgroundColor="blue";
}

