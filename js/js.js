
// decstop menu overly 
if(window.matchMedia("(min-width: 1110px)").matches){
  if(document.querySelector('.header .arr')){
    let arrs = document.querySelectorAll('.header .arr'),
        overly = document.querySelector('.overly');

        arrs.forEach(function(el){
          el.addEventListener('mouseover', function(){
            overly.style.display = 'block';
          });
          el.addEventListener('mouseout', function(){
            overly.style.display = 'none';
          });
        });
  }
}
// faq
if(document.querySelector('.faq')){
	let faq = document.querySelectorAll('.faq__item');
		

        faq.forEach(function(el){
            let faqBtn = el.querySelector('.faq-heading');

            faqBtn.addEventListener('click', function(){
                if(el.classList.contains('open')){
                    el.classList.remove('open');
                    this.setAttribute('aria-expanded', false);
                } else {
                    el.classList.add('open');
                    this.setAttribute('aria-expanded', true);
                }
            });
        });
}
/* footer */
if(window.matchMedia('(max-width: 768px)').matches){
	if(document.querySelector('.footer-list')){
		let footerList = document.querySelectorAll('.footer-list');

			footerList.forEach(function(el){
				let listBtn = el.querySelector('.heading'),
					listBody = el.querySelector('.menu-list');


					listBtn.addEventListener('click', function(){
						if(el.classList.contains('open') === true){
					        	el.classList.remove('open');
					  		  	this.setAttribute('aria-expanded', false);
					    	} else {
					        	el.classList.add('open');
					    		this.setAttribute('aria-expanded', true);
					    	}
					});
			});
	}
}
// jquery validator 
// form subscr
$(function () {
  $('.form-subscr').submit(function (e) {
    $('div.'+$(this).find('button[type="submit"]').attr("rel")).fadeIn(500);
    $('.success').show();
    $('.popup-subscr-body').hide();
    e.preventDefault()
  });
});

// form subscr
$(function () {
  $('.subscribe-form').submit(function (e) {
    $('div.'+$(this).find('button[type="submit"]').attr("rel")).fadeIn(500);
    $('.popup-success').show();
    $('.ovely').show();
    $('body').addClass('body_scroll');
    $('.overly').show();
    e.preventDefault()
  });
});

// contact
$(function () {
  $('.contact-form').submit(function (e) {
    $('div.'+$(this).find('button[type="submit"]').attr("rel")).fadeIn(500);
    $('.popup-success').show();
    $('.success').show();
    $('.overly').show();
    e.preventDefault()
  });
});

// contact
$(function () {
  $('.consultation-form').submit(function (e) {
    $('div.'+$(this).find('button[type="submit"]').attr("rel")).fadeIn(500);
    $('.popup-success').show();
    $('.success').show();
    $('.overly').show();
    $('body').addClass('body_scroll');
    e.preventDefault()
  });
});
// tablecontent
if(document.querySelector('.like')){
	let like = document.querySelector('.like'),
        likeBtn = like.querySelector('.like-btn');

		likeBtn.addEventListener('click', function(){
			if(like.classList.contains('active')){
        		like.classList.remove('active');
  		  		this.setAttribute('aria-expanded', false);
    		} else {
        		like.classList.add('active');
    			this.setAttribute('aria-expanded', true);
    		}
		});
}
// navigation mob
// menu + search close
if(document.querySelector('.hamburger')){
	let header =  document.querySelector('.header'),
      btnMenu = header.querySelector('.hamburger'),
  		menuMob = document.querySelector('.navigation_mob'),
      links = menuMob.querySelectorAll('a'),
      searchMob = document.querySelector('.mob-search'),
      searchBtn = document.querySelector('.search-btn-mob'),
  		body = document.body;

  	btnMenu.addEventListener('click', function(){
  		if(this.classList.contains('is-active') === true){
        header.classList.remove('header-mob');
  		  btnMenu.classList.remove('is-active');
  		  menuMob.classList.remove('open');
  		  body.classList.remove('body_scroll');
        searchMob.classList.remove('open');
        searchBtn.classList.remove('hidden');
        searchBtn.setAttribute('aria-expanded', false);
  		  this.setAttribute('aria-expanded', false);
    	} else {
        header.classList.add('header-mob');
    		btnMenu.classList.add('is-active');
    		menuMob.classList.add('open');
    		body.classList.add('body_scroll');
    		this.setAttribute('aria-expanded', true);
    	}
  	})

    links.forEach(function(el){
      el.addEventListener('click', function(){
        header.classList.remove('header-mob');
        btnMenu.classList.remove('is-active');
        menuMob.classList.remove('open');
        body.classList.remove('body_scroll');
      });
    });
}

