
$(function() {

// ここはまあ大丈夫なんだと思うけど
  function buildHTML(user) {
    var html =
      '<div class="chat-group-user">' +
        '<span name="' + user.id + '">' +
          user.name +
        '</span>' +
        '<a class="user-search-result__btn">追加</a>' +
      '</div>';
    return html;
  }

//userを入力、送信
  $('#user-search-field').on('keyup', function(e) {
    e.preventDefault();

    var textField = $('#user-search-field');
    var user_name = textField.val();

    $.ajax({
      type: 'GET',
      url: '/users/search.json',
      data: user_name,
      dataType: 'json'
    })


    .done(function(data) {
      console.log(user_name);
      $('#user-search-result').empty();
      $.each(data,function(i, user){
        var html = buildHTML(user);
          $('#user-search-result').append(html);
          });
    })

    .fail(function() {
      alert('error');
    });

  });
});
