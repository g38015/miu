var storeData = function(data) {
    // uses form data
    console.log(data);

};

$('#home').on('pageinit', function(){
	//code needed for home page goes here
	
});	


		
$('#additem').on('pageinit', function(){

		var myForm = $('#contactForm'),
		    errorlink = $('#errorslink')
		
		;
		    myForm.validate({
			invalidHandler: function(form, validator) {
			    errorlink.click();
			    for (var key in validator.submitted) {
			        
			    }
			},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

var autofillData = function (){
	 
};

var getData = function(){

};

var storeData = function(data){
	
}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};


