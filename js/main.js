const loginForm = document.querySelector("#loginForm");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const loginError = document.querySelector("#loginError");
const loginPage = document.querySelector("#loginPage");
const websiteContent = document.querySelector("#websiteContent");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "Guet" && password === "522") {
    loginError.textContent = "";
    loginPage.hidden = true;
    websiteContent.hidden = false;
    window.scrollTo(0, 0);
    return;
  }

  loginError.textContent = "账号或密码错误，请重新输入。";
  passwordInput.value = "";
  passwordInput.focus();
});

const contactButton = document.querySelector("#contactButton");
const message = document.querySelector("#message");

contactButton.addEventListener("click", () => {
  message.textContent = "你可以把这里改成你的邮箱、微信或电话号码。";
});
