"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var u = n("446674"),
  i = n("42203"),
  a = n("18494");

function l() {
  return (0, u.useStateFromStores)([a.default, i.default], () => {
    let e = a.default.getVoiceChannelId();
    if (null != e) {
      let t = i.default.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}