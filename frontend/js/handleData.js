const form = document.querySelector("#contactForm");


form.addEventListener("submit", async (req, res)=>{
    e.preventDefault()
    const data = {
        name : document.querySelector("#name").value ,
        email : document.querySelector("#email").value,
        subject :document.querySelector("#subject").value,
        message : document.querySelector("#message").value
    }
    try{
        await fetch("http://localhost:3000/contact" , {
            method : "POST",
            body : JSON.stringify(data)
        })

        const response = await response.json();

        if(response.ok){
            alert("Thank you for your response!");
            form.reset();
        }
        else{
            alert("Something went wrong!");
        }
    }
    catch(e){
        console.error(e)
    }
})