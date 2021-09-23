const date = new Date();

date.setMonth(5);

const monthDays = document.querySelctor('days')

const lastDay = new Date(date.getFullYear(),
date.getMonth()+ 1, 0);

console.log(lastDay).getDate();

const month = [
"Januar"
"Februar"
"Marts"
"April"
"Maj"
"Juni"
"July"
"August"
"September"
"Oktober"
"November"
"December"

]
document.querySelctor(".date h1").innerHTML
= month [date.geMonth()];

document.querySelctor(".date p").innerHTML
= date.toDateString();

let days = "";
for(let i = 1; i <= lastDay; i ++){
  days += '<div>{i}</div>';
  mothDays.innerHTML = days;
}
