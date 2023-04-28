<?php


  
  if((isset($_POST['name'])
     && $_POST['name']!="")
     &&(isset($_POST['number_flight'])
     && $_POST['number_flight']!="")
     &&(isset($_POST['date_arrivals'])
     && $_POST['date_arrivals']!="")
     &&(isset($_POST['time_arrivals'])
     && $_POST['time_arrivals']!="")
     &&(isset($_POST['phonenumber'])
     && $_POST['phonenumber']!="")
     &&(isset($_POST['amout_piople_aero'])
     && $_POST['amout_piople_aero']!="")
     &&(isset($_POST['children_order1_aero'])
     && $_POST['children_order1_aero']!="")
     &&(isset($_POST['children_order3_7_aero'])
     && $_POST['children_order3_7_aero']!="")){
        $to = 'info@trans-crimea.ru';
        $subject = 'Заявка с сайта. Самолет';
        $name = $_POST['name'];
        $number_flight = $_POST['number_flight'];
        $date_arrivals = $_POST['date_arrivals'];
        $time_arrivals = $_POST['time_arrivals'];
        $phonenumber = $_POST['phonenumber'];
        $amout_piople_aero = $_POST['amout_piople_aero'];
        $children_order1_aero = $_POST['children_order1_aero'];
        $children_order3_7_aero = $_POST['children_order3_7_aero'];
        $message='
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$name.'</p>
                    <p>Номер рейса: '.$number_flight.'</p>
                    <p>Дата прибытия: '.$date_arrivals.'</p>
                    <p>Время прибытия: '.$time_arrivals.'</p>
                    <p>Телефон: '.$phonenumber.'</p>
                    <p>Кол-во человек: '.$amout_piople_aero.'</p>
                    <p>Дети до 1 года: '.$children_order1_aero.'</p>
                    <p>Дети от 3 до 7 лет: '.$children_order3_7_aero.'</p>
                </body>
            </html>';
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: dmitriy.iskra86@gmail.com\r\n";
        $success = mail($to, $subject, $message, $headers);
    	if($success){
        	echo 'Сообщение отправлено!<br> В ближайшее время мы с Вами свяжемся';
        } else {
            echo 'Возникла ошибка.';
        }
    	
    }
    $blockPageAccess = 0;
    $blockFormAccess = 1;
        
    if ($blockFormAccess) {
        echo '
            <script src="https://www.google.com/recaptcha/api.js?render=6Lf-FqgZAAAAAPTVGvC0WkJrr3Crf2Y7rZNqoWfU"></script>
            <script>
                document.#aero.addEventListener(\'submit\', function (evt) {
                    evt.preventDefault();
                    grecaptcha.ready(function () {
                        grecaptcha.execute(\'6Lf-FqgZAAAAAPTVGvC0WkJrr3Crf2Y7rZNqoWfU\', {action: \'homepage\'}).then(function (token) {
                            var el = document.createElement("input");
                            el.type = "hidden";
                            el.name = "token";
                            el.value = token;
                            document.forms[0].appendChild(el);
                            document.forms[0].submit();
                        });
                    });
                })
            </script>';
    }
?>