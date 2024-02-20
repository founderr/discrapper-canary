"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("446674"),
  l = n("42203"),
  a = n("18494");

function i() {
  return (0, s.useStateFromStores)([a.default, l.default], () => {
    let e = a.default.getVoiceChannelId();
    if (null != e) {
      let t = l.default.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}