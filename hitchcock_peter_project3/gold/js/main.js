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

var clearLocal = function(){
    if (localStorage.length === 0) {
        alert("There Are No Leads to Delete");
    } else {
        localStorage.clear();
        alert("All Leads Have Been Deleted!");
        window.location.reload();
        return false;
    }

};

var autofillData = function (){
    // JSON Object is comming from JSON.js file from HTML Page
    // Store data into local storage
    for(var n in json) {
        var id = Math.floor(Math.random()*10000001);
        localStorage.setItem(id, JSON.stringify(json[n]));
	 }
};

var getData = function(){
    if (localStorage.length === 0) {
        alert("You Have No Leads, Defalt Lead Info Added");
        autofillData();
        } else {
           //toggleLeads("on");
            //Write local data from local storage to browser
            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "leads");
            var newList = document.createElement("ul");
            createDiv.appendChild(newList);
            document.body.appendChild(createDiv);
            xyz("leads").style.display = "block";
            for (var i = 0, len=localStorage.length; i<len; i++) {
                var newLi = document.createElement("li");
                var linkLi = document.createElement("li");
                newList.appendChild(newLi);
                var key = localStorage.key(i);
                var value = localStorage.getItem(key);
                // Convert sting from local storage back to an object by using JSON.parse()
                var obj = JSON.parse(value);
                var newsubLi = document.createElement("ul");
                newLi.appendChild(newsubLi);
                //loadImage(obj.bedrooms[1], newsubLi);
                for (var n in obj) {
                    var makeNewSubli =document.createElement("li");
                    newsubLi.appendChild(makeNewSubli);
                    var optSubText = obj[n][0]+" "+obj[n][1];
                    makeNewSubli.innerHTML = optSubText;
                    newsubLi.appendChild(linkLi);                         
                }
                //createLeadLinks(localStorage.key(i), linkLi);
            } 
        }   
    
}; 

var	deleteItem = function (){
			
};

var display = xyz("displayLink");
display.addEventListener("click", getData);
					
var clear = xyz("clear");
clear.addEventListener("click", clearLocal);

var saveData = xyz("submit");
saveData.addEventListener("click");






