"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("442837"),
  l = n("592125"),
  a = n("944486");

function u() {
  return (0, i.useStateFromStores)([a.default, l.default], () => {
    let e = a.default.getVoiceChannelId();
    if (null != e) {
      let t = l.default.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}