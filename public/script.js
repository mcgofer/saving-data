$('.btn').on('click', function(){
// alert('yo')
  $.ajax({
        method: "GET",
        url: 'file',
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    }); 

});  

$('.post-btn').on('click', function() {
    // alert('hey');

    $.ajax({
        method: "POST",
        url: 'file',
        data: { "input": $('.text-input').val()},
        dataType: "json",
        success: function(data) {
          console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus);
        }
      });    

});