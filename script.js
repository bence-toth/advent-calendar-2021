const openedDays = JSON.parse(localStorage.getItem("openedDays")) || [];
console.log(openedDays);

let isSnowing = false;

const animationDuration = 10;
const numberOfSnowflakes = Math.round(
  (window.innerWidth * window.innerHeight) / 2000
);

document.getElementById("snow").innerHTML = Array(numberOfSnowflakes)
  .fill()
  .map(
    () => `
      <div class="snowflakeWrapper" style="
        left: ${Math.random() * 100}%;
        animation-delay: ${Math.random() * -2 * animationDuration}s;
        animation-duration: ${
          animationDuration + Math.random() * animationDuration
        }s;
      ">
        <div class="snowflake" style="
          animation-delay: ${Math.random() * -2 * animationDuration}s;
          animation-duration: ${
            (animationDuration + Math.random() * animationDuration) / 3
          }s;
        ">
          <div class="snowflakeFill" style="
            opacity: ${50 + Math.random() * 50}%;
            transform: scale(${Math.random() * 0.5 + 0.5});
          "
          ></div>
        </div>
      </div>
    `
  )
  .join("");

document.getElementById("snowToggle").addEventListener("click", () => {
  isSnowing = !isSnowing;
  document.getElementById("snowToggle").innerText = isSnowing
    ? "Stop the snow"
    : "Let it snow";
  document.getElementById("snow").classList.toggle("hidden");
});

document.querySelector("main").innerHTML = Array(24)
  .fill()
  .map((_, index) => index + 1)
  .map(
    (date) => `
      <div class="
        dayWrapper
        ${openedDays.includes(date) ? "opened" : ""}
        ${date > 14 ? "locked" : ""}
      ">
        <button class="day" ${date > 14 ? "disabled" : ""} data-date="${date}">
          <div class="background"></div>
          <div class="date">${date}</div>
        </button>
        <div class="lock icon">
          <img src="./lock.svg" alt="Locked" />
        </div>
        <div class="opened icon">
          <img src="./check.svg" alt="Opened" />
        </div>
      </div>
    `
  )
  .join("");

document.querySelectorAll(".dayWrapper").forEach((wrapper) => {
  const button = wrapper.querySelector("button");
  button.addEventListener("click", () => {
    document.body.classList.add("modalVisible");
    document.querySelector("#back").classList.remove("hidden");
    const date = parseInt(button.dataset.date);
    if (!openedDays.includes(date)) {
      openedDays.push(date);
      localStorage.setItem("openedDays", JSON.stringify(openedDays));
    }
    wrapper.classList.add("opened");
    document.getElementById("modal").innerHTML = `
      <header><h2>Day #${date}</h2></header>
      <div class="content">
        <h3>${content[date - 1].title}</h3>
        ${content[date - 1].body}
      </div>
    `;
  });
});

document.querySelector("#back").addEventListener("click", () => {
  document.body.classList.remove("modalVisible");
  document.querySelector("#back").classList.add("hidden");
  document.getElementById("modal").innerHTML = "";
});
