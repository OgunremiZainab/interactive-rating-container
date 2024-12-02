let ratingButton = document.querySelectorAll('.rating-btn');
const submit = document.getElementById('submit-btn');
let result = document.getElementById('result-pg');
let value = 0;

ratingButton.forEach((rating, index) => { 
    rating.addEventListener('click', () => {
       value = index + 1;
       ratingButton.forEach((rating, i) => {
           if (i < value) {
                rating.style.backgroundColor = "white"; 
            } else {
                rating.style.backgroundColor = ""; 
            }
        })        
    }) 
});


submit.addEventListener('click', () => {
    localStorage.setItem('value', value);
    window.location.href = 'page.html';
})


