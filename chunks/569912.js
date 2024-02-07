"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var s = n("65597"),
  r = n("385976"),
  i = n("867805");

function a(e, t) {
  let n = (0, s.default)([r.default], () => null != e ? r.default.getCustomEmojiById(e) : null, [e]),
    a = null != t ? i.default.getByName(i.default.convertSurrogateToName(t, !1)) : null;
  return {
    customEmoji: n,
    unicodeEmoji: a
  }
}