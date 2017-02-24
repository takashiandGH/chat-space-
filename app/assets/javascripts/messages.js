
$(function() {
  function insertHTML(message) {
    var html = $(`<ul class="chat-message">
                      <p class="chat-message__name"> ${message.name} </p>
                      <p class="chat-message__time"> ${message.time} </p>
                    <p class="chat-message__body"> ${message.body} </p>
                  `);
      $('.chat-body').append(html);
      $('.new-message')[0].reset();
  }


// 非同期通信function
  $('.new-message').on('submit', function(e) {
    e.preventDefault();

    var textField = $('.message_sent_form');
    var message = textField.val();
    var url = location.href + '.json'

    $.ajax({
      type: 'POST',
      url: './messages',
      data: {
      message: {
        body: message
        }
      },
      dataType: 'json'
    })
    .done(function(data) {
      insertHTML(data);

    })
    .fail(function() {
      alert('ページをリロードしてください');
    });
    return false;
  });


  // 自動更新functionを実装するぞ
  function getMessage(){

     $.ajax({
      url: "./messages",
      type: 'GET',
      dataType: 'json'
    })
      .done(
      function(data){
          $('.chat-body').empty();
          $.each(data, function(num, data){
           insertHTML(data);
        });
      })
      .fail(
      function(data){
        alert('ページをリロードしてください');
      })
  }

  function autoReload(){
    getMessage();
  }
  setInterval(autoReload, 5000);

});
