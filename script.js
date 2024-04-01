document.querySelectorAll(".questions").forEach(question => {
    question.addEventListener('click', function(){
       // this.classList.toggle('active');
        const answers = this.nextElementSibling;
        const plus = this.querySelector('.btn-img .plus');
        const minus = this.querySelector('.btn-img .minus');
        if(answers.style.display === 'block'){
            answers.style.display = 'none';
            plus.style.display = 'block';
            minus.style.display = 'none';
        } else {
            answers.style.display = 'block';
            plus.style.display = 'none';
            minus.style.display = 'block';
        }
    })
});
