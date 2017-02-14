// $(function() {
//   $('.chat-group-form__action-btn').on('click', function(e) {
//    e.preventDefault();
//     message = $('.message_sent_form').val();
//     console.log(message);
//   });
// });


$(function() {
  function buildHTML(message) {
    var html =
      // '<ul class="chat-message">' +
      //   '<p class="chat-message__name">' +
            message.user_name +
            message.created_at +
          // '</p>' +
          // '<p class="chat-message__body">' +
            message.body +
          '</p>' +
      '</ul>';
    return html;
  }

  $('.chat-group-form__action-btn').on('submit', function(e) {
    e.preventDefault();
    var textField = $('.message_sent_form');
    var message = textField.val();
    $.ajax({
      type: 'POST',
      url: url,
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
      textField.val('');
    })
    .fail(function() {
      alert('error');
    });
  });
});
