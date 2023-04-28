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
                    alushta : 1400,
                    yalta : 2200,
                    evpatoriya : 2000,
                    zaozernoe : 2200,
                    shtormovoe : 2200,
                    popovka : 2200,
                    olenevka : 3000,
                    chernomorskoe : 3000,
                    saki : 1300,
                    priboy : 1400,
                    novofedorovka : 1400,
                    nikolaevka : 1400,
                    beregovoe_ubk : 2500,
                    beregovoe_nik : 1500,
                    beregovoe_feo : 2600,
                    peschanoe : 1600,
                    sevastopol : 2000,
                    balaklava : 2100,
                    orlovka : 1800,
                    kacha : 1800,
                    sudak : 2300,
                    noviysvet: 2600,                
                    feodosiya : 2500,
                    kerch : 4500,
                    koktebel : 2500,
                    ordzhonikidze : 2500,
                    ribache : 2100,
                    solnechnogorskoe : 1900,
                    malorechenskoe : 1900,
                    partenit : 2000,
                    gurzuf : 2000,
                    livadiya : 2400,
                    gaspra : 2500,
                    alupka : 2500,
                    simeiz : 2600,
                    kaciveli : 2600,
                    ponizovka : 2600,
                    sanatornoye : 2600,
                    foros : 2600
                },
                trainstation : {
                    alushta : 1300,
                    yalta : 2000,
                    evpatoriya : 2000,
                    zaozernoe : 2200,
                    shtormovoe : 2200,
                    popovka : 2200,
                    olenevka : 3000,
                    chernomorskoe : 3000,
                    saki : 1300,
                    priboy : 1400,
                    novofedorovka : 1400,
                    nikolaevka : 1300,
                    beregovoe_ubk : 2500,
                    beregovoe_nik : 1400,
                    beregovoe_feo : 2600,
                    peschanoe : 1500,
                    sevastopol : 2000,
                    balaklava : 2100,
                    orlovka : 1700,
                    kacha : 1700,
                    sudak : 2200,
                    noviysvet: 2400,                
                    feodosiya : 2400,
                    kerch : 4500,
                    koktebel : 2400,
                    ordzhonikidze : 2400,
                    ribache : 2000,
                    solnechnogorskoe : 1800,
                    malorechenskoe : 1800,
                    partenit : 1700,
                    gurzuf : 1800,
                    livadiya : 2300,
                    gaspra : 2500,
                    alupka : 2500,
                    simeiz : 2500,
                    kaciveli : 2600,
                    ponizovka : 2600,
                    sanatornoye : 2600,
                    foros : 2500
                }
            },
            minivan : {
                aero : {
                    alushta : 2600,
                    yalta : 3500,
                    evpatoriya : 2600,
                    zaozernoe : 2900,
                    shtormovoe : 3100,
                    popovka : 3100,
                    olenevka : 4600,
                    chernomorskoe : 4300,
                    saki : 2600,
                    priboy : 2400,
                    novofedorovka : 2600,
                    nikolaevka : 2400,
                    beregovoe_ubk : 3800,
                    beregovoe_nik : 2600,
                    beregovoe_feo : 3700,
                    peschanoe : 2500,
                    sevastopol : 3900,
                    balaklava : 3600,
                    orlovka : 3200,
                    kacha : 3200,
                    sudak : 3700,
                    noviysvet: 4100,                
                    feodosiya : 4000,
                    kerch : 6600,
                    koktebel : 3700,
                    ordzhonikidze : 3700,
                    ribache : 3400,
                    solnechnogorskoe : 3200,
                    malorechenskoe : 3200,
                    partenit : 3000,
                    gurzuf : 3200,
                    livadiya : 3700,
                    gaspra : 4100,
                    alupka : 4100,
                    simeiz : 4100,
                    kaciveli : 4200,
                    ponizovka : 4200,
                    sanatornoye : 4200,
                    foros : 3700
                },
                trainstation : {
                    alushta : 2500,
                    yalta : 3400,
                    evpatoriya : 2500,
                    zaozernoe : 2800,
                    shtormovoe : 3000,
                    popovka : 3000,
                    olenevka : 4500,
                    chernomorskoe : 4200,
                    saki : 2500,
                    priboy : 2300,
                    novofedorovka : 2500,
                    nikolaevka : 2300,
                    beregovoe_ubk : 3700,
                    beregovoe_nik : 2500,
                    beregovoe_feo : 3600,
                    peschanoe : 2400,
                    sevastopol : 3800,
                    balaklava : 3500,
                    orlovka : 3100,
                    kacha : 3100,
                    sudak : 3600,
                    noviysvet: 4000,                
                    feodosiya : 3900,
                    kerch : 6500,
                    koktebel : 3600,
                    ordzhonikidze : 3600,
                    ribache : 3300,
                    solnechnogorskoe : 3100,
                    malorechenskoe : 3100,
                    partenit : 2900,
                    gurzuf : 3100,
                    livadiya : 3600,
                    gaspra : 4000,
                    alupka : 4000,
                    simeiz : 4000,
                    kaciveli : 4100,
                    ponizovka : 4100,
                    sanatornoye : 4100,
                    foros : 3600
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
    let valueNamesTrain = ['Имя', 'Номер поезда', 'Номер вагона', 'Дата прибытия', 'Время прибытия', 'Номер телефона'];
    let valueNamesAero = ['Имя', 'Дата прилета', 'Время прилета', 'Номер телефона', 'Номер рейса'];
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
          
        if($("#train input[name=phonenumber]").val() == "Номер телефона"){
           
        	$('.wr_result_form #result_form p').text("Сообщение не отправленно. Заполните пустые поля!");
            $('.wr_result_form').show();
        	return false;
           
        }
        else{
        
        	e.preventDefault();
          	let name = $(' #train input[name="name"]').val().trim();
          	let number_train = $(' #train input[name="number_train"]').val().trim();
          	let number_van = $(' #train input[name="number_van"]').val().trim();
          	let date_arrivals = $(' #train input[name="date_arrivals"]').val().trim();
         	let time_arrivals = $(' #train input[name="time_arrivals"]').val().trim();
          	let phonenumber = $(' #train input[name="phonenumber"]').val().trim();
          	let amout_piople_train = $('#amout_piople_train').val().trim();
          	let children_order1_train = $('#children_order1_train').val().trim();
          	let children_order3_7_train = $('#children_order3_7_train').val().trim();
          
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
        
        
        
  
      });
    
        $("#submit_aero").on("click", function(e) {
          if($("#aero input[name=phonenumber]").val() == "Номер телефона"){
           
        	$('.wr_result_form #result_form p').text("Сообщение не отправленно. Заполните пустые поля!");
            $('.wr_result_form').show();
        	return false;
           
        }
        else{
        
        	e.preventDefault();
          	let name = $(' #aero input[name="name"]').val().trim();
          	let date_arrivals = $(' #aero input[name="date_arrivals"]').val().trim();
          	let time_arrivals = $(' #aero input[name="time_arrivals"]').val().trim();
          	let phonenumber = $(' #aero input[name="phonenumber"]').val().trim();
          	let number_flight = $(' #aero input[name="number_flight"]').val().trim();
          	let amout_piople_aero = $('#amout_piople_aero').val().trim();
          	let children_order1_aero = $('#children_order1_aero').val().trim();
          	let children_order3_7_aero = $('#children_order3_7_aero').val().trim();
          
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

    });


    

});//END READY