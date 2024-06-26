"use strict";
n.d(t, {
  K: function() {
    return o
  }
});
var i = n(339085),
  r = n(176354),
  s = n(185923);

function o(e, t) {
  if (null == e.id) return !0;
  let n = i.Z.getCustomEmojiById(e.id);
  return null != n && !r.ZP.isEmojiDisabled({
    emoji: n,
    channel: t,
    intention: s.Hz.STATUS
  })
}