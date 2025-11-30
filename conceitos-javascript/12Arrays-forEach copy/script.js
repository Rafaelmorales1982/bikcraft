//Mudando css dos links com javascript
const links = document.querySelectorAll("nav a");

function ativiarLink(link){
    //console.log(link);
    const href = link.href;
    const url = document.location.href;

    if(href === url){
        link.style.backgroundColor = "black";
        link.style.color = "white";
      
        link.style.padding = "5px";
      
        link.style.borderRadius = "5px";
       
    }
}

links.forEach(ativiarLink);