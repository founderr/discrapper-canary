"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var i = n("442837"),
  r = n("592125"),
  s = n("944486");

function a() {
  return (0, i.useStateFromStores)([s.default, r.default], () => {
    let e = s.default.getVoiceChannelId();
    if (null != e) {
      let t = r.default.getChannel(e);
      if (null == t ? void 0 : t.isGuildStageVoice()) return t
    }
    return null
  })
}