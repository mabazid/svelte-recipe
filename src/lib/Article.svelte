<script>
  export let recipe;
</script>


<div class="articleContainer uk-flex uk-flex-center uk-position-relative">
  <article class="uk-article">

    <h1 class="uk-article-title"><a class="uk-link-reset  uk-text-warning" href="">{recipe.name}</a></h1>
    {#if recipe.tags }
      {#each recipe.tags as tag}
        <span class="uk-badge uk-margin-small-left">{tag.display_name}</span>
      {/each}
    {/if}
    <p class="uk-article-meta">
      Written by <a href="#"></a> {new Date(recipe.created_at)}. Posted in <a href="#">Blog</a>
    </p>
    <p class="uk-text-lead">
      {recipe.description}
    </p>

    <h2 class="title">Ingredients:</h2>
    {#if recipe.sections}
      <ul class="uk-list uk-list-divider">
        {#each recipe.sections as section}
          {#each section.components as component}
            <li>{component.raw_text}</li>
          {/each}
        {/each}
      </ul>
    {/if}

    <h2 class="title">Instructions:</h2>
    {#if recipe.instructions}
      <ul class="uk-list uk-list-decimal uk-list-large uk-text-large">
        {#each recipe.instructions as instruction}
          <li>{instruction.display_text}</li>
        {/each}
      </ul>
    {/if}

    <div class="uk-grid-small uk-child-width-auto" uk-grid>
      <div>
        <a class="uk-button uk-button-text" href="#">Read more</a>
      </div>
      <div>
        <a class="uk-button uk-button-text" href="#">5 Comments</a>
      </div>
    </div>
  </article>
</div>
<style>

  .uk-article {
    max-width: 1100px;
    background: black;
    opacity: 0.9;
    color: white !important;
    padding: 50px;
  }

  .title {
    color: #ffe300
  }

  a, .uk-text-lead, .uk-list {
    color: white !important;
  }

  .articleContainer {
    min-width: 100%;
  }
</style>
