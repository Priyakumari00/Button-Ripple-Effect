const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (Event) => {
   

    const x =(Event.pageX - btn.offSetLeft);
    const y =(Event.pageY - btn.offSetTop);

    btn.computedStyleMap.setProperty("--xPos", x + "px")
    btn.computedStyleMap.setProperty("--yPos", y + "px")
})