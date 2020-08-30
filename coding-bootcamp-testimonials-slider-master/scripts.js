console.log("load")

let idx = 0;
var content = [
  {
    author: 'Tanya Sinclair',
    occup: 'UX Engineer',
    quote: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
        I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
        excited about the future. ”`,
    thumb: './images/image-tanya.jpg',
  },
  {
    author: 'John Tarkpor',
    occup: 'Junior Front-end Developer',
    quote: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
    thumb: './images/image-john.jpg',
  }
]

function slide() {
  const next_btn = document.getElementById('next');
  const prev_btn = document.getElementById('prev');
  const quote = document.getElementById('quote');
  const author = document.getElementById('label-author');
  const occup = document.getElementById('label-ocupation');
  const thumb = document.getElementById('author-img');

  const slider = document.getElementById('testimonial-card');

  /*console.log(content.length);*/

  next_btn.addEventListener("click", function () {
    idx = (idx + 1);
    if (idx > content.length-1) {
      idx = 0;
    }
    quote.innerHTML = content[idx].quote;
    author.innerHTML = content[idx].author;
    occup.innerHTML = content[idx].occup;
    thumb.src = content[idx].thumb;

  });

  prev_btn.addEventListener("click", function () {
    idx = (idx - 1);
    if (idx < 0) {
      idx = content.length-1;
    }
    quote.innerHTML = content[idx].quote;
    author.innerHTML = content[idx].author;
    occup.innerHTML = content[idx].occup;
    thumb.src = content[idx].thumb;
  });
}