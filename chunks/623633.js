"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var i = n("442837"),
  a = n("592125"),
  l = n("944486");

function s() {
  return (0, i.useStateFromStores)([l.default, a.default], () => {
    let e = l.default.getVoiceChannelId();
    if (null != e) {
      let t = a.default.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}