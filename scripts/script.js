$(document).ready(function(){
	//boolean for if mobile
	var isMobile = /android|webOS|iphone|ipod|ipad|blackberry|iemobile|opera mini|opera mobi|skyfire|maemo|windows phone|palm|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()) ? true : false;
	
	//function to determine if there is currently a scrollbar
	(function($) {
		$.fn.hasScrollBar = function() {
			return this.get(0).scrollHeight > this.height();
		}
	})(jQuery);
	
	//this one runs it in the event that cached window is loaded
	$(document).ready(function(){
		//if there is a scrollbar, change padding and margins so that they don't overlap it and they line up with where they should be with no scrollbar
		if ($('.content').hasScrollBar()){
			if (!isMobile){
				$('.headingLine').each(function(){
					$(this).css('right', '17px');
				});
				$('.content').each(function(){
					$(this).css('padding-right', '10%');
				});
				$('.hamburgerOverlay').each(function(){
					$(this).css('right', '17px');
				});
				$('.imageLinkRight').each(function(){
					$(this).css('margin-right', '20px');
				});
			}
		}
		else {
			$('.headingLine').each(function(){
				$(this).css('right', '0px');
			});
			$('.content').each(function(){
				$(this).css('padding-right', 'calc(10% + 17px)');
			});
			$('.hamburgerOverlay').each(function(){
				$(this).css('right', '0px');
			});
			$('.imageLinkRight').each(function(){
				$(this).css('margin-right', '3px');
			});
		}
	});

	//this one prevents it from running before the content loads
	window.onload =(function(){
		//if there is a scrollbar, change padding and margins so that they don't overlap it and they line up with where they should be with no scrollbar
		if ($('.content').hasScrollBar()){
			if (!isMobile){
				$('.headingLine').each(function(){
					$(this).css('right', '17px');
				});
				$('.content').each(function(){
					$(this).css('padding-right', '10%');
				});
				$('.hamburgerOverlay').each(function(){
					$(this).css('right', '17px');
				});
				$('.imageLinkRight').each(function(){
					$(this).css('margin-right', '20px');
				});
			}
		}
		else {
			$('.headingLine').each(function(){
				$(this).css('right', '0px');
			});
			$('.content').each(function(){
				$(this).css('padding-right', 'calc(10% + 17px)');
			});
			$('.hamburgerOverlay').each(function(){
				$(this).css('right', '0px');
			});
			$('.imageLinkRight').each(function(){
				$(this).css('margin-right', '3px');
			});
		}
	});
	
	//what to do on window resize
	$(window).on('resize', function(){
		//if there is a scrollbar, change padding and margins so that they don't overlap it and they line up with where they should be with no scrollbar
		if ($('.content').hasScrollBar()){
			if (!isMobile){
				$('.headingLine').each(function(){
					$(this).css('right', '17px');
				});
				$('.content').each(function(){
					$(this).css('padding-right', '10%');
				});
				$('.hamburgerOverlay').each(function(){
					$(this).css('right', '17px');
				});
				$('.imageLinkRight').each(function(){
					$(this).css('margin-right', '20px');
				});
			}
		}
		else {
			$('.headingLine').each(function(){
				$(this).css('right', '0px');
			});
			$('.content').each(function(){
				$(this).css('padding-right', 'calc(10% + 17px)');
			});
			$('.hamburgerOverlay').each(function(){
				$(this).css('right', '0px');
			});
			$('.imageLinkRight').each(function(){
				$(this).css('margin-right', '3px');
			});
		}
	});
	
	$(document).ready(function(){
		//if window is not 1081 pixels wide, change to hamburger layout. if wider than 1080, change to normal layout
		if ($(window).width() < 1081) {
			$('.headingTable td:has(span)').each(function(){
				$(this).prev('td').show();
				$(this).hide();
				$(this).next('td').hide();
				$(this).next('td').next('td').show();
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
			$('.headingTable td:has(span)').each(function(){
				$(this).prev('td').hide();
				$(this).show();
				$(this).next('td').show();
				$(this).next('td').next('td').hide();
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
		if ($(window).width() < 800) {
			$(".hideCell").each(function(){
				$(this).hide();
			});
			$(".repertoireTable td:nth-child(2)").each(function(){
				$(this).css('border-radius', '0 5px 5px 0'); 
			});
		}
		else {
			$(".hideCell").each(function(){
				$(this).show();
			});
			$(".repertoireTable td:nth-child(2)").each(function(){
				$(this).css('border-radius', '0 0px 0px 0'); 
			});
		}
	});
	$(window).on('resize', function(){
		//if window is not 1081 pixels wide, change to hamburger layout. if wider than 1080, change to normal layout
		setTimeout(function(){
			if ($(window).width() < 1081) {
				$('.headingTable td:has(span)').each(function(){
					$(this).fadeOut(400, function(){
						$(this).prev('td').fadeIn(400);//links fade out blank fades in
					});
					$(this).next('td').fadeOut(400, function(){
						$(this).next('td').fadeIn(400);//outlinks fade out hamburger fades in
					});
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
		}, 400);
		setTimeout(function(){
			if ($(window).width() >= 1081) {
				$('.hamburgerOverlay').fadeOut(400);
				$('.headingTable td:has(span)').each(function(){
					$(this).prev('td').fadeOut(400, function(){
						$(this).next('td').fadeIn(400);//blank fades out links fade in
					});
					$(this).next('td').next('td').fadeOut(400, function(){
						$(this).prev('td').fadeIn(400);//hamburger fades out outlinks fade in
					});
				});
			}
		}, 400);
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
		if ($(window).width() < 800) {
			$(".hideCell").each(function(){
				$(this).hide();
			});
			$(".repertoireTable td:nth-child(2)").each(function(){
				$(this).css('border-radius', '0 5px 5px 0'); 
			});
		}
		else {
			$(".hideCell").each(function(){
				$(this).show();
			});
			$(".repertoireTable td:nth-child(2)").each(function(){
				$(this).css('border-radius', '0 0px 0px 0'); 
			});
		}
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
	var hamburgerColors = [
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
				var hamburgerColorIndex = Math.floor(Math.random() * hamburgerColors.length);
				var src = $(this).attr("src").replace(".png", hamburgerColors[hamburgerColorIndex]);
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
	
	//showing and hiding photos when you click album titles
	$(".albumTitle").click(function(){
		$(this).next('.album').toggle(0,function(){
			if ($('.content').hasScrollBar()){
				if (!isMobile){
					$('.headingLine').each(function(){
						$(this).css('right', '17px');
					});
					$('.content').each(function(){
						$(this).css('padding-right', '10%');
					});
					$('.hamburgerOverlay').each(function(){
						$(this).css('right', '17px');
					});
					$('.imageLinkRight').each(function(){
						$(this).css('margin-right', '20px');
					});
				}
			}
			else {
				$('.headingLine').each(function(){
					$(this).css('right', '0px');
				});
				$('.content').each(function(){
					$(this).css('padding-right', 'calc(10% + 17px)');
				});
				$('.hamburgerOverlay').each(function(){
					$(this).css('right', '17px');
				});
				$('.imageLinkRight').each(function(){
					$(this).css('margin-right', '3px');
				});
			}
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
	$(document).ready(function(){
		$('.outLink').each(function(){
			var colorIndex = Math.floor(Math.random() * colors.length);
			$(this).css("color", colors[colorIndex])
		},function(){
			$(this).css('color','white');
		});
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