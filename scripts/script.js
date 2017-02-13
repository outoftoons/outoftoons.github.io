$(document).ready(function(){
	//function to determine if there is currently a scrollbar
	(function($) {
		$.fn.hasScrollBar = function() {
			return this.get(0).scrollHeight > this.height();
		}
	})(jQuery);
	
	window.onload =(function(){
		//if there is a scrollbar, change padding and margins so that they don't overlap it and they line up with where they should be with no scrollbar
		if ($('.content').hasScrollBar()){
			$('.headingLine').each(function(){
				$(this).css('right', '17px');
			});
			$('.content:not(:contains("zxywvut"))').each(function(){
				$(this).css('padding-right', '10%');
			});
			$('.hamburgerOverlay:not(:contains("zxywvut"))').each(function(){
				$(this).css('right', '17px');
			});
			$('.imageLinkRight:not(:contains("zxywvut"))').each(function(){
				$(this).css('margin-right', '20px');
			});
		}
		else {
			$('.headingLine:not(:contains("zxywvut"))').each(function(){
				$(this).css('right', '0px');
			});
			$('.content:not(:contains("zxywvut"))').each(function(){
				$(this).css('padding-right', 'calc(10% + 17px)');
			});
			$('.hamburgerOverlay:not(:contains("zxywvut"))').each(function(){
				$(this).css('right', '0px');
			});
			$('.imageLinkRight:not(:contains("zxywvut"))').each(function(){
				$(this).css('margin-right', '3px');
			});
		}
	});
	
	//what to do on window resize
	$(window).on('resize', function(){
		//if there is a scrollbar, change padding and margins so that they don't overlap it and they line up with where they should be with no scrollbar
		if ($('.content').hasScrollBar()){
			$('.headingLine:not(:contains("zxywvut"))').each(function(){
				$(this).css('right', '17px');
			});
			$('.content:not(:contains("zxywvut"))').each(function(){
				$(this).css('padding-right', '10%');
			});
			$('.hamburgerOverlay:not(:contains("zxywvut"))').each(function(){
				$(this).css('right', '17px');
			});
			$('.imageLinkRight:not(:contains("zxywvut"))').each(function(){
				$(this).css('margin-right', '20px');
			});
		}
		else {
			$('.headingLine:not(:contains("zxywvut"))').each(function(){
				$(this).css('right', '0px');
			});
			$('.content:not(:contains("zxywvut"))').each(function(){
				$(this).css('padding-right', 'calc(10% + 17px)');
			});
			$('.hamburgerOverlay:not(:contains("zxywvut"))').each(function(){
				$(this).css('right', '0px');
			});
			$('.imageLinkRight:not(:contains("zxywvut"))').each(function(){
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
				$(".headingLink").each(function(){
					$(this).css('color', 'lime');
				});
			}
			else{
				$(".headingLink").each(function(){
					$(this).css('color', 'white');
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
	});
	$(window).on('resize', function(){
		//if window is not 1081 pixels wide, change to hamburger layout. if wider than 1080, change to normal layout
		if ($(window).width() < 1081) {
			$('.headingTable td:has(span)').each(function(){
				$(this).fadeOut(400, function(){
					$(this).prev('td').fadeIn(400);//links fade out blank fades in
				});
				$(this).next('td').fadeOut(400, function(){
					$(this).next('td').fadeIn(400);//outlinks fade out hamburger fades in
				});
			});
		}
		else {
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
	});

	//assign headlink hover colors
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
	$(".headingLink:contains('Facebook')").hover(function(){
		$(this).css('color', 'rgb(59, 89, 152');
	},function(){
		$(this).css('color','');
	});
		$(".headingLink:contains('YouTube')").hover(function(){
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
				$('.headingLine:not(:contains("zxywvut"))').each(function(){
					$(this).css('right', '17px');
				});
				$('.content:not(:contains("zxywvut"))').each(function(){
					$(this).css('padding-right', '10%');
				});
				$('.hamburgerOverlay:not(:contains("zxywvut"))').each(function(){
					$(this).css('right', '17px');
				});
				$('.imageLinkRight:not(:contains("zxywvut"))').each(function(){
					$(this).css('margin-right', '20px');
				});
			}
			else {
				$('.headingLine:not(:contains("zxywvut"))').each(function(){
					$(this).css('right', '0px');
				});
				$('.content:not(:contains("zxywvut"))').each(function(){
					$(this).css('padding-right', 'calc(10% + 17px)');
				});
				$('.hamburgerOverlay:not(:contains("zxywvut"))').each(function(){
					$(this).css('right', '17px');
				});
				$('.imageLinkRight:not(:contains("zxywvut"))').each(function(){
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