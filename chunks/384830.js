"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("627445"),
  i = n.n(r),
  o = n("446674"),
  l = n("385976"),
  a = n("867805");

function u(e) {
  let {
    emojiId: t,
    emojiName: n
  } = e, r = (0, o.useStateFromStores)([l.default], () => null != t ? l.default.getCustomEmojiById(t) : null);
  if (null != r || null != n) {
    if (null == t) return i(null != n, "emojiName must be defined if emojiId is not defined"), a.default.convertSurrogateToName(n, !1);
    else return null == r ? void 0 : r.name
  }
}