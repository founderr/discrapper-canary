"use strict";
E.r(t), E.d(t, {
  default: function() {
    return a
  }
});
var _ = E("399606"),
  s = E("339085"),
  T = E("633302");

function a(e, t) {
  let E = (0, _.useStateFromStores)([s.default], () => null != e ? s.default.getCustomEmojiById(e) : null, [e]);
  return {
    customEmoji: E,
    unicodeEmoji: null != t ? T.default.getByName(T.default.convertSurrogateToName(t, !1)) : null
  }
}