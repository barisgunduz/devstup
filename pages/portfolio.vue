<template>
	<div>
		<Header />
		<!--Stats-->
		<section id="blog-page-header-section">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<h2 class="primary-heading">Portfolio</h2>
					</div>
					<div
						class="
							col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1
							wow
							fadeInUp
						"
					>
						<Stats />
					</div>
				</div>
			</div>
		</section>
		<!--Stats End-->

		<!--Portfolio Content-->
		<section id="portfolio-content">
			<div class="container">
				<div class="row">
					<div class="col-lg-12">
						<p class="text-center margin-top-bottom">
							We help our clients for their needs with our support
							team which includes engineers, project managers,
							designers, photographers, and marketing executives.
							The projects given below are our self projects. If
							you wanna learn more about the projects that we've
							done so far for our customers,
							<a
								href="mailto:dev@devstup.org?subject=Wanna Learn Client Projects"
								>just send us a mail.</a
							>
							<img
								class="down-arrow-icon"
								src="img/down-arrow.png"
								alt="down-arrow"
							/>
						</p>
					</div>
				</div>
			</div>
		</section>
		<!--Portfolio Content End-->

		<!--Portfolio Project Section-->
		<section class="portfolio-slider-section padding-remove">
			<div id="portfolioslider" class="carousel slide">
				<div class="carousel-inner">
					<!--Portfolio Slide One-->
					<div class="item active">
						<div class="container">
							<div class="row">
								<div
									class="
										col-lg-6 col-md-12 col-sm-12 col-xs-12
										portfolio-slider-img-box
										padding-remove
									"
								>
									<a
										href="https://www.vaktindeye.com"
										title="Vaktinde Ye Website"
										target="_blank"
									>
										<img
											src="img/projects/vaktindeye.png"
											alt="portfolio-slider"
										/>
									</a>
								</div>
								<div
									class="
										col-lg-6 col-md-12 col-sm-12 col-xs-12
										portfolio-right-content-box
									"
								>
									<img
										src="img/projects/vaktindeye-icon.png"
										alt="portfolio-logo"
									/>
									<h4>Vaktinde Ye</h4>
									<h6>Website Design &amp; Developement</h6>
									<p class="primary-paragraph">
										Everyone wants to eat healthy. The most
										important point in this regard is when
										you should eat and what to eat. With
										Vaktinde Ye, this topic is fully
										resolved.
									</p>
									<span
										><a
											href="https://www.vaktindeye.com"
											title="Vaktinde Ye Website"
											target="_blank"
											>View Detail</a
										></span
									>
									<h5>Logo Design</h5>
									<h5>Website Design</h5>
									<h5>Development</h5>
									<h5>Content</h5>
								</div>
							</div>
						</div>
					</div>

					<!--Portfolio Slide two-->
					<div class="item">
						<div class="container">
							<div class="row">
								<div
									class="
										col-lg-6 col-md-12 col-sm-12 col-xs-12
										portfolio-slider-img-box
										padding-remove
									"
								>
									<a href="http://www.kodburada.com/">
										<img
											src="img/projects/kodburada.png"
											alt="portfolio-slider"
										/>
									</a>
								</div>
								<div
									class="
										col-lg-6 col-md-12 col-sm-12 col-xs-12
										portfolio-right-content-box
									"
								>
									<img
										src="img/projects/kodburada-icon.png"
										alt="portfolio-logo"
									/>
									<h4>Kodburada</h4>
									<h6>Website Design &amp; Developement</h6>
									<p class="primary-paragraph">
										Kodburada is a platform, where anyone
										interested in software, can find
										something. In particular, there are
										articles and sample codes on web
										technologies. Check it out!
									</p>
									<span
										><a href="http://www.kodburada.com/"
											>View Detail</a
										></span
									>
									<h5>Logo Design</h5>
									<h5>Website Design</h5>
									<h5>Development</h5>
									<h5>Content</h5>
								</div>
							</div>
						</div>
					</div>

					<!--Portfolio Slider Controls-->
					<a
						class="left carousel-control page-content-carousel"
						href="#portfolioslider"
						data-slide="prev"
						><i class="fa fa-long-arrow-left" aria-hidden="true"></i
					></a>
					<a
						class="right carousel-control page-content-carousel"
						href="#portfolioslider"
						data-slide="next"
						><i
							class="fa fa-long-arrow-right"
							aria-hidden="true"
						></i
					></a>
				</div>
			</div>
		</section>
		<!--Portfolio Project Section-->

		<!--We Do-->
		<section id="we-do">
			<div class="container-fluid">
				<div class="row">
					<h2 class="primary-heading">Like How We Do?</h2>
					<p class="primary-paragraph">
						Don't think twice! If you have an idea, just say hello
						and leave the rest to us!
					</p>
					<img
						class="img-responsive like-img"
						src="img/placeholder/like-img.jpg"
						alt="like-img"
					/>
				</div>
			</div>
		</section>
		<!--We Do End-->
		<Footer />
	</div>
</template>

<script>
export default {};
</script>

<style></style>
