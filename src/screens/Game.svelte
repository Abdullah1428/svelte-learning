<script>
  // making the selection prop available that is passed from App.svelte
  export let selection;

  const load_details = async (celeb) => {
    const res = await fetch(`https://cameo-explorer.netlify.app/celebs/${celeb.id}.json`);

    return await res.json();
  } 

  const promises = selection.map(round => Promise.all([
    load_details(round.a),
    load_details(round.b)
  ]));

  let i = 0;

</script>

<header>
  <p>
    Tap on the more monetisable celebrity's face, or tap 'same price' if society values them equally.
  </p>
</header>

<div class="game-container">
  {#await promises[i] then [a,b]}
    <div class="game">
      <div class="card-container">
        {a.name}
      </div>
      <div>
        <button class="same">
          Same Price
        </button>
      </div>
      <div class="card-container">
        {b.name}
      </div>
    </div>
  {:catch}
    <p class="error">Failed to load the data!!</p>
  {/await}
</div>

<div class="results">
  <p>results will go here...</p>
</div>

<style>
  .game-container {
    flex: 1
  }
  .error {
    color: red;
  }
</style>