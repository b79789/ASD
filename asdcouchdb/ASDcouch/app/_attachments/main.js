$(document).on('pageinit', function () {
	
	
	
	function validate() {
        var valForm = $("#addForm"),
            myFormErrorLink = $("#addFormErrorLink");


        valForm.validate({
            invalidHandler: function (form, validator) {
                myFormErrorLink.on();
                var html = "";
                for (var key in validator.submitted) {
                    var myLabel = $("label[for^='" + key + "']").not("[generated]");
                    var legend = myLabel.closest("fieldset").find(".ui-controlgroup-label");
                    var fieldName = legend.length ? legend.text() : myLabel.text();
                    html += "<li>" + fieldName + "</li>";
                }

                $("#errorPage ul").html(html);
            },
            submitHandler: function () {
                var data = valForm.serializeArray();
                parseAddForm(data);

            }
        });
    }

    var parseAddForm = function (data) {
        //use form data here
        var myId = Math.floor(Math.random() * 9000009);
        // get all form value and store in object
        var myItem = {};
        myItem.firstName = ["First Name:", $("#formFirstName").val()];
        myItem.lastName = ["Last Name:", $("#formLastName").val()];
        myItem.formEmail = ["Email:", $("#formEmail").val()];
        myItem.formPhone = ["Phone Number", $("#formPhone").val()];
        //Save data to local storage Use stringify to covert object
        localStorage.setItem(myId, JSON.stringify(myItem));
        alert("Reservation Saved!");
    };
    
    function showItems() {
            for (var i in localStorage) {
                console.log(localStorage[i]);
            }

            for (i = 0, len = localStorage.length; i < len; i++) {
                var key = localStorage.key(i);
                var value = localStorage[key];
                console.log(key + " => " + value);
            }
        }
        
        function clearUserData(key) {
            $.couch.db("asdproject").removeDoc(key, function(){
	            var mynewobj = {
	            success: function(){
		            console.log("deleted!");
	            },
	            error: function(){
		            console.log("Not deleted");
	            }
            }
            })
        }
        
        $("#showMyInfo").on("click", function(e){
			e.preventDefault();
			var fName = $("#formFirstName").val();
			var lName = $("#formLastName").val();
			var eMail = $("#formEmail").val();
			var pNum = $("#formPhone").val();
				$("#display ul").html("<div data-role='collapsible-set'>" + "<li>" + "<a href='#'>" +"<section data-role='collapsible'>"+'  First Name: '  + fName + "</a>"+"</section>" +"<br>" + "<li>" + "<a href='#'>" +"<section data-role='collapsible'>"+'  Last Name:  ' +  lName  +"</a>"+"</section>" + "<br>" +"<li>" + "<a href='#'>" +"<section data-role='collapsible'>"+'  Email:  ' + eMail + "</a>"+"</section>" +"<br>" +"<li>" + "<a href='#'>" +"<section data-role='collapsible'>"+'  Phone Number:  ' + pNum + "</a>"+"</section>" + "</a>"+ "</li>" + "</div>");
})

    
   
    $.ajax({
    	"url":"_view/name",
    	"dataType": "json",
    	"success": function(data){
    		$.each(data.rows,function(index, name){
    			var Email = name.value.formEmail;
    			var firstName = name.value.formFirstName;
    			var lastName = name.value.formLastName;
    			var phone = name.value.formPhone;
    			$("#dataView").append(
    				$("<li>").append(
    					$("<a>").attr("href","#")
    						.text(Email)
    						
    				)
    			);
    			$("#dataView").append(
    				$("<li>").append(
    					$("<a>").attr("href","#")
    						.text(firstName)
    						
    				)
    			);
    			$("#dataView").append(
    				$("<li>").append(
    					$("<a>").attr("href","#")
    						.text(lastName)
    						
    				)
    			);
    			$("#dataView").append(
    				$("<li>").append(
    					$("<a>").attr("href","#")
    						.text(phone)
    						
    				)
    			);
    		});
    		$("#dataView").listview("refresh");
    	}
    });
    var submitData = $("#submit");
    submitData.on("click", validate);
    
    $(".delete").on("click", function(){
    	var id = $(this).data("id");
    	var rev = $(this).data("rev");
    	
    	var key = {};
    	key._id= id;
    	key._rev = rev;
    	deleteData(key);
    	alert("Deleted!");
    })
});