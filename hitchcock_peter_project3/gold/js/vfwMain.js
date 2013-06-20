// Project 1
// MIU 1306
// Peter Hitchcock

// Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function() {

    // getElementsById Function
    function xyz(x) {
        var getElement = document.getElementById(x);
        return getElement;
    }
    /*
    // Function creates a select Field Element and Populates with Options
    function makeBedrooms() {
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
     } // Need to Call Function 
    */
     
     // Find value of selected checkbox (this function has issue of retuning all values it loops through only returns one value
     function getSelectedRadio() {
              var radios = document.forms[0].type;
              for (var i = 0; i < radios.length; i++) {
                  if (radios[i].checked) {
                      typeValue = radios[i].value;
                  }  
              }   
      }
     
     // Function toggles form, hides form once show leads is tapped or clicked.
     /*
     function toggleLeads(n) {
         switch(n) {
             case "on":
                 xyz("contactForm").style.display = "none";
                 xyz("clear").style.display = "inline";
                 xyz("displayLink").style.display = "none";
                 xyz("addNew").style.display = "inline";
                 break;
             case "off":
                 xyz("contactForm").style.display = "block";
                 xyz("clear").style.display = "inline";
                 xyz("displayLink").style.display = "inline";
                 xyz("addNew").style.display = "none";
                 xyz("leads").style.display = "none";
                 break;
             default:
                 return false;
         }
     }
     */
     // This function stores leads into local storage
     function storeLeads(key) {
     // if there is no key means brand new lead and need a new key
     if(!key) {
     
         var id             = Math.floor(Math.random()*10000001);
         
     }else{
         // set the id to the existing key we are editing
             id = key;
         }
         // Get all form field values and store in object
         // Object properties contain array form label and input value
         getSelectedRadio();
         var lead           = {};
             lead.name      = ["Name:", xyz("name").value];
             lead.phone     = ["Phone:", xyz("phone").value];
             lead.email     = ["Email:", xyz("email").value];
             lead.date      = ["Date:", xyz("date").value];
             lead.type      = ["Checked:", typeValue];
             lead.price     = ["Price:", xyz("price").value];
             lead.bedrooms  = ["Bedrooms:", xyz("bedrooms").value];
             lead.info      = ["Info:", xyz("additional").value];
             lead.hidden    = ["Hidden:", xyz("hideme").value];
             
             
         // Save data to local storage Use stringify to convert object to a string
         localStorage.setItem(id, JSON.stringify(lead));
         alert("Lead Has Been Saved!");
                      
     }
     /*
     // This function gets the leads from localstorage and shows them
     function getLeads() {
         if (localStorage.length === 0) {
             alert("You Have No Leads, Defalt Lead Info Added");
             autofillLeads();
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
                     loadImage(obj.bedrooms[1], newsubLi);
                     for (var n in obj) {
                         var makeNewSubli =document.createElement("li");
                         newsubLi.appendChild(makeNewSubli);
                         var optSubText = obj[n][0]+" "+obj[n][1];
                         makeNewSubli.innerHTML = optSubText;
                         newsubLi.appendChild(linkLi);                         
                     }
                     createLeadLinks(localStorage.key(i), linkLi);
                 } 
             }   
     }
     */
     /*
     // Search Function
     var searchButton = xyz('searchButton');
     
     function leadSearch() {
         var query = xyz('search').value;
        
         // Only searching by query
         if (query != "") {
              var makeUl = document.createElement("ul");
              document.getElementById("results").appendChild(makeUl);
              for (var i = 0, len=localStorage.length; i<len; i++) {
                 var key = localStorage.key(i);
                 var value = localStorage.getItem(key);
                 var obj = JSON.parse(value);
                 for (n in obj) {
                     if (query === obj[n][1]) {
                         var makeLi = document.createElement("li");
                         var subLi = document.createElement("ul");
                         makeLi.appendChild(subLi);
                         makeUl.appendChild(makeLi);
                         for(m in obj) {
                             var lastLi = document.createElement("li");
                             subLi.appendChild(lastLi);
                             lastLi.innerHTML = obj[m][0] + " " + obj[m][1];
                         
                         }
                         
                     }
                     
                 }
             
             }
             
         }
     
     }
     searchButton.addEventListener("click", leadSearch);
      */         
     // Grab the image
     function loadImage(bedNumber, newsubLi) {
         var imageItem = document.createElement("li");
         newsubLi.appendChild(imageItem);
         var grabPng = document.createElement('img');
         var setSrc = grabPng.setAttribute("src", "images/" + bedNumber + ".png");
         imageItem.appendChild(grabPng);
     
     }
     /*
     // Autofill Local Storage with JSON
     function autofillLeads() {
         // JSON Object is comming from JSON.js file from HTML Page
         // Store data into local storage
         for(var n in json) {
             var id = Math.floor(Math.random()*10000001);
             localStorage.setItem(id, JSON.stringify(json[n]));
         
         }
     
     }
     */
     // Create Edit and Delete Links for Each Stored Lead when Displayed
     function createLeadLinks(key, linkLi) {
         // Add Edit
         var editLead = document.createElement("a");
         editLead.setAttribute("id", "editLead");
         editLead.href = "#";
         editLead.key = key;
         var editText = "Edit";
         editLead.addEventListener("click", editSingleLead);
         editLead.innerHTML = editText;
         linkLi.appendChild(editLead);
         
         // Add LineBreak
         var breakLine = document.createElement("br");
         linkLi.appendChild(breakLine);
         
         // Add Delete
         var deleteLead = document.createElement('a');
         deleteLead.setAttribute("id", "deleteLead");
         deleteLead.href = "#";
         deleteLead.key = key;
         var deleteText = "Delete";
         deleteLead.addEventListener("click", deleteSingleLead);
         deleteLead.innerHTML = deleteText;
         linkLi.appendChild(deleteLead);
         
     }
     
     function deleteSingleLead() {
         var ask = confirm("Really? Are You Sure?");
         if (ask) {
             localStorage.removeItem(this.key);
             window.location.reload();
         }else{
             alert("Your Lead was not Deleted");
         }
     }
     
     
     function editSingleLead() {
         // Grab Data from Local Storage
         var value = localStorage.getItem(this.key);
         var lead = JSON.parse(value);
         
         // Show Form
         toggleLeads("off");
     
         // Populate Form Fields
         xyz("name").value = lead.name[1];
         xyz("phone").value = lead.phone[1];
         xyz("email").value = lead.email[1];
         xyz("date").value = lead.date[1];
         xyz("price").value = lead.price[1];
         xyz("bedrooms").value = lead.bedrooms[1];
         xyz("additional").value = lead.info[1];
                  
         // Radio
         var radios = document.forms[0].type; 
         for(var i = 0; i < radios.length; i++){
             if(radios[i].value == "Sfr" && lead.type[1] == "Sfr"){
                 radios[i].setAttribute("checked", "checked");
             } else if(radios[i].value == "Townhome" && lead.type[1] == "Townhome"){
                 radios[i].setAttribute("checked", "checked");
             } else if(radios[i].value == "Condo" && lead.type[1] == "Condo"){
                 radios[i].setAttribute("checked", "checked");
             }
         }
         
     
         // Remove Listener from Input
         save.removeEventListener("click", storeLeads);
         // Change Submit to Say Edit Button
         xyz("submit").value = "Edit Lead";
         var editSubmitButton = xyz("submit");
         // Save the Key Value Established as a Property of the editSubmit event
         editSubmitButton.addEventListener("click", validation);
         editSubmitButton.key = this.key;
         
     }
     /*
     // This function clears all localstorage when delete leads is clicked or tapped
     function clearLeads() {
         if (localStorage.length === 0) {
             alert("There Are No Leads to Delete");
         } else {
             localStorage.clear();
             alert("All Leads Have Been Deleted!");
             window.location.reload();
             return false;
         }
     }
     */
     /*
     function validation(arg) {
         // Define Elements we want to check
         var validateName = xyz('name');
         var validateEmail = xyz('email');
         
         // Reset Error Message
         xyz('errors').innerHTML = "";
         validateName.style.border = "2px solid blue";
         validateEmail.style.border = "2px solid blue";
         
         // Error Message
         var messageAr =[];
         
         // Name Validation
         if (validateName.value === "") {
             var validateNameError = "Please enter your name";
             validateName.style.border = "2px solid blue";
             messageAr.push(validateNameError);
             
         }
         
         // Email Validation
         var express = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
         if (!(express.exec(validateEmail.value))) {
             var emailError = "Enter email address";
             validateEmail.style.border = "2px solid blue";
             messageAr.push(emailError);
             
         }
         
         // If errors display on screen
         if (messageAr.length >= 1) {
             for (var i = 0, j = messageAr.length; i < j; i++) {
                 var txt = document.createElement('li');
                 txt.innerHTML = messageAr[i];
                 xyz('errors').appendChild(txt);
                 
             }
             arg.preventDefault();
             return false;
             
         }else{
             
             // If validation passes save data. Send key value (came from edit data function)
             // This key value was passed through editSubmit listener as a property.
             storeLeads(this.key);
         }
     }
    */
    /*
    // Var Defaults
    var numberOfBedrooms = ["1+", "2+", "3+"],
        typeValue
        ;
    makeBedrooms();
    */
    
    // Set Link and Submit Click Events
    var display = xyz("displayLink");
    display.addEventListener("click", getLeads);
    var clear = xyz("clear");
    clear.addEventListener("click", clearLeads);
    var save = xyz("submit");
    save.addEventListener("click", validation);

});
/*
// Function for slider to show the value in the range to a user while sliding
function slideNumber(slider) {
     var slidevalue = document.getElementById("slidevalue");
     slidevalue.innerHTML = "$50000 to " + "$" + slider;

};
*/