particlesJS("particles-js", {
	"particles": {
		"number": {
			"value": 100,
			"density": {
				"enable": true,
				"value_area": 1000
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
			"polygon": {
				"nb_sides": 5
			},
			"image": {
				"src": "img/github.svg",
				"width": 0,
				"height": 0
			}
		},
		"opacity": {
			"value": 0.8017060304327615,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 0,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 4.008530152163807,
			"random": true,
			"anim": {
				"enable": true,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.1,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 2,
			"direction": "none",
			"random": true,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": true,
				"mode": "grab"
			},
			"onclick": {
				"enable": true,
				"mode": "repulse"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 250,
				"line_linked": {
					"opacity": 0.518254059656801
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});
