const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // console.log(event);
        const input = document.querySelector('input#searchByID');

        console.log(input.value);

        //fetch data based on user input 
        //i.e add ${input.value} as a path in the fetch url
        fetch(`http://localhost:3000/movies/${input.value}`)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        //Access DOM elements
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        //change contents of DOM elements
        title.innerText = data.title;
        summary.innerText = data.summary;
    });
      });
}

document.addEventListener('DOMContentLoaded', init);