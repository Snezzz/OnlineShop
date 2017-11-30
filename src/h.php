<?php
  //объявляем POST переменные
  $email = $_POST['email']; //фамилия

  //если поле "Фамилия" и "Имя" не пусто
  if (!empty($email))
  {
    //пишем
    echo "Приветствую Вас $email <br />";
  }
  else //иначе
  {
    //пишем
    echo "Как Вы посмели нажать эту кнопку?";
    //и обратно возвращаемся на index.html через 15 миллисекунд
    echo "<meta http-equiv='refresh' content='15; url=index.html' />";
  }
?>