// click navigation
if(document.querySelector('.hamburger')){
  let btnMenu = document.querySelector('.hamburger'),
      navMob = document.querySelector('.navigation_mob'),
      mobarr = navMob.querySelectorAll('.arr'),
      menu = navMob.querySelector('.menu'),
      body = document.body;

      mobarr.forEach(function(el){
        let btnOpenDownmenu = el.querySelector('.downmenu-open'),
            btnCloseDownmenu = el.querySelector('.downmenu-close'),
            menuDownmenu = el.querySelector('.downmenu');

            btnOpenDownmenu.addEventListener('click', function(){
              menuDownmenu.classList.add('open');
              this.setAttribute('aria-expanded', true);
            });

            btnCloseDownmenu.addEventListener('click', function(){
              menuDownmenu.classList.remove('open');
              btnOpenDownmenu.setAttribute('aria-expanded', false);
            });
      });
}
// popup

// popup open
if(document.querySelector('.subscribe-btn')){
	let subscribeBtn = document.querySelectorAll('.subscribe-btn'),
		popup = document.querySelector('.popup-subscr'),
		close = popup.querySelector('.close'),
		overly = document.querySelector('.overly'),
		body = document.body;

		subscribeBtn.forEach(function(el){

			el.addEventListener('click', function(){
				popup.style.display = 'block';
				body.classList.add('body_scroll');
				overly.style.display = 'block';
				this.setAttribute('aria-expanded', true);
			});

			overly.addEventListener('click', function(){
				popup.style.display = 'none';
				body.classList.remove('body_scroll');
				this.style.display = 'none';
				el.setAttribute('aria-expanded', false);
			});


			close.addEventListener('click', function(){
				popup.style.display = 'none';
				body.classList.remove('body_scroll');
				overly.style.display = 'none';
				el.setAttribute('aria-expanded', false);
			});
		});

		
}

// popup-subscr
if(document.querySelector('.popup-subscr')){

	function scrollEvent() {
		let heightScreen = document.documentElement.clientHeight / 1.5,
			subscr = document.querySelector('.popup-subscr'),
			overly  = document.querySelector('.overly'),
			body = document.body;

		if(heightScreen <= window.pageYOffset){
			subscr.classList.add('open');
			overly.style.display = 'block';
			body.classList.add('body_scroll');
		} 

	}
	
	$(window).on('scroll',scrollEvent);
	

	function Subscr (){
		let subscr = document.querySelector('.popup-subscr'),
			overly  = document.querySelector('.overly'),
			body = document.body;

			subscr.classList.add('open');
			overly.style.display = 'block';
			body.classList.add('body_scroll');
			$(window).off('scroll',scrollEvent);
	}

	const timer = setTimeout(Subscr, 5000);


	let subscr = document.querySelector('.popup-subscr'),
		close = subscr.querySelector('.close'),
		overly  = document.querySelector('.overly'),
		body = document.body;

		close.addEventListener('click', function(){
			subscr.classList.remove('open');
			overly.style.display = 'none';
			body.classList.remove('body_scroll');
			$(window).off('scroll',scrollEvent);
			clearTimeout(timer);
		});

		overly.addEventListener('click', function(){
			subscr.classList.remove('open');
			this.style.display = 'none';
			body.classList.remove('body_scroll');
			$(window).off('scroll',scrollEvent);
			clearTimeout(timer);
		});
}

// popup form contact
if(document.querySelector('.contact-form')){
	let popupSuccess = document.querySelector('.popup-success'),
		popupBtn = popupSuccess.querySelector('.close'),
		body = document.body,
		overly = document.querySelector('.overly');

		popupBtn.addEventListener('click', function(){
			popupSuccess.style.display = 'none';
			overly.style.display = 'none';
			body.classList.remove('body_scroll');
		});

		overly.addEventListener('click', function(){
			popupSuccess.style.display = 'none';
			this.style.display = 'none';
			body.classList.remove('body_scroll');
		});
}

