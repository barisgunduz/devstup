<template>
	<!--Header-->
	<header class="header-main">
		<div class="container">
			<div class="row">
				<div
					class="col-lg-6 col-md-6 col-sm-6 col-xs-8"
					data-wow-duration="2s">
					<h1>
						<NuxtLink to="/">
							<img
								class="img-responsive normal-logo"
								src="/img/logo2b.png"
								alt="logo" />
							<img
								class="logo-responsive"
								src="/img/logo-mobile.png"
								alt="logo-responsive" />
						</NuxtLink>
					</h1>
				</div>
				<div class="col-lg-6 col-md-6 col-sm-6 col-xs-4">
					<ul class="menu">
						<li><NuxtLink to="/">Home</NuxtLink></li>
						<li><NuxtLink to="/about-us">About</NuxtLink></li>
						<li><NuxtLink to="/service">Services</NuxtLink></li>
						<li>
							<NuxtLink to="/portfolio">Portfolio</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</header>
	<!--Header End-->
</template>

<script>
export default {};
</script>

<style scoped>
.menu {
	display: flex;
	flex-direction: row;
	margin-top: 25px;
}
.menu li {
	margin-left: 50px;
	list-style-type: none;
}
.menu li a {
	font-size: 15px;
	color: #9d9d9d;
	text-decoration: none;
}
.menu li a:hover {
	color: #1fb834;
}
</style>
