function addChatOwn(message, userId) {
  $('#chat_area').append(
      '<div class="balloon-right">' + message + '</div>'
    );
  $('#chat').val('');
  sendChatApi(message, userId);
}

function sendChatApi(message, userId) {
  $.ajax({
    type: 'POST',
    dataType: 'json',
    url: 'https://api.repl-ai.jp/v1/dialogue',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'qvPuV0ukTq8XdPbLyPh7X5TA4k99KB3W1dOfO11b'
    },
    data: JSON.stringify({
      appUserId: userId,
      botId: 'nekoneko',
      initTalkingFlag: true,
      initTopicId: '02',
      voiceText: message
    }),
    success: function(data) {
      addChatFemale(data);
    }
  });
}

function addChatFemale() {
  $('#chat_area').append($('#female').prop('outerHTML') + '<div class="balloon-left">死ね</div>')
}

export function chatSend(message, userId) {
  addChatOwn(message, userId);
  return {
    type: 'TALK'
  };
}