// popup success
if(document.querySelector('.subscribe-form')){
	let popupSuccess = document.querySelector('.popup-success'),
		popupBtn = popupSuccess.querySelector('.close'),
		body = document.body,
		overly = document.querySelector('.overly');

		popupBtn.addEventListener('click', function(){
			popupSuccess.style.display = 'none';
			overly.style.display = 'none';
			body.classList.remove('body_scroll');
		});

		overly.addEventListener('click', function(){
			popupSuccess.style.display = 'none';
			this.style.display = 'none';
			body.classList.remove('body_scroll');
		});
}
// scroll up
if(document.querySelector('.btn_scroll')){
  let scrollBtn = document.querySelector('.btn_scroll');

  function scrollUp(){
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  window.addEventListener('scroll', function(){
    if(scrollUp() >= 100){
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }

  });

  scrollBtn.addEventListener('click', function scrolltoTop(){
    window.scrollBy(0,-150);
    if(scrollUp() > 0){
      requestAnimationFrame(scrolltoTop);
    } 
  });
}
/* search */
/* search desktop */
if(window.matchMedia("(min-width: 1110px)").matches){
	if(document.querySelector('.search-header .search-btn')){
		let searchDesctopBtn = document.querySelector('.search-header .search-btn'),
			searchForm = document.querySelector('.search-header .search-form');

			searchDesctopBtn.addEventListener('click', function(){
				if(searchDesctopBtn.classList.contains('close') === true){
			        this.classList.remove('close');
					this.setAttribute('aria-expanded', false);
					searchForm.classList.remove('open');
			    } else {
			        this.classList.add('close');
					this.setAttribute('aria-expanded', true);
					searchForm.classList.add('open');
			    }
			});
	}
}

/* search mob */
if(document.querySelector('.search-btn-mob')){
	let searchBtn = document.querySelector('.search-btn-mob'),
		searchMob = document.querySelector('.mob-search'),
		header =  document.querySelector('.header'),
		hamburger = header.querySelector('.hamburger'),
		body = document.body;

		searchBtn.addEventListener('click', function(){
			header.classList.add('header-mob');
		  	hamburger.classList.add('is-active');
		  	searchMob.classList.add('open');
		  	body.classList.add('body_scroll');
		  	this.classList.add('hidden');
		  	this.setAttribute('aria-expanded', true);
		  	hamburger.setAttribute('aria-expanded', true);
	  	})
}

/* search block */
if(document.querySelector('.mob-search')){
	let search = document.querySelector('.mob-search'),
		searchBlock = search.querySelector('.search-block')
		input = search.querySelector('input');

		input.addEventListener('input', function(){
			searchBlock.style.display = 'block';
		})

		input.addEventListener('blur', function(){
			searchBlock.style.display = 'none';
		})

}
// slider promo
$('.promo-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  dots: true,
});

// summary
$('.summary-slider').slick({
  dots: false,
  arrows:false,
  infinite: false,
  slidesToShow: 1,
  variableWidth: true,
});
// source
if(document.querySelector('.source-block')){
	let source = document.querySelector('.source-block'),
		sourceBtn = source.querySelector('.source-heading');

		sourceBtn.addEventListener('click', function(){
			if(source.classList.contains('open')){
        		source.classList.remove('open');
  		  		this.setAttribute('aria-expanded', false);
    		} else {
        		source.classList.add('open');
    			this.setAttribute('aria-expanded', true);
    		}
		});
}
// summary
if(document.querySelector('.summary')){
	let summary = document.querySelectorAll('.summary');

		summary.forEach(function(item){
			let summaryBtn = item.querySelectorAll('.summary .summary-btn'),
				summaryContainer = item.querySelectorAll('.summary .summary-container');

				summaryBtn.forEach( function(el, index) {
				
				el.addEventListener('click', function(e){
					summaryBtn.forEach(function(el, i){
						el.classList.remove('active');
						summaryContainer[i].classList.remove('active');
						el.setAttribute('aria-expanded', false);
					});
					el.classList.add('active');
					summaryContainer[index].classList.add('active');
					el.setAttribute('aria-expanded', true);
				});

			});
		
		});
}
// tablecontent
if(document.querySelector('.tablecontent')){
	let tablecontent = document.querySelector('.tablecontent'),
		tablecontentBtn = tablecontent.querySelector('.heading');

		tablecontentBtn.addEventListener('click', function(){
			if(tablecontent.classList.contains('open')){
        		tablecontent.classList.remove('open');
  		  		this.setAttribute('aria-expanded', false);
    		} else {
        		tablecontent.classList.add('open');
    			this.setAttribute('aria-expanded', true);
    		}
		});
}
/* text */
if(document.querySelector('.text-block .text_hidden')){
	let textBlock = document.querySelectorAll('.text-block');

		textBlock.forEach(function(el){
			if(el.querySelector('.text_hidden') && el.querySelector('.btn-more')){
				let textBtn = el.querySelector('.btn-more');

					textBtn.addEventListener('click', function(){
						if(el.classList.contains('open')){
							el.classList.remove('open');
							this.setAttribute('aria-expanded', false);
							this.innerHTML = 'Читати більше...';
						} else {
							el.classList.add('open');
							this.setAttribute('aria-expanded', true);
							this.innerHTML = 'Читати меньше...';
						}
					});
			}
		});
}
// video open
if(document.querySelector('.video')){
    let video = document.querySelectorAll('.video');

        video.forEach(function(el){
        	let videoOpen = el.querySelector('.btn-video'),
        		player = el.querySelector('.player'),
        		playerSrc = player.src;

        		videoOpen.addEventListener('click', function(){
		            el.classList.add('open');
		            player.src = playerSrc + '?autoplay=1';
		        });
        });
}
//# sourceMappingURL=../sourcemaps/js.js.map
