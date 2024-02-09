"use strict";
l.r(t), l.d(t, {
  BadgeSizes: function() {
    return r
  },
  default: function() {
    return v
  }
}), l("424973");
var r, a, n = l("37983");
l("884691");
var s = l("414456"),
  i = l.n(s),
  o = l("77078"),
  u = l("572544"),
  d = l("244201"),
  c = l("298878"),
  f = l("643121"),
  T = l("217513"),
  p = l("590456"),
  m = l("49111"),
  E = l("782340"),
  P = l("730684"),
  S = l("696246");

function v(e) {
  let {
    user: t,
    guildId: l,
    className: r,
    shrinkAtCount: a,
    shrinkToSize: s,
    isTryItOutFlow: v,
    size: h = 0
  } = e, g = (0, T.default)(t.id, l), _ = (0, f.default)(g).map(e => ({
    ...e,
    src: (0, p.getBadgeAsset)(e.icon)
  })), N = (0, d.useWindowDispatch)();
  if (t.isClyde()) return (0, n.jsx)("div", {
    className: i(r, P.container, P.clydeBadgeList),
    "aria-label": E.default.Messages.PROFILE_USER_BADGES,
    role: "group",
    children: (0, n.jsx)(c.default, {})
  });
  v && null == _.find(e => "premium" === e.id) && _.push({
    id: "premium",
    icon: S,
    src: S,
    description: E.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
      date: new Date
    })
  });
  let O = null != a && null != s && _.length > a ? s : h;
  return (0, n.jsx)("div", {
    className: i(r, _.length > 0 ? P.containerWithContent : P.container),
    "aria-label": E.default.Messages.PROFILE_USER_BADGES,
    role: "group",
    children: _.map(e => (0, n.jsx)(o.Tooltip, {
      position: "top",
      text: e.description,
      spacing: 12,
      children: t => (0, n.jsx)(o.Anchor, {
        ...t,
        onClick: l => {
          var r;
          null === (r = t.onClick) || void 0 === r || r.call(t);
          let a = null != e.link ? (0, u.default)(e.link) : null;
          if (null != a) return N.dispatch(m.ComponentActions.POPOUT_CLOSE), a(l)
        },
        href: e.link,
        children: (0, n.jsx)("img", {
          alt: " ",
          "aria-hidden": !0,
          src: e.src,
          className: i({
            [P.profileBadge24]: 0 === O,
            [P.profileBadge22]: 1 === O,
            [P.profileBadge18]: 2 === O
          })
        })
      })
    }, e.id))
  })
}(a = r || (r = {}))[a.SIZE_24 = 0] = "SIZE_24", a[a.SIZE_22 = 1] = "SIZE_22", a[a.SIZE_18 = 2] = "SIZE_18"