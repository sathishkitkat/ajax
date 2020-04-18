
$('.btn').click(function() {
  
  $('.text').text('loading . . .');

  $.ajax({ 
    type:"GET", // GET = requesting data
    url:"https://codechecker.spotknack.com/check/code", 
    success: function(data) { 
      $('.text').text(JSON.stringify(data)); 
    },
    
  });
  
});