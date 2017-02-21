
$(function() {
  // messageを表示するhtml
  function buildHTML(message) {
    var html = $(`<li class="chat-message">
                    <div class="chat-message__header">
                      <p class="chat-message__user"> ${message.name} </p>
                      <p class="chat-message__time"> ${message.time} </p>
                    </div>
                    <p class="chat-message__body"> ${message.body} </p>
                    <img src= ${message.image} >
                  </li>`);
    return html;
  }

  // messageを非同期更新する
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
      var html = buildHTML(data);
      $('.chat-body').append(html);
      $('.new-message')[0].reset();
    })

    .fail(function() {
      alert('ページをリロードしてください');
    });
    return false;
  });


  // 自動更新functionを実装するぞ
  if(location.href.match(/messages/)){

    $(function() {
    update();
    timerId = setInterval(function(){
    update();
    }, relordSeconds );
    })
  }
    var relordSeconds = 5000;

    function update() {
     location.reload()
    };

  var timerId = null;
  var count = 0;


})
