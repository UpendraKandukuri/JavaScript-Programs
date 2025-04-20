async function getData() {
  try {
    const response1 = fetch('https://randomuser.me/api/')

    const response2 = fetch('https://official-joke-api.appspot.com/jokes/random')
  
    const[r1,r2] = await Promise.all([response1,response2]);

    if (!r1.ok) {
      throw new Error(`Http Error: Status ${r1.status}`);
    }
    if (!r2.ok) {
      throw new Error(`Http Error: Status ${r2.status}`);
    }

    result1 = await r1.json();
    result2 = await r2.json();

    const user = result1.results[0];
    const joke = result2;

    console.log(user,joke);


    const parent = document.getElementById('parent');

      const user1 = document.createElement('h3');
      user1.innerText =`User: ${user.name.first} ${user.name.last} from ${user.location.city}`

      const joke1 = document.createElement('h3');
      joke1.innerText =`Joke:  ${joke.setup} - ${joke.punchline}`

      parent.appendChild(user1);
      parent.appendChild(joke1);
  
  } catch (error) {
    console.error(error);
  }
}

getData();