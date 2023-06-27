function accordionTeam() {
    const workers = document.querySelectorAll(".team__item");
    const teamAccord = document.querySelector(".team");
  
    teamAccord.addEventListener("click", function (event) {
      event.preventDefault(); // скидываем стандартное состояние (что бы не кидало страницу вверх / или не перенаправляло на другую)
      const target = event.target; // то на что мы клацнули
     
      if (target.classList.contains("team__title")) {
        const worker = target.parentNode; // родитель нашей ссылки (li.accordeon__item)
        const content = target.nextElementSibling; //  элемент который находится рядом с нашей ссылкой на уровне (accordeon__content)
        const pic = target.previousElementSibling; // элемент выше
        const contentHeight = content.firstElementChild.clientHeight; // высота wrapper который лежит в accordeon__content
        const picHeight = content.firstElementChild.clientHeight;

        for (const iterator of workers) {
          if (iterator !== worker) {
            iterator.classList.remove("accordeon__item-active");
            iterator.lastElementChild.style.height = 0;
          }
        }
  
        if (worker.classList.contains("accordeon__item-active")) {
          worker.classList.remove("accordeon__item-active");
          content.style.height = 0;
          pic.style.height = 0;
        } else {
          worker.classList.add("accordeon__item-active");
          content.style.height = contentHeight + "px";
          pic.style.height = picHeight + "px";

        }
      }
    });
  }
  
  accordionTeam();