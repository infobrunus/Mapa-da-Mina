// Botão de Simulação de Mídia

$(document).ready(function(){

	$('#content').toggle('hide');
	$('#hideshow').on('click', function(event) {        
		$('#content').toggle('show');
		var change = document.getElementById("hideshow");
		if (change.value=="FECHAR SIMULAÇÃO DE MÍDIA") {
			change.value = "CLIQUE E VEJA A SIMULAÇÃO DE MÍDIA";
		}
		else {
			change.value = "FECHAR SIMULAÇÃO DE MÍDIA";
		} 
	});

	$('#content-mapa').toggle('hide');
	$('#hideshow3').on('click', function(event) {        
		$('#content-mapa').toggle('show');
		var change = document.getElementById("hideshow3");
		if (change.value=="FECHAR SELEÇÃO") {
			change.value = "CLIQUE PARA SELECIONAR UM MÊS";
		}
		else {
			change.value = "FECHAR SELEÇÃO";
		} 
	});

	$('.btn-tabela').on('click', function(event) {     
		var change = document.getElementById("hideshow2");
		if (change.value=="FECHAR TABELA DE CONCENTRAÇÃO"){ 
			change.value = "CONFIRA A TABELA DE CONCENTRAÇÃO COMPLETA";
			$(".tabela-exibidora img").hide();
			$(".tabela-exibidora [data-state='sp'").show();
			$("html, body").scrollTop($('#concentracao').offset().top);
		}
		else {
			change.value = "FECHAR TABELA DE CONCENTRAÇÃO";
			$('.tabela-exibidora img').each(function() { 
				$('.tabela-exibidora img').css("display", "block").animate();
			});
		}
	});

	$('.exibidora').css("display", "none");
	$('.estado').css("display", "none");

	$('#exibidora-conteudo').slimScroll({
		alwaysVisible: true,
		height: '200px',
		color: '#ecc133',
		opacity: 1.5
	});

	$('#estado-conteudo').slimScroll({
		alwaysVisible: true,
		height: '200px',
		color: '#ecc133',
		opacity: 1.5
	});

	$(document).mouseup(function(e) 
	{
		var container = $(".globo-select2");
		var container2 = $(".exibidora");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
    	container2.hide();
    }
});

	$(document).mouseup(function(e) 
	{
		var container3 = $(".globo-select");
		var container4 = $(".estado");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container3.is(e.target) && container3.has(e.target).length === 0) 
    {
    	container4.hide();
    }
});

});

// Scroll do Menu

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 60){
		$(".fixed").addClass("colored");
		$(".header").addClass("scrolling");
	} else {
		$(".fixed").removeClass("colored");
		$(".header").removeClass("scrolling");
	}

	if(scroll >= 100){
		$(".fixed").addClass("fixo");
	}

	else {
		$(".fixed").removeClass("fixo");
	}

	if (scroll >= 750) {
		$(".menu").addClass("scrolling");
		$("#main-menu").addClass("scrolling");
		$(".menu-down").addClass("scrolling");
		$(".btn-ok").addClass("scrolling");
		$("#quando").addClass("scrolling");
		$(".globo-select").addClass("scrolling");
		$(".menu-right").addClass("scrolling");
		$(".menu-right select").addClass("scrolling");
		$(".selo").addClass("scrolling");
		$(".logo").addClass("scrolling");
		$(".logo1").addClass("scrolling");
		$(".logo2").addClass("scrolling");
		$(".fixed").addClass("scrolling");
		$(".btn-default").addClass("scrolling");
		$(".exibidora-activate").addClass("scrolling");
		$("#menu2").addClass("scrolling");
		$(".menu-color").addClass("scrolling");
		$(".menu-geral").addClass("scrolling");
		$(".flex").addClass("scrolling");
		$(".flex2").addClass("scrolling");
		$(".caret").addClass("scrolling");
		$(".estado-activate").addClass("scrolling");
		$(".condensada").addClass("scrolling");
		$(".menu-mobile").addClass("scrolling");
	} else {
		$(".menu").removeClass("scrolling");
		$("#main-menu").removeClass("scrolling");
		$(".menu-down").removeClass("scrolling");
		$(".btn-ok").removeClass("scrolling");
		$("#quando").removeClass("scrolling");
		$(".globo-select").removeClass("scrolling");
		$(".menu-right").removeClass("scrolling");
		$(".menu-right select").removeClass("scrolling");
		$(".selo").removeClass("scrolling");
		$(".logo").removeClass("scrolling");
		$(".logo1").removeClass("scrolling");
		$(".logo2").removeClass("scrolling");
		$(".fixed").removeClass("scrolling");
		$(".btn-default").removeClass("scrolling");
		$(".exibidora-activate").removeClass("scrolling");
		$("#menu2").removeClass("scrolling");
		$(".menu-color").removeClass("scrolling");
		$(".menu-geral").removeClass("scrolling");
		$(".flex").removeClass("scrolling");
		$(".flex2").removeClass("scrolling");
		$(".caret").removeClass("scrolling");
		$(".estado-activate").removeClass("scrolling");
		$(".condensada").removeClass("scrolling");
		$(".menu-mobile").removeClass("scrolling");
	}
});


