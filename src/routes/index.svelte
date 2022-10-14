<script>
  import { Under30 } from '../dummy/under30';
  import RecipeList from '../lib/RecipeList.svelte';
  import recipeList from '../store/store';

  // import { onMount } from 'svelte';
  // onMount(async () => {
  // const response = await fetch(
  //   'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes',
  //   {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key':
  //         'a6c03323a4mshf31fb472fbbc54dp1438b3jsnd251f741cb65',
  //       'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  //     },
  //   }
  // );
  // under30 = await response.json();
  // console.log(under30);
  // });
</script>

<RecipeList recipes={$recipeList} listTitle={'Meals under 30 Minutes'}/>
<RecipeList recipes={Under30.results} listTitle={'Meals under 30 Minutes'}/>
<RecipeList recipes={Under30.results} listTitle={'Meals under 30 Minutes'}/>
<RecipeList recipes={Under30.results} listTitle={'Meals under 30 Minutes'}/>

