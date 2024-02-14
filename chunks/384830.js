"use strict";
n.r(e), n.d(e, {
  default: function() {
    return o
  }
});
var i = n("627445"),
  r = n.n(i),
  u = n("446674"),
  a = n("385976"),
  l = n("867805");

function o(t) {
  let {
    emojiId: e,
    emojiName: n
  } = t, i = (0, u.useStateFromStores)([a.default], () => null != e ? a.default.getCustomEmojiById(e) : null);
  if (null != i || null != n) {
    if (null == e) return r(null != n, "emojiName must be defined if emojiId is not defined"), l.default.convertSurrogateToName(n, !1);
    else return null == i ? void 0 : i.name
  }
}