/*Louise Whitney*/
/*AVF 1401*/
// Home Page



$('#profile').css({borderRadius: "10px", border: "5px solid black", padding: "10px", textAlign: "center"});

$('<a href="#research" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">RESEARCH TOPICS</a>').appendTo('#content');
$('<a href="#github" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">GITHUB</a>').appendTo('#content');
$('<a href="#insta" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">INSTAGRAM</a>').appendTo('#content');
$('<a href="#workout" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">WORKOUT</a>').appendTo('#content');
$('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">ACCELEROMETER</a>').appendTo('#content');
$('<a href="#compass" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">COMPASS</a>').appendTo('#content');
<<<<<<< HEAD
$('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">CAMERA</a>').appendTo('#content');
=======
$('<a href="#cam" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">CAMERA</a>').appendTo('#content');
>>>>>>> gh-pages
$('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">MASHUP #1</a>').appendTo('#content');
$('<a href="#" class="ui-btn ui-icon-arrow-r ui-btn-icon-right ui-mini">MASHUP #2</a>').appendTo('#content');

// Research Page
var t1 = $('<div id="top1"</div>').appendTo('#resContent');
var t2 = $('<div id="top2"</div>').appendTo('#resContent');
var t3 = $('<div id="top3"</div>').appendTo('#resContent');

var re1 = $('<h1>Research Topic Week 2</h1>'+'<p>Login With Facebook Options</p>');
var re2 = $('<h1>Research Topic Week 3</h1>'+'<p>Using the Accelerometer to make a pedometer</p>');
var re3 = $('<h1>Research Topic Week 4</h1>'+'<p>Mashup options with camera and geo api\'s</p>');


t1.css({border:"2px solid black",padding: "10px", textAlign: "center", borderRadius:"10px"});
t2.css({border:"2px solid black",padding: "10px", textAlign: "center", borderRadius:"10px", marginTop: "10px"});
t3.css({border:"2px solid black",padding: "10px", textAlign: "center", borderRadius:"10px", marginTop: "10px"});


re1.appendTo('#top1');
re2.appendTo('#top2');
re3.appendTo('#top3');






//Git Page

$('<button id="gitA" class="ui-btn ui-mini">APPLICATION</button>').appendTo('#gitContent');
$('<button id="gitB" class="ui-btn ui-mini">IOS</button>').appendTo('#gitContent');
$('<button id="gitC" class="ui-btn ui-mini">ANDROID</button>').appendTo('#gitContent');

//Compass Page

$('<button id="comp" class="ui-btn ui-mini">START COMPASS</button>').appendTo('#comps');
$('<button id="comp" class="ui-btn ui-mini">STOP COMPASS</button>').appendTo('#comps');
$('<div id="heading">Waiting For Heading......</div>').appendTo('#comps');
$('#heading').css({padding: "20px",border: "2px solid black",marginTop: "20px" });



document.addEventListener("deviceready", onDeviceReady, false);



//start instagram api

$("#insta").on('pageinit', function(){

               
               
                    $.ajax({
                      url: 'https://api.instagram.com/v1/tags/fitness/media/recent?callback=?&amp;client_id=2e9a62e00d65456196468390b7d46103',
                      type: 'GET',
                      data: {},
                      dataType: 'json',
                      success: function(info){
                      
                      for(var i=0, x=info.data.length; i<x; i++){
                      var target = info.data[i];
                   
                      $('<li>'+'<a href="'+ target.images.standard_resolution.url + '_blank' + '">'+
                        '<img src="'+ target.images.standard_resolution.url +'"/>'+
                       
                        '</a>' + '</li>'
                        ).appendTo('#picId');
                      
                          //console.log(target.images);
                     
                      }
                           
                      $('#picId').listview("refresh");
                    }
                    
                });
               
            
     
               
               $('<button id="ref" class="ui-btn ui-mini">REFRESH IMAGES</button>').prependTo('#picId');

               
               
               
               
    
          
      

}); //end instagram api

//Start workout page

/*<div id="workData" data-role="content">

<ul id="workId">

</ul>


</div>*/

$("#workout").on('pageinit', function(){
               
               
    $.ajax({
        url: 'https://trailapi-trailapi.p.mashape.com/?q[activities_activity_type_name_eq]=hiking&q[state_cont]=Washington&q[city_cont]=Seattle&limit=25',
        type: 'POST',
        data: {},
        datatype: 'json',
        success: function(data){
           
           for(var i=0, x=data.places.length; i<x; i++){
           var target = data.places[i];
           $(''+
             '<div class="userContent">'+
             '<h2>'+ target.name +'</h2>'+
             '<p>' + target.city + ", "+ target.state +'</p>'+
             '<p>'+  "Description: " + target.description +'</p>'+
             '<p>'+  "Directions: " + target.directions +'</p>'+
             '</div>'
             ).appendTo('#workData');
           
           $('.userContent').css({border: "3px solid black",borderRadius: "10px", padding: "10px", marginTop: "10px"});
        
           console.log(target);
           
           };
           
           },
        error: function(err) { alert(err); },
        beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "ZjN3mT1nPijTta3gNTWUAs3luwzHCSJJ");
                }
           
    });
           
            
              
               
               
});//End Workout Page



$("#cam").on('pageinit', function(){
             
             
          //  $('<button id="ref" class="ui-btn ui-mini">TAKE PICTURE!</button>').on("click", capturePhoto).appendTo('#camPic');
               
               
               
});//END CAMERA PAGE








// device APIs are available

function onDeviceReady() {
   
    

    
    
                                //start inAppWebBrowser controls for git page
    function webA(){
        
        window.open('https://github.com/g70523/AVF', '_blank', 'location=yes');
    
    };
    
    function webB(){
        
        window.open('http://g70523.github.io/AVF/application/platforms/ios/www/index.html', '_blank', 'location=yes');
        
    };
    
    function webC(){
        
        window.open('http://g70523.github.io/AVF/application/platforms/android/assets/www/index.html', '_blank', 'location=yes');
        
    };

    
                                //end inAppWebBrowser controls
    
    
    
                                //start compass copntrols
    
    function nav(){ 
        // Update compass every 3 seconds
        var options = { frequency: 1000 };
        
        watchID = navigator.compass.watchHeading(onSuccess, onError, options);
    }
    
    // onSuccess: Get the current heading
    //
    function onSuccess(heading) {
        var element = document.getElementById('heading');
        element.innerHTML = 'Heading: ' + heading.magneticHeading;
    }
    
    // onError: Failed to get the heading
    //
    function onError(compassError) {
        alert('Compass Error: ' + compassError.code);
    }
    
                                //end compass controls
    
    
    $('#comp').on("click", nav)/*compass button*/
    $('#gitA').on("click", webA)/*inAppWebBrowser*/
    $('#gitB').on("click", webB)/*inAppWebBrowser*/
    $('#gitC').on("click", webC)/*inAppWebBrowser*/


}

