export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: "Devstup",
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "stylesheet",
				type: "text/css",
				href: "css/bootstrap.min.css",
			},
			{
				rel: "stylesheet",
				type: "text/css",
				href: "css/animate.min.css",
			},
			{ rel: "stylesheet", type: "text/css", href: "css/style.css" },
			{
				rel: "stylesheet",
				type: "text/css",
				href: "fonts/font-awesome-4.6.3/css/font-awesome.min.css",
			},
		],
		script: [
			{ src: "js/jquery-3.1.0.min.js", body: true },
			{ src: "js/bootstrap.min.js", body: true },
			{ src: "js/isotope.pkgd.min.js", body: true },
			{ src: "js/jquery.inview.min.js", body: true },
			{ src: "js/jquery.waypoints.min.js", body: true },
			{ src: "js/jquery.counterup.js", body: true },
			{ src: "js/wow.min.js", body: true },
			{ src: "js/menu.js", body: true },
			{ src: "js/custom-scripts.js", body: true },
			{ src: "js/contact.js", body: true },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
};
