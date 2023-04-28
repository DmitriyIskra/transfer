$(document).ready(function(){

    // -------- Cлайд шоу ---------//

    let fonHeader1 = $('#fon-header-1');
    let fonHeader2 = $('#fon-header-2');
    let fonHeader3 = $('#fon-header-3');

    

        fonHeader2.hide();
        fonHeader3.hide();

        function forSlide(){

            function headOneHide(){
                fonHeader1.fadeOut(1500);
            };

            function headTwoShow(){
                fonHeader2.fadeIn(1500);
            };

            function headTwoHide(){
                fonHeader2.fadeOut(1500);
            };
            function headThreeShow(){
                fonHeader3.fadeIn(1500);
            };
            function headThreeHide(){
                fonHeader3.fadeOut(1500);
            };
            function headOneShow(){
                fonHeader1.fadeIn(1500);
            };            
            setTimeout(headOneHide, 3000);
            setTimeout(headTwoShow, 4000);
            setTimeout(headTwoHide, 8000);
            setTimeout(headThreeShow, 9000);
            setTimeout(headThreeHide, 13000);
            setTimeout(headOneShow, 14000);
        };

        
        forSlide();

        function forSlide2(){

            function headOneHide(){
                fonHeader1.fadeOut(1500);
            };

            function headTwoShow(){
                fonHeader2.fadeIn(1500);
            };

            function headTwoHide(){
                fonHeader2.fadeOut(1500);
            };
            function headThreeShow(){
                fonHeader3.fadeIn(1500);
            };
            function headThreeHide(){
                fonHeader3.fadeOut(1500);
            };
            function headOneShow(){
                fonHeader1.fadeIn(1500);
            };            
            setTimeout(headOneHide, 3000);
            setTimeout(headTwoShow, 4000);
            setTimeout(headTwoHide, 8000);
            setTimeout(headThreeShow, 9000);
            setTimeout(headThreeHide, 13000);
            setTimeout(headOneShow, 14000);
        };

        setInterval(forSlide2,14001);

        // -------- Калькулятор ---------//

        let price = {
            p_car : {
                aero : {
                    alushta : 1600,
                    yalta : 2300,
                    evpatoriya : 1800,
                    zaozernoe : 2100,
                    shtormovoe : 2200,
                    popovka : 2400,
                    olenevka : 3300,
                    chernomorskoe : 3100,
                    saki : 1500,
                    priboy : 1600,
                    novofedorovka : 1500,
                    nikolaevka : 1500,
                    beregovoe_ubk : 2500,
                    beregovoe_nik : 1600,
                    beregovoe_feo : 3200,
                    peschanoe : 1700,
                    sevastopol : 2300,
                    balaklava : 2300,
                    orlovka : 2000,
                    kacha : 2000,
                    sudak : 2500,
                    noviysvet: 2700,                
                    feodosiya : 3000,
                    kerch : 4500,
                    koktebel : 3000,
                    ordzhonikidze : 3000,
                    ribache : 2500,
                    solnechnogorskoe : 2300,
                    malorechenskoe : 2300,
                    partenit : 1700,
                    gurzuf : 1800,
                    livadiya : 2400,
                    gaspra : 2500,
                    alupka : 2600,
                    simeiz : 2600,
                    kaciveli : 2600,
                    ponizovka : 2600,
                    sanatornoye : 2600,
                    foros : 2600
                },
                trainstation : {
                    alushta : 1600,
                    yalta : 2200,
                    evpatoriya : 2000,
                    zaozernoe : 2200,
                    shtormovoe : 2300,
                    popovka : 2500,
                    olenevka : 3500,
                    chernomorskoe : 3500,
                    saki : 1500,
                    priboy : 1700,
                    novofedorovka : 1500,
                    nikolaevka : 1500,
                    beregovoe_ubk : 2500,
                    beregovoe_nik : 1600,
                    beregovoe_feo : 3200,
                    peschanoe : 1600,
                    sevastopol : 2200,
                    balaklava : 2200,
                    orlovka : 2000,
                    kacha : 2000,
                    sudak : 2500,
                    noviysvet: 2700,                
                    feodosiya : 3000,
                    kerch : 4500,
                    koktebel : 3000,
                    ordzhonikidze : 3000,
                    ribache : 2500,
                    solnechnogorskoe : 2300,
                    malorechenskoe : 2300,
                    partenit : 1700,
                    gurzuf : 1800,
                    livadiya : 2400,
                    gaspra : 2500,
                    alupka : 2600,
                    simeiz : 2600,
                    kaciveli : 2600,
                    ponizovka : 2600,
                    sanatornoye : 2600,
                    foros : 2600
                }
            },
            minivan : {
                aero : {
                    alushta : 2800,
                    yalta : 3700,
                    evpatoriya : 2800,
                    zaozernoe : 3100,
                    shtormovoe : 3700,
                    popovka : 3600,
                    olenevka : 4900,
                    chernomorskoe : 4500,
                    saki : 2900,
                    priboy : 2700,
                    novofedorovka : 2600,
                    nikolaevka : 2500,
                    beregovoe_ubk : 4300,
                    beregovoe_nik : 2800,
                    beregovoe_feo : 4500,
                    peschanoe : 2900,
                    sevastopol : 4000,
                    balaklava : 3900,
                    orlovka : 3000,
                    kacha : 3000,
                    sudak : 3900,
                    noviysvet: 4300,                
                    feodosiya : 4300,
                    kerch : 6500,
                    koktebel : 4300,
                    ordzhonikidze : 4400,
                    ribache : 3800,
                    solnechnogorskoe : 3800,
                    malorechenskoe : 3800,
                    partenit : 3000,
                    gurzuf : 3200,
                    livadiya : 3900,
                    gaspra : 4000,
                    alupka : 4200,
                    simeiz : 4200,
                    kaciveli : 4200,
                    ponizovka : 4200,
                    sanatornoye : 4200,
                    foros : 4200
                },
                trainstation : {
                    alushta : 2800,
                    yalta : 3700,
                    evpatoriya : 2800,
                    zaozernoe : 3100,
                    shtormovoe : 3700,
                    popovka : 3600,
                    olenevka : 4900,
                    chernomorskoe : 4500,
                    saki : 2900,
                    priboy : 2700,
                    novofedorovka : 2600,
                    nikolaevka : 2500,
                    beregovoe_ubk : 4300,
                    beregovoe_nik : 2800,
                    beregovoe_feo : 4500,
                    peschanoe : 2900,
                    sevastopol : 4000,
                    balaklava : 3900,
                    orlovka : 3000,
                    kacha : 3000,
                    sudak : 3900,
                    noviysvet: 4300,                
                    feodosiya : 4300,
                    kerch : 6500,
                    koktebel : 4300,
                    ordzhonikidze : 4400,
                    ribache : 3800,
                    solnechnogorskoe : 3800,
                    malorechenskoe : 3800,
                    partenit : 3000,
                    gurzuf : 3200,
                    livadiya : 3900,
                    gaspra : 4000,
                    alupka : 4200,
                    simeiz : 4200,
                    kaciveli : 4200,
                    ponizovka : 4200,
                    sanatornoye : 4200,
                    foros : 4200
                }
            }
        };

        let resultCalc;
        let typeCar;
        let placeDeparture;
        let placeArrive; 
        let childUntilOneYear;
        let childThreeSevenYears;
        let totalPrice;
        

    $('#select_calc_button').click(function(){
        

        resultCalc = $('#result_calc');
        typeCar = $('#car').val();
        placeDeparture = $('#from').val();
        placeArrive = $('#to').val(); 
        childUntilOneYear = Number($('#children1').val());
        childThreeSevenYears = Number($('#children3_7').val());

        totalPrice = price[typeCar][placeDeparture][placeArrive];

        if(isNaN(childUntilOneYear) == false && isNaN(childThreeSevenYears)){
            resultCalc.text(totalPrice + (50 * childUntilOneYear) + " " + "руб.");
        }
        else if(isNaN(childThreeSevenYears) == false && isNaN(childUntilOneYear)){
            resultCalc.text(totalPrice + (50 * childThreeSevenYears) + " " + "руб.");
        }
        else if(isNaN(childThreeSevenYears) == false && isNaN(childUntilOneYear) == false){
            resultCalc.text(totalPrice + (50 * childThreeSevenYears) + (50 * childUntilOneYear) + " " + "руб.");
        }
        else{
            resultCalc.text(totalPrice + " " + "руб.");
        }
        
    });



    //  ----------- ФОРМА ЗАКАЗА     -----------  //

            //  Изменеие внешнего вида кнопки выбора  //
    
    let buttonAero = $('#choose_aero');
    let buttonTrain = $('#choose_train');
    let formTrain = $('.form_order_train');
    let formAero = $('.form_order_aero');


    buttonAero.mousedown(function(){

        buttonTrain.removeClass('style_press').css({          // Активация кнопок смены форм
            'box-shadow' : '5px -5px 0px 0px rgba(0, 0, 0, 0.3)'
        });

        buttonAero.addClass('style_press').css({
            'box-shadow' : 'none'
        });

        formTrain.css({         //смена форм
            'display' : 'none'
        });

        formAero.css({
            'display' : 'block'
        });

    });

    buttonTrain.mousedown(function(){
        
        buttonAero.removeClass('style_press').css({     // Активация кнопок смены форм
            'box-shadow' : '5px -5px 0px 0px rgba(0, 0, 0, 0.3)'
        });

        buttonTrain.addClass('style_press').css({
            'box-shadow' : 'none'
        });

        formAero.css({         //смена форм
            'display' : 'none'
        });

        formTrain.css({
            'display' : 'block'
        });

    });


            //  Работа с input  //
    let valueName;
    let valueNamesTrain = ['Имя**', 'Номер телефона**', 'Номер поезда', 'Номер вагона', 'Дата прибытия', 'Время прибытия'];
    let valueNamesAero = ['Имя**', 'Номер телефона**', 'Дата прилета', 'Время прилета', 'Номер рейса'];
    let arreyInputTrain = $('#train input:not(.submit_order)');
    let arreyInputAero = $('#aero input:not(.submit_order)');
    let indexInput;
    let checkInput
                //  Input train  //
    arreyInputTrain.focus(function(){

        $(this).css({
            "padding-top" : "3px",
            "padding-right" : "8px" ,  
            "padding-left" : "8px",
            "font-size" : "20px",
            "text-align" : "center"
        });
        $(this).removeAttr('value');
        $(this).val('');

    });

    arreyInputTrain.blur(function(){

        indexInput = $(this).index();
        checkInput = $(this).val(); 

        if(checkInput == ""){
            $(this).css({
                "padding-top" : "15px",
                "padding-right" : "10px" ,  
                "padding-left" : "8px",
                "font-size" : "13px",
                "text-align" : "right"
            });

            $(this).val(valueNamesTrain[indexInput]);
        };  

    });

                //  Input aero  //
    arreyInputAero.focus(function(){

        $(this).css({
            "padding-top" : "3px",
            "padding-right" : "8px" ,  
            "padding-left" : "8px",
            "font-size" : "20px",
            "text-align" : "center"
        });
        $(this).removeAttr('value');
        $(this).val('');

    });

    arreyInputAero.blur(function(){

        indexInput = $(this).index();
        checkInput = $(this).val(); 

        if(checkInput == ""){
            $(this).css({
                "padding-top" : "15px",
                "padding-right" : "10px" ,  
                "padding-left" : "8px",
                "font-size" : "13px",
                "text-align" : "right"
            });

            $(this).val(valueNamesAero[indexInput]);
        };  

    });

    //  Работа с Select  //  
   
    let checkSelect;

    $('.form_order_both select').change(function(){

        checkSelect = Number($(this).val());

        if(isNaN(checkSelect) != true){
            $(this).css({
                "text-align-last" : "center",
                "padding-top" : "3px",
                "font-size" : "20px"
    
            });
    
            $('.form_order_both form select option').css({
                "font-size" : "13px"
            });
        }
        else{
            $(this).css({
                "text-align-last" : "right",
                "padding-top" : "15px",
                "font-size" : "13px"
    
            });
    
            $('.form_order_both form select option').css({
                "font-size" : "13px"
            });
        };

        

    });

            //  Скрипты для форм отправки  //

    $('#result_form #result_form_close').click(function(){
        $('.wr_result_form').hide();
      });
    
      $("#submit_train").on("click", function(e) {
          
        let name = $(' #train input[name="name"]').val().trim();
        let number_train = $(' #train input[name="number_train"]').val().trim();
        let number_van = $(' #train input[name="number_van"]').val().trim();
        let date_arrivals = $(' #train input[name="date_arrivals"]').val().trim();
        let time_arrivals = $(' #train input[name="time_arrivals"]').val().trim();
        let phonenumber = $(' #train input[name="phonenumber"]').val().trim();
        let amout_piople_train = $('#amout_piople_train').val().trim();
        let children_order1_train = $('#children_order1_train').val().trim();
        let children_order3_7_train = $('#children_order3_7_train').val().trim();
        
        $("#train input").each(function(){

           if($(this).val() !== "Номер телефона" || $(this).val() !== "Имя" || $(this).val() !== "Номер поезда" || $(this).val() !== "Номер вагона" || $(this).val() !== "Дата прибытия" || $(this).val() !== "Время прибытия"){
               $(this).css({"border-bottom" : "0px solid red"});
           };                
            
        });//END EACH


        if( phonenumber == "Номер телефона" || name == "Имя" || number_train == "Номер поезда" || number_van == "Номер вагона" || date_arrivals == "Дата прибытия" || time_arrivals == "Время прибытия"){
            
            $("#train input").each(function(){

                if($(this).val() == "Номер телефона" || $(this).val() == "Имя" || $(this).val() == "Номер поезда" || $(this).val() == "Номер вагона" || 		$(this).val() == "Дата прибытия" || $(this).val() == "Время прибытия"){

                    $(this).css({"border-bottom" : "3px solid red"});

                };
                
            
            });//END EACH
          
        	$('.wr_result_form #result_form p').text("Сообщение не отправленно. Заполните пожалуйста обязательные поля!");
            $('.wr_result_form').show();
        	return false;
           
        }
        else{
        
        	e.preventDefault();
          
          	$.ajax({
              	url: '../mail_train.php',
              	type: 'POST',
              	cache: 'false',
              	data: {
                	'name': name, 
                	'number_train': number_train, 
                	'number_van': number_van, 
                	'date_arrivals': date_arrivals, 
                	'time_arrivals': time_arrivals, 
                	'phonenumber': phonenumber, 
                	'amout_piople_train': amout_piople_train, 
                	'children_order1_train': children_order1_train, 
                	'children_order3_7_train': children_order3_7_train
              	},
              	dataType: 'html',
              	beforeSend: function(){$('#submit_train').prop("disabled", true);},
              	success: function(data){
                    	$('.wr_result_form #result_form p').html(data);
                  	$('.wr_result_form').show();
              	}
          	});//END AJAX
        
        };// END IF ELSE
        
        
        
  
      });// END SUBMIT TRAIN
    
        $("#submit_aero").on("click", function(e) {

        let name = $(' #aero input[name="name"]').val().trim();
        let date_arrivals = $(' #aero input[name="date_arrivals"]').val().trim();
        let time_arrivals = $(' #aero input[name="time_arrivals"]').val().trim();
        let phonenumber = $(' #aero input[name="phonenumber"]').val().trim();
        let number_flight = $(' #aero input[name="number_flight"]').val().trim();
        let amout_piople_aero = $('#amout_piople_aero').val().trim();
        let children_order1_aero = $('#children_order1_aero').val().trim();
        let children_order3_7_aero = $('#children_order3_7_aero').val().trim();
          
        $("#aero input").each(function(){

            if( $(this).val() !== "Имя" || $(this).val() !== "Дата прилета" || $(this).val() !== "Время прилета" || $(this).val() !== "Номер телефона" || $(this).val() !== "Номер рейса"){
                $(this).css({"border-bottom" : "0px solid red"});
            };               
             
        });//END EACH
          
        if( phonenumber == "Номер телефона" || name == "Имя" || date_arrivals == "Дата прилета" || time_arrivals == "Время прилета" || number_flight == "Номер рейса"){
           
          	$("#aero input").each(function(){

                if( $(this).val() == "Имя" || $(this).val() == "Дата прилета" || $(this).val() == "Время прилета" || $(this).val() == "Номер телефона" || $(this).val() == "Номер рейса"){
                    $(this).css({"border-bottom" : "3px solid red"});
                };                
                 
            });//END EACH
          
        	$('.wr_result_form #result_form p').text("Сообщение не отправленно. Заполните пожалуйста обязательные поля!");
            $('.wr_result_form').show();
        	return false;
           
        }
        else{
        
        	e.preventDefault();
          	
          
          	$.ajax({
              	url: '../mail_aero.php',
              	type: 'POST',
              	cache: 'false',
              	data: {
                	'name': name,               
                	'date_arrivals': date_arrivals, 
                	'time_arrivals': time_arrivals, 
                	'phonenumber': phonenumber, 
                	'number_flight': number_flight,
                	'amout_piople_aero': amout_piople_aero, 
                	'children_order1_aero': children_order1_aero, 
                	'children_order3_7_aero': children_order3_7_aero
              	},
              	dataType: 'html',
              	beforeSend: function(){$('#submit_train').prop("disabled", true);},
              	success: function(data){
                    	$('.wr_result_form #result_form p').html(data);
                  	$('.wr_result_form').show();
              	}
          	});//END AJAX
        
        }; // END IF ELSE

    });// END SUBMIT AERO


    

});//END READY