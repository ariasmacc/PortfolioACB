document.addEventListener("DOMContentLoaded", () => {
  const typingText = document.querySelector(".typing-text");
  const words = ["Hi!","Bonjour!", "Hola!", "你好!", "안녕하세요!", "こんにちは!", "Li-hó!", "สวัสดี!", "Merhaba!", "Salve!", "Guten tag!", "Zdravo!", "Kumusta!"];
  let i = 0, j = 0, isDeleting = false;

  function type() {
    if (typingText) {
      if (i >= words.length) i = 0;
      let current = words[i];
      typingText.textContent = current.substring(0, j);
      j += isDeleting ? -1 : 1;

      if (!isDeleting && j === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
      } else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
      }
      setTimeout(type, isDeleting ? 50 : 150);
    }
  }
  type();

  const menuIcon = document.getElementById("menu-icon");
  const nav = document.querySelector("nav");

  if (menuIcon && nav) {
    menuIcon.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }
});
