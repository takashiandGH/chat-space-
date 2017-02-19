
$(function() {

//(view-A)受信したuserを表示する(追加ボタンのview)
  function adduserHTML(user) {
    var html =
      '<div class="chat-group-user">' +
        '<span name="' + user.id + '">' + user.name +
        '</span>' +
        '<a class="user-search-result__btn">追加</a>' +
      '</div>';
    return html;
  }

//(view-B)選択したuserを表示(削除ボタンのview)
  function deleteuserHTML(name, id) {
    var html =
      '<div class="chat-group-user">' +
        '<span name="' + id + '">' + name +
        '</span>' +
        '<a class="user-search-result-delete__btn">削除</a>' +
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

// ②追加ボタンを押したユーザーのビューを差し替え、view-Bの呼び出し
  $('#user-search-result').on('click', '.user-search-result__btn' ,function() {

    var brother_ele = $(this).prev();
    var name = brother_ele.text();
    var id   = brother_ele.attr('name');

    // console.log(brother_ele)
    // console.log(name)
    // console.log(id)
    $(this).parent().remove()
    var html = deleteuserHTML(name, id);
    $('#user-search-result').append(html);
  });


// ③削除ボタンを押したユーザーのビューを差し替え、view-の呼び出し
  $('#user-search-result').on('click', '.user-search-result-delete__btn' ,function() {

    var brother_ele = $(this).prev();
    var name = brother_ele.text();
    var id   = brother_ele.attr('name');

    // console.log(brother_ele)
    // console.log(name)
    // console.log(id)
    $(this).parent().remove()
    var html = adduserHTML(name, id);
    $('#user-search-result').append(html);
  });















});
