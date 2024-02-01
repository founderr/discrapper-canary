"use strict";
a.r(t), a.d(t, {
  BadgeSizes: function() {
    return l
  },
  default: function() {
    return C
  }
}), a("424973");
var l, n, s = a("37983");
a("884691");
var i = a("414456"),
  r = a.n(i),
  u = a("77078"),
  o = a("572544"),
  c = a("244201"),
  d = a("298878"),
  f = a("643121"),
  T = a("217513"),
  E = a("590456"),
  A = a("49111"),
  _ = a("782340"),
  S = a("730684"),
  m = a("696246");

function C(e) {
  let {
    user: t,
    guildId: a,
    className: l,
    shrinkAtCount: n,
    shrinkToSize: i,
    isTryItOutFlow: C,
    size: N = 0
  } = e, g = (0, T.default)(t.id, a), v = (0, f.default)(g).map(e => ({
    ...e,
    src: (0, E.getBadgeAsset)(e.icon)
  })), p = (0, c.useWindowDispatch)();
  if (t.isClyde()) return (0, s.jsx)("div", {
    className: r(l, S.container, S.clydeBadgeList),
    "aria-label": _.default.Messages.PROFILE_USER_BADGES,
    role: "group",
    children: (0, s.jsx)(d.default, {})
  });
  C && null == v.find(e => "premium" === e.id) && v.push({
    id: "premium",
    icon: m,
    src: m,
    description: _.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
      date: new Date
    })
  });
  let I = null != n && null != i && v.length > n ? i : N;
  return (0, s.jsx)("div", {
    className: r(l, v.length > 0 ? S.containerWithContent : S.container),
    "aria-label": _.default.Messages.PROFILE_USER_BADGES,
    role: "group",
    children: v.map(e => (0, s.jsx)(u.Tooltip, {
      position: "top",
      text: e.description,
      spacing: 12,
      children: t => (0, s.jsx)(u.Anchor, {
        ...t,
        onClick: a => {
          var l;
          null === (l = t.onClick) || void 0 === l || l.call(t);
          let n = null != e.link ? (0, o.default)(e.link) : null;
          if (null != n) return p.dispatch(A.ComponentActions.POPOUT_CLOSE), n(a)
        },
        href: e.link,
        children: (0, s.jsx)("img", {
          alt: " ",
          "aria-hidden": !0,
          src: e.src,
          className: r({
            [S.profileBadge24]: 0 === I,
            [S.profileBadge22]: 1 === I,
            [S.profileBadge18]: 2 === I
          })
        })
      })
    }, e.id))
  })
}(n = l || (l = {}))[n.SIZE_24 = 0] = "SIZE_24", n[n.SIZE_22 = 1] = "SIZE_22", n[n.SIZE_18 = 2] = "SIZE_18"