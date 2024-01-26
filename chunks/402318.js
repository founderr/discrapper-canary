"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("424973");
var l = n("37983");
n("884691");
var a = n("917351"),
  s = n.n(a),
  i = n("77078"),
  r = n("86621"),
  o = n("449008"),
  u = n("735310");
let d = (0, r.default)(e => {
  let {
    member: t,
    empty: n,
    guildId: a
  } = e;
  return n || null == t ? (0, l.jsx)("div", {
    className: u.partyMember
  }) : (0, l.jsx)("div", {
    className: u.partyMember,
    children: (0, l.jsx)(i.Avatar, {
      src: t.getAvatarURL(a, 16),
      "aria-label": t.username,
      size: i.AvatarSizes.SIZE_16,
      className: u.partyMember
    })
  })
});
var c = e => {
  let {
    partySize: t,
    members: n,
    minAvatarsShown: a = 1,
    maxAvatarsShown: i = 2,
    guildId: r
  } = e, {
    totalSize: c,
    knownSize: f
  } = t;
  if (c < a) return null;
  let m = s(n).filter(o.isNotNullish).take(i).map(e => (0, l.jsx)(d, {
      member: e,
      guildId: r
    }, e.id)).value(),
    h = c - f;
  for (let e = 0; e < h && m.length < i; e++) m.push((0, l.jsx)(d, {
    empty: !0,
    guildId: r
  }, "empty-member-".concat(e)));
  let p = Math.max(Math.min(c - m.length, 99), 0);
  if (1 === p) {
    let e = n[i];
    m.push((0, l.jsx)(d, {
      member: e,
      guildId: r
    }, e.id))
  }
  return (0, l.jsx)("div", {
    className: u.wrapper,
    children: (0, l.jsxs)("div", {
      className: u.partyMembers,
      children: [m, p > 1 ? (0, l.jsxs)("div", {
        className: u.partyMemberOverflow,
        children: ["+", p]
      }) : null]
    })
  })
}