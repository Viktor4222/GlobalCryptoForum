<?php

if (isset($_POST)){
  switch ($_POST){
    case  isset($_POST['submit']):
      $theme = 'Новая заявка';
      $headers = 'From: mail@gc-forum.ru' . "\r\n" .
            'Reply-To: mail@gc-forum.ru' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
      $letter = 'данные формы : ';
      $letter .= ' Имя : '.$_POST['name'];
      $letter .= ' Телефон : '.$_POST['phone'];
      $letter .= ' Email : '.$_POST['email'];
      if (mail('get_program@gc-forum.ru', $theme, $letter, $headers)){
        header('Location:/');
      }else {
        header('Location:/');
      }
      break;
    case isset($_POST['submit1']):
      $theme = 'Новая заявка';
      $headers = 'From: mail@gc-forum.ru' . "\r\n" .
        		'Reply-To: mail@gc-forum.ru' . "\r\n" .
        		'X-Mailer: PHP/' . phpversion();
      $letter = 'данные формы : ';
      $letter .= ' Имя : '.$_POST['name1'];
      $letter .= ' Компания : '.$_POST['company1'];
      $letter .= ' Должность : '.$_POST['position1'];
      $letter .= ' Email : '.$_POST['mail1'];
      $letter .= ' Телефон : '.$_POST['phone1'];
      $letter .= ' сайт : '.$_POST['site1'];
      if (mail('sponsor@gc-forum.ru', $theme, $letter, $headers)){
      	header('Location:/');
      }
      else {
         header('Location:/');
      }
      break;
    case isset($_POST['submit2']):
      $theme = 'Новая заявка';
      $headers = 'From: mail@gc-forum.ru' . "\r\n" .
            'Reply-To: mail@gc-forum.ru' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
      $letter = 'данные формы : ';
      $letter .= ' Название СМИ : '.$_POST['company2'];
      $letter .= ' ФИО представителя : '.$_POST['name2'];
      $letter .= ' Должность : '.$_POST['position2'];
      $letter .= ' Email : '.$_POST['mail2'];
      $letter .= ' Телефон : '.$_POST['phone2'];
      $letter .= ' сайт : '.$_POST['site2'];
      if (mail('smi@gc-forum.ru', $theme, $letter, $headers)){
        header('Location:/');
      }
      else {
        header('Location:/');
      }
      break;
    case isset($_POST['submit3']):
      $theme = 'Новая заявка';
      $headers = 'From: mail@gc-forum.ru' . "\r\n" .
            'Reply-To: mail@gc-forum.ru' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
      $letter = 'данные формы : ';
      $letter .= ' Имя : '.$_POST['name3'];
      $letter .= ' Email : '.$_POST['mail3'];
      $letter .= ' Телефон : '.$_POST['phone3'];
      $letter .= ' Количество человек : '.$_POST['population3'];
      if (mail('sale_krasnodar@gc-forum.ru', $theme, $letter, $headers)){
        header('Location:/');
      }
      else {
        header('Location:/');
      }
      break;
    case isset($_POST['submit4']):
      $theme = 'Новая заявка';
      $headers = 'From: mail@gc-forum.ru' . "\r\n" .
            'Reply-To: mail@gc-forum.ru' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
      $check = '';
      if (!empty($_POST["optional4"]) && is_array($_POST["optional4"])){
        $check = implode(", " , $_POST["optional4"]);
      }
      $letter = 'данные формы : ';
      $letter .= ' Имя и Фамилия : '.$_POST['name4'];
      $letter .= ' Email : '.$_POST['mail4'];
      $letter .= ' Телефон : '.$_POST['phone4'];
      $letter .= ' Тема доклада : '.$_POST['topic_of_report4'];
      $letter .= ' Выбранные города : '.$check;
      if (mail('speaker@gc-forum.ru', $theme, $letter, $headers)){
        header('Location:/');
      }
      else {
        header('Location:/');
      }
      break;
    case  isset($_POST['submit5']):
      $theme = 'Новая заявка';
      $headers = 'From: mail@gc-forum.ru' . "\r\n" .
            'Reply-To: mail@gc-forum.ru' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();
      $letter = 'данные формы : ';
      $letter .= ' Имя : '.$_POST['name5'];
      $letter .= ' Email : '.$_POST['email5'];
      $letter .= ' Телефон : '.$_POST['phone5'];
      $letter .= ' Выбранный пакет : '.$_POST['tikets5'];
      if (mail('sale_krasnodar@gc-forum.ru', $theme, $letter, $headers)){
        header('Location:/');
      }else {
        header('Location:/');
      }
      break;
    default:
      header('Location:/');
      break;
  }
}
?>
