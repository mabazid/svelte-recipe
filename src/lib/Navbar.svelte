<div class="container uk-position-top uk-position-relative uk-position-sticky">
	<nav class="uk-navbar-container uk-position-medium uk-position-top-center" uk-navbar>
		<div class="uk-navbar-left uk-margin-left">
			<ul class="uk-navbar-nav">
				<li class="uk-active"><a href="/">Home</a></li>
				<li>
					<a href="#">Parent</a>
					<div class="uk-navbar-dropdown">
						<ul class="uk-nav uk-navbar-dropdown-nav">
							<li class="uk-active"><a href="#">Active</a></li>
							<li><a href="#">Item</a></li>
							<li class="uk-nav-header">Header</li>
							<li><a href="#">Item</a></li>
							<li><a href="#">Item</a></li>
							<li class="uk-nav-divider" />
							<li><a href="#">Item</a></li>
						</ul>
					</div>
				</li>
				<li><a href="#">Item</a></li>
			</ul>
		</div>
	</nav>
</div>

<slot />

<style>
	.container {
		z-index: 5;
		height: 150px;
		background: red;
		background-image: url('../assets/pexels-ella-olsson-1640773.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.uk-navbar-container {
		width: 1200px !important;
		opacity: 0.9;
		background: black !important;
	}

	a {
		color: white !important;
	}
</style>
