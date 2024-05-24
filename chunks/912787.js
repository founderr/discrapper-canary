"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("442837"),
  r = n("592125"),
  s = n("126134");

function a(e) {
  let {
    category: t
  } = e;
  return (0, i.useStateFromStores)([r.default], () => {
    let n = t === s.CardCategory.HANGOUT || t === s.CardCategory.GAMING ? e.channelId : t === s.CardCategory.EVENT ? e.event.channel_id : t === s.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : null;
    return r.default.getChannel(n)
  })
}