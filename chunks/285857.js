"use strict";
n.r(t), n.d(t, {
  sendStageRequestToSpeakEphemeralMessage: function() {
    return s
  }
});
var i = n("913144"),
  a = n("299039"),
  l = n("49111");

function s(e, t, n) {
  i.default.dispatch({
    type: "MESSAGE_CREATE",
    channelId: e,
    message: function(e) {
      let {
        channelId: t,
        requesterUser: n,
        requestToSpeakTimestamp: i
      } = e;
      return {
        id: a.default.fromTimestamp(Date.parse(i)),
        type: l.MessageTypes.STAGE_RAISE_HAND,
        flags: l.MessageFlags.EPHEMERAL,
        content: "",
        channel_id: t,
        author: n,
        attachments: [],
        embeds: [],
        pinned: !1,
        mentions: [],
        mention_channels: [],
        mention_roles: [],
        mention_everyone: !1,
        timestamp: i,
        state: l.MessageStates.SENT,
        tts: !1
      }
    }({
      channelId: e,
      requesterUser: t,
      requestToSpeakTimestamp: n
    }),
    optimistic: !1,
    sendMessageOptions: {},
    isPushNotification: !1
  })
}