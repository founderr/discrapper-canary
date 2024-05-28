"use strict";
i.r(s), i.d(s, {
  default: function() {
    return a
  }
});
var t = i("735250");
i("470079");
var n = i("120356"),
  E = i.n(n),
  r = i("596454"),
  S = i("377171"),
  o = i("403910"),
  _ = i("549631"),
  l = i("623492");

function a(e) {
  var s;
  let {
    guildId: i,
    emojiId: n,
    emojiName: a,
    className: I
  } = e, u = (0, o.default)(i, n);
  return null != u || null != a ? (0, t.jsx)(r.default, {
    emojiId: null == u ? void 0 : u.id,
    emojiName: null != a ? a : null == u ? void 0 : u.name,
    animated: null !== (s = null == u ? void 0 : u.animated) && void 0 !== s && s,
    className: E()(l.emojiIcon, I)
  }) : (0, t.jsx)(_.default, {
    className: E()(l.emojiIcon, I),
    color: S.default.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}