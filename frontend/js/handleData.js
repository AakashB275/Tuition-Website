const form = document.querySelector("#contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const data = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    };

    try {
        // First, wait for the fetch response
        const response = await fetch("http://localhost:3000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Set content type header
            },
            body: JSON.stringify(data)
        });

        // Then, parse the response as JSON
        const responseData = await response.json();  // This is the correct line

        if (response.ok) {
            alert("Thank you for your response!");
            form.reset();
        } else {
            alert("Something went wrong!");
        }
    } catch (e) {
        console.log(e);
    }
});
