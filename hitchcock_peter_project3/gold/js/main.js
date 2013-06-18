$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#additem').on('pageinit', function(){

		var myForm = $('#contactForm');
		    myForm.validate({
			invalidHandler: function(form, validator) {
		},
			submitHandler: function() {
		var data = myForm.serializeArray();
			storeData(this.key);
			console.log(data);
		}
	});
	
	//any other code needed for addItem page goes here
	
});

//The functions below can go inside or outside the pageinit function for the page in which it is needed.

// getElementsById Function
function xyz(x) {
    var getElement = document.getElementById(x);
    return getElement;
};

var storeData = function(key){

// if there is no key means brand new lead and need a new key
if(!key) {

    var id             = Math.floor(Math.random()*10000001);
    
}else{
    // set the id to the existing key we are editing
        id = key;
    }
    // Get all form field values and store in object
    // Object properties contain array form label and input value
    // getSelectedRadio();
    var lead           = {};
        lead.name      = ["Name:", xyz("name").value];
        lead.phone     = ["Phone:", xyz("phone").value];
        lead.email     = ["Email:", xyz("email").value];
        lead.date      = ["Date:", xyz("date").value];
        //lead.type      = ["Checked:", typeValue];
        lead.price     = ["Price:", xyz("price").value];
        //lead.bedrooms  = ["Bedrooms:", xyz("bedrooms").value];
        lead.info      = ["Info:", xyz("additional").value];
        //lead.hidden    = ["Hidden:", xyz("hideme").value];
        
        
    // Save data to local storage Use stringify to convert object to a string
    localStorage.setItem(id, JSON.stringify(lead));
    alert("Lead Has Been Saved!");
    console.log(lead);
	
}; 

var saveData = xyz("submit");
saveData.addEventListener("click");


var autofillData = function (){
	 
};

var getData = function(){

}; 

var	deleteItem = function (){
			
};
					
var clearLocal = function(){

};





