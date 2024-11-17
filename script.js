var ContactForm = document.getElementById("ContactFormOverlay");
var contactLink = document.getElementById("ContactFormLink");
var closebutton = document.getElementsByClassName("close-button")[0];
var MainContent = document.getElementById("MainContent");
var DarkModeButton = document.getElementsByClassName("dark-mode-toggle")[0];

contactLink.addEventListener("click", function (event) {
    event.preventDefault();
    MainContent.style.display = "none";
    ContactForm.style.display = "flex";
});

closebutton.addEventListener("click", function () {
    ContactForm.style.display = "none";
    MainContent.style.display = "block";
});

window.addEventListener("click", function (event) {
    if (event.target == ContactForm) {
        ContactForm.style.display = "none";
        MainContent.style.display = "block";
    }
});

function toggleMobileMenu(event) {
    event.preventDefault();
    document.getElementById("menu").classList.toggle("active");
}

function scrollToSection(event, sectionId) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    const viewportWidth = window.innerWidth;
    const OffsetFactor = 7000;
    const offset = OffsetFactor / Math.sqrt(viewportWidth);
    const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
        top: topPosition,
        behavior: "smooth"
    });
}

function setScrollAreaMaxHeight() {
    const ChatbotInfoTitle = document.querySelector('.chatbot-info-title'); // Replace with your specific <a> selector
    const ChatbotInfoTitlelinkRect = ChatbotInfoTitle.getBoundingClientRect();
    const ChatbotInfoTitleAbsoluteTop = ChatbotInfoTitlelinkRect.top + window.scrollY;
    const ChatbotInfoResumeLinkElement = document.getElementById('chatbot-info-resume-link');
    const ChatbotInfoResumeLinkLinkRect = ChatbotInfoResumeLinkElement.getBoundingClientRect();
    const ChatbotInfoResumeLinkAbsoluteBottom = ChatbotInfoResumeLinkLinkRect.bottom + window.scrollY;
    const ScrollAreaMaxHeight = ChatbotInfoResumeLinkAbsoluteBottom - ChatbotInfoTitleAbsoluteTop;
    document.querySelector('.chat-box').style.maxHeight = `${ScrollAreaMaxHeight}px`;
}

window.onload = setScrollAreaMaxHeight;
window.onresize = setScrollAreaMaxHeight;

