
function sendMessage() {
    const user_input = document.getElementById('user_input').value;
    fetch('/chat', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({"message": user_input})
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById('messages');
        messageDiv.innerHTML += `<div><b>You:</b> ${user_input}</div>`;
        messageDiv.innerHTML += `<div><b>Bot:</b> ${data.response}</div>`;
        document.getElementById('user_input').value = '';
    });
}
