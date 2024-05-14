function clock() {
    const date = new Date();
    const hr = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");
    const sec = date.getSeconds().toString().padStart(2, "0");

    document.getElementById("clock").innerHTML = `${hr}:${min}:${sec}`;
    if (hr === "07" && min === "50") {
        clearInterval(clockInterval);
        alert("It's 7:50!");
    }
}

const clockInterval = setInterval(clock, 1000);
