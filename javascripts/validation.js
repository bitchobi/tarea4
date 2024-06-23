function emailValidation() {
  const form = document.getElementById("form");
  const emailConfirmField = document.getElementById("email_confirm");
  const alertElement = document.createElement("p");
  const alertMessage = document.createTextNode("Los correos electrónico no coincidente.");
  const contentField = document.getElementById("content_0");

  alertElement.appendChild(alertMessage);
  alertElement.id = "alert";
  alertElement.classList.add("alert_color");

  emailConfirmField.addEventListener("input", () => {
    const alertExists = document.getElementById("alert");
    const emailsMatch = form.email.value === form.email_confirm.value;

    if (!emailsMatch && !alertExists) {
      contentField.parentNode.insertBefore(alertElement, contentField);
      emailConfirmField.classList.add("alert_bg");
    } else if (emailsMatch && alertExists) {
      emailConfirmField.classList.remove("alert_bg");
      alertElement.remove();
    }
  });
}

window.onload = emailValidation;
