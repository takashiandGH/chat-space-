
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
