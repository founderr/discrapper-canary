"use strict";
n.r(e), n.d(e, {
  default: function() {
    return s
  }
});
var l = n("627445"),
  i = n.n(l),
  a = n("446674"),
  r = n("385976"),
  o = n("867805");

function s(t) {
  let {
    emojiId: e,
    emojiName: n
  } = t, l = (0, a.useStateFromStores)([r.default], () => null != e ? r.default.getCustomEmojiById(e) : null);
  if (null != l || null != n) {
    if (null == e) return i(null != n, "emojiName must be defined if emojiId is not defined"), o.default.convertSurrogateToName(n, !1);
    else return null == l ? void 0 : l.name
  }
}