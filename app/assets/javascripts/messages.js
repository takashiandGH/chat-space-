$(function() {
  $('.chat-group-form__action-btn').on('click', function(e) {
   e.preventDefault();
    message = $('.message_sent_form').val();
    console.log(message);
  });
});
