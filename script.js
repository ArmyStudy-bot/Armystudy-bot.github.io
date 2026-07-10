// Show Today's Date

const date = new Date();

const options = {
weekday: "long",
day: "numeric",
month: "long",
year: "numeric"
};

const dateBox = document.getElementById("date");

if(dateBox){
dateBox.innerHTML = date.toLocaleDateString("en-IN", options);
}
