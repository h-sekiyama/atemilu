function addChatOwn(message) {
  $('#chat_area').append(
      '<div class="balloon-right">' + message + '</div>'
    );
  $('#chat').val('');
  $('#chat_area').append($('#female').prop('outerHTML') + '<div class="balloon-left">死ね</div>');
}

export function chatSend(message) {
  addChatOwn(message);
  return {
    type: 'TALK'
  };
}