const handelOnMouseMove = e =>{
    const {currentTarget : target} = e;

    const rect = tagret.getBoundingClientRect(),
        x= e.clientX - rect.left,
        y = e.clientY - rect.top

    target.style.setProperty("--mouse-x", `${x}px`)
    target.style.setProperty("--mouse-y", `${y}px`)

}


for(const card of document.querySelectorAll(".card")){
    card.onmousemove = e => handelOnMouseMove(e)
}