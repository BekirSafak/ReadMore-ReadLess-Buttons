let more = document.querySelectorAll('.more');
console.log(more)

for (let i = 0; i < more.length; i++) {
  more[i].addEventListener('click', () => {
    // ? Bütün class="more" etiketine sahip elementlerin parentNodelarına active class'ı ekleniyor.
    more[i].parentNode.classList.toggle('active')
  })
}