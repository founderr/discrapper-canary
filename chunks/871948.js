"use strict";
s.r(t), s.d(t, {
  default: function() {
    return I
  }
});
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  r = s.n(i),
  l = s("446674"),
  o = s("77078"),
  u = s("106435"),
  d = s("446488"),
  c = s("52904"),
  _ = s("782340"),
  E = s("270166");

function I(e) {
  let {
    smallerText: t
  } = e, s = (0, l.useStateFromStores)([d.default], () => d.default.affinities.slice(0, 3).reverse()), i = s.map((e, t) => (0, a.jsx)(T, {
    affinity: e,
    applyMask: t !== s.length - 1
  }, e.id)), r = e => null != e.globalName ? e.globalName : e.username, u = n.useMemo(() => 3 === s.length ? _.default.Messages.AFFINITIES_MARKETING_HEADER_3.format({
    username: r(s[2])
  }) : 2 === s.length ? _.default.Messages.AFFINITIES_MARKETING_HEADER_2.format({
    username: r(s[1]),
    otherUsername: r(s[0])
  }) : 1 === s.length ? _.default.Messages.AFFINITIES_MARKETING_HEADER_1.format({
    username: r(s[0])
  }) : "", [s]);
  return 0 === s.length ? null : (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)("div", {
      className: E.iconContainer,
      children: i
    }), (0, a.jsx)("div", {
      className: E.textContainer,
      children: (0, a.jsx)(function() {
        return t ? (0, a.jsx)(o.Text, {
          variant: "text-lg/medium",
          color: "always-white",
          children: u
        }) : (0, a.jsx)(o.Heading, {
          variant: "heading-xl/medium",
          color: "always-white",
          children: u
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
    avatarSrc: n,
    eventHandlers: i
  } = (0, u.default)({
    user: t,
    size: c.AvatarSizes.SIZE_32,
    animateOnHover: !0
  });
  return (0, a.jsx)(o.Avatar, {
    className: r(E.icon, {
      [E.mask]: s
    }),
    src: n,
    "aria-label": t.username,
    size: c.AvatarSizes.SIZE_32,
    ...i
  })
}