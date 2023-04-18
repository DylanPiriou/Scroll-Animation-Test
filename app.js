const titles = document.querySelectorAll("h2");

window.addEventListener("scroll", () => {
    const scrollAmount = window.scrollY;
    const newPosition = scrollAmount * .5;
    titles.forEach(title => {
        title.style.transform = `translateX(${newPosition}px)`;
    })
})