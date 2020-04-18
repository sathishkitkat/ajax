function changeLang(code_lang){
	var lang = code_lang;
	$('#coding').text(' ');
	if(lang == "c"){
		
		$('#coding').text("#include <stdio.h>\nint main() {\n\n//Your code here\n\nreturn 0;\n}");
	}
	if(lang == "python"){
		$('#coding').text(' ');
	}
	if(lang == "php"){
		$('#coding').text('<?php \n\n//Your code here\n\n?>');
	}
	if(lang == "cpp"){
		$('#coding').text('#include <iostream>\nusing namespace std;\nint main() {\n\n//Your code here\n\nreturn 0;\n}');
	}
}

$('.btn').click(function() {
	
	$('.text').text('Please wait . . .');
	$('#logs').text('Processing Please wait . . .\n');
	setTimeout(function(){ 
		$('#logs').append("\ncode uploaded!\n"); }, 1500);
		setTimeout(function(){ 
			$('#logs').append("Compiling..."); 
			setTimeout(function(){ 
				$('#logs').append("25%\n"); 
				setTimeout(function(){ 
					$('#logs').append("Compiling...56%\n"); 
					setTimeout(function(){ 
						$('#logs').append("Compiling...100%\n"); 
						$.ajax({ 
							type:"GET", // GET = requesting data
							url:"https://codechecker.spotknack.com/check/code", 
							success: function(data) { 
								if(data != ""){
								$('#logs').append("Your output is beign generated!\n");
								setTimeout(function(){ 
									$('#logs').append("Output generated!\n");
									setTimeout(function(){ 
							  $('.text').text(JSON.stringify(data.message)); }, 800);
								},580);
							}else{
								$('#logs').append("Error in generating output. Please try again later!\n");
							}
							},
							
						  });
					}, 1500);}, 750);
				}, 1000);
		}, 1500);
			
				
					

	
  });