//Flip Book da Mina

$(document).ready(function(){
	$("#flipbook").turn({
		page: 1,
		pages: 108,
		width: 1000,
		height: 570,
		autoCenter: true,
		elevation: 50,
		gradients: true,
		when: {
			start: function(event, pageObject, corner) {
				if (pageObject.next==1) 
					event.preventDefault();
			}, 
			turning: function(event, page, view) {
				if (page==1)
					event.preventDefault();
			}
		}
	});

	$("#flipbook").turn("center");

	$("#prevBtn").click(function() {
		$("#flipbook").turn("previous");
	});

	$("#nextBtn").click(function() {
		$("#flipbook").turn("next");
	});

	$("#firstBtn").click(function() {
		$("#flipbook").turn("page", 2);
	});

	$("#lastBtn").click(function() {
		$("#flipbook").turn("page", 108);
	});

	if($(window).width() < 420) { 
		$("#flipbook").turn("display", "single");
		$("#flipbook").height(300);
		$("#firstBtn").click(function() {
			$("#flipbook").turn("page", 1);
		});
		$("#lastBtn").click(function() {
			$("#flipbook").turn("page", 7);
		});
	}

});

// Mapa dos Meses

$(document).ready(function() {
	$('.mapa-text').on('click', function(){
		$img=$(this).data('href');    
		$('.classe').attr('src', $img=$(this).data('href'));
	});
	$('.mapa-select').on('click', function(){
		$img=$(this).data('href');    
		$('.classe').attr('src', $img=$(this).data('href'));
	});
});


$(document).ready(function() {

	// Cache selectors
	var lastId,
	topMenu = $("#menu2 .menu-down, nav"),
	topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
    	var item = $($(this).attr("href"));
    	if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
	var href = $(this).attr("href"),
	offsetTop = href === "#" ? 0 : $(href).offset().top- 90;
	$('html, body').stop().animate({ 
		scrollTop: offsetTop
	}, 300);
	e.preventDefault();
});


// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+ 100;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
   	if ($(this).offset().top < fromTop)
   		return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
   	lastId = id;
       // Set/remove active class
       menuItems.removeClass("ativado").end();
       menuItems.filter("[href='#"+id+"']").addClass("ativado");
   }                   
});


