var dp = jQuery;
dp.noConflict();
dp(document).ready(function() {

    //SMOOTH SCROLL 
    dp('.sscroll').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        dp('html,body').animate({
            scrollTop: dp(this.hash).offset().top
        }, 1200);
    });

    //fix to big text slides
    if ((dp(window).height()>700)&&(dp(window).width()>992)){
        document.getElementById("home-slide").style.height=dp(window).height()+'px';
        var textPadding = (dp(window).height()-700)/2+'px';
        document.getElementById("slide-text-1").style.paddingTop=textPadding;
        document.getElementById("slide-text-2").style.paddingTop=textPadding;
    }

    //BIG SLIDE
    dp('#home-slide').superslides({
        animation: 'fade', // You can choose either fade or slide
        play: 0,
        pagination: false,
        inherit_height_from: "#home-slide"
    });
    //FIT VIDS
    if (dp.fn.fitVids) {
        dp(".fitvids").fitVids();
    }
    //SERVICES
    if (dp(window).width()>992) {
        dp('.desc-conteiner').each(
                function() {
                    dp(this)[0].style.height="77px";
                }
            );



    dp('.desc-conteiner').hover(

        function() {
            dp(this)[0].style.height=dp(this)[0].children[0].offsetHeight+'px';
            dp(this)[0].children[1].style.opacity=0;
        },
        function() {
            dp(this)[0].style.height='77px';
            dp(this)[0].children[1].style.opacity=1;
        }
        );

    dp('.services-item').click(
        function() {
            var decs=dp(this)[0].children[1].children[0].children[1];
            if (decs.style.height!="77px") 
            {
                decs.style.height="77px"; 
                decs.children[1].style.opacity=1;   
            }
            
            else{
                decs.style.height
                =decs.children[0].offsetHeight+'px';
                decs.children[1].style.opacity=0; 
            }

        }
        );

    }
    else {
        dp('.desc-conteiner').each(
                function() {
                    dp(this)[0].style.height="0px";
                }
            );

    
        dp('.services-item').click(
            function() {
                var decs=dp(this)[0].children[1].children[0].children[1];
                var triangle=dp(this)[0].children[1].children[0].children[0].children[0];
                if (decs.style.height!="0px") 
                {
                    decs.style.height=0; 
                    triangle.style.opacity=1;   
                }
                
                else{
                    decs.style.height=decs.children[0].offsetHeight+'px';
                    triangle.style.opacity=0;   

                }

            }
            );
    }

    //product-subject buttons
    dp('.product-subject').click(
            function() {
                var product=dp(this)[0].offsetParent.offsetParent.children[0].children[0].innerHTML;
                dp('#subject').val("Interest in "+product);
            }
        );

    //PORTFOLIO
    // dp(".filterButton").click(
    //     function () {
    //         var filter=dp(this).data("filter");
    //         if (filter=="All") {
    //             dp(".product-item-conteiner").css("display", "inline-block");
    //         }
    //         else {
    //             dp(".product-item-conteiner").css("display", "none");
    //             dp("."+filter).css("display", "inline-block");
    //         }
    //         dp(".filterButton").removeClass("active");
    //         dp(this).addClass("active");
    //     }
    //     );

    dp('.portfolioContainer').mixitup({
        filterSelector: '.filter a',
        targetSelector: '.portfolio-item',
        effects: ['fade', 'scale']
    });

    //fix to margin-top in portfolio items




    //QUOTE SLIDE
    dp("#quote-slider").sudoSlider({
        customLink: 'a.quoteLink',
        speed: 3000,
        prevNext: true,
        responsive: true,
        prevHtml: '<a href="#" class="quote-left-indicator"><i class="fa fa-angle-left"></i></a>',
        nextHtml: '<a href="#" class="quote-right-indicator"><i class="fa fa-angle-right"></i></a>',
        // useCSS: true,
        continuous: true,
        effect: "slide",
        updateBefore: true,
        auto: true,
        pause: 10000
    });

    var lats = dp("#map").attr('data-lat');
    var lngs = dp("#map").attr('data-lng');
    var data_address = dp("#map").attr('data-address');
    var color = dp("#map").attr('data-color');
    var saturation = 100;
    dp("#map").gmap3({
        map: {
            options: {
                center: [lats, lngs],
                zoom: 3,
                mapTypeId: "style1",
                navigationControl: 0,
                scrollwheel: false,
                zoomControl: 0,
                disableDefaultUI: true,
                streetViewControl: 0,
                draggable: 1,
            }
        },
        styledmaptype: {
            id: "style1",
            options: {
                name: "Style 1"
            },
            styles: [{
                featureType: "landscape",
                stylers: [{
                    hue: "#000"
                }, {
                    saturation: -100
                }, {
                    lightness: 40
                }, {
                    gamma: 1
                }]
            }, {
                featureType: "road.highway",
                stylers: [{
                    hue: color
                }, {
                    saturation: saturation
                }, {
                    lightness: 20
                }, {
                    gamma: 1
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.arterial",
                stylers: [{
                    hue: color
                }, {
                    saturation: saturation
                }, {
                    lightness: 20
                }, {
                    gamma: 1
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road.local",
                stylers: [{
                    hue: color
                }, {
                    saturation: saturation
                }, {
                    lightness: 50
                }, {
                    gamma: 1
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "water",
                stylers: [{
                    hue: "#000"
                }, {
                    saturation: -100
                }, {
                    lightness: 15
                }, {
                    gamma: 1
                }]
            }, {
                featureType: "poi",
                stylers: [{
                    hue: "#000"
                }, {
                    saturation: -100
                }, {
                    lightness: 25
                }, {
                    gamma: 1
                }, {
                    visibility: "simplified"
                }]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [{
                    visibility: "off"
                }]
            }]
        },
        marker: {
            values: [{
                latLng: [51.3026, 0.0739],
                tag: "l" ,
                data: "London Office</br>Gower Street, WC1E 6BT</br> United Kingdom",
                options: {
                    icon: "images/map-marker.png"
                }
            },

                {                
                latLng: [55.4506, 37.3704],
                data: "Moscow Office</br> 151 Leninskiy Prospect, 125319</br> Russia",
                options: {
                    icon: "images/map-marker.png"
                }
            },

            {                
                latLng: [40.0635, -88.1215],
                data: "Urbana Office</br> 711 West Elm Street, 61801</br> United States",
                options: {
                    icon: "images/map-marker.png"
                }
            }

            ],
            options: {
                draggable: false
            },
            events: {
                click: function(marker, event, context) {
                    var map = dp(this).gmap3("get"),
                        infowindow = dp(this).gmap3({
                            get: {
                                name: "infowindow"
                            }
                        });
                    if (infowindow) {
                        infowindow.open(map, marker);
                        infowindow.setContent(context.data);
                    } else {
                        dp(this).gmap3({
                            infowindow: {
                                anchor: marker,
                                options: {
                                    content: context.data
                                }
                            }
                        });
                    }
                }

            }
        }
    });

    dp("#map").gmap3({
      get: {
        name:"marker",
        tag:"l",
        callback: function(marker){
          var map = dp(this).gmap3("get"),
              infowindow = dp(this).gmap3({
                  get: {
                      name: "infowindow"
                  }
              });
          if (infowindow) {
              infowindow.open(map, marker);
              infowindow.setContent(context.data);
          } else {
              dp(this).gmap3({
                  infowindow: {
                      anchor: marker,
                      options: {
                          content: "London Office</br>Gower Street, WC1E 6BT</br> United Kingdom"
                      }
                  }
              });
          }
        }
      }
    });
    
    
    // TOOTLTIP
    dp("[data-toggle='tooltip']").tooltip();
    //  Responsive layout, resizing the items   
    if (dp('.client-slider').length > 0) {
        dp('.client-slider').carouFredSel({
            responsive: true,
            width: '100%',
            scroll: 1,
            items: {
                width: 116,
                //  height: '30%',  //  optionally resize item-height
                visible: {
                    min: 1,
                    max: 5
                }
            }
        });
    }

    //BACK TO TOP
    dp("#backtotop").backToTop();
    //CALL TO ACTION
    /*
    var bg_img = dp(".call-ta").attr('data-background');
    dp(".call-ta").backstretch(bg_img);
    */
    //JQUERY Mobile Devices Responsive
    dp('body').mobileResponsive();

    //Bootstrap Tooltip
    dp('a[data-toggle="tooltip"]').tooltip();
    //NIVOLightbox
    if (dp.fn.nivoLightbox) {
        dp('.popup').nivoLightbox({
            effect: 'fall'
        });
    }
});
dp(window).load(function() {
    dp('#loader').fadeOut(1000, "linear");

        dp(".portfolio-item").each(
        function() {
            var margin=(dp(this)[0].clientHeight-dp(this)[0].children[0].children[0].clientHeight-dp(this)[0].children[0].children[1].clientHeight)/2;
            if (margin>0) {
                dp(this)[0].children[0].children[0].style.marginTop=margin+"px";
            }
        }
        );

        if (dp(window).width()>992) {
            dp(".portfolio-item").hover(
            function() {
                var projectHover=dp(this)[0].children[0];
                var invisibleDefault=projectHover.children[1];

                invisibleDefault.style.height=invisibleDefault.children[0].offsetHeight+'px';
                console.log(invisibleDefault.children[0].offsetHeight);
                
                var margin=(projectHover.offsetHeight-projectHover.children[0].offsetHeight-invisibleDefault.children[0].offsetHeight-19)/2;
                if (margin>0) {
                    dp(this)[0].children[0].children[0].style.marginTop=margin+"px";
                }
            },
            function() {
                dp(this)[0].children[0].children[1].style.height="0px";

                var margin=(dp(this)[0].clientHeight-dp(this)[0].children[0].children[0].clientHeight)/2;
                if (margin>0) {
                    dp(this)[0].children[0].children[0].style.marginTop=margin+"px";
                }

            }
            );
        }

});
