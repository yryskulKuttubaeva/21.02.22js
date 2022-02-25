// // document.querySelector('select').addEventListener('input', function() {
// //   document.querySelectorAll('ul').forEach(
// //     ul => ul.classList.toggle('hidden', this.value !== ul.id)
// //   );
// // });

// // document.body.classList.toggle('hello');

// // document.body.classList.add('hello');
// // document.body.classList.remove('hello');

// // if (document.body.classList.contains('bye')) {

// // }

// // document.body.classList.replace('hello', 'bye');


// const articles = [
//   {
//     id: "article-1",
//     title: "Hello world",
//     image: "./photo.jpeg",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
//   },
//   {
//     id: "article-2",
//     title: "Hello world",
//     image: "./photo.jpeg",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
//   },
//   {
//     id: "article-3",
//     title: "Hello world",
//     image: "./photo.jpeg",
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum ducimus et laboriosam quae dolore iure recusandae? Quae cumque corrupti eum ipsam nostrum, quasi recusandae maxime deserunt vitae, eveniet perferendis.",
//   }
// ];

// const main = document.querySelector('main');
// articles.forEach(article => {
//   const articleElement = document.createElement('article');
//   const h1 = document.createElement('h1');
//   const img = document.createElement('img');
//   const p = document.createElement('p');

//   articleElement.id = article.id;
//   h1.textContent = article.title;
//   img.src = article.image;
//   p.textContent = article.body;

//   articleElement.append(h1);
//   articleElement.append(img);
//   articleElement.append(p);
//   main.append(articleElement);

  
// })

// let article = document.getElementById('article-1');
// article.style.display = "none";
// document.getElementById('h1').addEventListener('click' , function() {
//   article.style.display= "block";
// })
// document.getElementById('h1').addEventListener('click', function() {
//   article.style.display = "none";
// })


// let article1 = document.getElementById('article-2');
// article1.style.display = "none";
// document.getElementById('h2').addEventListener('click' , function() {
//   article1.style.display= "block";
// })
// document.getElementById('h2').addEventListener('click', function() {
//   article1.style.display = "none";
// })
// let article2 = document.getElementById('article-3');
// article2.style.display = "none";
// document.getElementById('h3').addEventListener('click' , function() {
//   article2.style.display= "block";
// })
// document.getElementById('h3').addEventListener('click', function() {
//   article2.style.display = "none";
// })

let details = document.querySelectorAll('details');
details.forEach((detail) => {
detail.addEventListener('toggle', function(e) {
    let article = document.querySelector(`$(e.target.id})`);
    article.style.display = 'none';
    
});
});