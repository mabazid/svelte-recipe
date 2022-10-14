<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import Article from '../lib/Article.svelte';
  import recipieStore from '../store/store';


  onMount(() => {
    const id = Number($page.params.id);
    getItem(id);
  });
  let recipe = 'Empty';

  const getItem = (id) => {
    recipieStore.subscribe((recipes) => {
      recipe = recipes.find((recipe) => recipe.id === id);
      console.log(recipe);
    });
  };
</script>

<Article recipe={recipe}/>
