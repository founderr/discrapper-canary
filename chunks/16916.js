"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("629109"),
  r = n("990766"),
  i = n("271938"),
  s = n("374014");

function l(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  if (null == e) return;
  let {
    streamType: n,
    guildId: l,
    channelId: u,
    ownerId: o
  } = e, d = (0, s.encodeStreamKey)({
    streamType: n,
    guildId: l,
    channelId: u,
    ownerId: o
  });
  o === i.default.getId() && a.default.setGoLiveSource(null), r.stopStream(d, t)
}