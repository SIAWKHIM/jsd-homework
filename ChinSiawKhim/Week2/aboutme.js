let bodyTag = document.querySelector("body");
bodyTag.style.fontFamily = "Arial, sans-serif";

let liTagList = document.querySelectorAll("li")
for (let i = 0; i < liTagList.length; i ++) {
    if (i===0) { liTagList[i].innerHTML = "Home" } 
    else if (i===1) { liTagList[i].innerHTML = "Portfolio" }
    else { liTagList[i].innerHTML = "About me" }
    liTagList[i].setAttribute("class", "list-item");
}


let imgTag = document.createElement("img");
imgTag.src = "https://picsum.photos/400/300";
let heading = document.querySelector("h1");
document.body.insertBefore(imgTag, heading);
