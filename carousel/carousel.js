let image = document.querySelector(".image");
let left = document.querySelector(".left");
let right = document.querySelector(".right");

let img = [
  "https://images.pexels.com/photos/733745/pexels-photo-733745.jpeg?auto=compress&cs=tinysrgb&w=600",
  " https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?semt=ais_hybrid",
  "https://img.freepik.com/free-photo/modern-car-driving-city_23-2151674303.jpg?semt=ais_hybrid",
  "https://img.freepik.com/free-photo/black-white-view-off-road-vehicle-driven-rough-terrain_23-2151476150.jpg?semt=ais_hybrid",
  "https://img.freepik.com/free-photo/black-white-view-off-road-vehicle-driven-rough-terrain_23-2151476150.jpg?semt=ais_hybrid",
  "https://img.freepik.com/premium-photo/car-future-is-brand-new-car_1153744-185275.jpg?ga=GA1.1.310258799.1734154856&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/red-sports-car-is-driving-down-road-with-trees_23-2151850166.jpg?ga=GA1.1.310258799.1734154856&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/modern-car-driving-city_23-2151674346.jpg?ga=GA1.1.310258799.1734154856&semt=ais_hybrid",
  "https://img.freepik.com/free-photo/superhero-car-vintage-style_23-2151636148.jpg?ga=GA1.1.310258799.1734154856&semt=ais_hybrid",
  "https://img.freepik.com/premium-photo/car-night-sky_1153744-186183.jpg?ga=GA1.1.310258799.1734154856&semt=ais_hybrid",
  "https://media.istockphoto.com/id/1193276186/photo/generic-red-racing-car-speeding-on-black-background-3d-illustration-render.jpg?b=1&s=612x612&w=0&k=20&c=i_WGso-AcZ4uaz_-35dhgrl-cJmvrbipqdQWVClmPRs=",
];
image.setAttribute("src", img[0]);
let index = 0;
let last = img.length - 1;

// setInterval(() => {
//   next();
// }, 2000);     //until we stop it won't stop
setTimeout(() => {
  next();
}, 2000); //after time it will stop moves only once
function next() {
  if (index == last) {
    index = 0;
  } else {
    index += 1;
  }
  image.setAttribute("src", img[index]);
}
function previous() {
  if (index == 0) {
    index = last;
  } else {
    index -= 1;
  }
  image.setAttribute("src", img[index]);
}
