"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("627445"),
  a = n.n(l),
  i = n("446674"),
  r = n("385976"),
  u = n("867805");

function o(e) {
  let {
    emojiId: t,
    emojiName: n
  } = e, l = (0, i.useStateFromStores)([r.default], () => null != t ? r.default.getCustomEmojiById(t) : null);
  if (null != l || null != n) {
    if (null == t) return a(null != n, "emojiName must be defined if emojiId is not defined"), u.default.convertSurrogateToName(n, !1);
    else return null == l ? void 0 : l.name
  }
}