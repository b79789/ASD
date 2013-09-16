$(document).on('pageinit', function () {
    console.log("good");
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
});