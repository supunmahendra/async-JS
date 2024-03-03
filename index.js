/*getProducts =(resourceURL, callback) =>{

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', ()=>{
        if(request.status ===200 && request.readyState === 4){
            // console.log(request.responseText);
            callback(request.responseText, undefined);

        }else if(request.readyState === 4){
            callback(undefined, 'Can not Execute the request!')
        }
    })

    // request.open('GET', 'https://fakestoreapi.com/products');
    request.open('GET', resourceURL);

    request.send();
}




const nowGetSometing = () =>{
    return new Promise ((resolve,reject)=>{
        //resolve('i got somting')
        reject ('I did not get')

    });

}

nowGetSometing().then((data)=>{
    //console.log("what our promise return:", data)
}).catch((error)=>{
    //console.log(error)
})*/




/*
const gateFakeStoreProducts = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/product');
        const data = await response.json();
        console.log(data);
    }
    catch (error){
        console.log(error)
    }
}

gateFakeStoreProducts()

*/

/*

document.getElementById('send-btn').addEventListener('click',function() {
    //Impilamtion step


    //step01 - Get the input form input field
    const inputElement =document.getElementById('chat-input')
    const message =inputElement.Value.trim();
    console.log(message)

    //step01 - Get the input form input field

    console.log ('our btn')
})*/

document.getElementById('send-btn').addEventListener('click', function() {
    // Implementation steps

    // Step 01 - Get the input from the input field
    const inputElement = document.getElementById('chat-input');
    const message = inputElement.value.trim();
    
    // Step 02 - Do something with the message (you can implement this part)
    if(message){
        displayMessage(message, 'user');
    }

});

/*
function displayMessage (message,sender){
    const ChatBox =document.getElementById('chat-box')

    const msgDiv =document.createElement('div')
    msgDiv.innerText = `${sender.toUpperCase()} :${message}`;

    ChatBox.appendChild(msgDiv);



}*/

function displayMessage(message, sender) {
    // Get the chat box element
    const chatBox = document.getElementById('chat-box');

    // Create a new <div> element to hold the message
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`
    // Set the text content of the <div> to include the sender's name and the message
    msgDiv.innerText = `${sender.toUpperCase()}: ${message}`;

    // Append the new <div> to the chat box
    chatBox.appendChild(msgDiv);

}

/*document.getElementById('send-btn').addEventListener('click', function(){
    // IMplementation Steps
    // Step:1 Get the input from the input field

    const inputElement = document.getElementById('chat-input')
    const message = inputElement.value.trim();


    // Step:2 Display the Messages from the User Input

    if(message){
        displayMessage(message, 'user');
    }

    // Step:3 Fetch the GPT assistance reponse and show the reponse in the chatbx
})


function displayMessage (message, sender){
    const chatBox = document.getElementById('chat-box')
    
    const msgDiv = document.createElement('div')
    msgDiv.className = `message ${sender}`
    msgDiv.innerText =  `${sender.toUpperCase()} : ${message}`;

    chatBox.appendChild(msgDiv);
*
}*/