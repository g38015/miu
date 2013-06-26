// Project 3
// MIU 1306
// Peter Hitchcock

$('#home').on('pageinit', function(){
	//code needed for home page goes here
});	
		
$('#additem').on('pageinit', function(){
        
		var myForm = $('#contactForm'),
		    errorLink = $('#errorslink')
		
		;
		
		myForm.validate({
			invalidHandler: function(form, validator) {
			    errorLink.click();
			    var html = '';
			    for(var key in validator.submitted){
			        var label = $('label[for^="'+ key + '"]').not('[generated]');
			        var labelName = label.length ? label.text() : label.text();
			        html += '<li>' + 'A valid ' + labelName +'</li>'
			    };
			    $("#errors ul").html(html);
			
		},
		
		submitHandler: function() {
		    var data = myForm.serializeArray();
			storeData(data);
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


function getSelectedRadio() {
         var radios = document.forms[0].type;
         for (var i = 0; i < radios.length; i++) {
             if (radios[i].checked) {
                 typeValue = radios[i].value;
             }  
         }   
 }


var storeData = function(data, key){

// if there is no key means brand new lead and need a new key
if(!key) {

    var id             = Math.floor(Math.random()*10000001);
    
}else{
    // set the id to the existing key we are editing
        id             = key;
    }
    // Get all form field values and store in object
    // Object properties contain array form label and input value
    //getSelectedRadio();
    var lead           = {};
        lead.name      = ["Name:", $("#name").val()];
        lead.phone     = ["Phone:", $("#phone").val()];
        lead.email     = ["Email:", $("#email").val()];
        lead.date      = ["Date:", $("#mydate").val()];
        lead.type      = ["Type:", $("input:radio[name=type]:checked").val()];
        lead.price     = ["Price:", $("#price").val()];
        lead.bedrooms  = ["Bedrooms:", $("#bedrooms").val()];
        lead.info      = ["Info:", $("#additional").val()];
        lead.hidden    = ["Hidden:", $("#hideme").val()];
        
        
    // Save data to local storage Use stringify to convert object to a string
    localStorage.setItem(id, JSON.stringify(lead));
    alert("Lead Has Been Saved!");
	
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
            var newList = document.createElement('ul');
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
                var newsubLi = document.createElement('ul');
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

// Function creates a select Field Element and Populates with Options
var makeBedrooms = function() {
    var formTag = document.getElementsByTagName("form"), // Target Form Tag
        createSelectLi = xyz("bed"), // Finds Element Called bed, targets in HTML
        createSelect = document.createElement("select"); // Creates Select Element
        createSelect.setAttribute("id", "bedrooms"); // Sets Attribute id="bedrooms"
    for(var i=0, j=numberOfBedrooms.length; i<j; i++){ // Populates Select Tage with Array numberOfBedrooms
        var createOption = document.createElement("option"); // Creates Option Element
        var optionText = numberOfBedrooms[i]; // Creates Option Text, Grabs Value in Array
        createOption.setAttribute("value", optionText); // Sets Attribute value="optionText" (values in the array)
        createOption.innerHTML = optionText; // Sets the Text from Array in the Option Tag
        createSelect.appendChild(createOption); // Attaches Option Tags to Select Tag
    } // Loops through the array and sets all option tags
    createSelectLi.appendChild(createSelect); // Attaches Select Tag and Option Tags to Document
 }; // Need to Call Function  


// Var Defaults
var numberOfBedrooms = ["1+", "2+", "3+"],
    typeValue
    ;
    makeBedrooms();


var display = xyz("displayLink");
display.addEventListener("click", getData);
					
var clear = xyz("clear");
clear.addEventListener("click", clearLocal);

var saveData = xyz("submit");
saveData.addEventListener("click");






