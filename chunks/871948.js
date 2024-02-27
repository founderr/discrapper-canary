"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983"),
  i = s("884691"),
  r = s("414456"),
  n = s.n(r),
  l = s("446674"),
  o = s("77078"),
  u = s("106435"),
  d = s("446488"),
  c = s("52904"),
  _ = s("782340"),
  E = s("270166");

function I(e) {
  let {
    smallerText: t,
    className: s,
    textColor: r
  } = e, u = (0, l.useStateFromStores)([d.default], () => d.default.affinities.slice(0, 3).reverse()), c = u.map((e, t) => (0, a.jsx)(T, {
    affinity: e,
    applyMask: t !== u.length - 1
  }, e.id)), I = e => null != e.globalName ? e.globalName : e.username, f = i.useMemo(() => 3 === u.length ? _.default.Messages.AFFINITIES_MARKETING_HEADER_3.format({
    username: I(u[2])
  }) : 2 === u.length ? _.default.Messages.AFFINITIES_MARKETING_HEADER_2.format({
    username: I(u[1]),
    otherUsername: I(u[0])
  }) : 1 === u.length ? _.default.Messages.AFFINITIES_MARKETING_HEADER_1.format({
    username: I(u[0])
  }) : "", [u]);
  return 0 === u.length ? null : (0, a.jsxs)("div", {
    className: n(E.container, s),
    children: [(0, a.jsx)("div", {
      className: E.iconContainer,
      children: c
    }), (0, a.jsx)("div", {
      className: E.textContainer,
      children: (0, a.jsx)(function() {
        return t ? (0, a.jsx)(o.Text, {
          variant: "text-lg/medium",
          color: r,
          children: f
        }) : (0, a.jsx)(o.Heading, {
          variant: "heading-xl/medium",
          color: r,
          children: f
        })
      }, {})
    })]
  })
}

function T(e) {
  let {
    affinity: t,
    applyMask: s
  } = e, {
    avatarSrc: i,
    eventHandlers: r
  } = (0, u.default)({
    user: t,
    size: c.AvatarSizes.SIZE_32,
    animateOnHover: !0
  });
  return (0, a.jsx)(o.Avatar, {
    className: n(E.icon, {
      [E.mask]: s
    }),
    src: i,
    "aria-label": t.username,
    size: c.AvatarSizes.SIZE_32,
    ...r
  })
}