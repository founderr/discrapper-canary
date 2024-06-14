"use strict";
E.r(t), E.d(t, {
  default: function() {
    return a
  }
});
var s = E("399606"),
  _ = E("339085"),
  T = E("633302");

function a(e, t) {
  let E = (0, s.useStateFromStores)([_.default], () => null != e ? _.default.getCustomEmojiById(e) : null, [e]);
  return {
    customEmoji: E,
    unicodeEmoji: null != t ? T.default.getByName(T.default.convertSurrogateToName(t, !1)) : null
  }
}