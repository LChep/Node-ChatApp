const socket = io();

const textarea = document.querySelector ('.text-area');
const messageArea = document.querySelector ('.outgoing_messages');
let name;

//Prompt for user to input the name
do {
    name = prompt ("Enter you name ")
} while (!name);


//add an event listener to textarea when enter is down
textarea.addEventListener ('keyup', (e) => {
    if (e.key === 'Enter') {
        sendMessage (e.target.value);
        e.target.value = "";
    }
});

function sendMessage (message){
    let msg = {
        user : name,
        message : message
    }

    appendMessage(msg, "outgoing")
}

function appendMessage (msg, type){
    let mainDiv = document.createElement ('div')
    let className = type;
    mainDiv.classList.add (className, 'message')

    let markup =`
        <p class = "${type}-name">${msg.user}</p>
        <p class = "${type}-text">${msg.message}</p>
    `
    mainDiv.innerHTML = markup;

    messageArea.appendChild (mainDiv);
}



