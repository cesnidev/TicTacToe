jQuery(document).ready(function($) {
    var today = new Date();
    $('#datepicker').attr('placeholder',today.getMonth()+'/'+today.getDate()+'/'+today.getFullYear());
});

$(function() {
        var current_fs, next_fs, previous_fs; 
        var left, opacity, scale; 
        var animating,pass=false; 
	
        $('#basicuser')
          .on('invalid.fndtn.abide', function () {
            pass=false;
            var today = new Date();
            var inputdate = new Date($('#datepicker').val());
          })
          .on('valid.fndtn.abide', function () {
            pass=true;
            $(".nextbasic").click();
          });
        $(".nextbasic").click(function() {
			var duplicated =false;
			$.ajax({
            url: 'DCheck',
            type: 'POST',
            data: {'_token': $('input[name=_token]').val(),'email':$('input[name=email]').val()},
            dataType: 'JSON',
            dataFilter: function (data, type){return data.replace(",", "");if (type === 'json'){var parsed_data = JSON.parse(data);}},
            error: function (data) {
				console.log(data.responseText);
                details = JSON.parse(data.responseText);
                $('.top-left').notify({
                message: { text: details.message },
                type:'blackgloss'
              }).show();
			  if(details.errorcode=='1062')
				duplicated = true;
			  else
				duplicated = false;
			  animateBasicInfo(duplicated);
            }
            });
        });
		
		function animateBasicInfo(animate)
		{
			if(animate==false)
			{
            //if(pass){
                pass=false;
            if (animating) return false;

            animating = true;
            current_fs = $(".nextbasic").parent().parent();
            next_fs = $(".nextbasic").parent().parent().next();
			

            var same;
            if($('#same_as_home_mailing').is(':checked'))
            {
                $('input[name=shipadress1]').val($('input[name=address1]').val());
                $('input[name=shipadress2]').val($('input[name=address2]').val());
                $('input[name=shipcity]').val($('input[name=city]').val());
                $('select[name=shipstate]').val($('select[name=state]').val());
                $('input[name=shipzip]').val($('input[name=zip]').val());
            }
            
            var datos1 = {
                '_token': $('input[name=_token]').val(),
                'firstname':$('input[name=first_name]').val(),
                'lastname':$('input[name=last_name]').val(),
                'mininitial':$('input[name=midinit_name]').val(),
                'legalname':$('input[name=first_name]').val()+' '+$('input[name=last_name]').val(),
                'nickname':$('input[name=nickname]').val(),
                'dob':$('input[name=date]').val(),
                'email':$('input[name=email]').val(),
                'password':$('input[id=password]').val(),
                'referred':$('input[name=referred]').val(),
                'address1':$('input[name=address1]').val(),
                'address2':$('input[name=address2]').val(),
                'city':$('input[name=city]').val(),
                'state':$('select[name=state]').val(),
                'zip':$('input[name=zip]').val(),
                'phone':$('input[name=phone]').val(),

                'shipadress1':$('input[name=shipadress1]').val(),
                'shipadress2':$('input[name=shipadress2]').val(),
                'shipcity':$('input[name=shipcity]').val(),
                'shipstate':$('select[name=shipstate]').val(),
                'shipzip':$('input[name=shipzip]').val(),

                'emrgncyfullname':$('input[name=emrgncyfirst_name]').val()+' '+$('input[name=emrgncylast_name]').val(),
                'emrgncyrelation':$('select[name=emrgncyrelation]').val(),
                'emrgncyadress1':$('input[name=emrgncyadress1]').val(),
                'emrgncyadress2':$('input[name=emrgncyadress2]').val(),
                'emrgncycity':$('input[name=emrgncycity]').val(),
                'emrgncystate':$('select[name=emrgncystate]').val(),
                'emrgncyzip':$('input[name=emrgncyzip]').val(),
                'emrgncyphone':$('input[name=emrgncyphone]').val(),
                'emrgncyinfo':$('textarea[name=emrgncyinfo]').val(),
            };
            
            $.ajax({
            url: 'BIAdd',
            type: 'POST',
            data: datos1,
            dataType: 'JSON',
            dataFilter: function (data, type){return data.replace(",", "");if (type === 'json'){var parsed_data = JSON.parse(data);}},
            error: function (data) {
                details = JSON.parse(data.responseText);
                $('.top-left').notify({
                message: { text: details.message },
                type:'blackgloss'
              }).show();
            }
            });

            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
			$( "input" ).val( '' );$( "select" ).val( 'State' );
			$(location).attr('href','/home');
		}
		}

        
        $('#same_as_home_mailing').click(function(){
            if($("#same_as_home_mailing").is(':checked'))
            {
                $('input[name*=ship]').prop('disabled',true);
                $('select[name*=ship]').prop('disabled',true);
            }
            else
            {
                $('input[name*=ship]').prop('disabled',false);
                $('select[name*=ship]').prop('disabled',false);
            }
        });
        $(".submit").click(function() {

            return false;

        })

    });
$(function () {
    $('#datepicker').fdatepicker({
        format: 'mm-dd-yyyy',
        disableDblClickSelection: true
    });
});