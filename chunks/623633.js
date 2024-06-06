"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var i = n("442837"),
  s = n("592125"),
  a = n("944486");

function r() {
  return (0, i.useStateFromStores)([a.default, s.default], () => {
    let e = a.default.getVoiceChannelId();
    if (null != e) {
      let t = s.default.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}