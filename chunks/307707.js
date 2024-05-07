"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("399606"),
  n = s("339085"),
  i = s("633302");

function E(e, t) {
  let s = (0, a.useStateFromStores)([n.default], () => null != e ? n.default.getCustomEmojiById(e) : null, [e]);
  return {
    customEmoji: s,
    unicodeEmoji: null != t ? i.default.getByName(i.default.convertSurrogateToName(t, !1)) : null
  }
}