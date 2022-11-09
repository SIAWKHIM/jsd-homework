const books = [
    {
      title: "Gödel, Escher, Bach",
      author: "Douglas Hofstadter",
      alreadyRead: false
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      alreadyRead: true
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      alreadyRead: true
    },
    {
      title: "A Life on our Planet",
      author: "David Attenborough",
      alreadyRead: true
    },
    {
      title: "Cosmos",
      author: "Carl Sagan",
      alreadyRead: false
    }
];

let bodyTag = document.querySelector("body");
bodyTag.style.fontFamily = "Arial, sans-serif";

let heading = document.querySelector("h1");
let script = document.querySelector("script");
let paragraph = document.createElement("p");
paragraph.innerHTML = "This is my booklist";
document.body.insertBefore(paragraph, script);
let ulTag = document.createElement("ul");
document.body.insertBefore(ulTag, script);
books.forEach(e => { 
    let liTag = document.createElement("li");
    liTag.innerHTML = e.title;
    if (e.alreadyRead) {
        liTag.setAttribute("class", "alreadyRead");
    }
    else {
        liTag.setAttribute("class", "noRead");
    }
    document.body.insertBefore(liTag, script);
});    
