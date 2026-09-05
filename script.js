// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Muhammed Fadil NK WhatsApp number
        const phoneNumber = "918138849603";

        const whatsappMessage =
            `Hello Muhammed Fadil NK,

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;

        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");

    });

}