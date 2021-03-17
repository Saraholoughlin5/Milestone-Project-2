// Send form function
function sendMail(contactForm) {
    emailjs.send("service_a7rogl1", "template_9wqshn5", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    }, resetForm()) // resetForm() added to ensure form clearing on submit
    .then(
        function(response) {
            console.log("SUCCESS", response);
            window.alert("Your message has been sent! We will respond to you shortly."); // Pop-up message (success)

        },
        function(error) {
            console.log("FAILED", error);
            window.alert("Oops! Something went wrong. Please try again."); // Pop-up message (error)

    });

    return false;
}

// Reset form function
function resetForm() {
    $('#form1')[0].reset();
}