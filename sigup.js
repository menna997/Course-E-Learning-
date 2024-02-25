const cardData2 = [
  {
    body3:
      "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    icons3: ` <img  class="imag" src="image/Image (7).svg" />`,
    type3: "Sarah L",
    button3: '<div class="Now">Read More</div>',
  },
];
const postCard2 = document.querySelector(".cardContainerTwo");
const postMethod2 = () => {
  cardData2.map((postData2) => {
    console.log(postData2);
    const postElement2 = document.createElement("div");
    postElement2.classList.add("cardEle2");
    postElement2.innerHTML = `
          <div class="design">
          <div class="designParagraph" >${postData2.body3}</div>
      </div>
      <div class="rolle" ></div>
      <div class="borderCard">
          <div class="borderImage" >
          ${postData2.icons3}
              <div class="rowImage">${postData2.type3}</div>
          </div>
          <div class="borderFullStory" >
              <div class="fullStory" >${postData2.button3}</div>
          </div>
      </div>
  </div>
        `;
    postCard2.appendChild(postElement2);
  });
};
postMethod2();

const form = document.getElementById("form");
const first = document.getElementById("first");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const firstValue = first.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  if (firstValue === "") {
    setError(first, "Name is required");
  } else {
    setSuccess(first);
  }
  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
};
