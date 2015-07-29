jQuery(document).ready(function($) {
    for(var i=5;i>0;i--)
    {
        $('#exp'+i).hide();
        $('#brand'+i).hide();

    }
    var today = new Date();
    $('#datepicker').attr('placeholder',today.getMonth()+'/'+today.getDate()+'/'+today.getFullYear());
});

$(function() {
        var current_fs, next_fs, previous_fs; 
        var left, opacity, scale; 
        var animating,pass=false; 
        var job_c=1,experience_c=1;

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
        $('#profile')
          .on('invalid.fndtn.abide', function () {
            pass=false;
            
          })
          .on('valid.fndtn.abide', function () {
            pass=true;

            $(".nextprofile").click();
          });
        $('#experience')
          .on('invalid.fndtn.abide', function () {
            pass=false;
          })
          .on('valid.fndtn.abide', function () {
            pass=true;
            $(".nextexperience").click();
          });
        $('#availability')
          .on('invalid.fndtn.abide', function () {
            pass=false;
          })
          .on('valid.fndtn.abide', function () {
            pass=true;
            $(".nextavailability").click();
          });
        $('#legal')
          .on('invalid.fndtn.abide', function () {
            pass=false;
          })
          .on('valid.fndtn.abide', function () {
            pass=true;
            console.log('redirige al sign in');
            //$(".nextlegal").click();
          });

        $(".nextbasic").click(function() {
            
            //if(pass){
                pass=false;
            if (animating) return false;

            animating = true;
            current_fs = $(this).parent().parent();
            next_fs = $(this).parent().parent().next();

            //console.log("Legal Name: "+$('input[name=first_name]').val()+$('input[name=last_name]').val());
            //console.log('datex: '+$('input[name=date]').val());
            // console.log('password: '+$('input[id=password]').val());
            
            var datos = {

                '_token': $('input[name*=_token]').val(),
                'legalname':$('input[name=first_name]').val()+' '+$('input[name=last_name]').val(),
                'nickname':$('input[name=nickname]').val(),
                'date':$('input[name=date]').val(),
                'email':$('input[name=email]').val(),
                'password':$('input[id=password]').val(),
                
                
            };
            
            $.ajax({
            url: 'BIAdd',
            type: 'POST',
            data: datos,
            dataType: 'JSON',
            error: function (data) {
                console.log('Exito: '+data.responseText);
                $('.top-left').notify({
                message: { text: data.responseText }
              }).show();
            }
            });

            /*
'':$('id[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
                '':$('input[name=]').val(),
            */

            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            next_fs.show();
            current_fs.animate({
                opacity: 0
            }, {

                step: function(now, mx) {
                    scale = 1 - (1 - now) * 0.2;
                    left = (now * 50) + "%";
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')'
                    });

                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });

                },
                duration: 800,
                complete: function() {
                    current_fs.hide();
                    animating = false;
                },
                easing: 'easeInOutBack'
            });
       // }
        });
        
        $('#tabcertified').click(function(){
            if($("#tabcertified").is(':checked'))
            {
                $('#upload_tabc').prop('disabled',false);
                $('#upload_tabc').css('background-color' ,'');
            }
            else
            {
                $('#upload_tabc').prop('disabled',true);
                $('#upload_tabc').css('background-color' ,'gray');
            }
        });
        
        $('#licensev').click(function(){
            if($("#licensev").is(':checked'))
            {
                $('#upload_drivlic').prop('disabled',false);
                $('#upload_drivlic').css('background-color' ,'');
            }
            else
            {
                $('#upload_drivlic').prop('disabled',true);
                $('#upload_drivlic').css('background-color' ,'gray');
            }
        });
        
        $('#same_as_home_mailing').click(function(){
            if($("#same_as_home_mailing").is(':checked'))
            {
                $('input[name*=mail_adress_]').prop('disabled',true);
                $('select[name*=mail_adress_]').prop('disabled',true);
            }
            else
            {
                $('input[name*=mail_adress_]').prop('disabled',false);
                $('select[name*=mail_adress_]').prop('disabled',false);
            }
        });

        $(".nextprofile").click(function() {

            console.log('image name: '+file.name);
            //$checkbox = $('#tabcertified').value();

            //if(pass){
                pass=false;
            if (animating) return false;

            animating = true;
            current_fs = $(this).parent().parent();
            next_fs = $(this).parent().parent().next();
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            next_fs.show();
            current_fs.animate({
                opacity: 0
            }, {

                step: function(now, mx) {
                    scale = 1 - (1 - now) * 0.2;
                    left = (now * 50) + "%";
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')'
                    });

                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function() {
                    current_fs.hide();
                    animating = false;
                },
                easing: 'easeInOutBack'
            });
        //}
        
        });
        $(".nextexperience").click(function() {


            //if(pass){
                pass=false;
            if (animating) return false;

            animating = true;
            current_fs = $(this).parent().parent();
            next_fs = $(this).parent().parent().next();
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            next_fs.show();
            current_fs.animate({
                opacity: 0
            }, {
                step: function(now, mx) {
                    scale = 1 - (1 - now) * 0.2;
                    left = (now * 50) + "%";
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')'
                    });

                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });
                },
                duration: 800,
                complete: function() {
                    current_fs.hide();
                    animating = false;
                },
                easing: 'easeInOutBack'
            });
        //}
        
        });
        $(".nextavailability").click(function() {
            //if(pass){
                pass=false;
            if (animating) return false;

            animating = true;
            current_fs = $(this).parent().parent();
            next_fs = $(this).parent().parent().next();
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            next_fs.show();
            current_fs.animate({
                opacity: 0
            }, {

                step: function(now, mx) {
                    scale = 1 - (1 - now) * 0.2;
                    left = (now * 50) + "%";
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')'
                    });

                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });

                },
                duration: 800,
                complete: function() {
                    current_fs.hide();
                    animating = false;
                },
                easing: 'easeInOutBack'
            });
       // }
        
        });
        $(".nextlegal").click(function() {
			console.log('Redirect to Login or other view');
            /*//if(pass){
                pass=false;
            if (animating) return false;

            animating = true;
            current_fs = $(this).parent().parent();
            next_fs = $(this).parent().parent().next();
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            next_fs.show();
            current_fs.animate({
                opacity: 0
            }, {

                step: function(now, mx) {
                    scale = 1 - (1 - now) * 0.2;
                    left = (now * 50) + "%";
                    opacity = 1 - now;
                    current_fs.css({
                        'transform': 'scale(' + scale + ')'
                    });

                    next_fs.css({
                        'left': left,
                        'opacity': opacity
                    });

                },
                duration: 800,
                complete: function() {
                    current_fs.hide();
                    animating = false;
                },
                easing: 'easeInOutBack'
            });
        }*/
        
        });



        $(".submit").click(function() {

            return false;

        })

        $('#add_exp').click(function(){
            if(experience_c<6){$('#exp'+experience_c).show('slow');experience_c++;}
            return false;
        });

        $( "#del_exp" ).click(function(){
            if(experience_c>1){$('#exp'+(experience_c-1)).hide('slow');experience_c--;}
            return false;
        });

        $('#add_brand').click(function(){
            if(job_c<6){$('#brand'+job_c).show('slow');job_c++;}
            return false;
        });

        $( "#del_job" ).click(function(){
            if(job_c>1){$('#brand'+(job_c-1)).hide('slow');job_c--;}
            return false;
        });

    });
$(function () {
    $('#datepicker').fdatepicker({
        format: 'mm-dd-yyyy',
        disableDblClickSelection: true
    });
});

/*$.ajax({
            url: 'DBAdd',
            type: 'POST',
            data: {'_token': $('input[name*=_token]').val()},
            dataType: 'JSON',
            error: function (data) {
                console.log('Exito: '+data.responseText);
                $('.top-left').notify({
                message: { text: data.responseText }
              }).show();
            }
            });*/