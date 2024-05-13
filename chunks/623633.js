"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var r = n("442837"),
  i = n("592125"),
  s = n("944486");

function l() {
  return (0, r.useStateFromStores)([s.default, i.default], () => {
    let e = s.default.getVoiceChannelId();
    if (null != e) {
      let t = i.default.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}