function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        appendMessage(userInput, 'user-message');
        setTimeout(() => {
            botReply(userInput);
        }, 1000);
        document.getElementById("user-input").value = '';
    }
}

function appendMessage(message, className) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.className = message ${className};
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(userInput) {
    let botMessage;
    if (userInput.toLowerCase().includes("hello")) {
        botMessage = "Hello! How can I help you?";
    } else {
        botMessage = "Sorry, I don't understand. Could you rephrase?";
    }
    appendMessage(botMessage, 'bot-message');
}