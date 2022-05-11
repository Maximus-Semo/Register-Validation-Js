



const active = ()=> {
    if (username.classList.contains("succes") && email.classList.contains("succes") && psw.classList.contains("succes") && pswrepeat.classList.contains("succes")) {
        regis.removeAttribute("disabled")
    } else [
        regis.setAttribute("disabled", "")
    ]
}


username.addEventListener("keyup",(eo)=> {
    username.classList.add("error");

    usermessage.style.display = "block"

    // the first condition if this true 
    if (username.value.length > 4)  {
        username.classList.remove("error")
        username.classList.add("succes")
        username.nextElementSibling.style.opacity = 1
        usermessage.style.display = "none"
        
    } else {
        username.classList.remove("succes")
        username.classList.add("error")
        username.nextElementSibling.style.opacity = 0
        usermessage.style.display = "block"
    } 
    active();
})

email.addEventListener("keyup",(eo)=> {
    email.classList.add("error");
    emailmessage.style.display = "block";
    const regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if(regEmail.test(email.value)){
        email.classList.remove("error");
        email.classList.add("succes");
        email.nextElementSibling.style.opacity = 1;
        emailmessage.style.display = "none";
    } else{
        email.classList.remove("succes");
        email.classList.add("error");
        email.nextElementSibling.style.opacity = 0;

        emailmessage.style.display = "block";
    }
    active();

})

psw.addEventListener("keyup",(eo)=> {
    psw.classList.add("error");
    passwordmessage.style.display = "block";

    const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;


    if(regularExpression.test(psw.value)){
        psw.classList.remove("error");
        psw.classList.add("succes");
        psw.nextElementSibling.style.opacity = 1;
        passwordmessage.style.display = "none";
    } else{
        psw.classList.remove("succes");
        psw.classList.add("error");
        psw.nextElementSibling.style.opacity = 0;

        passwordmessage.style.display = "block";
    }
    active();

})

pswrepeat.addEventListener("keyup",(eo)=> {
    pswrepeat.classList.add("error");
    repatypasswordmessage.style.display = "block";

    if (pswrepeat.value === psw.value ) {
        pswrepeat.classList.remove("error");
        pswrepeat.classList.add("succes");
        pswrepeat.nextElementSibling.style.opacity = 1;
        repatypasswordmessage.style.display = "none";
    }else{
        pswrepeat.classList.remove("succes");
        pswrepeat.classList.add("error");
        pswrepeat.nextElementSibling.style.opacity = 0;
        repatypasswordmessage.style.display = "block";
    }
    active();
})

