function sendMail(){
    var params ={
        from_name : document.getElementById("name").value,
        email_id : document.getElementById("email").value,
        message : document.getElementById("message").value,
        };
    const  serviceID = "service_2jcr0h7";
    const  templateID = "template_lzvek6m";

    emailjs.send(serviceID,templateID,params)
      .then((res) => { 
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}

