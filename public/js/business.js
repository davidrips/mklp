$(document).ready(function(){


    $(".arrows").on('click', function(e){
        $(window).scrollTo('#tempContainer2', {duration:800, ease: Power4.easeInOut})

    })

      $("#row1signup").on("click", function(e){
        $('#signModal').modal();
    })



    $('#myForm').validator().on('submit', function (e) {
        if (e.isDefaultPrevented()) {
            console.log('gotstuck');
        // handle the invalid form...
        } else {
        // everything looks good!
        e.preventDefault();
            console.log("clicked");

            var first = $('#inputFirstName').val()
            var last = $('#inputLastName').val() 
            var email = $('#inputEmail').val()

            $.post('/signup', {
                first: $('#inputFirstName').val(),
                last: $('#inputLastName').val(), 
                email: $('#inputEmail').val()
            }, function(data){
                // console.log(data);
                console.log('herenow');
                $('#newModalTitle').text("Welcome to myKlovr " + first)
                    $('#newModal').modal();
                    }
            )
        }
    })

     var controller = new ScrollMagic.Controller({loglevel: 3});

     if(!Modernizr.touchevents){
          $("html").addClass('desktop')
            var vid = $("video").height();
            console.log(vid);
    

  
    $(window).scroll(function(){
      if($(document).scrollTop() > vid){//Here 200 may be not be exactly 200px
        $('video').css('display', 'none');
        console.log('hiding');
      }else{
        if($('video').css('display')=='none'){console.log('wasnt showing');
        $('video').css('display', 'initial');
        }
      }
    });
     }else{
      $(".slideOneArrow").css("display", "none")
     }


     
     $(".is-light").each(function(index, elem){

         var height = $(elem).height()
         var makeLight = new TweenMax.to($(".homeLogoPaths"), 0,{fill:'white'});
         var makeDark = new TweenMax.to($(".homeLogoPaths"), 0,{fill:'#3c3d65'})
         var isLight = new ScrollMagic.Scene({
             triggerElement:elem, triggerHook:"0.03"
         }).setTween(makeDark).addTo(controller)

     })

      $(".need-light").each(function(index, elem){
         var makeLight = new TweenMax.to($(".homeLogoPaths"), 0,{fill:'white'});
         var makeDark = new TweenMax.to($(".homeLogoPaths"), 0,{fill:'#3c3d65'})
         var isDark = new ScrollMagic.Scene({
             triggerElement:elem, triggerHook:"0.03"
         }).setTween(makeLight).addTo(controller);
     })


     var homeButton = $("#homeButton");
     homeButton.on('click', function(e){
        $(window).scrollTo('#slideOne', {duration:800, ease: Power4.easeInOut})
     })



    

    var keylink =$("#keysvg");
    var keyjig = new TimelineMax({repeat: -1, yoyo:true, repeateDelay:1})
    .add(TweenMax.fromTo(keylink, 0.7, {rotation:"-15"},{rotation:"15", ease: Back.easeOut.config(1.7)}))
  
    keylink.click(function(e){
        console.log("keyclicked");
        e.preventDefault();
        $(window).scrollTo(0, {duration:800, ease: Power4.easeInOut});
    })

    var home =$("#home")
    var about =$("#about")
    var end =$("#end")

    home.click(function(e){
        e.preventDefault();
         $(window).scrollTo(0, {duration:700, ease: Power4.easeInOut});
    })

    about.click(function(e){
        e.preventDefault();
         $(window).scrollTo("#section2", {duration:700, ease: Power4.easeInOut});
    })

    end.click(function(e){
        e.preventDefault();
         $(window).scrollTo("#section3", {duration:700, ease: Power4.easeInOut});
    })
    // var mhome = document.getElementById('#mhome')
    // $('#mhome').click(function(e){
    //       e.preventDefault();
    //     console.log('mhomeclicked');
    //     closeNav();
    //     $(window).scrollTo(0, {duration:800, ease: Power4.easeInOut});
    // })

    function toUser(userType){

        if(userType == 'uni'){
            $(window).scrollTo("#screen4container", {duration:800, ease: Power4.easeInOut});
        }else if(userType == 'company' ){
            $(window).scrollTo("#screen5container", {duration:800, ease: Power4.easeInOut});
        }else if(userType =='ads'){
            $(window).scrollTo("#screen6container", {duration:800, ease: Power4.easeInOut});
        }else if(userType =='exchange'){
            $(window).scrollTo("#screen7container", {duration:800, ease: Power4.easeInOut});
        }else if(userType =='hr'){
            $(window).scrollTo("#screen8container", {duration:800, ease: Power4.easeInOut});
        }else if(userType=='what'){
            $(window).scrollTo("#screen9container", {duration:800, ease: Power4.easeInOut});
        }

    }

   

      $(".imgcontainer1").click(function(){
         var userType = $(this).data('user')
         toUser(userType)
    })

       $(function(){
            $('.screen4').matchHeight();
            $('.bdytxt1').matchHeight();
            $('.bdytxt2').matchHeight();
            $('.bdytxt3').matchHeight();
        })

       $.fn.matchHeight._rows($('.bdytxt1'));

      $(".menuButs").click(function(e){
        var goWhere = $(this).data('where');
        console.log(goWhere);
        e.preventDefault();
        closeNav();
        toUser(goWhere)
      })

   

    var sidenavtrig = $("#sidenavtrig")
    var sidenavclose= $(".closebtn")

    sidenavtrig.click(function(e){
        e.preventDefault()
        openNav()
    })

    sidenavclose.click(function(e){
        e.preventDefault()
        closeNav()
    })


     function openNav() {

        if ($("html").hasClass("desktop")){
            document.getElementById("mySidenav").style.width = "30vw";

        }else {
           document.getElementById("mySidenav").style.width = "50vw"; 
        }
        
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";

    }


})