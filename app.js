function query_qr_code_status(){
  $.get( 'http://119.91.29.100:8000/qr_codes/query?' +
    $.param({'doctor_token': window.authentication_token, 'qr_code_token': window.qr_code_data.qr_code_token})).done(function( data ) {
      if( data.approved ) {
        alert('Going to patient page');
        window.location.href = "/dashboard_scanned.html";
      } else {
        console.log('waiting for approval');
        setTimeout(function() {
          query_qr_code_status();
        }, 5 * 1000);
      }
    });
}
function doctor_signin() {
  $.post( 'http://119.91.29.100:8000/doctors/signin?' +  $.param({'username': 'nick', password:'1234'}))
    .done(function( data ) {
      window.authentication_token = data.authentication_token
      $.get( 'http://119.91.29.100:8000/qr_codes/create?' +  $.param({'doctor_token': data.authentication_token}))
        .done(function( data ) {
          window.qr_code_data = data;
          let image_src = 'http://119.91.29.100:8000/qr_codes/:qr_code_token?qr_code_token=' + data.qr_code_token;
          $('#BIG_QR').attr('src', image_src);
          setTimeout(function() {
            query_qr_code_status();
          }, 5 * 1000);
        });
    });
}
