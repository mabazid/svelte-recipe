<script>
  import Navbar from '../lib/Navbar.svelte';
</script>

<Navbar/>

<div class="uk-background-fixed uk-background-center uk-height-expand uk-width-large bodyContainer">
  <slot/>
</div>
<style>
  div {
    width: 100%;
    background-image: url('../assets/pexels-ella-olsson-1640773.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 50px;
  }
</style>
