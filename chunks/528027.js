"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var E = s("735250");
s("470079");
var _ = s("120356"),
  a = s.n(_),
  n = s("596454"),
  T = s("377171"),
  u = s("403910"),
  i = s("549631"),
  A = s("623492");

function l(e) {
  var t;
  let {
    guildId: s,
    emojiId: _,
    emojiName: l,
    className: I
  } = e, L = (0, u.default)(s, _);
  return null != L || null != l ? (0, E.jsx)(n.default, {
    emojiId: null == L ? void 0 : L.id,
    emojiName: null != l ? l : null == L ? void 0 : L.name,
    animated: null !== (t = null == L ? void 0 : L.animated) && void 0 !== t && t,
    className: a()(A.emojiIcon, I)
  }) : (0, E.jsx)(i.default, {
    className: a()(A.emojiIcon, I),
    color: T.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}