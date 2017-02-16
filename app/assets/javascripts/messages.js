
$(function() {
  function buildHTML(message) {
    var html = $(`<li class="chat-message">
                    <div class="chat-message__header">
                      <p class="chat-message__user"> ${message.name} </p>
                      <p class="chat-message__time"> ${message.time} </p>
                    </div>
                    <p class="chat-message__body"> ${message.body} </p>
                  </li>`);
    return html;
  }

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
      $('.chat-messages').append(html);
      $('.new-message')[0].reset();
    })
    .fail(function() {
      alert('ページをリロードしてください');
    });
    return false;
  });
});
