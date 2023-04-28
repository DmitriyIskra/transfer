<?php


  
  if((isset($_POST['name'])
     && $_POST['name']!="")
     &&(isset($_POST['number_train'])
     && $_POST['number_train']!="")
     &&(isset($_POST['number_van'])
     && $_POST['number_van']!="")
     &&(isset($_POST['date_arrivals'])
     && $_POST['date_arrivals']!="")
     &&(isset($_POST['time_arrivals'])
     && $_POST['time_arrivals']!="")
     &&(isset($_POST['phonenumber'])
     && $_POST['phonenumber']!="")
     &&(isset($_POST['amout_piople_train'])
     && $_POST['amout_piople_train']!="")
     &&(isset($_POST['children_order1_train'])
     && $_POST['children_order1_train']!="")
     &&(isset($_POST['children_order3_7_train'])
     && $_POST['children_order3_7_train']!="")){
        $to = 'info@trans-crimea.ru';
        $subject = 'Заявка с сайта. Поезд';
        $name = $_POST['name'];
        $number_train = $_POST['number_train'];
        $number_van = $_POST['number_van'];
        $date_arrivals = $_POST['date_arrivals'];
        $time_arrivals = $_POST['time_arrivals'];
        $phonenumber = $_POST['phonenumber'];
        $amout_piople = $_POST['amout_piople_train'];
        $children_order1 = $_POST['children_order1_train'];
        $children_order3_7 = $_POST['children_order3_7_train'];
        $message='
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$name.'</p>
                    <p>Номер поезда: '.$number_train.'</p>
                    <p>Номер вагона: '.$number_van.'</p>
                    <p>Дата прибытия: '.$date_arrivals.'</p>
                    <p>Время прибытия: '.$time_arrivals.'</p>
                    <p>Телефон: '.$phonenumber.'</p>
                    <p>Кол-во человек: '.$amout_piople.'</p>
                    <p>Дети до 1 года: '.$children_order1.'</p>
                    <p>Дети от 3 до 7 лет: '.$children_order3_7.'</p>
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
            document.#train.addEventListener(\'submit\', function (evt) {
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