$(document).ready(function() {

	$('.common').hide();

	$('.estado input[type="checkbox"]').click(function(){
		var value;
		value = $(this).attr("value");

		if ($(this).is(":checked")) {	
			$("#" + value).show();
			//console.log(value);
		} else {
			$("#" + value).hide();
		}
		if (value == 'es-all'){
			if($('#estado-todos').is(':checked')){
				$('.estado input[type="checkbox"]').prop('checked', true);
				$('.common').show();
			}
			else{
				$('.estado input[type="checkbox"]').prop('checked', false);
				$('.common').hide();
			}
		}
	});


	$('.exibidora input[type="checkbox"]').click(function(){
		if ($(this).val() === 'ex-all'){
			if($('#exibidora-todos').is(':checked')){
				$('.common').each(function(commonIndex, commonValue) {
					if($(commonValue).css('display') === 'block'){
						const checkbox = commonValue.getElementsByTagName("input");
						for (var i=0, max = checkbox.length; i < max; i++) {
							checkbox[i].checked = true;
						}
					}
				});
			}
			else{
				$('.exibidora input[type="checkbox"]').prop('checked', false);
			}
		}
		else{
		}
	});


	$('.btn-ok').on('click', function(event) { 
		$(".tabela-exibidora [data-state='sp'").hide();
		$('.tabela-exibidora img').css("display", "none");
		$('.exibidora input[type=checkbox]').each(function() {
			if ($(this).is(":checked")) {
				$(".tabela-exibidora [data-exibidora='" + $(this).val()+"']").show();	
				$('#conc').click();
			}
		});
	});


	$(".tabela-exibidora [data-state='sp'").show();

	$('.exibidora-activate, #caret-exibidora').click(function() {
		$('.exibidora').slideToggle("fast");
	});

	$('.estado-activate, #caret-estado').click(function() {
		$('.estado').slideToggle("fast");
	});

	$('.logo1, .logo2').click(function(){
		$('html, body').animate({scrollTop : 0},600);
		return false;
	});

	var d = new Date(),
	n = d.getMonth();

	$("button[data-mes]").each(function(){
		var mes = $(this).data('mes');
		if (mes == n) {		
			$(".mapa-meses button[data-mes = " + "'" + mes + "'" ).click();
			$(this).addClass('selected');
		}
	});

	$(".mapa-meses-mobile button[data-mes]").each(function(){
		var mes = $(this).data('mes');
		if (mes == n) {		
			$(".mapa-meses-mobile button[data-mes = " + "'" + mes + "'" ).click();
			$(this).addClass('selected');
		}
	});

	$('.mapa-meses-mobile button').on('click', function(){
		$('.mapa-meses-mobile button').removeClass('selected');
		$(this).addClass('selected');
	});

	$('.mapa-meses button').on('click', function(){
		$('.mapa-meses button').removeClass('selected');
		$(this).addClass('selected');
	});

	$('.menu-mobile').click(function () {
		$('.menu-mobile').toggleClass('on', function () {});
		$('nav').slideToggle(400, function () {});
	});

	$('nav li a').click(function () {
		$('nav').slideToggle(400, function () {});
	});

	/*var norepeat = 0;

	function Analytics(norepeat) {
		console.log(norepeat);
	}

	$(window).scroll(function(e){
		var scrollTop = $(window).scrollTop();
		var docHeight = $(document).height();
		var winHeight = $(window).height();
		var scrollPercent = (scrollTop) / (docHeight - winHeight);
		var scrollPercentRounded = Math.round(scrollPercent*100);

		if(scrollPercentRounded == 25){
			if(norepeat < scrollPercentRounded){
				norepeat = scrollPercentRounded;
				Analytics(norepeat);
			}
		}

		if(scrollPercentRounded == 50){
			if(norepeat < scrollPercentRounded){
				norepeat = scrollPercentRounded;
				Analytics(norepeat);
			}
		}

		if(scrollPercentRounded == 75){
			if(norepeat < scrollPercentRounded){
				norepeat = scrollPercentRounded;
				Analytics(norepeat);
			}
		}

		if(scrollPercentRounded == 100){
			if(norepeat < scrollPercentRounded){
				norepeat = scrollPercentRounded;
				Analytics(norepeat);
			}
		}

	});*/
});

});







