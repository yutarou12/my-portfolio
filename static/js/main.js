const profileImg = document.getElementById("profile-img");
const profileContent = document.getElementById("profile-container");

profileImg.style.border = "10px solid #ffffff";
//profileContent.style.padding = "0px";

const worksContainerItem = document.getElementsByClassName("works-item");

function worksContainerClick(e, element) {
    e.preventDefault();
    if (element.classList.contains("works-item-1")) {
        window.open("https://github.com/yutarou12/Artifacter-Bot", "_blank");
    } else if (element.classList.contains("works-item-2")) {
        window.open("https://github.com/yutarou12/Splatoon-Bot", "_blank");
    } else if (element.classList.contains("works-item-3")) {
        window.open("https://github.com/yutarou12/In-Room-Check-Service", "_blank");
    }
}

for (let i = 0; i < worksContainerItem.length; i++) {
    worksContainerItem[i].addEventListener("click", (e) => worksContainerClick(e, worksContainerItem[i]));
}

const headerNavList = ["about", "profile", "works", "skills"];

for (let i = 0; i < headerNavList.length; i++) {
    document.addEventListener('DOMContentLoaded', function() {
        const link = document.querySelector(`a[href="#${headerNavList[i]}"]`);
    
    link.addEventListener('click', function(event) {
        event.preventDefault(); // デフォルトのジャンプ動作をキャンセル
        
        const targetElement = document.getElementById(headerNavList[i]);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
}