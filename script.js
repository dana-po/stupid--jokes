const jokeEl = document.querySelector('#js-joke');
const btn = document.querySelector('#js-btn');


// if refresh => a new joke
 generateJoke()


//USING .THEN()
// function generateJoke(){
//     fetch('https://icanhazdadjoke.com', {
//      headers: {
//         'Accept': 'application/json'
//      }
//     }).then(res => res.json()).then(data=>{
//         jokeEl.innerHTML = data.joke
//     })

// }

btn.addEventListener('click', generateJoke);
//USING ASYNC/AWAIT
async function generateJoke() {
  const response = await fetch('https://icanhazdadjoke.com', {
    headers: {
      Accept: 'application/json',
    },
  });

  const data = await response.json();
  jokeEl.innerHTML = data.joke;
}
