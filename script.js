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
