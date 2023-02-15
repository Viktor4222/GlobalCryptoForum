$(document).ready(function() {

  $('#but2_Vijet2, .but2_Vijet2').click(function(){
    $('#modal_vijet').fadeIn(300);
  });
  $('#modal_vijet').on('click', function(e){
    if (e.target.id == 'modal_vijet'){
      $(this).hide();
    }
  });

  $('#but_book_ticket, .but_book_ticket').click(function(){
    $('#modal_book_ticket').fadeIn(300);
  });
  $('#modal_book_ticket').on('click', function(e){
    if (e.target.id == 'close'){
      $(this).hide();
    }
  });

  $('#but_Standart1, #but_Standart2').click(function(){
    $('#modal_Standart').fadeIn(300);
  });
  $('#modal_Standart').on('click', function(e){
    if (e.target.id == 'close'||'but_book_ticket'){
      $(this).hide();
    }
  });

  $('#but_comfort').click(function(){
    $('#modal_comfort').fadeIn(300);
  });
  $('#modal_comfort').on('click', function(e){
    if (e.target.id == 'close'||'but_book_ticket'){
      $(this).hide();
    }
  });
  $('#but_business').click(function(){
    $('#modal_business').fadeIn(300);
  });
  $('#modal_business').on('click', function(e){
    if (e.target.id == 'close'||'but_book_ticket'){
      $(this).hide();
    }
  });
  $('#but_premium').click(function(){
    $('#modal_premium').fadeIn(300);
  });
  $('#modal_premium').on('click', function(e){
    if (e.target.id == 'close'||'but_book_ticket'){
      $(this).hide();
    }
  });

  $('#become_a_sponsor').click(function(){
    $('#modal_become_a_sponsor').fadeIn(300);
  });
  $('#modal_become_a_sponsor').on('click', function(e){
    if (e.target.id == 'close'){
      $(this).hide();
    }
  });

  $('#press').click(function(){
    $('#modal_press').fadeIn(300);
  });
  $('#modal_press').on('click', function(e){
    if (e.target.id == 'close'){
      $(this).hide();
    }
  });

  $('#corporate_package_1, #corporate_package_2, #corporate_package_3').click(function(){
    $('#modal_corporate_package').fadeIn(300);
  });
  $('#modal_corporate_package').on('click', function(e){
    if (e.target.id == 'close'){
      $(this).hide();
    }
  });

  $('#speakers1, #speakers2, #speaker_x').click(function(){
    $('#modal_speakers').fadeIn(300);
  });
  $('#modal_speakers').on('click', function(e){
    if (e.target.id == 'close'){
      $(this).hide();
    }
  });

  $('#but_Vijet1').click(function(){
    $('#modal_vijet').fadeIn(300);
  });
  $('#modal_vijet').on('click', function(e){
    if (e.target.id == 'modal_vijet'){
      $(this).hide();
    }
  });

  $('.but_list_city').click(function(){
    $('#modal_list_city').fadeIn(300);
  });
  $('#modal_list_city').on('click', function(e){
    if (e.target.id == 'close'){
      $(this).hide();
    }
  });

  $('#Pavel_Zhukovsky').click(function(){
    $('#modal_Pavel_Zhukovsky').fadeIn(300);
  });
  $('#modal_Pavel_Zhukovsky').on('click', function(e){
    if (e.target.id == 'close'){
      $(this).hide();
    }
  });

  $('#Dmitry_Rzhevsky').click(function(){
    $('#modal_Dmitry_Rzhevsky').fadeIn(300);
  });
  $('#modal_Dmitry_Rzhevsky').on('click', function(e){
    if (e.target.id == 'close'){
      $(this).hide();
    }
  });

  $('#Anver_Bikchentaev').click(function(){
    $('#modal_Anver_Bikchentaev').fadeIn(300);
  });
  $('#modal_Anver_Bikchentaev').on('click', function(e){
    if (e.target.id == 'close'){
      $(this).hide();
    }
  });

  $('#Alexander_Tron').click(function(){
    $('#modal_Alexander_Tron').fadeIn(300);
  });
  $('#modal_Alexander_Tron').on('click', function(e){
    if (e.target.id == 'close'){
      $(this).hide();
    }
  });

});
