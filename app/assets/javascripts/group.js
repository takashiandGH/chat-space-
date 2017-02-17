
$(function() {

//(view-A)受信したuserを表示する(追加ボタンのview)
  function adduserHTML(user) {
    var html =
      '<div class="chat-group-user">' +
        '<span name="' + user.id + '">' +
          user.name +
        '</span>' +
        '<a class="user-search-result__btn">追加</a>' +
      '</div>';
    return html;
  }

//(view-B)選択したuserを表示(削除ボタンのview)
  function deleteuserHTML(user) {
    var html =
      '<div class="chat-group-user">' +
        '<span name="' + user.id + '">' +
          user.name +
        '</span>' +
        '<a class="user-search-result__btn">削除</a>' +
      '</div>';
    return html;
  }











//①userを入力、送信、view-Aの呼び出し
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
      // console.log(user_name);
      $('#user-search-result').empty();
      $.each(data,function(i, user){
        var html = adduserHTML(user);
          $('#user-search-result').append(html);
          });
    })

    .fail(function() {
      alert('ページをリロードしてください');
    });

  });

// ②選択したユーザーのビューを差し替え、view-Bの呼び出し(とりあえず消すところまではなんとか)
  $('#user-search-result').on('click', '.user-search-result__btn' ,function() {
    $(this).parent().remove()
    var html = deleteuserHTML(user);
    $('#user-search-result').append(html);


  });






});
