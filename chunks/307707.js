"use strict";
E.r(t), E.d(t, {
  default: function() {
    return T
  }
});
var s = E("399606"),
  _ = E("339085"),
  a = E("633302");

function T(e, t) {
  let E = (0, s.useStateFromStores)([_.default], () => null != e ? _.default.getCustomEmojiById(e) : null, [e]);
  return {
    customEmoji: E,
    unicodeEmoji: null != t ? a.default.getByName(a.default.convertSurrogateToName(t, !1)) : null
  }
}