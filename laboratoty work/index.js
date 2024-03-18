function su() {
    const choices = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame() {
    let summay = 0;
    let computerScore = 0;

    while (true) {
        let userChoice = prompt("Выберите: камень, ножницы или бумага? (для выхода введите 'отмена')").toLowerCase();
        while (userChoice !== "камень" && userChoice !== "ножницы" && userChoice !== "бумага" && userChoice !== "отмена") {
            userChoice = prompt("Неверный ввод. Попробуйте снова: камень, ножницы или бумага? (для выхода введите 'отмена')").toLowerCase();
        }
        
        if (userChoice === "отмена") {
            break;
        }
        
        const computerChoice = su();
       alert(`Компьютер выбрал: ${computerChoice}`);

        if (userChoice === computerChoice) {
           alert("Ничья!");
        } else if ((userChoice === "камень" && computerChoice === "ножницы") ||
                   (userChoice === "ножницы" && computerChoice === "бумага") ||
                   (userChoice === "бумага" && computerChoice === "камень")) {
           alert("Вы выиграли!");
            summay++;
        } else {
           alert("Компьютер выиграл!");
            computerScore++;
        }

       alert(`Текущий счет: Вы ${summay}, Компьютер ${computerScore}`);
    }

    if (summay > computerScore) {
       alert("Вы победили!");
    } else if (summay < computerScore) {
       alert("Компьютер победил!");
    } else {
       alert("Ничья!");
    }
}

playGame();