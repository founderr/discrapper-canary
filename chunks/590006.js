"use strict";
a.r(t), a.d(t, {
  BadgeSizes: function() {
    return n
  },
  default: function() {
    return _
  }
}), a("424973");
var n, l, s = a("37983");
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
  m = a("49111"),
  S = a("782340"),
  A = a("730684"),
  g = a("696246");

function _(e) {
  let {
    user: t,
    guildId: a,
    className: n,
    shrinkAtCount: l,
    shrinkToSize: i,
    isTryItOutFlow: _,
    size: C = 0
  } = e, p = (0, T.default)(t.id, a), v = (0, f.default)(p).map(e => ({
    ...e,
    src: (0, E.getBadgeAsset)(e.icon)
  })), N = (0, c.useWindowDispatch)();
  if (t.isClyde()) return (0, s.jsx)("div", {
    className: r(n, A.container, A.clydeBadgeList),
    "aria-label": S.default.Messages.PROFILE_USER_BADGES,
    role: "group",
    children: (0, s.jsx)(d.default, {})
  });
  _ && null == v.find(e => "premium" === e.id) && v.push({
    id: "premium",
    icon: g,
    src: g,
    description: S.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
      date: new Date
    })
  });
  let I = null != l && null != i && v.length > l ? i : C;
  return (0, s.jsx)("div", {
    className: r(n, v.length > 0 ? A.containerWithContent : A.container),
    "aria-label": S.default.Messages.PROFILE_USER_BADGES,
    role: "group",
    children: v.map(e => (0, s.jsx)(u.Tooltip, {
      position: "top",
      text: e.description,
      spacing: 12,
      children: t => (0, s.jsx)(u.Anchor, {
        ...t,
        onClick: a => {
          var n;
          null === (n = t.onClick) || void 0 === n || n.call(t);
          let l = null != e.link ? (0, o.default)(e.link) : null;
          if (null != l) return N.dispatch(m.ComponentActions.POPOUT_CLOSE), l(a)
        },
        href: e.link,
        children: (0, s.jsx)("img", {
          alt: " ",
          "aria-hidden": !0,
          src: e.src,
          className: r({
            [A.profileBadge24]: 0 === I,
            [A.profileBadge22]: 1 === I,
            [A.profileBadge18]: 2 === I
          })
        })
      })
    }, e.id))
  })
}(l = n || (n = {}))[l.SIZE_24 = 0] = "SIZE_24", l[l.SIZE_22 = 1] = "SIZE_22", l[l.SIZE_18 = 2] = "SIZE_18"