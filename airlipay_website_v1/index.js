// ACCORDION

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector(".expand-icon");

    header.addEventListener("click", ()=> {
        item.classList.toggle("active");
        if (item.classList.contains("active")) {
            content.style.display = "block";
            icon.style.transform = "rotate(180deg)";
        }
        else {
            content.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        }
    });
});

// POPUP

const getApp = document.getElementById("get-app");
const popup = document.querySelector(".pop-container");
const popupBtn = document.querySelector(".pop-btn");

getApp.addEventListener("click", () => {
    popup.style.display = "block";
})

popupBtn.addEventListener("click", () => {
    popup.style.display = "none";
})

// DATE
const currentYear = new Date().getFullYear();
document.querySelector(".current-year").textContent = currentYear;

// EMAIL

function sendEmail() {
    var email = document.getElementById('email').value;
    var nameV = document.getElementById('name').value;
    var messageV = document.getElementById('message').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "airlipayinc@gmail.com",
        Password: "Techarcgram<12345>",
        To: 'techarcgram@gmail.com',
        From: email,
        Subject: "Message from AirliPay website.",
        Body: "Name: " + nameV +
            "Message: " + messageV,
    }).then(
        message => alert(message)
    );
}

// BACK-TO-TOP

window.addEventListener("scroll", function() {
    var backToTopButton = document.querySelector(".back-to-top-button");
    console.log(backToTopButton);
    if(window.pageYOffset > 300) {
        backToTopButton.style.display = "block";
    }
    else {
        backToTopButton.style.display = "none";
    }
})

document.querySelector(".back-to-top-button").addEventListener("click", function () {
    window.scrollTo({top: 0, behavior: "smooth"});
})