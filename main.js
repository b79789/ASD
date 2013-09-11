// Brian Stacks 9/4/13
// ASD--1309

$("#home").on('pageinit', function(){
	//code needed for home page goes here
});


$("#form").on('pageinit', function(){
	//code for form page goes here.

	function validate(){
	var valForm = $("#addForm"),
	    myFormErrorLink = $("#addFormErrorLink");


	valForm.validate({
		invalidHandler: function(form, validator){
			myFormErrorLink.on();
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
	});
}

		var parseAddForm = function(data){
	//use form data here
		var myId = Math.floor(Math.random()*9000009);
		// get all form value and store in object
		var myItem               = {};
			myItem.firstName     = ["First Name:", $("#formFirstName").val()];
			myItem.lastName      = ["Last Name:", $("#formLastName").val()];
			myItem.formEmail     = ["Email:", $("#formEmail").val()];
			myItem.formPhone     = ["Phone Number", $("#formPhone").val()];
		//Save data to local storage Use stringify to covert object
		localStorage.setItem(myId, JSON.stringify(myItem));
		alert("Reservation Saved!");
}

function showItems(){
	for(var i in localStorage)
	{
	    console.log(localStorage[i]);
	}
	
	for(var i=0, len=localStorage.length; i<len; i++) {
	    var key = localStorage.key(i);
	    var value = localStorage[key];
	    console.log(key + " => " + value);
	}
}


	
	function makeItemLinks(key,linksLi){
		var editLink = document.createElement("a");
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Info";
		editLink.addEventListener("click",editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete info";
		deleteLink.addEventListener("click",deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}
	
	
	function showUserData(){
		//toggleControl("on");	
		if(localStorage.length === 0){
			alert("There is no data in local Storage so default data added.");
			//autoFillData();
		}
		// write data from local storage to browser
		var makeDiv = document.createElement("div");
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement("ul");
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		for(i=0, j=localStorage.length;i<j;i++){
			var makeli = document.createElement("li");
			var linksLi = document.createElement("li")
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//convert string back to object
			var obj = JSON.parse(value);
			var makeSubList = document.createElement("ul");
			makeli.appendChild(makeSubList);
			getImage(obj.places[1],makeSubList);
			for(var n in obj){
				var makeSubLi = document.createElement("li");
				makeSubList.appendChild(makeSubLi);
				var optSubText = obj[n][0]+" : "+obj[n][1];
				makeSubLi.innerHTML = optSubText;
				makeSubList.appendChild(linksLi)
			}
			makeItemLinks(localStorage.key(i), linksLi);
		}
	}
	
	function getImage(catName,makeSubList){
		var imageLi = document.createElement("li");
		makeSubList.appendChild(imageLi);
		var newImage = document.createElement("img")
		var setSource = newImage.setAttribute("src", "img/"+ catName + ".png");
		imageLi.appendChild(newImage);
	}
	
	
	
	function makeItemLinks(key,linksLi){
		var editLink = document.createElement("a");
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Info";
		editLink.on("click",editItem);
		editLink.html(editText);
		linksLi.append(editLink);
		
		var deleteLink = document.createElement("a");
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete info";
		deleteLink.on("click",deleteItem);
		deleteLink.html(deleteText);
		linksLi.append(deleteLink);
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
	//rest of javascript for page

var submitData = $("#submit");
	submitData.on("click", validate);


var clearData = $("#clearMy");
	clearData.on("click",clearUserData);

var showData = $("#showMyInfo");
	showData.on("click" ,showUserData);
	

});
	
	
	
	
	




$("#photos").on('pageinit', function(){
	//code for  photos page goes here.
		
});

$("#contactUs").on('pageinit', function(){
	//code for contactUs page goes here.
		
});
