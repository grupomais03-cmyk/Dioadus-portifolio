/** Toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/** scroll sessão active link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');
       
       if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            })
       }
    });

    /** Sticky Navbar  */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /** Remove toggle icon and navbar when click navbar link(scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

/** Scroll Reveal */
ScrollReveal({
   // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .contactos form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/** Typed js */
const typed = new Typed('.multiple-text', {
    strings: ['Estuda na Dioadus', 'no - Youtube', 'no - Instagram', 'no - Tiktok'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

/** Finalizar compra no whatsapp */
function enviarWhatsApp(curso) {
    // Substitua pelo número do seu WhatsApp (formato internacional, sem +, espaços ou traços)
    const numero = "244951617629"; // exemplo: 55 (código do Brasil) + 11 (DDD SP) + número
    const mensagem = `Olá! Gostaria de aderir ao ${curso}. Pode me enviar mais detalhes?`;

    // Monta a URL oficial do WhatsApp
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    // Redireciona para o WhatsApp
    window.open(url, "_blank");
}

/** EmailJS */
emailjs.init("oUeuxPjoGhy2ZRy3U");

document.getElementById("contactos_form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        telefone: document.getElementById("telefone").value,
        assunto: document.getElementById("assunto").value,
        mensagem: document.getElementById("mensagem").value
    }

    const serverID = "service_q962i4d";
    const templateID = "template_yltrraa";
    const submitButton = document.getElementById("submit_button");
    submitButton.textContent = "Enviando...";
    submitButton.disabled = true;

    emailjs.send(serverID, templateID, formData).
    then(() => {
        Toastify({
            text: "E-amil enviado com Sucesso!",
            style:{
                background: "#28a745",
                color: "#f4f4f4"
            }
    }).showToast();

    document.getElementById("contactos_form").reset();

        }).
        catch((error) => {
            Toastify({
                text: "Erro ao enviar o e-mail",
                style:{
                    background: "#dc3545",
                    color: "#f4f4f4"
                }
            }).showToast();
            
            console.error("Erro no envio", error);
        }).
        finally(() => {
            submitButton.textContent = "Enviar Mensagem";
            submitButton.disabled = false;

        })

    })

