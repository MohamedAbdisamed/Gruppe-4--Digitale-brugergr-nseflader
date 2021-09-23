const date = new Date();

const monthDays = document.querySelctor('days')

const lastDay = new Date(date.getFullYear(),
date.getMonth()+ 0, 1)

console.log(lastDay);

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
for(let i = 1; i <= 31; i ++){
  days += '<div>{i}</div>';
  mothDays.innerHTML = days;
}
