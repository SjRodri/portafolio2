let currentLanguage = 'en';
const translations = {
    en: {
        mainTitle: "I'm Sayd Rodriguez",
        subTitle: "Student Of Catholic University of Honduras",
        description: "I am a Computer Science Engineering student, currently pursuing my studies at the university, complemented with virtual courses. My focus is on continuous learning of emerging technologies, with the aim of developing skills that allow me to stand out in the field of computing and technology.",
        aboutTitle: "PERSONAL INFORMATION",
        firstName: "First Name: Sayd",
        age: "Age: 21 Years",
        phone: "Phone: +504 97143869",
        lastName: "Last Name: Rodriguez",
        nationality: "Nationality: Hondurean",
        address: "Address: Tegucigalpa",
        email: "Email: saydr2210@gmail.com",
        languages: "Languages: Spanish, English",
        hobbies: "Hobbies: Play the guitar, Read Books, Assemble robots, Look into new technologies, Puzzles",
        languageButton: "Español",
        btncurriculum: "DOWNLOAD CV",
        skills: "I know about",
        skills2: "Study On",
        projectsTitle: "My Projects",
        viewProject: "View Projects",
        contactTitle: "GET IN TOUCH",
        contactName: "YOUR NAME",
        contactEmail: "YOUR EMAIL",
        contactMessage: "YOUR MESSAGE",
        contactButton: "SEND MESSAGE",
        shyTitle: "DON'T BE SHY!",
        shyDescription: "Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
        addressTitle: "ADDRESS",
        addressDescription: "Tegucigalpa Honduras",
        mailTitle: "MAIL ME",
        mailDescription: "saydr2210@gmail.com",
        phoneTitle: "CALL ME",
        phoneDescription: "+504 97143869",
        socialLinksTitle: "Social-links"
    },
    es: {
        mainTitle: "Soy Sayd Rodriguez",
        subTitle: "Estudiante de la Universidad Católica de Honduras",
        description: "Soy estudiante de Ingeniería en Ciencias de la Computación, actualmente cursando mis estudios en la universidad, complementados con cursos virtuales. Mi enfoque está en el aprendizaje continuo de tecnologías emergentes, con el objetivo de desarrollar habilidades que me permitan destacar en el campo de la informática y la tecnología.",
        aboutTitle: "INFORMACIÓN PERSONAL",
        firstName: "Nombre: Sayd",
        age: "Edad: 21 Años",
        phone: "Teléfono: +504 97143869",
        lastName: "Apellido: Rodriguez",
        nationality: "Nacionalidad: Hondureño",
        address: "Dirección: Tegucigalpa",
        email: "Correo: saydr2210@gmail.com",
        languages: "Idiomas: Español, Inglés",
        hobbies: "Pasatiempos: Tocar la guitarra, leer libros, montar robots, investigar nuevas tecnologías, Rompecabezas",
        languageButton: "English",
        btncurriculum: "DESCARGAR CV",
        skills: "Conozco de",
        skills2: "Actualmente estudiando",
        projectsTitle: "Mis Proyectos",
        viewProject: "Mirar Proyecto",
        contactTitle: "PÓNTE EN CONTACTO",
        contactName: "TU NOMBRE",
        contactEmail: "TU CORREO",
        contactMessage: "TU MENSAJE",
        contactButton: "ENVIAR MENSAJE",
        shyTitle: "¡NO SEAS TÍMIDO!",
        shyDescription: "Siéntete libre de contactarme. Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tus visiones.",
        addressTitle: "Ubicacion",
        addressDescription: "Tegucigalpa Honduras",
        mailTitle: "ENVÍAME UN CORREO",
        mailDescription: "saydr2210@gmail.com",
        phoneTitle: "LLÁMAME",
        phoneDescription: "+504 97143869",
        socialLinksTitle: "Enlaces Sociales"
    }
};

function changeLanguage() {
    currentLanguage = (currentLanguage === 'en') ? 'es' : 'en';
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translations[currentLanguage][key];
        } else {
            element.textContent = translations[currentLanguage][key];
        }
    });

    document.getElementById('languageButton').textContent = translations[currentLanguage].languageButton;
}

document.addEventListener('DOMContentLoaded', changeLanguage);