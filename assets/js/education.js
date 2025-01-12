AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
    {
    title: "AWS Academy Cloud Foundations",
    cardImage: "assets/images/education-page/AWS_Academy.jpg",
    moocLink: "https://www.credly.com/badges/58aedb76-3d14-44dd-bf12-7cc81ca5ed21",
    },
    {
        title: "AWS Cloud Practitioner",
        cardImage: "assets/images/education-page/AWSCloudPractitioner.jpg",
        moocLink: "https://cp.certmetrics.com/amazon/en/public/verify/credential/84NNZDB24FR1Q1SX",
    },
    {
        title: "AWS Solutions Architecture",
        cardImage: "assets/images/education-page/ForageAWS.jpg",
        moocLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_LEPi39qqPjYJrcASp_1736488842668_completion_certificate.pdf",
    },
    {
        title: "Amazon AI Conclave",
        cardImage: "assets/images/education-page/AmazonAiConclave.png",
        moocLink: "https://drive.google.com/file/d/1_7GS9MXXnA_QZtoqUGwGrZVobEOAWUvZ/view",
    },
    {
        title: "Web Development",
        cardImage: "assets/images/education-page/ProdigyWebDev.jpg",
        moocLink: "https://prodigyinfotech.dev/verify?cin=PIT/AUG24/02854",
    },
    {
        title: "CodeTantra Java Course",
        cardImage: "assets/images/education-page/CodetantraJAVA.jpg",
        moocLink: "https://cutm-bbsr.codetantra.com/cert/certificate.jsp?certId=CT1740-tObfXt0-cf",
    },
    {
        title: "Postman API Fundamentals",
        cardImage: "assets/images/education-page/PostmanAPI.jpg",
        moocLink: "https://badgr.com/public/assertions/rH9zY9GETgil8XkXRjsUZA?identity__email=soumyaranjansahu56065@gmail.com",
    },
    {
        title: "IoT Applications with 32-Bit Microcontroller",
        cardImage: "assets/images/education-page/CUTM_32bit_Microcontroller.jpg",
        moocLink: "https://drive.google.com/file/d/1MCMI8CRSKy3U2XZajjug0Me87_6gvE4p/view",
    },
    {
        title: "TCS iON Career Edge - Young Professional",
        cardImage: "assets/images/education-page/TCS_iON.jpg",
        moocLink: "https://drive.google.com/file/d/1iwCi7oSg76aocYToA3xo3FNvZ6IkupdT/view",
    },
    {
        title: "Backend Web Development",
        cardImage: "assets/images/education-page/Devtown_Backend.jpg",
        moocLink: "https://www.cert.devtown.in/verify/18Y6B6",
    },
    {
        title: "Frontend Web Development",
        cardImage: "assets/images/education-page/DEVTOWN_FRONTEND.jpg",
        moocLink: "https://www.cert.devtown.in/verify/2cpwzU",
    },
    {
        title: "Flipkart GRiD 6.0",
        cardImage: "assets/images/education-page/Flipkart_GRiD.jpg",
        moocLink: "https://drive.google.com/file/d/1VkIWOl-p_wtYKwbPwgAL2zvygdqHHq02/view",
    },
    {
        title: "AWS Builders",
        cardImage: "assets/images/education-page/AmazonBuilders.png",
        moocLink: "https://drive.google.com/file/d/1VkIWOl-p_wtYKwbPwgAL2zvygdqHHq02/view",
    },
    {
        title: "AWS Tech4Her",
        cardImage: "assets/images/education-page/AWS_tech4her.jpg",
        moocLink: "https://drive.google.com/file/d/1d2FfvOgu_6PGptc96TVcIhxKopvdQ-2U/view",
    },
    {
        title: "Microsoft Azure Ai Fundamentals",
        cardImage: "assets/images/education-page/MicrosoftAzure.png",
        moocLink: "https://drive.google.com/file/d/193M6JlogoKLj5mxMPZtLOeBJDq2Gmm0p/view",
    },
    {
        title: "OYO Object Detection using OpenCV",
        cardImage: "assets/images/education-page/DevTown_Oyo_Object_Detection.jpg",
        moocLink: "https://drive.google.com/file/d/1V1V76f-c4QR82p2_SGpCbLdN9VPxV_OG/view",
    },
];

const experience = [{
        img: "assets/images/education-page/c1.png",
    },
    {
        img: "assets/images/education-page/c2.jpg",
    },
    {
        img: "assets/images/education-page/c3.png",
    },
    {
        img: "assets/images/education-page/c4.png",
    },
    {
        img: "assets/images/education-page/c5.jpg",
    },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function() {
    showExperience();
});

function showExperience() {
    setInterval(function() {
        if (currentItem === experience.length) {
            currentItem = 0;
        }
        const item = experience[currentItem];
        img.src = item.img;
        currentItem++;
    }, 3000);
}

const showCards = () => {
    let output = "";
    moocscards.forEach(
        ({
            title,
            cardImage,
            moocLink
        }) =>
        (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
    );
    moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [{
        title: "Google Developer Essentials",
        image: "assets/images/education-page/badge1.png",
        description: "Earned May 20, 2020",
    },
    {
        title: "VM Migration",
        image: "assets/images/education-page/badge2.png",
        description: "Earned June 20, 2020",
    },
    {
        title: "G Suite Essentials",
        image: "assets/images/education-page/badge3.png",
        description: "Earned July 20, 2020",
    },
];

const showCards1 = () => {
    let output = "";
    badgesection.forEach(
        ({
            title,
            image,
            description
        }) =>
        (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
    );
    bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function() {
    window.sr = ScrollReveal();

    if ($(window).width() < 768) {
        if ($(".timeline-content").hasClass("js--fadeInLeft")) {
            $(".timeline-content")
                .removeClass("js--fadeInLeft")
                .addClass("js--fadeInRight");
        }

        sr.reveal(".js--fadeInRight", {
            origin: "right",
            distance: "300px",
            easing: "ease-in-out",
            duration: 800,
        });
    } else {
        sr.reveal(".js--fadeInLeft", {
            origin: "left",
            distance: "300px",
            easing: "ease-in-out",
            duration: 800,
        });

        sr.reveal(".js--fadeInRight", {
            origin: "right",
            distance: "300px",
            easing: "ease-in-out",
            duration: 800,
        });
    }

    sr.reveal(".js--fadeInLeft", {
        origin: "left",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
        origin: "right",
        distance: "300px",
        easing: "ease-in-out",
        duration: 800,
    });
});