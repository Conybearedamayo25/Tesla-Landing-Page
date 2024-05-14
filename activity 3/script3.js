function message() {
    const name = document.getElementById("name").value;
    const messageElement = document.getElementById("message");

    if (name) {
        messageElement.innerHTML = `<p>Welcome Mr/Mrs ${name}</p>`;
    } else {
        messageElement.innerHTML = "<p>Please enter your name</p>";
    }
}
