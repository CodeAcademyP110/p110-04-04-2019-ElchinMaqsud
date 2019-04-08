"use strict"

const contact = document.querySelector(".we-chat")
const userMessage = document.querySelector(".userMessage")
const mainChat = document.querySelector(".main-chat-box")
const container = document.querySelector(".container")
const close = document.querySelector(".close")
const userInput = document.querySelector(".userInput")
const sendIcon = document.querySelector(".sendIcon")
const deleteIcon = document.querySelector(".deleteIcon")


contact.onclick = function () {
    contact.classList.remove("d-flex")
    contact.classList.add("d-none")
    container.classList.remove("d-none")
    container.classList.add("d-block")
    userMessage.classList.add("d-block")
}
close.onclick = function () {
    container.classList.remove("d-block")
    container.classList.add("d-none")
    contact.classList.remove("d-none")
    contact.classList.add("d-flex")
}
userInput.onkeydown = function (e) {

    if (e.keyCode === 13) {
        Myfunction()
    }
}

sendIcon.onclick = function () {
    Myfunction()
}

function Myfunction() {
    const inputValue = userInput.value.trim();
    userInput.value = ""


    if (inputValue.length > 0 && inputValue[0] === inputValue[0].toUpperCase()) {
        const operatorDiv = document.createElement("div")
        operatorDiv.classList.add("operatorSms", "d-flex", "align-items-center")
        const operatorIcon = document.createElement("i")
        operatorIcon.classList.add("fas", "fa-headset")
        operatorDiv.appendChild(operatorIcon)
        operatorDiv.append(inputValue)
        mainChat.appendChild(operatorDiv);
        operatorDiv.addEventListener("click", function () {
            if (!operatorDiv.classList.contains("selected")) {
                operatorDiv.classList.add("selected")
            }
            else {
                operatorDiv.classList.remove("selected")
            }
            for (let i = 0; i < mainChat.children.length; i++) {
                if (mainChat.children[i].classList.contains("selected")) {
                    deleteIcon.classList.remove("d-none")
                    break
                }
                else if (!mainChat.children[i].classList.contains("selected")) {
                    deleteIcon.classList.add("d-none")
                }
            }
        })

        deleteIcon.addEventListener("click", function () {
            if (operatorDiv.classList.contains("selected")) {
                operatorDiv.remove()

            }
        })
    }
    if (inputValue[0] === inputValue[0].toLowerCase()) {
        const userDiv = document.createElement("div")
        userDiv.classList.add("userSms")
        userDiv.classList.add("d-flex", "justify-content-end", "align-items-center")
        const userIcon = document.createElement("i")
        userIcon.classList.add("far", "fa-user")
        userDiv.append(inputValue)
        userDiv.appendChild(userIcon)
        mainChat.appendChild(userDiv);
        userDiv.addEventListener("click", function () {
            if (!userDiv.classList.contains("selected")) {
                userDiv.classList.add("selected")
            }
            else {
                userDiv.classList.remove("selected")
            }
            for (let i = 0; i < mainChat.children.length; i++) {
                if (mainChat.children[i].classList.contains("selected")) {
                    deleteIcon.classList.remove("d-none")
                    break
                }
                else if (!mainChat.children[i].classList.contains("selected")) {
                    deleteIcon.classList.add("d-none")
                }
            }
        })
        deleteIcon.addEventListener("click", function () {
            if (userDiv.classList.contains("selected")) {
                userDiv.remove()
            }

        })


    }

}
