const questions = [
    { q: "1. Where ma find ang Cordova, Public, College", a: "Gabi" },
    { q: "2. Maka Sulod ba if mag PE ", a: "Dili" },
    { q: "3. Gwapa ba og mga maistra sa CPC", a: "Yes kaayu" },
    { q: "4. Where is Philippines located?", a: "Asia" },
    { q: "5. Where did Lapu-Lapu vs. Magellan's fight take place?", a: "Mactan" },
];

let i = 0;

function display() {
    document.getElementById("question").textContent = questions[i].q;
}

function check() {
    const answer = document.getElementById("answer").value;
    if (answer.toLowerCase() == questions[i].a.toLowerCase()) {
        i++;
        if (i == questions.length) {
            alert("Congrats! You answered all questions correctly!");
        } else {
            display();
            document.getElementById("feedback").textContent =
                "Correct! Next question...";
        }
    } else {
        i = 0;
        display();
        document.getElementById("feedback").textContent =
            "Incorrect. Please try again.";
    }
    document.getElementById("answer").value = "";
}

display();
document.getElementById("submit").addEventListener("click", check);
