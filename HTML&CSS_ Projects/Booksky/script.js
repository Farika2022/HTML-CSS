var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-btn")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbutton= document.getElementById("cancel-btn")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbutton=document.getElementById("add-btn")
var bookinput=document.getElementById("book-title")
var bookinput1=document.getElementById("book-author")
var bookinput2=document.getElementById("book-description")
addbutton.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${bookinput.value}</h1> <h2>Rich Dad poor Dad</h2>
        <h5>${bookinput1.value}</h5>
        <p>
         ${bookinput2.value}
        </p>
        <button onClick='deletebook(event)'>Clear</button>`
   
    container.append(div)
     popupoverlay.style.display="none"
    popupbox.style.display="none"

})

function deletebook(event){
 event.target.parentElement.remove()
}