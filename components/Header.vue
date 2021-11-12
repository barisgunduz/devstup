<template>
	<div>
		<!--Header-->
		<header class="header-main">
			<div class="container">
				<div class="row">
					<div
						class="col-lg-6 col-md-6 col-sm-6 col-xs-8"
						data-wow-duration="2s"
					>
						<h1>
							<NuxtLink to="/">
								<img
									class="img-responsive normal-logo"
									src="/img/logo2.png"
									alt="logo"
								/>
								<img
									class="logo-responsive"
									src="/img/logo-mobile.png"
									alt="logo-responsive"
								/>
							</NuxtLink>
						</h1>
					</div>
					<div class="col-lg-6 col-md-6 col-sm-6 col-xs-4">
						<div id="cd-main-content">
							<div class="cd-header">
								<a class="cd-menu-trigger" href="#main-nav"
									><span></span
								></a>
							</div>
						</div>
						<nav id="main-nav">
							<ul>
								<li>
									<NuxtLink to="/"
										><span
											><sup>01.</sup> Home</span
										></NuxtLink
									>
								</li>
								<li>
									<NuxtLink to="/about-us"
										><span
											><sup>02.</sup> About</span
										></NuxtLink
									>
								</li>
								<li>
									<NuxtLink to="/service"
										><span
											><sup>03.</sup> Services</span
										></NuxtLink
									>
								</li>
								<li>
									<NuxtLink to="/portfolio"
										><span
											><sup>04.</sup> Portfolio</span
										></NuxtLink
									>
								</li>
							</ul>
							<a href="#0" class="cd-close-menu"
								>Close<span></span
							></a>
						</nav>
					</div>
				</div>
			</div>
		</header>
		<!--Header End-->
	</div>
</template>

<script>
export default {
	
};
</script>

<style></style>
