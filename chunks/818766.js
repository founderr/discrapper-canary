"use strict";
n.r(t), n.d(t, {
  sendVoiceChannelActivityNotification: function() {
    return l
  }
});
var i = n("872717"),
  a = n("49111");

function l(e, t) {
  i.default.post({
    url: a.Endpoints.VOICE_CHANNEL_NOTIFICATIONS(e),
    query: {
      first_user: t
    }
  })
}