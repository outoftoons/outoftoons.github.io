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
			if ($(window).width() < 830) {
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
				//adjust rows in table based on page size. This is done because there was a bug with the text wrapping differently when there was and was not a scrollbar. The adjustForScrollBar function would get screwed up.
				//This will need to be reexamined every time a song is added
				if ($(window).width() < 435) {
					//song
					$("td:contains('00000')").html("00000<br>Million");
					$("td:contains('And So')").html("And So<br>It Goes");
					$("td:contains('Code')").html("Code<br>Monkey");
					$("td:contains('Down In')").html("Down In<br>The Dumps");
					$("td:contains('Hymn Of')").html("Hymn Of<br>Acxiom");
					$("td:contains('I Am Not')").html("I Am Not<br>Yours");
					$("td:contains('I See')").html("I See<br>The Light");
					$("td:contains('It-Splay')").html("It-Splay<br>Out The<br>Back Way");
					$("td:contains('Run To')").html("Run To<br>You");
					$("td:contains('Some')").html("Some<br>Nights");
					$('td:contains("That\'s")').html("That\'s<br>What<br>Friends<br>Are For");
					$("td:contains('Video')").html("Video<br>Killed The<br>Radio Star");
					$("td:contains('Walking')").html("Walking<br>On Broken<br>Glass");
					//artist
					$("td:contains('Simon And')").html("Simon And<br>Garfunkel");
					$("td:contains('Jonathon Coultan')").html("Jonathon<br>Coultan");
					$("td:contains('Walk The')").html("Walk The<br>Moon");
					$("td:contains('Randall')").html("Randall<br>Stroope<br>Sara<br>Teasdale");
					$("td:contains('Ariella')").html("Dana<br>Gretton<br>Ariella<br>Prosch<br>Newman");
					$("td:contains('The Jungle')").html("The Jungle<br>Book");
					$("td:contains('Annie')").html("Annie<br>Lennox");
				}
				else if ($(window).width() < 490) {
					//song
					$("td:contains('00000')").html("00000 Million");
					$("td:contains('And So')").html("And So It Goes");
					$("td:contains('Code')").html("Code Monkey");
					$("td:contains('Down In')").html("Down In<br>The Dumps");
					$("td:contains('Hymn Of')").html("Hymn Of Acxiom");
					$("td:contains('I Am Not')").html("I Am Not Yours");
					$("td:contains('I See')").html("I See The Light");
					$("td:contains('It-Splay')").html("It-Splay Out<br>The Back Way");
					$("td:contains('Run To')").html("Run To You");
					$("td:contains('Some')").html("Some Nights");
					$('td:contains("That\'s")').html("That\'s What<br>Friends Are For");
					$("td:contains('Video')").html("Video Killed<br>The Radio Star");
					$("td:contains('Walking')").html("Walking On<br>Broken Glass");
					//artist
					$("td:contains('Simon And')").html("Simon And<br>Garfunkel");
					$("td:contains('Jonathon Coultan')").html("Jonathon Coultan");
					$("td:contains('Walk The')").html("Walk The Moon");
					$("td:contains('Randall')").html("Randall Stroope<br>Sara Teasdale");
					$("td:contains('Ariella')").html("Dana Gretton<br>Ariella Prosch<br>Newman");
					$("td:contains('The Jungle')").html("The Jungle Book");
					$("td:contains('Annie')").html("Annie Lennox");
				}
				else if ($(window).width() <600) {
					//song
					$("td:contains('00000')").html("00000 Million");
					$("td:contains('And So')").html("And So It Goes");
					$("td:contains('Code')").html("Code Monkey");
					$("td:contains('Down In')").html("Down In<br>The Dumps");
					$("td:contains('Hymn Of')").html("Hymn Of Acxiom");
					$("td:contains('I Am Not')").html("I Am Not Yours");
					$("td:contains('I See')").html("I See The Light");
					$("td:contains('It-Splay')").html("It-Splay Out<br>The Back Way");
					$("td:contains('Run To')").html("Run To You");
					$("td:contains('Some')").html("Some Nights");
					$('td:contains("That\'s")').html("That\'s What<br>Friends Are For");
					$("td:contains('Video')").html("Video Killed<br>The Radio Star");
					$("td:contains('Walking')").html("Walking On<br>Broken Glass");
					//artist
					$("td:contains('Simon And')").html("Simon And Garfunkel");
					$("td:contains('Jonathon Coultan')").html("Jonathon Coultan");
					$("td:contains('Walk The')").html("Walk The Moon");
					$("td:contains('Randall')").html("Randall Stroope<br>Sara Teasdale");
					$("td:contains('Ariella')").html("Dana Gretton<br>Ariella Prosch Newman");
					$("td:contains('The Jungle')").html("The Jungle Book");
					$("td:contains('Annie')").html("Annie Lennox");
				}
				else {
					//song
					$("td:contains('00000')").html("00000 Million");
					$("td:contains('And So')").html("And So It Goes");
					$("td:contains('Code')").html("Code Monkey");
					$("td:contains('Down In')").html("Down In The Dumps");
					$("td:contains('Hymn Of')").html("Hymn Of Acxiom");
					$("td:contains('It-Splay')").html('It-Splay Out The Back Way');
					$("td:contains('I Am Not')").html("I Am Not Yours");
					$("td:contains('I See')").html("I See The Light");
					$("td:contains('It-Splay')").html('It-Splay Out The Back Way');
					$("td:contains('Run To')").html("Run To You");
					$("td:contains('Some')").html("Some Nights");
					$('td:contains("That\'s")').html("That\'s What Friends Are For");
					$("td:contains('Video')").html("Video Killed The Radio Star");
					$("td:contains('Walking')").html("Walking On Broken Glass");
					//artist
					$("td:contains('Simon And')").html("Simon And Garfunkel");
					$("td:contains('Jonathon Coultan')").html("Jonathon Coultan");
					$("td:contains('Walk The')").html("Walk The Moon");
					$("td:contains('Randall')").html("Randall Stroope<br>Sara Teasdale");
					$("td:contains('Ariella')").html("Dana Gretton<br>Ariella Prosch Newman");
					$("td:contains('The Jungle')").html("The Jungle Book");
					$("td:contains('Annie')").html("Annie Lennox");
				}
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
				//adjust rows in table based on page size. This is done because there was a bug with the text wrapping differently when there was and was not a scrollbar. The adjustForScrollBar function would get screwed up
				//This will need to be reexamined every time a song is added
				if ($(window).width() < 890) {
					//song
					$("td:contains('00000')").html("00000 Million");
					$("td:contains('And So')").html("And So It Goes");
					$("td:contains('Code')").html("Code Monkey");
					$("td:contains('Down In')").html("Down In<br>The Dumps");
					$("td:contains('Hymn Of')").html("Hymn Of Acxiom");
					$("td:contains('It-Splay')").html("It-Splay Out<br>The Back Way");
					$("td:contains('I Am Not')").html("I Am Not Yours");
					$("td:contains('I See')").html("I See The Light");
					$("td:contains('It-Splay')").html("It-Splay Out<br>The Back Way");
					$("td:contains('Run To')").html("Run To You");
					$("td:contains('Some')").html("Some Nights");
					$('td:contains("That\'s")').html("That\'s What<br>Friends Are For");
					$("td:contains('Video')").html("Video Killed<br>The Radio Star");
					$("td:contains('Walking')").html("Walking On<br>Broken Glass");
					//artist
					$("td:contains('Simon And')").html("Simon And<br>Garfunkel");
					$("td:contains('Jonathon Coultan')").html("Jonathon Coultan");
					$("td:contains('Walk The')").html("Walk The Moon");
					$("td:contains('Randall')").html("Randall Stroope<br>Sara Teasdale");
					$("td:contains('Ariella')").html("Dana Gretton<br>Ariella Prosch<br>Newman");
					$("td:contains('The Jungle')").html("The Jungle Book");
					$("td:contains('Annie')").html("Annie Lennox");
				}
				else if ($(window).width() < 980) {
					//song
					$("td:contains('00000')").html("00000 Million");
					$("td:contains('And So')").html("And So It Goes");
					$("td:contains('Code')").html("Code Monkey");
					$("td:contains('Down In')").html("Down In<br>The Dumps");
					$("td:contains('Hymn Of')").html("Hymn Of Acxiom");
					$("td:contains('It-Splay')").html("It-Splay Out<br>The Back Way");
					$("td:contains('I Am Not')").html("I Am Not Yours");
					$("td:contains('I See')").html("I See The Light");
					$("td:contains('It-Splay')").html("It-Splay Out<br>The Back Way");
					$("td:contains('Run To')").html("Run To You");
					$("td:contains('Some')").html("Some Nights");
					$('td:contains("That\'s")').html("That\'s What<br>Friends Are For");
					$("td:contains('Video')").html("Video Killed<br>The Radio Star");
					$("td:contains('Walking')").html("Walking On<br>Broken Glass");
					//artist
					$("td:contains('Simon And')").html("Simon And Garfunkel");
					$("td:contains('Jonathon Coultan')").html("Jonathon Coultan");
					$("td:contains('Walk The')").html("Walk The Moon");
					$("td:contains('Randall')").html("Randall Stroope<br>Sara Teasdale");
					$("td:contains('Ariella')").html("Dana Gretton<br>Ariella Prosch Newman");
					$("td:contains('The Jungle')").html("The Jungle Book");
					$("td:contains('Annie')").html("Annie Lennox");
				}
				else {
					//song
					$("td:contains('00000')").html("00000 Million");
					$("td:contains('And So')").html("And So It Goes");
					$("td:contains('Code')").html("Code Monkey");
					$("td:contains('Down In')").html("Down In The Dumps");
					$("td:contains('Hymn Of')").html("Hymn Of Acxiom");
					$("td:contains('It-Splay')").html('It-Splay Out The Back Way');
					$("td:contains('I Am Not')").html("I Am Not Yours");
					$("td:contains('I See')").html("I See The Light");
					$("td:contains('It-Splay')").html('It-Splay Out The Back Way');
					$("td:contains('Run To')").html("Run To You");
					$("td:contains('Some')").html("Some Nights");
					$('td:contains("That\'s")').html("That\'s What Friends Are For");
					$("td:contains('Video')").html("Video Killed The Radio Star");
					$("td:contains('Walking')").html("Walking On Broken Glass");
					//artist
					$("td:contains('Simon And')").html("Simon And Garfunkel");
					$("td:contains('Jonathon Coultan')").html("Jonathon Coultan");
					$("td:contains('Walk The')").html("Walk The Moon");
					$("td:contains('Randall')").html("Randall Stroope<br>Sara Teasdale");
					$("td:contains('Ariella')").html("Dana Gretton<br>Ariella Prosch Newman");
					$("td:contains('The Jungle')").html("The Jungle Book");
					$("td:contains('Annie')").html("Annie Lennox");
				}
			}
			adjustForScrollBar();
		}
	})(jQuery);
	
	(function($) {
		pauseVideo = function() {
			$(".videoOverlay").each(function(){
				var iframe = document.getElementsByClassName("video")[0].contentWindow;
				func =  'pauseVideo';
				iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
			});
		}
	})(jQuery);
	
	
	adjustForWindowResize();
	pauseVideo();

	//this one prevents it from running before the content loads
	window.onload =(function(){
		adjustForWindowResize();
		pauseVideo();
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
	//backarrow hovers
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
	// play button hovering
	$(function() {
		$(".play")
			.mouseover(function() { 
				var src = $(this).attr("src").replace(".png", "-hover.png");
				$(this).attr("src", src);
			})
			.mouseout(function() {
				var src = $(this).attr("src").replace("-hover.png", ".png");
				$(this).attr("src", src);
			});
	});
	
	// show correct video with each play button and show video overlay
	$("td:contains('And So It Goes')").prev("td").click(function(){
		$('.video').attr('src', 'https://www.youtube.com/embed/MQWy2uD0KtA?enablejsapi=1&rel=0&autoplay=1');
		$('.video').fadeIn(400);
		$('.videoOverlay').fadeIn(400);
	});
	$("td:contains('Code Monkey')").prev("td").click(function(){
		$('.video').attr('src', 'https://www.youtube.com/embed/2dtPpa0jQgI?enablejsapi=1&rel=0&autoplay=1');
		$('.video').fadeIn(400);
		$('.videoOverlay').fadeIn(400);
	});
	$("td:contains('Hymn Of Acxiom')").prev("td").click(function(){
		$('.video').attr('src', 'https://www.youtube.com/embed/bsDnGWTM8KQ?enablejsapi=1&rel=0&autoplay=1');
		$('.video').fadeIn(400);
		$('.videoOverlay').fadeIn(400);
	});
	$("td:contains('I See The Light')").prev("td").click(function(){
		$('.video').attr('src', 'https://www.youtube.com/embed/pxbd2VLixGM?enablejsapi=1&rel=0&autoplay=1');
		$('.video').fadeIn(400);
		$('.videoOverlay').fadeIn(400);
	});
	$('td:contains("That\'s What Friends Are For")').prev("td").click(function(){
		$('.video').attr('src', 'https://www.youtube.com/embed/xcza4MVbkB0?enablejsapi=1&rel=0&autoplay=1');
		$('.video').fadeIn(400);
		$('.videoOverlay').fadeIn(400);
	});
	$("td:contains('Walking On Broken Glass')").prev("td").click(function(){
		$('.video').attr('src', 'https://www.youtube.com/embed/-qRhACg20Xc?enablejsapi=1&rel=0&autoplay=1');
		$('.video').fadeIn(400);
		$('.videoOverlay').fadeIn(400);
	});
	// hide video overlay and pause video
	$(".backArrow").click(function(){
		$('.video').fadeOut(400);
		$('.videoOverlay').fadeOut(400);
		pauseVideo();
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