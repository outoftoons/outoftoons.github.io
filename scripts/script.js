$(document).ready(function(){
	//boolean for if mobile
	var isMobile = /android|webOS|iphone|ipod|ipad|blackberry|iemobile|opera mini|opera mobi|skyfire|maemo|windows phone|palm|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()) ? true : false;
	
	//function to determine if there is currently a scrollbar
	(function($) {
		$.fn.hasScrollBar = function() {
			var pageHeight=this.get(0).scrollHeight
			var windowHeight=$(window).height()
			var scrollbar=pageHeight>windowHeight;
			//alert("scrollbar= " + scrollbar + " scrollHeight= " + pageHeight + " windowHeight= " + windowHeight);
			return scrollbar;
		}
	})(jQuery);

	//if there is a scrollbar, change padding and margins so that they don't overlap it and they line up with where they should be with no scrollbar
	(function($) {
		adjustForScrollBar = function() {
			if ($('.scrollable').hasScrollBar()){
				if (!isMobile){
					$('.heading').each(function(){
						$(this).css('right', '17px');
					});
					$('.headingLine').each(function(){
						$(this).css('right', '17px');
					});
					$('.headingTable').each(function(){
						$(this).css('padding-right', '0px');
					});
					$('.content').each(function(){
						$(this).css('margin-left', 'calc(10% + 1.3px)'); //10% of the 17px removed by scrollbar
						$(this).css('margin-right', 'calc(10% + 1.3px)'); //10% of the 17px removed by scrollbar
					});
					$('.video').each(function(){
						$(this).css('left', 'calc(10% + 1.3px)'); //10% of the 17px removed by scrollbar
						$(this).css('right', 'calc(10% + 1.3px)'); //10% of the 17px removed by scrollbar
						$(this).css('width', 'calc(80% - 2.9px)');
					});
					$('.pageTitle').each(function(){
						$(this).css('margin-left', 'calc(10% + 1.3px)'); //10% of the 17px removed by scrollbar
						$(this).css('margin-right', 'calc(10% + 1.3px)'); //10% of the 17px removed by scrollbar
					});
					$('.hr').each(function(){
						$(this).css('margin-left', 'calc(10% + 1.3px)'); //10% of the 17px removed by scrollbar
						$(this).css('margin-right', 'calc(10% + 1.3px)'); //10% of the 17px removed by scrollbar
					});
					$('.hamburgerOverlay').each(function(){
						$(this).css('right', '17px');
						$(this).css('padding-right', '0px');
					});
					$('.videoOverlay').each(function(){
						$(this).css('right', '17px');
						$(this).css('padding-right', '0px');
					});
				}
			}
			else {
				$('.heading').each(function(){
					$(this).css('right', '0px');
				});
				$('.headingLine').each(function(){
					$(this).css('right', '0px');
				});
				$('.headingTable').each(function(){
					$(this).css('padding-right', '17px'); //17px removed by scrollbar
				});
				$('.content').each(function(){
					$(this).css('margin-left', 'calc(10%)'); 
					$(this).css('margin-right', 'calc(10% + 17px)'); //17px removed by scrollbar
				});
				$('.video').each(function(){
					$(this).css('left', 'calc(10%)'); 
					$(this).css('right', 'calc(10% + 17px)'); //17px removed by scrollbar
					$(this).css('width', 'calc(80% - 17px)'); //17px removed by scrollbar
				});
				$('.pageTitle').each(function(){
					$(this).css('margin-left', 'calc(10%)'); 
					$(this).css('margin-right', 'calc(10% + 17px)'); //17px removed by scrollbar
				});
				$('.hr').each(function(){
					$(this).css('margin-left', 'calc(10%)'); 
					$(this).css('margin-right', 'calc(10% + 17px)'); //17px removed by scrollbar
				});
				$('.hamburgerOverlay').each(function(){
					$(this).css('right', '0px'); 
					$(this).css('padding-right', '17px');
				});
				$('.videoOverlay').each(function(){
					$(this).css('right', '0px'); 
					$(this).css('padding-right', '17px');
				});
			}
		}
	})(jQuery);

	//if window is not 1081 pixels wide, change to hamburger layout. if wider than 1080, change to normal layout
	(function($) {
		adjustForWindowResize = function() {
			adjustForScrollBar();
			if ($(window).width() < 1081) {
				$('.headingTable td:has(span)').each(function(){
					$(this).fadeOut(400, function(){
						$(this).prev('td').fadeIn(400);//links fade out blank fades in
					});
					$(this).next('td').fadeOut(400, function(){
						$(this).next('td').fadeIn(400);//outlinks fade out hamburger fades in
					});
					$(this).next('td').next('td').next('td').hide();
				});
				if ($(window).height()< 460){
					$(".hamburgerLink").each(function(){
						$(this).css('font-size', '16px');
					});
				}
				else if ($(window).height()> 620){
					$(".hamburgerLink").each(function(){
						$(this).css('font-size', '40px');
					});
				}
				else{
					$(".hamburgerLink").each(function(){
						$(this).css('font-size', '22px');
					});
				}
			}
			else {
				$('.hamburgerOverlay').fadeOut(400);
				$('.headingTable td:has(span)').each(function(){
					$(this).prev('td').fadeOut(0, function(){
						$(this).next('td').fadeIn(400);//blank fades out links fade in
					});
					$(this).next('td').next('td').fadeOut(0, function(){
						$(this).prev('td').fadeIn(400);//hamburger fades out outlinks fade in
					});
					$(this).next('td').next('td').next('td').hide();
				});
			}
			//move pics closer together on bigger screen
			if ($(window).width() > 1300) {
				$(".memberTable").each(function(){
						$(this).css('width', '80%');
					});
			}
			else {
				$(".memberTable").each(function(){
						$(this).css('width', '100%');
					});
			}
			//remove extra info on repertoire page when window is too small
			if ($(window).width() < 810) {
				$(".repertoireTable").each(function(){
					$(this).show(); 
				});
				$(".hideCell").each(function(){
					$(this).hide(0,function(){
						adjustForScrollBar();
					});
				});
				$(".repertoireTable td:nth-child(3)").each(function(){
					$(this).css('border-radius', '0 5px 5px 0'); 
				});
			}
			else {
				$(".repertoireTable").each(function(){
					$(this).show(); 
				});
				$(".hideCell").each(function(){
					$(this).show();
				});
				$(".repertoireTable td:nth-child(3)").each(function(){
					$(this).css('border-radius', '0 0px 0px 0'); 
				});
			}
			adjustForScrollBar();
		}
	})(jQuery);
	
	adjustForWindowResize();

	//this one prevents it from running before the content loads
	window.onload =(function(){
		adjustForWindowResize();
	});
	
	//what to do on window resize
	$(window).on('resize', function(){
		setTimeout(function(){
			adjustForWindowResize();
		}, 400);
	});
	
	//assign headinglink and hamburgerlink hover colors
	$(".headingLink:contains('News')").hover(function(){
		$(this).css('color', 'red');
	},function(){
		$(this).css('color','');
	});
	$(".headingLink:contains('About')").hover(function(){
		$(this).css('color', 'orange');
	},function(){
		$(this).css('color','');
	});
	$(".headingLink:contains('Members')").hover(function(){
		$(this).css('color', 'yellow');
	},function(){
		$(this).css('color','');
	});
	$(".headingLink:contains('Repertoire')").hover(function(){
		$(this).css('color', 'lime');
	},function(){
		$(this).css('color','');
	});
	$(".headingLink:contains('Photos')").hover(function(){
		$(this).css('color', 'blue');
	},function(){
		$(this).css('color','');
	});
	$(".headingLink:contains('Contact')").hover(function(){
		$(this).css('color', 'purple');
	},function(){
		$(this).css('color','');
	});
	$(".hamburgerLink:contains('News')").hover(function(){
		$(this).css('color', 'red');
	},function(){
		$(this).css('color','');
	});
	$(".hamburgerLink:contains('About')").hover(function(){
		$(this).css('color', 'orange');
	},function(){
		$(this).css('color','');
	});
	$(".hamburgerLink:contains('Members')").hover(function(){
		$(this).css('color', 'yellow');
	},function(){
		$(this).css('color','');
	});
	$(".hamburgerLink:contains('Repertoire')").hover(function(){
		$(this).css('color', 'lime');
	},function(){
		$(this).css('color','');
	});
	$(".hamburgerLink:contains('Photos')").hover(function(){
		$(this).css('color', 'blue');
	},function(){
		$(this).css('color','');
	});
	$(".hamburgerLink:contains('Contact')").hover(function(){
		$(this).css('color', 'purple');
	},function(){
		$(this).css('color','');
	});
	$(".hamburgerLink:contains('Facebook')").hover(function(){
		$(this).css('color', 'rgb(59, 89, 152');
	},function(){
		$(this).css('color','');
	});
	$(".hamburgerLink:contains('YouTube')").hover(function(){
		$(this).css('color', 'rgb(229,45,39)');
	},function(){
		$(this).css('color','');
	});
	
	//assign image link hover 
	$(function() {
		$(".imageLink")
			.mouseover(function() { 
				var src = $(this).attr("src").replace(".png", "-hover.png");
				$(this).attr("src", src);
			})
			.mouseout(function() {
				var src = $(this).attr("src").replace("-hover.png", ".png");
				$(this).attr("src", src);
			});
	});
	
	//hamburger hovers
	var imageColors = [
		"-red.png",
		"-orange.png",
		"-yellow.png",
		"-lime.png",
		"-blue.png",
		"-purple.png"    
	];
	$(function() {
		$(".imageLinkRight")
			.mouseover(function() { 
				var hamburgerColorIndex = Math.floor(Math.random() * imageColors.length);
				var src = $(this).attr("src").replace(".png", imageColors[hamburgerColorIndex]);
				$(this).attr("src", src);
			})
			.mouseout(function() {
				var src = $(this).attr("src").split('-')[0] + ".png";
				$(this).attr("src", src);
			});
	});
	$(function() {
		$(".play")
			.mouseover(function() { 
				var playColorIndex = Math.floor(Math.random() * imageColors.length);
				var src = $(this).attr("src").replace(".png", imageColors[playColorIndex]);
				$(this).attr("src", src);
			})
			.mouseout(function() {
				var src = $(this).attr("src").split('-')[0] + ".png";
				$(this).attr("src", src);
			});
	});
	$(function() {
		$(".backArrow")
			.mouseover(function() { 
				var arrowColorIndex = Math.floor(Math.random() * imageColors.length);
				var src = $(this).attr("src").replace(".png", imageColors[arrowColorIndex]);
				$(this).attr("src", src);
			})
			.mouseout(function() {
				var src = $(this).attr("src").split('-')[0] + ".png";
				$(this).attr("src", src);
			});
	});
	
	// hamburger overlay visibility
	$(".hamburger").click(function(){
		if ( $(".hamburgerOverlay").is(":visible") ) {
			$('.hamburgerOverlay').fadeOut(400);
		}
		else {
			$('.hamburgerOverlay').fadeIn(400);
		}
	});
	
	// profile image hovering
	$(function() {
		$(".profileImage")
			.mouseover(function() { 
				var src = $(this).attr("src").replace(".png", "-hover.png");
				$(this).attr("src", src);
			})
			.mouseout(function() {
				var src = $(this).attr("src").replace("-hover.png", ".png");
				$(this).attr("src", src);
			});
	});
	
	// video overlay visibility
	$(".play").click(function(){
		$('.videoOverlay').fadeIn(400);
	});
	$(".backArrow").click(function(){
		$('.videoOverlay').fadeOut(400);
	});
	
	//showing and hiding photos when you click album titles
	$(".albumTitle").click(function(){
		$(this).next('.album').toggle(0,function(){
			adjustForScrollBar();
		});
	});
	
	// outlink hover colors
	var colors = [
		"red",
		"orange",
		"yellow",
		"lime",
		"blue",
		"purple"    
	];
	$('.outLink').each(function(){
		var colorIndex = Math.floor(Math.random() * colors.length);
		$(this).css("color", colors[colorIndex])
	},function(){
		$(this).css('color','white');
	});
	$(".outLink").hover(function() {
		$(this).css("color", "white")
	},function(){
		var colorIndex = Math.floor(Math.random() * colors.length);
		$(this).css('color',colors[colorIndex]);
	});

	// album title hover colors
	$(".albumTitle").hover(function() {
		var colorIndex = Math.floor(Math.random() * colors.length);
		$(this).css("color", colors[colorIndex])
	},function(){
		$(this).css('color','white');
	});
});