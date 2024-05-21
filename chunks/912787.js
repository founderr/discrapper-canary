"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("442837"),
  r = n("592125"),
  a = n("126134");

function s(e) {
  let {
    category: t
  } = e;
  return (0, i.useStateFromStores)([r.default], () => {
    let n = t === a.CardCategory.HANGOUT || t === a.CardCategory.GAMING ? e.channelId : t === a.CardCategory.EVENT ? e.event.channel_id : t === a.CardCategory.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : null;
    return r.default.getChannel(n)
  })
}