
$(document).ready(function() {
      setTimeout( function(){ 
      $("#carousel-rooms").owlCarousel({
		  
		 
    
  
     
          navigation : false, // Show next and prev buttons
          slideSpeed : 500,
          paginationSpeed : 400,
		  items : 3,
		  paginationNumbers: false,
		  autoPlay: false,
		  pagination: false,
		  navigation: true,
		  navigationText: ['&#8249;','&#8250;'],
		  lazyLoad : true
		  
		 
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
      });
	  
	  }  , 4000 );
     
    });


$(function(){
 var shrinkHeader = 100;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
      if ( scroll >= shrinkHeader ) {
    		$('.mainnav').addClass('shrink');
      }
      else {
     	$('.mainnav').removeClass('shrink');
     }
  });
	function getCurrentScroll() {
  	return window.pageYOffset;
  }
});

// $(window).on('load resize', function () { 
//	var width = $(window).width(); 
//	 if (width >  768){  
//	    $('.special-contaienr-hover').hover(function () {
//			$(this).animate({
//					opacity: "1"
//			});
//			$(this).parent('.special-box').find('.special-content1').animate({
//					opacity: "0"
//			});
//		}, function () {
//			$(this).animate({
//					opacity: "0"
//			});
//			$(this).parent('.special-box').find('.special-content1').animate({
//					opacity: "1"
//					});
//			});
//
//    }
//	});
  

$(document).ready(function() {
	$('.anchorlink').click(function(){
			$('html, body').animate({
					scrollTop: $( $(this).attr('href') ).offset().top
			}, 500);
			return false;
	});
	
});
 

 $(function() {
    $( "#input_26" ).datepicker();
    $( "#input_27" ).datepicker();
  });
/*-- gallery page nav--*/
 
function new_function()
{
	$(".gallery-nav-wrap h1 a").unbind('click');
	 $(".gallery-nav-wrap h1 a").click(function(){ 
	 	  $("ul.gallery-list").toggle(); 
		 $(".gallery-nav-wrap h1").toggleClass("plus-minus-toggle");
   }); 
	$("ul.gallery-list").find("a").unbind('click');
	 $("ul.gallery-list").find("a").click(function(e) {
	  $(".gallery-nav-wrap .gallery-list").hide(); 
	  $(".gallery-nav-wrap h1").removeClass("plus-minus-toggle");
    	var text = $(this).html();
		var heding = $(".gallery-nav-wrap h1").html(); 
		var text1 = '<a href=#'+text+'>'+text+'</a>'; 
		$(".gallery-nav-wrap h1").html(text1);
		$(".gallery-list").append('<li>'+heding+'<li>');
		new_function();
		console.log($(this).parent("li"));
		$(this).parent("li").remove();
  });
}
$(document).ready(function(e) {
 new_function();
});

