//Sticky Menú
$(window).load(function(){
	var $nav = $('.menuPrincipal');
	var $navTop = $nav.offset().top;
	var pegarNav = function(){
		var $scrollTop = $(window).scrollTop();
		if($scrollTop >= $navTop){
			$nav.addClass('sticky');
			$('body').css('padding-top', '60px');
		} else {
			$nav.removeClass('sticky');
			$('body').css('padding-top', '0px');
		}
	};
	$(window).on('scroll',pegarNav);
});

//Menu
$('#toggle-menu').on('click',function(){
	$('#multi-menu').slideToggle();
	$('.menu').toggleClass("open");
	$('#toggle-menu').toggleClass("activo");
});
$('.submenu').on('click','a',function(){
	var sub = $(this);
	var submenu = sub.next();
	var cerrar = sub.parent().siblings().find('ul');
	submenu.slideToggle();
	cerrar.slideUp();
});
$('.submenu2').on('click','a',function(m2){
	$(this).next().slideToggle();
	m2.stopPropagation();
});



//Acordeon
$('.acordeonContenedor').on('click','.acordeon_titulo',function(){
	var titulo = $(this);
	var contenido = titulo.next();
	var cerrar = titulo.parent().siblings().find('.acordeon_contenido');
	contenido.slideToggle();
	cerrar.slideUp();
});


//ScrollReveal
//Iniciamos scrollReveal con sus variables
window.sr = ScrollReveal({
	delay		: 2000,
	distance: '500px',
	duration:	'3000',
	easing	: 'ease-in-out',
	mobile	:	true,
	opacity	:	0,
	reset		: true,
	scale		: 0.5
});

// Variables de animaciones
sr.reveal('.sR_fade', {
	distance	: '0px',
	opacity	: 0,
	scale		: 1
});
sr.reveal('.sR_scale', {
	distance	: '0px',
	scale		: .1
});
sr.reveal('.sR_Izquierda', { origin:	'left' });
sr.reveal('.sR_Derecha', { origin:	'right' });
sr.reveal('.sR_Arriba', { origin:	'top' });
sr.reveal('.sR_Abajo', { origin:	'bottom' });

sr.reveal('.sR_giroIzquierda', {
	distance: 0,
	duration:	'1000',
	rotate: { x : 0, y : 0, z : 360 }
});
sr.reveal('.sR_giroDerecha', {
	distance: 0,
	duration:	'1000',
	rotate: { x : 0, y : 0, z : -360 }
});
sr.reveal('.sR_giroIzquierda2', {
	distance: 0,
	duration:	'1000',
	rotate: { x : 0, y : 360, z : 0 }
});
sr.reveal('.sR_giroDerecha2', {
	distance: 0,
	duration:	'1000',
	rotate: { x : 0, y : -360, z : 0 }
});
sr.reveal('.sR_giroArriba', {
	distance: 0,
	duration:	'1000',
	rotate: { x : 360, y : 0, z : 0 }
});
sr.reveal('.sR_giroAbajo', {
	distance: 0,
	duration:	'1000',
	rotate: { x : -360, y : 0, z : 0 }
});


//Lightcase
	jQuery(document).ready(function($) {
		$('a[data-rel^=lightcase]').lightcase();
	});


//scrollSpy
	// Selectores de caché
	var lastId,
	topMenu = $("#multi-menu"),
	topMenuHeight = topMenu.outerHeight()+10,
	// Todos los elementos de la lista
	menuItems = topMenu.find("a"),
	// Anclajes correspondientes a los elementos de menú
	scrollItems = menuItems.map(function(){
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
	});
	// Enlazar controlador de clic a elementos de menú
	// // así que podemos conseguir una animación de lujo para el scroll
	menuItems.click(function(e){
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 800);
		e.preventDefault();
	});
	// Enlazamos al scroll
	$(window).scroll(function(){
		// Obtenemos la posición de scroll del contenedor
		var fromTop = $(this).scrollTop()+topMenuHeight;
		// Obtenemos el ID del contenedor mostrado por el scroll
		var cur = scrollItems.map(function(){
			if ($(this).offset().top < fromTop)
				return this;
		});
		// Obtener el ID del elemento actual
		cur = cur[cur.length-1];
		var id = cur && cur.length ? cur[0].id : "";
		if (lastId !== id) {
			lastId = id;
			// Añadir o quitar la clase para el elemento activo
			menuItems
			.parent().removeClass("activo")
			.end().filter("[href='#"+id+"']").parent().addClass("activo");
		}
	});