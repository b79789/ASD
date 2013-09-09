// Brian Stacks 9/4/13
// ASD--1309

$("#home").on('pageinit', function(){
	//code needed for home page goes here
});

$("#form").on('pageinit', function(){
	//code for form page goes here.
	
	var valForm = $("#form"),
	    myFormErrorLink = $("#addFormErrorLink");
	
		
	valForm.validate({
		invalidHandler: function(form, validator){
			myFormErrorLink.click();
			var html = "";
			for(key in validator.submitted){
				var myLabel = $("label[for^='"+ key +"']").not("[generated]");
				var legend = myLabel.closest("fieldset").find(".ui-controlgroup-label");
				var fieldName = legend.length ? legend.text() : myLabel.text();
				html += "<li>" + fieldName + "</li>";
			};
			
			$("#errorPage ul").html(html);
		},
		submitHandler: function(){
			var data = valForm.serializeArray();
			parseAddForm(data);

		}
		})
	
		var parseAddForm = function(data){
	//use form data here
		var myId = Math.floor(Math.random()*9000009);
		// get all form value and store in object
		var myItem               = {};
			myItem.firstName     = ["First Name:", $("#formFirstName").value];
			myItem.lastName      = ["Last Name:", ("#formLastName").value];
			myItem.formEmail     = ["Email:", $("#formEmail").value];
			myItem.formPhone     = ["Phone Number", $("#formPhone").value];
		//Save data to local storage Use stringify to covert object
		localStorage.setItem(myId, JSON.stringify(myItem));
		alert("Reservation Saved!");
}


function clearUserData(){
		if(localStorage.length === 0){
			alert("There is no data!")
		}else{
			localStorage.clear();
			alert("All info wiped!");
			window.location.reload();
			return false;
		}
	}
	var submitData = $("#submit");
	submitData.on("click", parseAddForm)
	
var clearData = $("#clearMy");
	clearData.on("click",clearUserData);
	
});
	//rest of javascript for page
	
	
	
	




$("#photos").on('pageinit', function(){
	//code for  photos page goes here.
		
});

$("#contactUs").on('pageinit', function(){
	//code for contactUs page goes here.
		
});
