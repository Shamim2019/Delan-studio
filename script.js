 
//   $(document).ready(function(){
//      $("#development-image").slideDown('1500').hide('1000');
//      $("#development").show('1500');
//  });
//  $("#development").click(function(){
//   $ ("#development").sideUp('1500');
//    $ ("#development-image").slideDown('1500');
//   });


$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-text").toggle();
      $("#development-image").toggle();
    });
    $("#development-text").click(function(){
      $("#development-image").toggle();
      $("#development-text").toggle();
    });
  });


  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-text").toggle();
      $("#design-image").toggle();
    });
    $("#design-text").click(function(){
      $("#design-image").toggle();
      $("#design-text").toggle();
    });
  });


  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-text").toggle();
      $("#product-image").toggle();
    });
    $("#product-text").click(function(){
      $("#product-image").toggle();
      $("#product-text").toggle();
    });
  });
//   $(document).ready(function(){
//     $("#work1").mouseover(function(){
//       $("#overlay").show();
//     }).mouseout(function(){
//       $("#overlay").hide();
//     });
//   });
//   $(document).ready(function(){
//     $("#work2").mouseover(function(){
//       $("#overlay2").show();
//     }).mouseout(function(){
//       $("#overlay2").hide();
//     });
//   });
//   $(document).ready(function(){
//     $("#work3").mouseover(function(){
//       $("#overlay3").show();
//     }).mouseout(function(){
//       $("#overlay3").hide();
//     });
//   });
//   $(document).ready(function(){
//     $("#work4").mouseover(function(){
//       $("#overlay4").show();
//     }).mouseout(function(){
//       $("#overlay4").hide();
//     });
//   });
//   $(document).ready(function(){
//     $("#work5").mouseover(function(){
//       $("#overlay5").show();
//     }).mouseout(function(){
//       $("#overlay5").hide();
//     });
//     $("#work6").mouseover(function(){
//       $("#overlay6").show();
//     }).mouseout(function(){
//       $("#overlay6").hide();
//     });
//     $("#work7").mouseover(function(){
//       $("#overlay7").show();
//     }).mouseout(function(){
//       $("#overlay7").hide();
//     });
//     $("#work8").mouseover(function(){
//       $("#overlay8").show();
//     }).mouseout(function(){
//       $("#overlay8").hide();
//     });
//   });
  
  $(document).ready(function(){
    $("form#form34A").submit(function(event){
      event.preventDefault();
      // event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
      
    });
  })