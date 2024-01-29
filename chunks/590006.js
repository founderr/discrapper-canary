"use strict";
l.r(t), l.d(t, {
  BadgeSizes: function() {
    return a
  },
  default: function() {
    return C
  }
}), l("424973");
var a, n, s = l("37983");
l("884691");
var i = l("414456"),
  r = l.n(i),
  u = l("77078"),
  o = l("572544"),
  c = l("244201"),
  d = l("298878"),
  f = l("643121"),
  T = l("217513"),
  E = l("590456"),
  A = l("49111"),
  _ = l("782340"),
  S = l("730684"),
  m = l("696246");

function C(e) {
  let {
    user: t,
    guildId: l,
    className: a,
    shrinkAtCount: n,
    shrinkToSize: i,
    isTryItOutFlow: C,
    size: N = 0
  } = e, g = (0, T.default)(t.id, l), v = (0, f.default)(g).map(e => ({
    ...e,
    src: (0, E.getBadgeAsset)(e.icon)
  })), p = (0, c.useWindowDispatch)();
  if (t.isClyde()) return (0, s.jsx)("div", {
    className: r(a, S.container, S.clydeBadgeList),
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
    className: r(a, v.length > 0 ? S.containerWithContent : S.container),
    "aria-label": _.default.Messages.PROFILE_USER_BADGES,
    role: "group",
    children: v.map(e => (0, s.jsx)(u.Tooltip, {
      position: "top",
      text: e.description,
      spacing: 12,
      children: t => (0, s.jsx)(u.Anchor, {
        ...t,
        onClick: l => {
          var a;
          null === (a = t.onClick) || void 0 === a || a.call(t);
          let n = null != e.link ? (0, o.default)(e.link) : null;
          if (null != n) return p.dispatch(A.ComponentActions.POPOUT_CLOSE), n(l)
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
}(n = a || (a = {}))[n.SIZE_24 = 0] = "SIZE_24", n[n.SIZE_22 = 1] = "SIZE_22", n[n.SIZE_18 = 2] = "SIZE_18"