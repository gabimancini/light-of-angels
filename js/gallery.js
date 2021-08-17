 
let url = 'http://127.0.0.1:5502/data/gallery_2020_april.json';
const gallery_2020_april = document.querySelector("#gallery2020April ul");
const urlGitHub = "https://gabimancini.github.io/light-of-angels/data/gallery_2020_april.json";
fetch(urlGitHub)
.then(res => res.json())
.then(data =>{
  console.log('Checkout this JSON! ', data ) 
  for(i = 0; i < data.length; i++){ 
    const img = document.createElement("img");
    const li = document.createElement("li");
    img.alt= data[i].name;
    img.src= data[i].src;
    console.log(img);
   li.appendChild(img);
    gallery_2020_april.appendChild(li);
  }

}
  )
  /* Galería 2019 */
  let url2019 = 'http://127.0.0.1:5502/data/gallery_2019_may.json';
  const urlGitHub2019 = "https://gabimancini.github.io/light-of-angels/data/gallery_2019_may.json";

const gallery2019 = document.querySelector("#gallery2019 ul");
fetch(url2019)
.then(res => res.json())
.then(data =>{
  console.log('Checkout this JSON! ', data ) 
  for(i = 0; i < data.length; i++){ 
    const img = document.createElement("img");
    const li = document.createElement("li");
    img.alt= data[i].name;
    img.src= data[i].src;
    console.log(img);
   li.appendChild(img); 
    gallery2019.appendChild(li);
  }

}
  )
