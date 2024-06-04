"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("481060"),
  i = n("129861"),
  r = n("607070"),
  o = n("1585"),
  u = n("125988"),
  d = n("43267"),
  c = n("522289"),
  f = n("699516"),
  E = n("546591"),
  h = n("819570"),
  _ = n("51144"),
  C = n("998502"),
  m = n("620924"),
  S = n("332712"),
  p = n("81471"),
  I = n("689938"),
  g = n("326486");
let T = e => {
    let {
      userId: t
    } = e, n = (0, S.useMutualGuilds)(t);
    return null == n || 0 === n.length ? (0, a.jsx)(l.Text, {
      className: g.mutualGuilds,
      variant: "text-sm/normal",
      color: "text-muted",
      children: I.default.Messages.USER_PROFILE_NO_MUTUAL_SERVERS
    }) : (0, a.jsxs)("div", {
      className: g.mutualGuildsContainer,
      children: [(0, a.jsx)(c.default, {
        guilds: n,
        maxGuilds: 3,
        size: h.GuildIcon.Sizes.SMOL,
        hideOverflowCount: !0
      }), (0, a.jsx)(l.Text, {
        className: g.mutualGuilds,
        variant: "text-sm/normal",
        color: "text-muted",
        children: I.default.Messages.USER_PROFILE_MUTUAL_GUILDS.format({
          count: n.length
        })
      })]
    })
  },
  A = C.default.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;

function N(e) {
  var t;
  let {
    channel: n,
    otherUser: c,
    active: h
  } = e, C = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), S = (0, s.useStateFromStores)([f.default], () => null == c ? null : f.default.getNickname(c.id)), N = !C && h, v = (0, m.useMessageRequestRelativeTimestampText)(n), {
    avatarDecorationSrc: R
  } = (0, u.default)({
    user: c,
    size: (0, o.getDecorationSizeForAvatarSize)(l.AvatarSizes.SIZE_40),
    animateOnHover: !0
  });
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(A, {
      className: g.avatar,
      src: (0, d.getChannelIconURL)(n, 40, N),
      avatarDecoration: R,
      size: l.AvatarSizes.SIZE_40,
      "aria-label": null !== (t = null == c ? void 0 : c.username) && void 0 !== t ? t : I.default.Messages.UNKNOWN_USER
    }), (0, a.jsxs)("div", {
      className: g.userPreview,
      children: [(0, a.jsxs)("div", {
        className: g.userContainerWithPreview,
        children: [(0, a.jsx)(i.default, {
          nick: S,
          user: c,
          showAccountIdentifier: !0,
          className: g.tagContainer,
          usernameClass: g.username,
          discriminatorClass: null != _.default.getGlobalName(c) ? g.globalName : g.discriminator
        }), (0, a.jsx)(l.Text, {
          className: g.timestampWithPreview,
          color: "text-muted",
          variant: "text-xs/normal",
          children: v
        })]
      }), (0, a.jsx)(E.default, {
        hoverText: (0, a.jsx)(p.default, {
          channel: n
        }),
        forceHover: h,
        children: (0, a.jsx)(T, {
          userId: c.id
        })
      })]
    })]
  })
}