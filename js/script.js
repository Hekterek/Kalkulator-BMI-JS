`use strict`;

let kg, cm, result, info;

const calc = (paramKg, paramCm) => {
   result = Math.round((paramKg / (paramCm / 100) ** 2) * 100) / 100;

   if (result < 18.5) {
      info = `Niestety za malo jesz`;
   }
   if (result >= 18.5 && result <= 24.9) {
      info = `Jesz tyle ile trzeba`;
   }
   if (result >= 25 && result <= 29.9) {
      info = `Troche ci sie przytylo `;
   }
   if (result > 30) {
      info = `Jesz jak za trzech`;
   }
};

const boxTop = document.querySelector(`.box__top`);

const boxBottom = document.querySelector(`.box__bottom`);

const btnStart = document.querySelector(`#btn-start`);

btnStart.addEventListener(`click`, () => {
   boxTop.classList.add(`hide`);
   boxBottom.classList.add(`hide`);

   setTimeout(() => {
      boxTop.innerText = `Przyznaj sie ile wazysz ? (kg)`;
      boxBottom.innerHTML = `<input id="kg" autofocus autocomplete="off"></input><i id="arrow_right" class="material-icons">arrow_forward_ios</i>`;

      boxTop.classList.remove(`hide`);
      boxBottom.classList.remove(`hide`);

      const arrowRight = document.querySelector(`#arrow_right`);

      arrowRight.addEventListener(`click`, () => {
         kg = document.querySelector(`#kg`).value;
         boxTop.classList.add(`hide`);
         boxBottom.classList.add(`hide`);

         setTimeout(() => {
            boxTop.innerText = `A teraz podaj wzrost w cm`;
            boxBottom.innerHTML = `<input id="cm" autofocus autocomplete="off"></input><i id="arrow_right" class="material-icons">arrow_forward_ios</i>`;

            boxTop.classList.remove(`hide`);
            boxBottom.classList.remove(`hide`);

            const arrowRight = document.querySelector(`#arrow_right`);

            arrowRight.addEventListener(`click`, () => {
               cm = document.querySelector(`#cm`).value;
               boxTop.classList.add(`hide`);
               boxBottom.classList.add(`hide`);

               setTimeout(() => {
                  calc(kg, cm);

                  boxTop.innerText = `Twoje BMI to: ${result}`;
                  boxBottom.innerText = `${info}`;

                  boxTop.classList.remove(`hide`);
                  boxBottom.classList.remove(`hide`);
               }, `1200`);
            });
         }, `1200`);
      });
   }, `1200`);
});
