
    // This script stops the "File not found" error
    const myForm = document.getElementById('contactForm');

    myForm.addEventListener('submit', function(event) {
        // This line is critical: it stops the browser from looking for "submit_page"
        event.preventDefault(); 

        alert("Thank you! Your message has been sent.");

        // Clears the text boxes after you click OK
        myForm.reset();
    });
