 
/* Galería 2020 */
 let url = 'http://127.0.0.1:5502/data/gallery_2020_may.json';
 let gallery2020May = document.querySelector("#gallery2020May");
 const urlGitHub = "https://gabimancini.github.io/light-of-angels/data/gallery_2020_may.json";
 fetch(urlGitHub)
   .then(res => res.json())
   .then(data => {
     console.log('Checkout this JSON! ', data)
     for (i = 0; i < data.length; i++) {
       const img = document.createElement("img");
       img.alt = data[i].name;
       const imgAlt = img.alt;
       img.src = data[i].src;
       imgSrc = img.src;
       const col = ` <div class="col-sm-6 col-md-4 col-lg-4 item"><a href="${imgSrc}"  data-lightbox="photos"><img src="${imgSrc}" alt="${imgAlt}"></a></div>`;

       console.log(img);
       gallery2020May.insertAdjacentHTML("beforeend", col);
     }

   })
 //<div class="col-sm-6 col-md-4 col-lg-3 item"><a href="asset/img/gallery/2020_may/8.jpeg"data-lightbox="photos"><img class="img-fluid" src="asset/img/gallery/2020_may/8.jpeg"></a></div>

 let url2019 = 'http://127.0.0.1:5502/data/gallery_2020_april.json';
 const urlGitHubApril = "https://gabimancini.github.io/light-of-angels/data/gallery_2020_april.json";

 let gallery2020April = document.querySelector("#gallery2020April");
 fetch(urlGitHubApril)
   .then(res => res.json())
   .then(data => {
     console.log('Checkout this JSON! ', data)
     for (i = 0; i < data.length; i++) {
       const img = document.createElement("img");
       img.alt = data[i].name;
       const imgAlt = img.alt;
       img.src = data[i].src;
       imgSrc = img.src;
       const col = ` <div class="col-sm-6 col-md-4 col-lg-4 item"><a href="${imgSrc}"  data-lightbox="photos"><img src="${imgSrc}" alt="${imgAlt}"></a></div>`;

       console.log(img);
       gallery2020April.insertAdjacentHTML("beforeend", col);
     }

   })

   /* Galería 2019 */
   let url2019May = 'http://127.0.0.1:5502/data/gallery_2019_may.json';
   const urlGitHubMay19 = "https://gabimancini.github.io/light-of-angels/data/gallery_2019_may.json";
  
   let gallery2019May = document.querySelector("#gallery2019May");
   fetch(urlGitHubMay19 )
     .then(res => res.json())
     .then(data => {
       console.log('Checkout this JSON! ', data)
       for (i = 0; i < data.length; i++) {
         const img = document.createElement("img");
         img.alt = data[i].name;
         const imgAlt = img.alt;
         img.src = data[i].src;
         imgSrc = img.src;
         const col = ` <div class="col-sm-6 col-md-4 col-lg-4 item"><a href="${imgSrc}"  data-lightbox="photos"><img src="${imgSrc}" alt="${imgAlt}"></a></div>`;
  
         console.log(img);
         gallery2019May.insertAdjacentHTML("beforeend", col);
       }
  
     })