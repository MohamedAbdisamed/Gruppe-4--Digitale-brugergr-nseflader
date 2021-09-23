const date= new Date();

const month= [
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
=month [date.geMonth()];

document.querySelctor(".date p").innerHTML
=date.toDateString();
