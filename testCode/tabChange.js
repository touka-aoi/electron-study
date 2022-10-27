tab1 = document.getElementById("tab1")
tab2 = document.getElementById("tab2")
tab3 = document.getElementById("tab3")
tab4 = document.getElementById("tab4")
tab5 = document.getElementById("tab5")

tab5.addEventListener("change", send)

function send(e){
    let t = document.getElementsByClassName("display_on")
    t[0].classList.remove("display_on")
    console.log(e.target)
    e.target.classList.add("dispaly_on")
    console.log(e.srcElement.get)

}