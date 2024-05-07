"use strict";
s.r(t), s.d(t, {
  default: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  E = s("596454"),
  l = s("377171"),
  _ = s("403910"),
  r = s("549631"),
  u = s("934465");

function o(e) {
  var t;
  let {
    guildId: s,
    emojiId: n,
    emojiName: o,
    className: T
  } = e, d = (0, _.default)(s, n);
  return null != d || null != o ? (0, a.jsx)(E.default, {
    emojiId: null == d ? void 0 : d.id,
    emojiName: null != o ? o : null == d ? void 0 : d.name,
    animated: null !== (t = null == d ? void 0 : d.animated) && void 0 !== t && t,
    className: i()(u.emojiIcon, T)
  }) : (0, a.jsx)(r.default, {
    className: i()(u.emojiIcon, T),
    color: l.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}