// JavaScript Document
var num_photos = 1;


$(function()
{
	//$("#date_box").toggle();
	$(".add_date").click(function(){
			$("#date_box").toggle();
			
			var form_action = $("#form_add_news").attr("action");
			
			var lstIdx = form_action.lastIndexOf("?");
			var form_action_modif = form_action.substring(0, lstIdx);
			
			var last_part_action = "";
			
			if($("#date_box").css("display") == "block")
			{
				last_part_action = "date=manual";
			}
			else
			{
				last_part_action = "date=auto";	
			}
			
			//now change the action
			$("#form_add_news").attr("action", form_action_modif + "?" + last_part_action);
		});
	
	$("#uploadfile02").attr('disabled', true);
	$("#uploadfile03").attr('disabled', true);
	$("#uploadfile04").attr('disabled', true);
	$("#uploadfile05").attr('disabled', true);
	
	
	
	$(".rad1").attr('disabled', false);
	$(".rad2").attr('disabled', true);
	$(".rad3").attr('disabled', true);
	$(".rad4").attr('disabled', true);	
	$(".rad5").attr('disabled', true);
	
	$("#uploadfile01").change(function(){
		$("#uploadfile02").attr('disabled', false);
		$(".rad2").attr('disabled', false);
	});
	
	$("#uploadfile02").change(function(){
		$("#uploadfile03").attr('disabled', false);
		$(".rad3").attr('disabled', false);
	});
	
	$("#uploadfile03").change(function(){
		$("#uploadfile04").attr('disabled', false);
		$(".rad4").attr('disabled', false);
	});
	
	$("#uploadfile04").change(function(){
		$("#uploadfile05").attr('disabled', false);
		$(".rad5").attr('disabled', false);
	});
	
	//stop the form from submitting if found errors (i.e. the user didn't provide a title and content for the news)	
	$("#form_add_news").submit(function(e){
		var isFormValid = true;
		
		$(".required").each(function(){
			if ($.trim($(this).val()).length == 0)
			{
				$(this).prev(".req").addClass("highlight");
				isFormValid = false;
			}
			else
			{
            	$(this).prev(".req").removeClass("highlight");
        	}
			
   		 });

		if (!isFormValid) alert("Please fill in all the required fields (indicated by *)");
	
		return isFormValid;
		
	});
	
	$("a.nav, a.navy").hover(function(){
		$(this).addClass("green");
	}, function (){
		$(this).removeClass("green");
	});
	
	//when the user clicks to add a new photo	
	/*$(".add_photo").click(function()
	{
		num_photos++;
		var sufix = "";
		
		if(num_photos <= 9)
		{
			sufix = "0" + num_photos;
		}
		else
		{
			sufix = "" + num_photos;	
		}
		
		var str_2_add = ' <tr>	<td class="spaced">Upload Image*</td>  <td  style="text-align: center" ><input type="file" class="uploadf" name="uploadfile' + sufix + '" /></td> </tr>';
		
		$("tr.insert_after").after(str_2_add);	
		
		//change the hidden field to reflect the new value of total number of photos
		$("#hid_num").val("" + num_photos);
	});	
	*/
		
	$('input:radio[name="thumbn"]').each(function(index, element) {
        var attr = $(this).attr('checked');

		// For some browsers, `attr` is undefined; for others,
		// `attr` is false.  Check for both.
		if (typeof attr !== 'undefined' && attr !== false) 
		{
			var cl = $(this).attr("class");
			
			$("input:checkbox").each(function()
			{
				if($(this).hasClass(cl))
				{
					$(this).removeAttr("checked");
					$(this).attr('disabled', true);	
					
				}
			});
		}

    });	
		
	$('input:radio[name="thumbn"]').change(function(){
		var cl = $(this).attr("class");
		
		$("input:checkbox").attr('disabled', false);
		
		$("input:checkbox").each(function()
		{
			if($(this).hasClass(cl))
			{
				$(this).removeAttr("checked");
				$(this).attr('disabled', true);	
				
			}
		});
		
		//alert("The class is " + cl);	
	});
	
	
});