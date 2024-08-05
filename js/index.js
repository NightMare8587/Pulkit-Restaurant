function openReceipeWeb(str) {
  switch (str) {
    case "Kadhai":
      window.open("https://www.divinetaste.com/kadhai-paneer/", "_blank");
      break;

    case "Dal":
      window.open(
        "https://food.ndtv.com/opinions/who-invented-the-dal-makhani-694600",
        "_blank"
      );
      break;

    case "Lacha":
      window.open(
        "https://hebbarskitchen.com/lachha-paratha-lachha-parantha-recipe/",
        "_blank"
      );
      break;
  }
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth",
  });
}

function sendMessageAndNotify() {
  alert("Message Sent Successfully");
}