/*-- google map --*/ 
if ($("#map-canvas").length > 0){
var locations = [{  
    "title": "La Sandwicherie",
    "phone": "305.532.8934",
    "directions": "https://www.google.co.in/maps/dir/229+14th+St,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7836044,-80.1343095,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b490295b500b:0x7f4deacd7e1cada9!2m2!1d-80.1314595!2d25.7854702!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
	 	"Latitude": "25.7854702",
    "Longitude": " -80.1336482",
    "Categorie": "1",
    "Count": "1" 

}, { 
   "title": "Puerto Sagua",
    "phone": "305.673.1115",
    "directions": "https://www.google.co.in/maps/dir/700+Collins+Ave,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7795329,-80.1343524,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b48d4f5d074b:0x87898cf728b93503!2m2!1d-80.1326582!2d25.7770796!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
	 	"Latitude": "25.7770796",
    "Longitude": " -80.1348469",
    "Categorie": "1",
    "Count": "2" 
}, { 
   "title": "Go go",
    "phone": "305.673.3137",
    "directions": "https://www.google.co.in/maps/dir/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/926+Alton+Rd,+Miami+Beach,+FL+33139,+USA/@25.779971,-80.1412135,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!1m5!1m1!1s0x88d9b48a59045ed3:0x6570c009896ef1e!2m2!1d-80.1409631!2d25.7798129!3e2?hl=en",
	 	"Latitude": "25.7798129",
    "Longitude": " -80.1431518", 
    "Categorie": "1",
    "Count": "3" 
}, 
 { 
   "title": "DIRT",
    "phone": "305.239.3000",
    "directions": "https://www.google.co.in/maps/dir/232+5th+St,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7780167,-80.1373747,16z/data=!4m14!4m13!1m5!1m1!1s0x88d9b4f2ef85c10f:0x27d3c73b80789c4b!2m2!1d-80.1337398!2d25.7742647!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7742647",
    "Longitude": " -80.1359285", 
    "Categorie": "1",
    "Count": "4" 
},
{ 
   "title": "Lucali",
    "phone": "305.695.4441",
    "directions": "https://www.google.co.in/maps/dir/1930+Bay+Rd,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7878587,-80.1470738,15z/data=!4m14!4m13!1m5!1m1!1s0x88d9b47e0c391d17:0xf929639f73394f3!2m2!1d-80.1439497!2d25.7951986!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7951986",
    "Longitude": " -80.1461384",  
    "Categorie": "1",
    "Count": "5" 
},
{ 
   "title": "Yardbird - Southern Table & Bar", 
    "phone": "305.538.5220",
    "directions": "https://www.google.co.in/maps/dir/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/1600+Lenox+Ave,+Miami+Beach,+FL+33139,+USA/@25.784883,-80.1408353,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!1m5!1m1!1s0x88d9b487d3a43163:0x8adbfcc3d4c055e6!2m2!1d-80.1402274!2d25.7891106!3e2?hl=en",
   	"Latitude": "25.7891106",
    "Longitude": " -80.1424161",  
    "Categorie": "1",
    "Count": "6" 
},
{ 
   "title": "The Forge", 
    "phone": "305.538.8533", 
    "directions": "https://www.google.co.in/maps/dir/432+W+41st+St,+Miami+Beach,+FL+33140,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7977672,-80.1488251,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b36f044b26b9:0x48f34796023bd585!2m2!1d-80.1284529!2d25.813606!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.813606",
    "Longitude": " -80.1306416",  
    "Categorie": "1",
    "Count": "7" 
},
{ 
   "title": "Joe’s Stone Crab", 
    "phone": "305.673.0365", 
    "directions": "https://www.google.co.in/maps/dir/11+Washington+Ave,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.77543,-80.1421504,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b4f10e788681:0x4c1e1449c2361ffc!2m2!1d-80.1350386!2d25.7688543!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7688543",
    "Longitude": " -80.1372273",  
    "Categorie": "1", 
    "Count": "8" 
},
{ 
   "title": "Red, the Steakhouse", 
    "phone": "305.534.3688", 
    "directions": "https://www.google.co.in/maps/dir/119+Washington+Ave,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7762057,-80.1419963,15z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b4f17ef07d0f:0xa3dbdeba78eaa6d!2m2!1d-80.1347027!2d25.7704455!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7704455",
    "Longitude": " -80.1368914",  
    "Categorie": "1", 
    "Count": "9" 
}, 
{ 
   "title": "Clandestino", 
    "phone": "305.397.8946", 
    "directions": "https://www.google.co.in/maps/dir/758+Washington+Ave,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7795211,-80.1352081,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b48d16eeeceb:0xe58dee5e3cd8ace5!2m2!1d-80.1335858!2d25.7781492!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7781492",
    "Longitude": " -80.1357745",  
    "Categorie": "2", 
    "Count": "1" 
}, 
{ 
   "title": "Lost weekend", 
    "phone": "305.672.1707",  
    "directions": "https://www.google.co.in/maps/dir/218+Espa%C3%B1ola+Way,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7843537,-80.1341384,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b49019e72979:0x9a5068acbf46bd24!2m2!1d-80.1310181!2d25.7868022!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7868022",
    "Longitude": " -80.1332068",  
    "Categorie": "2", 
    "Count": "2" 
}, 
{ 
   "title": "The Abbey", 
    "phone": "305.538.8110",  
    "directions": "https://www.google.co.in/maps/dir/1115+16th+St,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7843537,-80.1341384,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b487d3a39a8b:0x250207c698705b6c!2m2!1d-80.1402976!2d25.7890893!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7890893",
    "Longitude": " -80.1424863",  
    "Categorie": "2", 
    "Count": "3" 
}, 
{ 
   "title": "Sweet Liberty",  
    "phone": "305.763.8217",  
    "directions": "https://www.google.co.in/maps/dir/237+20th+St,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7843537,-80.1341384,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b49ce5a8f1d3:0x42f5449eb9476801!2m2!1d-80.1297869!2d25.796092!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.796092",
    "Longitude": " -80.1319756",  
    "Categorie": "2", 
    "Count": "4"  
},  
{ 
   "title": "Radio",  
    "phone": "305.397.8382",  
    "directions": "https://www.google.co.in/maps/dir/814+1st+St,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7843537,-80.1341384,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b4f146a2a4f3:0xdac764ac25066d67!2m2!1d-80.136314!2d25.769637!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.769637",
    "Longitude": " -80.1385027",  
    "Categorie": "2", 
    "Count": "5"  
},  
{ 
   "title": "Repour",  
    "phone": "305.913.1000",  
    "directions": "https://www.google.co.in/maps/dir/1650+James+Ave,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7783682,-80.1339785,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b49b28451fed:0xc1236dcceb570201!2m2!1d-80.1311059!2d25.7909289!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7909289",
    "Longitude": " -80.1332946",  
    "Categorie": "2", 
    "Count": "6"   
},  
{ 
   "title": "Bodega",  
    "phone": "305.704.2145",  
    "directions": "https://www.google.co.in/maps/dir/1220+16th+St,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7783682,-80.1339785,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b4880a7c63db:0xbba0413ed68d655c!2m2!1d-80.1416061!2d25.7886732!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7886732",
    "Longitude": " -80.1437948",  
    "Categorie": "2", 
    "Count": "7"   
},  
{ 
   "title": "Rec Room",  
    "phone": "786.975.2555",  
    "directions": "https://www.google.co.in/maps/dir/1690+Collins+Ave,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7783682,-80.1339785,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b49b15017cbd:0x18bbeea521a6661c!2m2!1d-80.1301094!2d25.7921304!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7921304",
    "Longitude": " -80.1322981",  
    "Categorie": "2", 
    "Count": "8"   
},  
{ 
   "title": "SET Nightclub",  
    "phone": "305.531.2800",  
    "directions": "https://www.google.co.in/maps/dir/320+Lincoln+Rd,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7783682,-80.1339785,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b49ad9ddf09b:0xce4a6f71149f7a50!2m2!1d-80.1312563!2d25.7904062!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7904062",
    "Longitude": " -80.133445",  
    "Categorie": "2", 
    "Count": "9"   
},  
{ 
   "title": "Astor social club",  
    "phone": "305.531.8081",  
    "directions": "https://www.google.co.in/maps/dir/956+Washington+Ave,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7783682,-80.1339785,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b48dbe88917f:0x712776bd69ca368c!2m2!1d-80.1332851!2d25.7805032!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7805032",
    "Longitude": " -80.1354738",  
    "Categorie": "2", 
    "Count": "10"   
},
{ 
   "title": "Wolfsonian Museum",  
    "phone": "305.531.1001",  
    "directions": "https://www.google.co.in/maps/dir/1001+Washington+Ave,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7783682,-80.1339785,17z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b48ded743121:0x3acf2e47a0e56def!2m2!1d-80.1324598!2d25.7809298!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7809298",
    "Longitude": " -80.1346485",  
    "Categorie": "3", 
    "Count": "1"   
}, 
{ 
   "title": "Bass Musuem of Art",  
    "phone": "305.673.7530",  
    "directions": "https://www.google.co.in/maps/dir/2100+Collins+Ave,+Miami+Beach,+FL+33140,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7783622,-80.1360706,16.25z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b49c548d554b:0x5b4a3a30dc93744f!2m2!1d-80.1291437!2d25.7962783!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7962783",
    "Longitude": " -80.1313324",  
    "Categorie": "3", 
    "Count": "2"   
}, 
{ 
   "title": "World Erotic Art Museum",  
    "phone": "",  
    "directions": "https://www.google.co.in/maps/dir/1205+Washington+Ave,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7783622,-80.1360706,16.25z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b48e1bf8095d:0xc7dd0a8800c21650!2m2!1d-80.1320906!2d25.7832785!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7832785",
    "Longitude": " -80.1342793",  
    "Categorie": "3", 
    "Count": "3"   
}, 
{ 
   "title": "South Pointe Park ",  
    "phone": "",  
    "directions": "https://www.google.co.in/maps/dir/1+Washington+Ave,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7783622,-80.1360706,16.25z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b4f0667caa51:0xd677f92ed61ba9c5!2m2!1d-80.1339396!2d25.7659026!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7659026",
    "Longitude": " -80.1361283",  
    "Categorie": "3", 
    "Count": "4"   
},  
{ 
   "title": "11th Street Beach ",  
    "phone": "",  
    "directions": "https://www.google.co.in/maps/dir/11th+Street+Diner,+1065+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.773995,-80.1330706,14z/data=!4m14!4m13!1m5!1m1!1s0x88d9b48dfb67c68d:0xf1a4790a68f08b4a!2m2!1d-80.1323542!2d25.7817894!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7818589",
    "Longitude": " -80.1342354",  
    "Categorie": "3", 
    "Count": "5"   
},  

{ 
   "title": "Lummus Park",  
    "phone": "",  
    "directions": "https://www.google.co.in/maps/dir/Lummus+Park,+Ocean+Drive,+Miami+Beach,+FL,+United+States/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.773995,-80.1330706,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b492365be4fb:0x945196b6422b1cb8!2m2!1d-80.1299615!2d25.780981!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.780981",
    "Longitude": " -80.1321502",  
    "Categorie": "3", 
    "Count": "6"   
},  
{ 
   "title": "Matheson Hammock Park",  
    "phone": "",  
    "directions": "https://www.google.co.in/maps/dir/Matheson+Hammock+Park,+Old+Cutler+Road,+Coral+Gables,+FL,+United+States/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7791735,-80.1522109,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9c865b9db73f9:0x1e031fc66eea4f42!2m2!1d-80.2722657!2d25.6818174!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.6818174",
    "Longitude": " -80.2744544",  
    "Categorie": "3", 
    "Count": "7"   
}, 
{ 
   "title": "Fairchild Gardens",  
    "phone": "",  
    "directions": "https://www.google.co.in/maps/dir/9610+Old+Cutler+Rd,+Coral+Gables,+FL+33156,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7791735,-80.1522109,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9c87713b36c6b:0x8c6163b300dda9cc!2m2!1d-80.2731315!2d25.6823178!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.6823178",
    "Longitude": " -80.2753202",  
    "Categorie": "3", 
    "Count": "8"   
}, 
{ 
   "title": "O Cinema",  
    "phone": "305.571.9970",  
    "directions": "https://www.google.co.in/maps/dir/90+NW+29th+St,+Miami,+FL+33127,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7791735,-80.1522109,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b6ad37280289:0x55435766693c8f6f!2m2!1d-80.1968881!2d25.8035601!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.8035601",
    "Longitude": " -80.1990768",  
    "Categorie": "3", 
    "Count": "9"   
},  
{ 
   "title": "Calle Ocho",  
    "phone": " ",  
    "directions": "https://www.google.co.in/maps/dir/Calle+Ocho+Walk+of+Fame,+Southwest+8th+Street,+Miami,+FL+33135,+United+States/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7791735,-80.1522109,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b6f0c6c20113:0xc8140df98d6a2e45!2m2!1d-80.2193442!2d25.7657005!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7658376",
    "Longitude": " -80.2238318",  
    "Categorie": "3", 
    "Count": "10"   
},  
{ 
   "title": "Wynwood",  
    "phone": " ",  
    "directions": "https://www.google.co.in/maps/dir/Wynwood+Art+Walk+Tours,+2219+Northwest+2nd+Avenue,+Miami,+FL+33127,+United+States/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7791735,-80.1522109,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b209ba4c973f:0x94bf356eb90a4bcb!2m2!1d-80.1987613!2d25.7984314!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.8011424",
    "Longitude": " -80.2018629",  
    "Categorie": "3", 
    "Count": "11"   
},  

{ 
   "title": "Lincoln Road",  
    "phone": " ",  
    "directions": "https://www.google.co.in/maps/dir/Lincoln+Rd,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7791735,-80.1522109,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b485da8f771f:0xae20083995f6acdf!2m2!1d-84.0279119!2d40.8322408!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.790595",
    "Longitude": " -80.1380157",  
    "Categorie": "4", 
    "Count": "1"   
},  
{ 
   "title": "Espanola way",  
    "phone": " ",  
    "directions": "https://www.google.co.in/maps/dir/Espa%C3%B1ola+Way,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7791735,-80.1522109,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b48f98e6a179:0x65b861983de231b5!2m2!1d-80.1341636!2d25.78687!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.78687",
    "Longitude": " -80.1363523",  
    "Categorie": "4", 
    "Count": "2"   
},  
{ 
   "title": "Collins Avenue",  
    "phone": "305.672.1270",  
    "directions": "https://www.google.co.in/maps/dir/Collins+Avenue+Hostel,+1520+Collins+Avenue,+Miami+Beach,+FL+33139,+United+States/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7848886,-80.1360435,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b49aa0d0fd49:0x33c735aaff27b7fb!2m2!1d-80.1308753!2d25.7880387!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.782223",
    "Longitude": " -80.1420333",  
    "Categorie": "4",  
    "Count": "3"   
},  
{ 
   "title": "The Webster",  
    "phone": "305.674.7899",  
    "directions": "https://www.google.co.in/maps/dir/1220+Collins+Ave,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7933937,-80.1519534,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b491e16f9067:0x3edc617f7ca4a6e!2m2!1d-80.1314731!2d25.7832831!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7832831",
    "Longitude": " -80.1336618",  
    "Categorie": "4",  
    "Count": "4"   
},  

{ 
   "title": "Babalu Miami",  
    "phone": "305.538.0777",  
    "directions": "https://www.google.co.in/maps/dir/1121+Lincoln+Rd,+Miami+Beach,+FL+33139,+USA/Washington+Park+Hotel+South+Beach,+1050+Washington+Avenue,+Miami+Beach,+FL+33139,+United+States/@25.7933937,-80.1519534,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x88d9b487959350eb:0x49c847bf211ae1b8!2m2!1d-80.141339!2d25.7904682!1m5!1m1!1s0x88d9b48de6ef59cf:0x53b5dc12c63d70bb!2m2!1d-80.1328696!2d25.7817688!3e2?hl=en",
   	"Latitude": "25.7904682",
    "Longitude": " -80.1435277",  
    "Categorie": "4",  
    "Count": "5"    
},  

];
var markers;
$(document).ready(function() {
    $('.cat-toggle').click(function() {
        var cat = $(this).data('cat'); // reads data-cat="..."
				$(this).parent().toggleClass('active');
        $("div.pinWrap").parent("div").parent("div").parent("div").parent("div").hide();
        // toggle
        for (var i = 0; i < locations.length; i++) {
            if (locations[i].Categorie == cat) { // goup by Categorie
                if (locations[i].visible == true) { // Visible?  turn off
                    locations[i].visible = false;
                    markers[i].setVisible(false);
                } else { // invisible?  turn on
                    locations[i].visible = true;
                    markers[i].setVisible(true);
                }
            }
        }
    });
    initialize();
});

function initialize() {
    var styles = [{
        "featureType": "landscape.man_made",
        "stylers": [{
            "color": "#a8dcd3"
        }]
    }, {
        "featureType": "water",
        "stylers": [{
            "color": "#519dc3"
        }]
    }, {
        "featureType": "landscape.natural",
        "stylers": [{
            "color": "#fbe4bc"
        }]
    }, {
        "featureType": "road.highway",
        "stylers": [{
            "color": "#ffffff"
        }]
    }, {
        "featureType": "poi",
        "stylers": [{
            "visibility": "off"
        }]
    }];
	 
    var latlng = new google.maps.LatLng(25.7817736, -80.1350583);
    var mapOptions = {
        zoom: 14,
			  scrollwheel: false,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        styles: styles
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
    markers = [];
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        icon: '/assets/images/map-logo.png',
        title: "This is the place."
    });
 	
    var i, newMarker;
    var cat = $(this).data('cat');
    for (i = 0; i < locations.length; i++) {
        var image = new google.maps.MarkerImage(
            '/assets/images/pin' + (locations[i].Categorie) + '.png',
            new google.maps.Size(37, 50),
            new google.maps.Point(0, 0),  
          	 new google.maps.Point(-22, 40)); 

        newMarker = new MarkerWithLabel({
            position: new google.maps.LatLng(locations[i].Latitude, locations[i].Longitude),
            map: map,
            icon: image, 
            labelContent: locations[i].Count,
            labelAnchor: new google.maps.Point(-32, 34),
            labelClass: 'labels' + (locations[i].Categorie), // the CSS class for the label
            labelInBackground: false,
						

        });

        /*
			var infowindow = new google.maps.InfoWindow({
			content:"Hello World!"
			});
		
			google.maps.event.addListener(newMarker, 'click', function() {
				infowindow.open(map,newMarker);
			});*/
        var infowindow = new google.maps.InfoWindow({
					content: content,
					maxWidth: 350
			});;
        var labelContent = locations[i].Count
        var image = '/assets/images/pin' + locations[i].Categorie + '-ns.png' 
       	var pinno='pin' + (locations[i].Categorie) // the CSS class for the label
        var cat = $(this).data('cat');
				 var title = locations[i].title;
				 var phone = locations[i].phone; 
				 var directions = locations[i].directions;

      //  var content = "<div class='eresr'>Loan Number: " + labelContent + "<img src=" + image + ">" + '</h3>' + "Address: </div>"
				var content = '<div id="iw-container" class="pinWrap">' + "<div class='pin-wrap-bg " + pinno + "'  style= 'background-image : url(" + image + ")'>" + labelContent +  "</div>" + "<div class='name'>"+title+"</div>" + "<div class=' '> <span class='ph-no'>"+phone+"</span>" + "<a href="+ directions +" target='_blank' class='directions'>DIRECTIONS </a></div>" + '</div>';
				
				
					var content1 = '<div id="iw-container" class="pinWrap">'  + "<div class='name'> Washington Park Hotel </div>" + "<div class=' '> <span class='ph-no'>305.421.6265</span>" + '</div>';
					
					
        google.maps.event.addListener(newMarker, 'click', (function(newMarker, content, infowindow) {

            return function() {
                $("div.pinWrap").parent("div").parent("div").parent("div").parent("div").hide();
                infowindow.close();
                infowindow.setContent(content);
                infowindow.open(map, newMarker);
                google.maps.event.addListener(map, 'click', function() {
                    infowindow.close();
                });
            };
        })(newMarker, content, infowindow)); 
				
				
			 google.maps.event.addListener(marker, 'click', (function(marker, content, infowindow) {

            return function() {
                $("div.pinWrap").parent("div").parent("div").parent("div").parent("div").hide();
                infowindow.close();
                infowindow.setContent(content1);
                infowindow.open(map, newMarker);
                google.maps.event.addListener(map, 'click', function() {
                    infowindow.close();
                });
            };
        })(newMarker, content, infowindow)); 
			
			// When this event is fired the Info Window is opened.
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  // Event that closes the Info Window with a click on the map
  google.maps.event.addListener(map, 'click', function() {
    infowindow.close();
  });

  // *
  // START INFOWINDOW CUSTOMIZE.
  // The google.maps.event.addListener() event expects
  // the creation of the infowindow HTML structure 'domready'
  // and before the opening of the infowindow, defined styles are applied.
  // *
  google.maps.event.addListener(infowindow, 'domready', function() {

    // Reference to the DIV that wraps the bottom of infowindow
    var iwOuter = $('.gm-style-iw');

    /* Since this div is in a position prior to .gm-div style-iw.
     * We use jQuery and create a iwBackground variable,
     * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
    */
    var iwBackground = iwOuter.prev();

    // Removes background shadow DIV
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});

    // Removes white background DIV
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});

    // Moves the infowindow 115px to the right.
    iwOuter.parent().parent().css({left: '0'});
		
    iwOuter.parent().css({'width': '285px !improtant', 'height': '80px !improtant'});

    // Moves the shadow of the arrow 76px to the left margin.
    iwBackground.children(':nth-child(1)').css({'display': 'none'});

    // Moves the arrow 76px to the left margin.
    iwBackground.children(':nth-child(3)').css({'display': 'none'});

    // Changes the desired tail shadow color.
    iwBackground.children(':nth-child(3)').find('div').children().css({'display': 'none'});

    // Reference to the div that groups the close button elements.
    var iwCloseBtn = iwOuter.next();

    // Apply the desired effect to the close button
    iwCloseBtn.css({opacity: '1', top: '3px', border: '7px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9', 'display': 'none'});

    // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
    if($('.iw-content').height() < 140){
      $('.iw-bottom-gradient').css({display: 'none'});
    }

    // The API automatically applies 0.7 opacity to the button after the mouseout event. This function reverses this event to the desired value.
    iwCloseBtn.mouseout(function(){
      $(this).css({opacity: '1'});
    });
  });
        // we add a 'visible' flag to the locations data
        locations[i].visible = false;
        newMarker.setVisible(false);
        markers.push(newMarker);
    }
}
};

$("#downClick").click(function() {
    $('html,body').animate({
        scrollTop: $(".home-container").offset().top},
        'slow');
});