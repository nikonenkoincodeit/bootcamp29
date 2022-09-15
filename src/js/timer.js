import { convertMs } from "../helpers/convertMs";
import { inputDateRef, timerRef } from "./refs";

let intervalId = null;

inputDateRef.addEventListener("change", (e) => {
  const date = new Date(e.target.value);
  clearInterval(intervalId);
  if (date.getTime() > Date.now()) {
    alert("Виберіть коректну дату народження!");
    return;
  }
  console.log(new Date().getFullYear());
  console.log(date.getFullYear());
  console.log(new Date().getFullYear() - date.getFullYear());
  //   intervalId = setInterval(() => {
  //     const msResult = Date.now() - date.getTime();
  //     const { years, days, hours, minutes, seconds } = convertMs(msResult);
  //     timerRef.innerHTML = `Ви народилися ${days} днів, ${hours} годин, ${minutes} хвилин, ${seconds} секунд`;
  //   }, 1000);

  //   console.log("e.target.value :>> ", e.target.value);
});
