var job_c=1,experience_c=1;
var current_fs, next_fs, previous_fs; 
var left, opacity, scale; 
var animating,pass=false; 
jQuery(document).ready(function($) {
    $('input[name=submit]').prop('disabled',false);
    $('input[name=submit]').css('background-color' ,'');
    for(var i=5;i>0;i--)
    {
        $('#exp'+i).hide();
        $('#brand'+i).hide();

    }
    var today = new Date();
    $('#datepicker').attr('placeholder',today.getMonth()+'/'+today.getDate()+'/'+today.getFullYear());

    if(!document.getElementById("profile")){
        current_fs = $('.nextexperience').parent().parent();
        next_fs = current_fs.next();
    }
    else if(!document.getElementById("experience")){
        current_fs = $('.nextavailability').parent().parent();
        next_fs = current_fs.next()
    }
    else if(!document.getElementById("availability")){
        current_fs = $('.nextlegal').parent().parent();
        next_fs = current_fs.next()
    }
    else{
        current_fs = $('.nextprofile').parent().parent();
        next_fs = current_fs.next()
    }
});

$(function() {
        

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
            $(".nextlegal").click();
          });


        //Start Click events
        $(".nextprofile").click(function() {

            //if(pass){
                pass=false;
            if (animating) return false;

            animating = true;
            current_fs = $(this).parent().parent();
            next_fs = $(this).parent().parent().next();
            
            var datos2 = {
                '_token': $('input[name*=_token]').val(),
                'gender':getCheckBoxState($('input[id=gender]')),
                'height':$('select[name=height]').val(),
                'weight':$('input[name=weight]').val(),
                'eyecolor':$('select[name=eyecolor]').val(),
                'haircolor':$('select[name=haircolor]').val(),
                'hairlength':$('select[name=hairlength]').val(),
                'tshirt':$('select[name=tshirt]').val(),
                'pantsize':$('select[name=pantsize]').val(),
                'shoesize':$('select[name=shoesize]').val(),
                'chest':$('select[name=chest]').val(),              /**/
                'jacketsize':$('select[name=jacketsize]').val(),    /*checar que ingresar si es hombre o mujer no ingresar todo*/
                'waist':$('select[name=waist]').val(),              /**/
                'waistfemale':$('select[name=waistfemale]').val(),  /**/
                'hips':$('select[name=hips]').val(),                /**/
                'dressize':$('select[name=dressize]').val(),                                     /**/
                'nflanguage':$('select[name=nflanguage]').val(),
                'slanguage':$('select[name=slanguage]').val(),
                'englishacent':getCheckBoxState($('input[id=englishacent]')),
                'englishfuently':getCheckBoxState($('input[id=englishfuently]')),
                'tatoos':getCheckBoxState($('input[id=tatoos]')),
                'piercings':getCheckBoxState($('input[id=piercings]')),

                /*
                *aqui logica referencia ruta fotos
                */
            };
            
            $.ajax({
            url: 'ProfAdd',
            type: 'POST',
            data: datos2,
            dataType: 'JSON',
            dataFilter: function (data, type){return data.replace(",", "");if (type === 'json'){var parsed_data = JSON.parse(data);}},
            error: function (data) {
                details = JSON.parse(data.responseText);
                $('.top-left').notify({
                message: { text: details.message },
                type:'blackgloss'
              }).show();
                $( "input" ).val( '' );$( "select" ).val( 'State' );

                /*if(details.errorcode=='200')

                else
                    duplicated = false;*/
            }
            });

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
                    location.reload();
                    jQuery(document).scrollTop( 0 );
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
            var datos3 = {
                '_token': $('input[name*=_token]').val(),
                /*aqui logica para brands y jobs*/
                'hmevents':$('select[name=hmevents]').val(),
                'hlevents':$('select[name=hlevents]').val(),
                'hmactivated':$('select[name=hmactivated]').val(),
                'hmbrands':$('select[name=hmbrands]').val(),
                'tabcertified':getCheckBoxState($('input[id=tabcertified]')),
                /*aqui logica ruta imagen certificacion TABC*/
                'skills':$('textarea[name=skills]').val(),
                'xptech':getCheckBoxState($('input[id=xptech]')),
                'cap_info':getCheckBoxState($('input[id=cap_info]')),
                'xpsocial':getCheckBoxState($('input[id=xpsocial]')),
                'educationlevel':$('select[name=educationlevel]').val(),
                'emodeling':getCheckBoxState($('input[id=emodeling]')),
                'flashmg':getCheckBoxState($('input[id=flashmg]')),
                'tradeshow':getCheckBoxState($('input[id=tradeshow]')),
                'sampling':getCheckBoxState($('input[id=sampling]')),
                'indoor':getCheckBoxState($('input[id=indoor]')),
                'driving':getCheckBoxState($('input[id=drivingdriving]')),
                'hostess':getCheckBoxState($('input[id=hostess]')),
                'promos':getCheckBoxState($('input[id=promos]')),
                'techp':getCheckBoxState($('input[id=techp]')),
                'streeteam':getCheckBoxState($('input[id=streeteam]')),
                'demostore':getCheckBoxState($('input[id=demostore]')),
                'natours':getCheckBoxState($('input[id=natours]')),
                'liquor':getCheckBoxState($('input[id=liquor]')),
                'outdoor':getCheckBoxState($('input[id=outdoor]')),
                'costume':getCheckBoxState($('input[id=costume]')),
                'setbd':getCheckBoxState($('input[id=setbd]')),
                'retailsales':getCheckBoxState($('input[id=retailsales]')),
                'bambass':getCheckBoxState($('input[id=bambass]')),
                'teaml':getCheckBoxState($('input[id=teaml]')),
                'emcee':getCheckBoxState($('input[id=emcee]')),
                'model':getCheckBoxState($('input[id=model]')),
                'driver':getCheckBoxState($('input[id=driver]')),
            };
            console.log(datos3);
            $.ajax({
            url: 'XpAdd',
            type: 'POST',
            data: datos3,
            dataType: 'JSON',
            dataFilter: function (data, type){return data.replace(",", "");if (type === 'json'){var parsed_data = JSON.parse(data);}},
            error: function (data) {
                details = JSON.parse(data.responseText);
                $('.top-left').notify({
                message: { text: details.message },
                type:'blackgloss'
              }).show();
                $( "input" ).val( '' );$( "select" ).val( 'State' );

            }
            });

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
                    location.reload();
                    jQuery(document).scrollTop( 0 );
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

            var datos4 = {
                '_token': $('input[name*=_token]').val(),
                'licensev':getCheckBoxState($('input[id=licensev]')),
                /*aqui logica licencia de conducir PATH*/

                'ownmb':getCheckBoxState($('input[id=ownmb]')),
                'apitm':getCheckBoxState($('input[id=apitm]')),
                'days':getCheckBoxState($('input[id=days]')),
                'cmdays':getCheckBoxState($('input[id=cmdays]')),
                'cmmonths':getCheckBoxState($('input[id=cmmonths]')),
                'sshift':getCheckBoxState($('input[id=sshift]')),
                'lshift':getCheckBoxState($('input[id=lshift]')),
                'mshift':getCheckBoxState($('input[id=mshift]')),
                'ashift':getCheckBoxState($('input[id=ashift]')),
                'lmshift':getCheckBoxState($('input[id=lmshift]')),
                'hshift':getCheckBoxState($('input[id=hshift]')),
                'bshift':getCheckBoxState($('input[id=bshift]')),
            };
            
            $.ajax({
            url: 'AvAdd',
            type: 'POST',
            data: datos4,
            dataType: 'JSON',
            dataFilter: function (data, type){return data.replace(",", "");if (type === 'json'){var parsed_data = JSON.parse(data);}},
            error: function (data) {
                details = JSON.parse(data.responseText);
                $('.top-left').notify({
                message: { text: details.message },
                type:'blackgloss'
              }).show();

                $( "input" ).val( '' );$( "select" ).val( 'State' );
            }
            });

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
                    location.reload();
                },
                easing: 'easeInOutBack'
            });
       // }
        
        });
        $(".nextlegal").click(function() {

            var datos5 = {
                '_token': $('input[name*=_token]').val(),
                'answ1':getCheckBoxState($('input[id=answ1]')),
                'answ2':getCheckBoxState($('input[id=answ2]')),
                'legally':getCheckBoxState($('input[id=legally]')),
                'ssn':$('input[name=ssn]').val(),
                'termsofs':getCheckBoxState($('input[id=termsofs]')),/*aqui logica Terms of Service*/
                
            };
            
            $.ajax({
            url: 'LgAdd',
            type: 'POST',
            data: datos5,
            dataType: 'JSON',
            dataFilter: function (data, type){return data.replace(",", "");if (type === 'json'){var parsed_data = JSON.parse(data);}},
            error: function (data) {
                details = JSON.parse(data.responseText);
                $('.top-left').notify({
                message: { text: details.message },
                type:'blackgloss'
              }).show();
                //location.reload();
                console.log(location.reload());
            }
            });
            /*redirect to Login or other view from controller*/
           //location.reload();
        });
        //End Click events
        
        //Start Checkbox events
        $('#tabcertified').click(function(){

            if($("#tabcertified").is(':checked'))
            {
                /*$('#upload_tabc').prop('disabled',false);
                $('#upload_tabc').css('background-color' ,'');*/
                $('#upload_tabc_').show('slow');
            }
            else
            {
                /*$('#upload_tabc').prop('disabled',true);
                $('#upload_tabc').css('background-color' ,'gray');*/
                 $('#upload_tabc_').hide('slow');
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
                $('input[name*=ship]').prop('disabled',true);
                $('select[name*=ship]').prop('disabled',true);
            }
            else
            {
                $('input[name*=ship]').prop('disabled',false);
                $('select[name*=ship]').prop('disabled',false);
            }
        });

        $('#englishacent').click(function() {
            if($("#englishacent").is(':checked'))
            {
                $('.englishacent_yes' ).fadeTo(400, 1);
                $('.englishacent_no' ).fadeTo(400, 0);
            }
            else
            {
                $('.englishacent_yes' ).fadeTo(400, 0);
                $('.englishacent_no' ).fadeTo(400, 1);
            }
        });
        $('#englishfuently').click(function() {
            if($("#englishfuently").is(':checked'))
            {
                $('.englishfuently_yes' ).fadeTo(400, 1);
                $('.englishfuently_no' ).fadeTo(400, 0);
            }
            else
            {
                $('.englishfuently_yes' ).fadeTo(400, 0);
                $('.englishfuently_no' ).fadeTo(400, 1);
            }
        });
        $('#tatoos').click(function() {
            if($("#tatoos").is(':checked'))
            {
                $('.tatoos_yes' ).fadeTo(400, 1);
                $('.tatoos_no' ).fadeTo(400, 0);
            }
            else
            {
                $('.tatoos_yes' ).fadeTo(400, 0);
                $('.tatoos_no' ).fadeTo(400, 1);
            }
        });
        $('#piercings').click(function() {
            if($("#piercings").is(':checked'))
            {
                $('.piercings_yes' ).fadeTo(400, 1);
                $('.piercings_no' ).fadeTo(400, 0);
            }
            else
            {
                $('.piercings_yes' ).fadeTo(400, 0);
                $('.piercings_no' ).fadeTo(400, 1);
            }
        });

        /*$('#gender').click(function(){
            if($("#gender").is(':checked'))
            {
            }
            else
            {
            }
        });*/
        //End Checkbox events

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

    function getCheckBoxState(checkbox)
    {
        if(checkbox.is(':checked'))
            return 1;
        else
            return 0;
    }
$(function () {
    $('#datepicker').fdatepicker({
        format: 'mm-dd-yyyy',
        disableDblClickSelection: true
    });
});