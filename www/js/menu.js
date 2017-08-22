     
             function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
	var name =getParameterByName('name');
	var user_id =getParameterByName('user');
	var email =getParameterByName('email');
	var fbpic = getParameterByName('fbpic');
	var fname = getParameterByName('fname');
	var pass = getParameterByName('password');
	var img = getParameterByName('image');
	var address = getParameterByName('address');
	var country = getParameterByName('country');
	var contact = getParameterByName('contact');
	var code = getParameterByName('code');
	

	function op()
{   

$("#loadertxt").hide();
$("#loader").hide();

	document.getElementById('emailid').innerHTML=email;
	document.getElementById("userPic").src =fbpic;
	
}
function regshow()
{$('#register').show();

}	
function reghide()
{$('#register').hide();

}			
function loadhide(){

$("#loadertxt").hide();
$("#loader").hide();
$('#register').hide();
}
function loadshow(){
$("#loadertxt").show();
$("#loader").show();
}
			function viewadspage()
			{ window.location="viewads.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";}
			function showreview(id)
			{ window.location="showreview.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"&name="+id+"";}

			function category()
			{ window.location="categories.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";}
			function supermarketpage() {
               window.location="supermarket.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function barpage() {
               window.location="bar.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function restaurantpage() {
               window.location="restaurant.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function nightclubspage() {
               window.location="nightclub.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function carspage() {
               window.location="cars.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function hospitalpage() {
               window.location="hospital.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function hotelpage() {
               window.location="hotel.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function clothingpage() {
               window.location="clothing.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function moviepage() {
               window.location="movie.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function pharmacypage() {
               window.location="pharmacy.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function massagepage() {
               window.location="massage.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function hairsalonpage() {
               window.location="hairsalon.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function casinopage() {
               window.location="casino.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function drycleanpage() {
               window.location="dryclean.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function tailorpage() {
               window.location="tailor.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function airlinepage() {
               window.location="airline.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function logout() {
				
               window.location="login.html";
            }
			function paidproduct() {
				
               window.location="paidproduct.html?user="+user_id+"&email="+email+"&fbpic="+fbpic+"";
            }
			function progress()
		{ alert("Sorry! Page is in progress!");}
		
		
		
			 function sidemenu(){ 
			 $($($($("#sidemenu").children()).children())).css("font-family","Microsoft NeoGothic");
		  $("#sidemenu").append("<ul  data-role='listview' data-inset='false' data-theme='b'><li><a id='go_logout' onclick='supermarketpage()' >Supermarkets</a></li><li><a id='go_logout' onclick='restaurantpage()' style='font-family:'Microsoft NeoGothic';'>Restaurants</a></li> <li><a id='go_logout' onclick='barpage()' style='font-family:'Microsoft NeoGothic';'>Bars</a></li> <li><a id='go_logout' onclick='nightclubspage()' style='font-family:'Microsoft NeoGothic';'>Night Clubs</a></li> <li><a id='go_logout' onclick='carspage()' style='font-family:'Microsoft NeoGothic';'>Cars</a></li> <li><a id='go_logout' onclick='hospitalpage()' style='font-family:'Microsoft NeoGothic';'>Hospitals</a></li> <li><a id='go_logout' onclick='hotelpage()' style='font-family:'Microsoft NeoGothic';'>Hotels</a></li><li><a id='go_logout' onclick='clothingpage()' style='font-family:'Microsoft NeoGothic';'>Clothing</a></li> <li><a id='go_logout' onclick='moviepage()' style='font-family:'Microsoft NeoGothic';'>Movies</a></li> <li><a id='go_logout' onclick='pharmacypage()' style='font-family:'Microsoft NeoGothic';'>Pharmacies</a></li> <li><a id='go_logout' onclick='massagepage()' style='font-family:'Microsoft NeoGothic';'>Massage</a></li> <li><a id='go_logout' onclick='hairsalonpage()' style='font-family:'Microsoft NeoGothic';'>Hair Salon</a></li> <li><a id='go_logout' onclick='casinopage()' style='font-family:'Microsoft NeoGothic';'>Casinos</a></li> <li><a id='go_logout' onclick='drycleanpage()' style='font-family:'Microsoft NeoGothic';'>Dry Cleaning</a></li> <li><a id='go_logout' onclick='tailorpage()' style='font-family:'Microsoft NeoGothic';'>Tailoring</a></li> <li><a id='go_logout' onclick='airlinepage()' style='font-family:'Microsoft NeoGothic';'>Airlines</a></li> <li><a id='go_logout' onclick='logout()' style='font-family:'Microsoft NeoGothic';'>Logout</a></li></ul>");
		}
		
		
// capture image or from gallery upload to server       
		
	
		function takephoto()
{
navigator.camera.getPicture(uploadPhoto, onFail, { 
quality: 40, 
correctOrientation : true,
saveToPhotoAlbum: true,
destinationType: Camera.DestinationType.FILE_URL
});
}
function uploadFromGallery() {

    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto,
                                function(message) { alert('get picture failed'); },
                                { quality: 40, 
								correctOrientation : true,
                                destinationType: navigator.camera.DestinationType.FILE_URI,
                                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
                                );

}
function onFail(message) {
alert('Failed because: ' + message);
}

function uploadPhoto(imageURI) {
	 var options = { dimBackground: true };
			  SpinnerPlugin.activityStart("Uploading...", options); 
			  
    var options = new FileUploadOptions();
    options.fileKey="file";
    // options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
	 mystring = imageURI.substr(imageURI.lastIndexOf('/')+1); 
var newchar = '1';
mystring = mystring.split('?').join(newchar);
	options.fileName=mystring;
    options.mimeType="image/jpeg";
    imagesrc = imageURI;
	document.getElementById("userimg").src = imagesrc;
	// alert("save "+imagesrc);
	 var email =getParameterByName('email');
	
    var params = new Object();
    options.params = params;
	 options.chunkedMode = false;
    var ft = new FileTransfer();
	// alert(imageURI);
    ft.upload(imageURI, encodeURI("http://govirtualstore.com/app/iOS/imageuploadSignup.php?email="+email+""), win, fail, options);
}

function win(r) {
	    SpinnerPlugin.activityStop(); 	
	regshow();
	//alert("An upload: Code = " + r.response);
    // alert("Code = " + r.responseCode);
    // alert("Response = " + r.response);
    // alert("Sent = " + r.bytesSent);
}

function fail(error) {
	     SpinnerPlugin.activityStop(); 	
    // alert("Check Internet connection = " + error.code);
	 alert("Check Internet connection");
    // alert("upload error source " + error.source);
    // alert("upload error target " + error.target);
}
// end uploading
		
	function takephoto1()
{
navigator.camera.getPicture(uploadPhoto1, onFail, { 
quality: 40, 
correctOrientation : true,
saveToPhotoAlbum: true,
destinationType: Camera.DestinationType.FILE_URL
});
}
function uploadFromGallery1() {

    // Retrieve image file location from specified source
    navigator.camera.getPicture(uploadPhoto1,
                                function(message) { alert('get picture failed'); },
                                { quality: 40, 
								correctOrientation : true,
                                destinationType: navigator.camera.DestinationType.FILE_URI,
                                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
                                );

}
function onFail(message) {
alert('Failed because: ' + message);
}

function uploadPhoto1(imageURI) {
	var options = { dimBackground: true };
			  SpinnerPlugin.activityStart("Uploading...", options); 
    var options = new FileUploadOptions();
    options.fileKey="file";
    // options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
	 mystring = imageURI.substr(imageURI.lastIndexOf('/')+1); 
var newchar = '1';
mystring = mystring.split('?').join(newchar);
	options.fileName=mystring;
    options.mimeType="image/jpeg";
    imagesrc = imageURI;
	document.getElementById("userimg").src = imagesrc;
	// alert("save "+imagesrc);
	 var user =getParameterByName('user');
	 var p_name =getParameterByName('p_name');
	 var category =getParameterByName('category');
	 var price =getParameterByName('price');
	
    var params = new Object();
    options.params = params;
	 options.chunkedMode = false;
    var ft = new FileTransfer();
	// alert(imageURI);
    ft.upload(imageURI, encodeURI("http://govirtualstore.com/app/iOS/imageupload.php?useradd_id="+user+"&p_name="+p_name+"&category="+category+"&price="+price+""), win, fail, options);
}
function win(r) {
	    SpinnerPlugin.activityStop(); 	
	regshow();
	//alert("An upload: Code = " + r.response);
    // alert("Code = " + r.responseCode);
    // alert("Response = " + r.response);
    // alert("Sent = " + r.bytesSent);
}

function fail(error) {
	     SpinnerPlugin.activityStop(); 	
    // alert("Check Internet connection = " + error.code);
	 alert("Check Internet connection");
    // alert("upload error source " + error.source);
    // alert("upload error target " + error.target);
}




// end uploading
		
//reupload		
		
 function reuploadFromGallery() {

    // Retrieve image file location from specified source
    navigator.camera.getPicture(reuploadPhoto,
                                function(message) { alert('get picture failed'); },
                                { quality: 40, 
								correctOrientation : true,
                                destinationType: navigator.camera.DestinationType.FILE_URI,
                                sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
                                );

}
function onFail(message) {
alert('Failed because: ' + message);
}

function reuploadPhoto(imageURI) {

var options = { dimBackground: true };
			  SpinnerPlugin.activityStart("Uploading...", options); 
			    	
    var options = new FileUploadOptions();
    options.fileKey="file";
    // options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
	 mystring = imageURI.substr(imageURI.lastIndexOf('/')+1); 
var newchar = '1';
mystring = mystring.split('?').join(newchar);
	options.fileName=mystring;
    options.mimeType="image/jpeg";
    imagesrc = imageURI;
	document.getElementById("image1").src = imagesrc;
	// alert("save "+imagesrc);
	 var p_id =getParameterByName('name');
	
	
    var params = new Object();
    options.params = params;
	 options.chunkedMode = false;
    var ft = new FileTransfer();
	// alert(imageURI);
    ft.upload(imageURI, encodeURI("http://govirtualstore.com/app/iOS/ReuploadAdimage.php?p_id="+p_id+""), win, fail, options);
}

function win(r) {
	    SpinnerPlugin.activityStop(); 	
	regshow();
	//alert("An upload: Code = " + r.response);
    // alert("Code = " + r.responseCode);
    // alert("Response = " + r.response);
    // alert("Sent = " + r.bytesSent);
}

function fail(error) {
	     SpinnerPlugin.activityStop(); 	
    // alert("Check Internet connection = " + error.code);
	 alert("Check Internet connection");
    // alert("upload error source " + error.source);
    // alert("upload error target " + error.target);
}
        		
		
         