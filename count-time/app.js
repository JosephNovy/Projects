const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "Novemver",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futuredate = new Date(2022, 12, 24, 8, 0, 0);

const year = futuredate.getFullYear();
const hours = futuredate.getHours();
const minutes = futuredate.getMinutes();

let month = futuredate.getMonth();
month = months[month];
const date = futuredate.getDate();

const weekday = weekdays[futuredate.getDay()];

giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

const futuretime = futuredate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const time = futuretime - today;
  const oneday = 24 * 60 * 60 * 1000;
  const onehour = 60 * 60 * 1000;
  const oneminute = 60 * 1000;
  let days = time / oneday;
  days = Math.floor(days);
  let hours = Math.floor((time % oneday) / onehour);
  let minutes = Math.floor((time % onehour) / oneminute);
  let seconds = Math.floor((time % oneminute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  items.forEach(function (item, index) {
    item.innerHTML = values[index];
  });
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class = 'expired'>sorry, this giveaway has expired</h4>`;
  }
}
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();
