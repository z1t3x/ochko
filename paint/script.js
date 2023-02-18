let element = document.getElementById("block")

element.addEventListener("click", function (Event) {
    let Dot = document.createElement("div")
    Dot.className = 'point'
    Dot.style.top = Event.offsetY + 'px'
    Dot.style.left = Event.offsetX + 'px'
    element.prepend(Dot)


    let line = document.createElement("div")
    line.className = 'line'
    line.style.top = Event.offsetY + 2 + 'px'
    line.style.left = Event.offsetX + 'px'
    element.prepend(line)

    console.log(Event)
})



