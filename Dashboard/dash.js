document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-progress");
    console.log(skillBars);

    const isInViewPort = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
    const animateSkillBars = () => {
      skillBars.forEach((skillBar) => {
        if (isInViewPort(skillBar)) {
          const percent = skillBar.getAttribute("data-percent");
          skillBar.style.setProperty("--percent", `${percent}%`);
          skillBar.classList.add("animate");
          setTimeout(() => {
            skillBar.style.width = `${percent}%`;
          }, 1000);
        }
      });
    };
    animateSkillBars();
  });