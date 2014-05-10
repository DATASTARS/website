    <?php
        /*формируем переменные, которые содержат данные, полученные с html-формы*/
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $to = "contact@datastars.ru"; // адрес, куда слать письмо
        // формируем Тему письма
        // Конвертируем ее в кодировку KOI8-R
        $subject = convert_cyr_string ($subject,w,k);
        /* А теперь конвертируем ее в MIME-кодировку, заодно указывая, то это KOI8-R */
        $subject = '=?koi8-r?B?'.base64_encode($subject).'?=';
        // Конвертируем тело письма в KOI8-R
        $msg = convert_cyr_string ($_POST['message'],w,k);
        /* Составляем заголовки – служебную часть письма, где указываем тип кодировки и тип самого письма (plain text, т.е. простой текст) */
        $headers = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/plain; charset=koi8-r' . "\r\n";
        $headers .= 'To: '.$to. "\r\n";
        $headers .= 'From:' .$email. "\r\n";

        echo '<!DOCTYPE html>
                <html lang="en" class="sent-notification">

                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <meta name="description" content="">
                    <meta name="author" content="">
                    <link rel="shortcut icon" href="images/favicon/favicon.ico" type="image/x-icon">
                    <link rel="icon" href="images/favicon/favicon.ico" type="image/x-icon">

                    <title>Datastars</title>

                    <!-- Bootstrap core CSS -->
                    <link href="css/bootstrap.min.css" rel="stylesheet">
                    <!-- Font Awesome CSS -->
                    <link href="css/lib/font-awesome.css" rel="stylesheet">
                    <!-- Zocial CSS -->
                    <link href="css/lib/zocial.css" rel="stylesheet">
                    <!-- Nivo Lightbox CSS -->
                    <link href="css/lib/nivo-lightbox.css" rel="stylesheet">
                    <link rel="stylesheet" href="css/lib/nivo-themes/default/default.css" type="text/css" />
                    <!-- STYLE CSS -->
                    <link href="css/sent-notification.css" rel="stylesheet">


                    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
                    <!--[if lt IE 9]>
                      <script src="js/html5shiv.js"></script>
                      <script src="js/respond.min.js"></script>
                    <![endif]-->
                </head>

                <body class="sent-notification">
                        <div id="container">';

        // Отправляем письмо
        if (mail($to,$subject, $msg, $headers))
        {
        echo '<h1> <i class="fa fa-envelope"></i> <br/> The message is send. <br/> Thank you.</h1>';
        }
        else
        {
        echo '<h1 class="red"> <i class="fa fa-exclamation-triangle"></i> <br/> Something went wrong! <br/> Please try again latter</h1>';
        }

        echo '<a href="javascript:" onclick="history.back();"><button class="btn btn-red big"><i class="fa fa-chevron-left"></i> BACK</button></a>
                    </div>
                </div>



                <!-- Bootstrap core JavaScript
                ================================================== -->
                <!-- Placed at the end of the document so the pages load faster -->
                <!-- Jquery Source -->
                <script src="js/jquery-1.10.2.min.js"></script>
                <!-- Nivo Light Box Source -->
                <script src="js/bootstrap.min.js"></script>
            </body>

            </html>';    

    ?>