"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var r = n("442837"),
  i = n("592125"),
  a = n("944486");

function s() {
  return (0, r.useStateFromStores)([a.default, i.default], () => {
    let e = a.default.getVoiceChannelId();
    if (null != e) {
      let t = i.default.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}