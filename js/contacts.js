window.addEventListener('DOMContentLoaded', (e) => {
    console.log("evento DOMContentLoaded");

    let button1 = document.getElementById("btnsend");
    button1.addEventListener("click", (ev) => {


        try {
            let name = document.getElementById("fullname").value;
            let email = document.getElementById("email").value;
            let phone = document.getElementById("phone").value;
            let affair = document.getElementById("affair").value;
            let mmessage = document.getElementById("message").value;


            let contact = {
                name,
                email,
                phone,
                affair,
                mmessage,
                message_date: (new Date()).toISOString()
            };
            console.dir(contact);
            saveContact(contact);

        } catch (e) {
            mistake(e.message)
        }





    });
});

function success(successMessage) {
    document.getElementById("form-success").style.display = "block";
    const ul = document.querySelector("#form-success ul");
    const li = document.createElement("li");
    const liText = document.createTextNode(successMessage);
    li.appendChild(liText);
    ul.appendChild(li);
}
function mistake(mistakeMessage) {
    document.getElementById("form-mistake").style.display = "block";
    const ul1 = document.querySelector("#form-mistake ul");
    const li1 = document.createElement("li");
    const liText1 = document.createTextNode(mistakeMessage);
    li1.appendChild(liText1);
    ul1.appendChild(li1);
}


async function saveContact(contact) {
    const url = "https://portafolio-messages-default-rtdb.firebaseio.com/contact.json";
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(contact)
    });
    const data = await response.json();
    success("Your message has been sent");
}