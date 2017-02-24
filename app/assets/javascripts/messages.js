
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
      var html = insertHTML(data);

    })
    .fail(function() {
      alert('ページをリロードしてください');
    });
    return false;
  });


  // 自動更新functionを実装するぞ
  function getMessage(){
    console.log("getMessageよばれた！！");

     $.ajax({
      url: "./messages",
      type: 'GET',
      dataType: 'json'
    })
      .done(
      function(data){
          len = data.length;
          $('.chat-body').empty();
            for (var i = 0; i < len; i++){
              insertHTML(data[i]);
            }
            messageNum = len;
            return messageNum;
      })
      .fail(
      function(data){
        console.log("通信失敗");
      })
  }

  function autoReload(){
      console.log("autoReload呼ばれた！！");
    getMessage();
  }

  setInterval(autoReload, 5000);

});
