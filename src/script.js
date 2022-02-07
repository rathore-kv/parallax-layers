const tl = gsap.timeline({
	defaults: {
		ease: "none"
	},
	scrollTrigger: {
		start: 0,
		end: "max",
		scrub: 2
	}
});

gsap.utils.toArray("[data-depth]").forEach((layer) => {
	tl.to(layer, { y: layer.dataset.depth * -3 }, 0);
});

tl.to("html", { "--sunset": "#f99f95", ease: "none", duration: 0.2 }, 0);
