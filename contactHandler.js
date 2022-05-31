
sendEmail = () => {

    _email = document.getElementById("email").value;
    _name = document.getElementById("name").value;
    _phone = document.getElementById("phone").value;
    _text = document.getElementById("text").value;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "slok.aks205@gmail.com",
        Password : "51136EDEC70A74CEDD8CCDFF1C49DDBAC90D",
        To : 'slok.aks204@gmail.com',
        From : _email,
        Subject : "New Contact Form Enquiry",
        Body : "Name: " + _name 
            + "<br> Phone: " + _phone
            + "<br> Email: " + _email
            + "<br> Message: " + _text
    }).then(
      message => alert("Message Sent Successfully")
    );
} 
