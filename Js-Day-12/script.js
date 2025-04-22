class PokemonService {
  async getPokemonsData() {
    try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
      const { results } = await res.json();
      const btns = document.getElementById('btns');

      results.forEach((pokemon, index) => {
        const button = document.createElement('button');
        button.textContent = pokemon.name.toUpperCase();
        button.className = 'p-2 bg-blue-100 hover:bg-blue-300 rounded';
        button.id = index + 1;
        btns.appendChild(button);
      });

      btns.addEventListener('click', (event) => {
        const id = event.target.id;
        if (id) {
          this.fetchPokemonDetails(id);
        }
      });
    } catch (error) {
      console.error('Error fetching Pokémon list:', error);
    }
  }

  async fetchPokemonDetails(id) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await res.json();

      const details = document.getElementById('details');
      details.innerHTML = `
            <h3 class="font-bold">${data.name.toUpperCase()}</h3>
            <img src="${data.sprites.front_default}" alt="${
        data.name
      }" class="mx-auto w-32 h-32" />
            <p><strong>Types:</strong> ${data.types
              .map((t) => t.type.name)
              .join(', ')}</p>
            <p><strong>Abilities:</strong> ${data.abilities
              .map((a) => a.ability.name)
              .join(', ')}</p>
          `;
    } catch (error) {
      console.error('Error fetching Pokémon details:', error);
    }
  }
}

const p = new PokemonService();
p.getPokemonsData();
