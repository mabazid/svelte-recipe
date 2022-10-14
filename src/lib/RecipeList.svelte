<script>
  export let recipes = [];
  export let listTitle = '';
</script>

<div class="articleContainer uk-flex uk-flex-center uk-position-relative">
  <div
    class="uk-visible-toggle uk-light"
    id="custom"
    tabindex="-1"
    uk-slider
  >
    <h1>{listTitle}</h1>
    <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-4@m uk-grid uk-grid-match">
      {#each recipes as recipe}
        <li class="customHeight uk-animation-fade uk-width-large">
          <div>
            <div class="uk-card uk-card-default  uk-box-shadow-hover-xlarge">
              <div class="uk-card-media-top">
                <img
                  class="customIMG"
                  src={recipe.thumbnail_url}
                  width="800"
                  height="600"
                  alt={recipe.thumbnail_alt_text}
                />
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title customTitle">{recipe.name}</h3>
              </div>
              <div class="uk-card-footer">
                <a href="/{recipe.id}" class="uk-button uk-button-text">Read more</a>
              </div>
            </div>
          </div>
        </li>
      {/each}
    </ul>

    <a
      class="uk-position-center-left uk-position-small uk-hidden-hover"
      href="/"
      uk-slidenav-previous
      uk-slider-item="previous"
    />
    <a
      class="uk-position-center-right uk-position-small uk-hidden-hover"
      href="/"
      uk-slidenav-next
      uk-slider-item="next"
    />
  </div>
</div>

<style>
  .customHeight {
    max-height: 350px !important;
    min-height: 350px !important;
  }

  .customIMG {
    max-height: 140px !important;
    min-height: 140px !important;
  }

  #custom {
    background: black;
    opacity: 0.9;
    max-width: 1200px;
    padding: 25px
  }

  .customTitle {
    min-height: 67px;
  }

  .uk-card-body {
    min-height: 40px;
    max-height: 40px;
  }

  .uk-button-text {
    color: black !important;
  }

  .articleContainer {
    min-width: 100%;
  }
</style>
