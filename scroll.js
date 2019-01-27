const audrey = document.getElementById("audrey")
const containerEl = document.getElementById("container")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function () {

    console.log(window.scrollY)
    audrey.style.width = `${(window.scrollY)/3}px`
    if(parseInt(audrey.style.width) < 50)
        audrey.style.width = "50px";
    //audrey.setAttribute("width", (window.scrollY/3))
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */

   audrey.style.height = `${(window.scrollY)/4}px`

    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */
   if(parseInt(audrey.style.width) < 50)
        audrey.style.width = "100px";
    
})