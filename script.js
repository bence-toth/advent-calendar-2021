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

document.querySelector("main").innerHTML = Array(24)
  .fill()
  .map((_, index) => index + 1)
  .map(
    (date) => `
      <div class="dayWrapper">
        <button class="day" ${date > 14 ? "disabled" : ""} data-date="${date}">
          <div class="background"></div>
          <div class="date">${date}</div>
        </button>
      </div>
    `
  )
  .join("");

document.querySelectorAll("button.day").forEach((button) => {
  button.addEventListener("click", () => {
    document.body.classList.add("modalVisible");
    const date = parseInt(button.dataset.date);
    document.getElementById("modal").innerHTML = `
      <header><h2>Day #${date}</h2></header>
      <div class="content">
        <h3>${content[date - 1].title}</h3>
        ${content[date - 1].body}
      </div>
    `;
  });
});
