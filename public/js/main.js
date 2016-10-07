$(document).ready(function(){

    // var logoW = $("#navLogo").width();
    // $("#navLogo").css({'height':logoW})\
// $('#myForm').validator()


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
})





    // $('#myForm').on('submit', function(e){
    //     // e.preventDefault();
    //     console.log("clicked");

    //     var first = $('#inputFirstName').val()
    //     var last = $('#inputLastName').val() 
    //     var email = $('#inputEmail').val()

     

    //     $.post('/signup', {
    //         first: $('#inputFirstName').val(),
    //         last: $('#inputLastName').val(), 
    //         email: $('#inputEmail').val()
    //     }, function(data){
    //         // console.log(data);
    //         $('#newModalTitle').text("Welcome to myKlovr " + first)
    //             $('#newModal').modal();
    //         // if (data.have == true){
    //         //     console.log("this");
    //         //     $('#newModal').modal();

    //         // }else{console.log('that')
    //         //     $('#newModalTitle').text("Welcome to myKlovr " + first)
    //         //     $('#newModal').modal();
    //         // }
           



    //     });






    // })














    // $("#mainNav").hide();

    // // fade in .navbar
    // $(function () {
    //     $(window).scroll(function () {

    //              // set distance user needs to scroll before we start fadeIn
    //         if ($(this).scrollTop() > 100) {
    //             $('.navbar').fadeIn();
    //         } else {
    //             $('.navbar').fadeOut();
    //         }
    //     });
    // });





    // $("#myBtn").click(function(){
    //     $("#myModal").modal();
    // });
    // $("#myBtnBusiness").click(function(){
    //     $("#myBusiness").modal();
    // });
    // $("#myBtnSchools").click(function(){
    //     $("#mySchools").modal();
    // });
    //   $("#myBtnEducators").click(function(){
    //     $("#myEducators").modal();
    // });







// });