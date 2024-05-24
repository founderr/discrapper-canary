"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  },
  getChannelIdFromCardData: function() {
    return o
  }
});
var i = n("442837"),
  r = n("592125"),
  s = n("126134");

function a(e) {
  let t = o(e);
  return (0, i.useStateFromStores)([r.default], () => r.default.getChannel(t))
}

function o(e) {
  let {
    category: t
  } = e;
  return t === s.CardCategory.HANGOUT || t === s.CardCategory.GAMING ? e.channelId : t === s.CardCategory.EVENT ? e.event.channel_id : t === s.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : null
}