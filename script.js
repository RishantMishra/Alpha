
let currentQuestion = 0;
const questions = [
  "<h2>ARE YOU FACING <span class='text-blue-600'>HAIR LOSS</span>?</h2>",
  "<h2>WHAT <span class='text-blue-600'> SIGNS OF HAIR LOSS</span> ARE YOU FACING?</h2>",
  "<h2>DOES SOMEONE IN YOUR <span class='text-blue-600'>FAMILY HISTORY</span> HAVE HAIR LOSS?</h2>",
  "<h2>DO YOU BELIEVE,<span class='text-blue-600'> THE RIGHT KNOWLEDGE </span> </br>CAN GET YOU CLOSER TO SOLVING YOUR HAIR LOSS?</h2>",
  "<h2>LASTLY, ARE YOU WILLING TO INVEST SOME <span class='text-blue-600'>TIME & BUDGET </span></br>INTO SOLVING YOUR HAIR LOSS?</h2>",
];
document.getElementById("question").innerHTML = questions[currentQuestion];

const options = [
  // No options for the first question
  [],
  [
    { text: "(a) Receding Hairline", value: "a" },
    { text: "(b) Thinning Crown", value: "b" },
    { text: "(c) Hair Thinning", value: "c" },
    { text: "(d) Hair Shedding", value: "d" },
    { text: "(e) Patchy Hair loss", value: "e" },
    { text: "(f) Other", value: "f" },
  ],
  // No options for the remaining questions
  [],
  [],
  [],
];

document.getElementById("yes").addEventListener("click", () => {
  if (currentQuestion === 0) {
    currentQuestion++;
    showQuestion();
  }
});

document.getElementById("no").addEventListener("click", () => {
  if (currentQuestion === 0) {
    currentQuestion++;
    showQuestion();
  }
});

document.getElementById("back").addEventListener("click", goBack);

function goBack() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
}

function showQuestion() {
  if (currentQuestion < questions.length) {
    const questionElement = document.getElementById("question");
    questionElement.innerHTML = questions[currentQuestion];
//  this part is for second question

    if (options[currentQuestion].length > 0) {
      const optionsElement = document.getElementById("options");
      optionsElement.innerHTML = "";
      options[currentQuestion].forEach((option) => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.value = option.value;
        const label = document.createElement("label");
        label.textContent = option.text;
        optionsElement.appendChild(checkbox);
        optionsElement.appendChild(label);
        optionsElement.appendChild(document.createElement("br"));
      });
      const submitButton = document.createElement("button");
      submitButton.textContent = "Submit";
      submitButton.classList.add(
        "bg-orange-500", // background color
        "hover:bg-blue-700", // hover background color
        "text-white", // text color
        "font-bold", // font weight
        "px-6", // horizontal padding
        "py-2", // vertical padding
        "mt-4",
        "rounded", // rounded corners
        "md:w-full", // full width on medium screens and above
        "sm:w-auto" // auto width on small screens
      );

       submitButton.onclick = () => {
        const checkedOptions = Array.from(document.querySelectorAll("#options input:checked")).map((checkbox) => checkbox.value);
        if (checkedOptions.length > 0) {
          currentQuestion++;
          showQuestion();
        } else {
          alert("Please select at least one option");
        }
      };
      optionsElement.appendChild(submitButton);
      document.getElementById("yes").style.display = "none";
      document.getElementById("no").style.display = "none";
          // this part for third question 
    } else{
      document.getElementById("options").innerHTML = "";
      document.getElementById("yes").style.display = "block";
      document.getElementById("no").style.display = "block";
    }
    
document.getElementById("yes").addEventListener("click", () => {
  if (currentQuestion >1) {
    currentQuestion++;
    showQuestion();
  }
});

document.getElementById("no").addEventListener("click", () => {
  if (currentQuestion >1) {
    currentQuestion++;
    showQuestion();
  }
});

if (currentQuestion > 0) {
      document.getElementById("back").style.display = "block";
    } else {
      document.getElementById("back").style.display = "none";
    }
  } else {
    window.location.href = "program.html";
  }
}

showQuestion();

// Get the button element
const button = document.getElementById("goToProgramButton");

// Add an event listener to the button
button.addEventListener("click", () => {
  // Redirect to redirect.html when the button is clicked
  window.location.href = "redirect.html";
});
