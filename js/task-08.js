
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const {
        elements: {email, password} 
    } = event.currentTarget;

    if (email.value === "" || password.value.trim() === ""){
        return alert ("all fields must be filled in")
    }

    const formData = {
        email: email.value,
        password: password.value,
      };
     console.log(formData);

  event.currentTarget.reset();
    
    

}

