"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var u = n("446674"),
  a = n("42203"),
  i = n("18494");

function l() {
  return (0, u.useStateFromStores)([i.default, a.default], () => {
    let e = i.default.getVoiceChannelId();
    if (null != e) {
      let t = a.default.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}