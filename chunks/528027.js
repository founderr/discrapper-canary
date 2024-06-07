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
  i = s("403910"),
  A = s("549631"),
  u = s("623492");

function l(e) {
  var t;
  let {
    guildId: s,
    emojiId: _,
    emojiName: l,
    className: I
  } = e, r = (0, i.default)(s, _);
  return null != r || null != l ? (0, E.jsx)(n.default, {
    emojiId: null == r ? void 0 : r.id,
    emojiName: null != l ? l : null == r ? void 0 : r.name,
    animated: null !== (t = null == r ? void 0 : r.animated) && void 0 !== t && t,
    className: a()(u.emojiIcon, I)
  }) : (0, E.jsx)(A.default, {
    className: a()(u.emojiIcon, I),
    color: T.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}