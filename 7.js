function update() {
    let now = new Date();
    let hr = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    hr = hr < 10 ? "0" + hr : hr;




    const hours = document.getElementById("hours");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");

    hours.textContent = hr;
    min.textContent = m;
    sec.textContent = s;
}

setInterval(update, 1000)