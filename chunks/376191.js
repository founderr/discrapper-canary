n.d(t, {
  Z: function() {
    return f
  }
});
var i = n(735250);
n(470079);
var s = n(442837),
  l = n(481060),
  a = n(129861),
  r = n(607070),
  o = n(388905),
  c = n(1585),
  u = n(125988),
  d = n(43267),
  E = n(522289),
  h = n(699516),
  _ = n(546591),
  I = n(51144),
  m = n(998502),
  g = n(620924),
  p = n(332712),
  N = n(81471),
  T = n(689938),
  C = n(272e3);
let S = e => {
    let {
      userId: t
    } = e, n = (0, p._)(t);
    return null == n || 0 === n.length ? (0, i.jsx)(l.Text, {
      className: C.mutualGuilds,
      variant: "text-sm/normal",
      color: "text-muted",
      children: T.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS
    }) : (0, i.jsxs)("div", {
      className: C.mutualGuildsContainer,
      children: [(0, i.jsx)(E.Z, {
        guilds: n,
        maxGuilds: 3,
        size: o.Vj.Sizes.SMOL,
        hideOverflowCount: !0
      }), (0, i.jsx)(l.Text, {
        className: C.mutualGuilds,
        variant: "text-sm/normal",
        color: "text-muted",
        children: T.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
          count: n.length
        })
      })]
    })
  },
  A = m.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function f(e) {
  var t;
  let {
    channel: n,
    otherUser: o,
    active: E
  } = e, m = (0, s.e7)([r.Z], () => r.Z.useReducedMotion), p = (0, s.e7)([h.Z], () => null == o ? null : h.Z.getNickname(o.id)), f = !m && E, Z = (0, g.c)(n), {
    avatarDecorationSrc: v
  } = (0, u.Z)({
    user: o,
    size: (0, c.y9)(l.AvatarSizes.SIZE_40),
    onlyAnimateOnHover: !0
  });
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(A, {
      className: C.avatar,
      src: (0, d.x)(n, 40, f),
      avatarDecoration: v,
      size: l.AvatarSizes.SIZE_40,
      "aria-label": null !== (t = null == o ? void 0 : o.username) && void 0 !== t ? t : T.Z.Messages.UNKNOWN_USER
    }), (0, i.jsxs)("div", {
      className: C.userPreview,
      children: [(0, i.jsxs)("div", {
        className: C.userContainerWithPreview,
        children: [(0, i.jsx)(a.Z, {
          nick: p,
          user: o,
          showAccountIdentifier: !0,
          className: C.tagContainer,
          usernameClass: C.username,
          discriminatorClass: null != I.ZP.getGlobalName(o) ? C.globalName : C.discriminator
        }), (0, i.jsx)(l.Text, {
          className: C.timestampWithPreview,
          color: "text-muted",
          variant: "text-xs/normal",
          children: Z
        })]
      }), (0, i.jsx)(_.Z, {
        hoverText: (0, i.jsx)(N.Z, {
          channel: n
        }),
        forceHover: E,
        children: (0, i.jsx)(S, {
          userId: o.id
        })
      })]
    })]
  })
}