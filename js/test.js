`use strict`;

let kg, cm, result, info;

const calc = (paramKg, paramCm) => {
   result = Math.round((paramKg / (paramCm / 100) ** 2) * 100) / 100;

   if (result < 18.5) {
      info = `Niestety za mało jesz`;
   }
   if (result >= 18.5 && result <= 24.9) {
      info = `Wszystko w normie, tak trzymać`;
   }
   if (result >= 25 && result <= 29.9) {
      info = `No no, ktoś tu lubi sobie zjeść`;
   }
   if (result > 30) {
      info = `Ty to chyba jesz jak za trzech`;
   }
};

const hide = () => {
   boxTop.classList.add(`hide`);
   boxBottom.classList.add(`hide`);
};

const show = () => {
   boxTop.classList.remove(`hide`);
   boxBottom.classList.remove(`hide`);
};

/////////////////////

const boxTop = document.querySelector(`.box__top`);

const boxBottom = document.querySelector(`.box__bottom`);

////////////////////

const start = () => {
   boxTop.innerText = `Zaczynajmy !`;
   boxBottom.innerHTML = `<button id="btn-start">Start</button>`;
   const btnStart = document.querySelector(`#btn-start`);

   show();

   btnStart.addEventListener(`click`, () => {
      hide();

      setTimeout(stepKg1, 1000);
   });
};

start();

//////////////////

const stepKg1 = () => {
   boxTop.innerText = `Przyznaj sie ile wazysz ? (kg)`;
   boxBottom.innerHTML = `
   <input id="kg" autofocus autocomplete="off"></input>
   <i id="arrow_right" class="material-icons">arrow_forward_ios</i>`;

   const arrowRight = document.querySelector(`#arrow_right`);

   show();

   arrowRight.addEventListener(`click`, () => {
      let idKg = document.querySelector(`#kg`).value;

      if (idKg > 1 && idKg < 300) {
         kg = document.querySelector(`#kg`).value;

         hide();

         setTimeout(stepCm2, 1000);
      } else {
         alert(`Wprowadz wage od 1 do 300 (kg)`);
      }
   });
};

////////////////

const stepCm2 = function () {
   boxTop.innerText = `A teraz podaj wzrost w cm`;
   boxBottom.innerHTML = `
   <i id="arrow_left" class="material-icons">arrow_back_ios</i>
   <input id="cm" autofocus autocomplete="off"></input>
   <i id="arrow_right" class="material-icons">arrow_forward_ios</i>`;

   show();

   const arrowLeft = document.querySelector(`#arrow_left`);
   const arrowRight = document.querySelector(`#arrow_right`);

   arrowLeft.addEventListener(`click`, () => {
      hide();

      setTimeout(stepKg1, 1000);
   });

   arrowRight.addEventListener(`click`, () => {
      let idCm = document.querySelector(`#cm`).value;
      if (idCm > 50 && idCm < 250) {
         cm = document.querySelector(`#cm`).value;

         hide();

         setTimeout(finish, 1000);
      } else {
         alert(`Wprowadz swoj wzrost miedzy 50 i 250 (cm) !`);
      }
   });
};

///////////////////////

const finish = () => {
   calc(kg, cm);

   boxTop.innerText = `Twoje BMI to: ${result}`;
   boxBottom.innerText = `${info}`;

   show();

   setTimeout(() => {
      const refresh = document.querySelector(`#refresh`);

      refresh.innerHTML = `<i id="ref" class="material-icons">refresh</i>`;

      refresh.classList.remove(`hide`);

      refresh.addEventListener(`click`, () => {
         hide();
         refresh.classList.add(`hide`);
         kg = 0;
         cm = 0;
         setTimeout(stepKg1, 1000);
      });
   }, 1000);
};
