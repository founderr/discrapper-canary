n.d(t, {
  Z: function() {
    return f
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
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
  T = n(620924),
  g = n(332712),
  p = n(81471),
  N = n(689938),
  S = n(272e3);
let C = e => {
    let {
      userId: t
    } = e, n = (0, g._)(t);
    return null == n || 0 === n.length ? (0, s.jsx)(l.Text, {
      className: S.mutualGuilds,
      variant: "text-sm/normal",
      color: "text-muted",
      children: N.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS
    }) : (0, s.jsxs)("div", {
      className: S.mutualGuildsContainer,
      children: [(0, s.jsx)(E.Z, {
        guilds: n,
        maxGuilds: 3,
        size: o.Vj.Sizes.SMOL,
        hideOverflowCount: !0
      }), (0, s.jsx)(l.Text, {
        className: S.mutualGuilds,
        variant: "text-sm/normal",
        color: "text-muted",
        children: N.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
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
  } = e, m = (0, i.e7)([r.Z], () => r.Z.useReducedMotion), g = (0, i.e7)([h.Z], () => null == o ? null : h.Z.getNickname(o.id)), f = !m && E, Z = (0, T.c)(n), {
    avatarDecorationSrc: L
  } = (0, u.Z)({
    user: o,
    size: (0, c.y9)(l.AvatarSizes.SIZE_40),
    onlyAnimateOnHover: !0
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(A, {
      className: S.avatar,
      src: (0, d.x)(n, 40, f),
      avatarDecoration: L,
      size: l.AvatarSizes.SIZE_40,
      "aria-label": null !== (t = null == o ? void 0 : o.username) && void 0 !== t ? t : N.Z.Messages.UNKNOWN_USER
    }), (0, s.jsxs)("div", {
      className: S.userPreview,
      children: [(0, s.jsxs)("div", {
        className: S.userContainerWithPreview,
        children: [(0, s.jsx)(a.Z, {
          nick: g,
          user: o,
          showAccountIdentifier: !0,
          className: S.tagContainer,
          usernameClass: S.username,
          discriminatorClass: null != I.ZP.getGlobalName(o) ? S.globalName : S.discriminator
        }), (0, s.jsx)(l.Text, {
          className: S.timestampWithPreview,
          color: "text-muted",
          variant: "text-xs/normal",
          children: Z
        })]
      }), (0, s.jsx)(_.Z, {
        hoverText: (0, s.jsx)(p.Z, {
          channel: n
        }),
        forceHover: E,
        children: (0, s.jsx)(C, {
          userId: o.id
        })
      })]
    })]
  })
}