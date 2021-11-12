<template>
	<div>
		<!--Footer-->
		<footer>
			<!--Contact Information-->
			<div id="footer">
				<div class="container">
					<div class="row">
                        <div class="col-lg-12">
                            <a href="portfolio" class="button button-wayra">See What We've Done<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        </div>
						<div class="col-lg-12">
							<img
								class="img-responsive footer_logo"
								src="/img/logo2.png"
								alt="footer-logo"
							/>
						</div>
					</div>
				</div>
			</div>
			<!--Contact Information End-->

			<!--Footer Bottom Links-->
			<div class="footer-bottom">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<ul>
								<li>
                                    <NuxtLink to="/"><span>Home</span></NuxtLink>
								</li>
								<li>
                                    <NuxtLink to="/about-us"><span>About </span></NuxtLink>
								</li>
								<li>
                                    <NuxtLink to="/service"><span>Services </span></NuxtLink>
								</li>
								<li>
                                    <NuxtLink to="/portfolio"><span>Portfolio </span></NuxtLink>
								</li>
								<li
									style="text-align: right;right: 0;position: absolute;"
								>
									For further information :
									<a href="mailto:dev@devstup.org"
										>dev@devstup.org</a
									>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--Footer Bottom Links End-->
		</footer>
		<!--Footer End-->
	</div>
</template>

<script>
export default {};
</script>

<style></style>
