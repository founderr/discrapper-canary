"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  i = s("442837"),
  n = s("974674"),
  o = s("696826"),
  r = s("37234"),
  u = s("420660"),
  d = s("233440"),
  c = s("158776"),
  f = s("135431"),
  S = s("998502"),
  E = s("204197"),
  I = s("249003"),
  m = s("78675"),
  T = s("184325"),
  p = s("747074"),
  _ = s("530"),
  N = s("894374"),
  A = s("18816"),
  x = s("301984"),
  v = s("30556"),
  U = s("228168"),
  h = s("182294"),
  C = s("231338"),
  R = s("262572");
let P = S.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;

function M(e) {
  let {
    user: t,
    displayProfile: s,
    activity: n,
    friendToken: S,
    guildId: M,
    channelId: j,
    className: g,
    onClose: y
  } = e, {
    profileTheme: O
  } = l.useContext(p.UserProfileContext), {
    avatarSrc: D,
    eventHandlers: F,
    avatarDecorationSrc: L
  } = (0, E.default)({
    user: t,
    size: h.AvatarSizes.SIZE_120
  }), {
    relationshipType: B,
    canReceiveMessage: b,
    canReceiveFriendRequest: G
  } = (0, I.default)(t), k = (null == s ? void 0 : s.application) != null && (0, f.canInstallApplication)(s.application), [w, z] = (0, i.useStateFromStoresArray)([c.default], () => {
    let e = c.default.isMobileOnline(t.id);
    return (0, d.shouldDisableUserPresenceInChannel)(t, j) ? [C.StatusTypes.UNKNOWN, e] : (0, u.default)(n) ? [C.StatusTypes.STREAMING, e] : [c.default.getStatus(t.id), e]
  }), V = () => {
    y(), (0, r.popLayer)()
  };
  return (0, a.jsxs)("header", {
    className: g,
    children: [(0, a.jsx)(m.default, {
      user: t,
      displayProfile: s,
      profileType: U.UserProfileTypes.MODAL,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, a.jsxs)("div", {
      className: R.inner,
      children: [(0, a.jsx)("div", {
        ...F,
        children: (0, a.jsx)(P, {
          src: D,
          avatarDecoration: L,
          size: h.AvatarSizes.SIZE_120,
          className: R.avatar,
          status: w,
          statusBackdropColor: (0, o.getStatusBackdropColor)(O),
          "aria-label": t.username,
          isMobile: z,
          statusTooltip: !0
        })
      }), (0, a.jsxs)("div", {
        className: R.buttons,
        children: [b && (0, a.jsx)(v.default, {
          user: t,
          compact: k || G,
          onClose: V
        }), k && (0, a.jsx)(A.default, {
          application: s.application
        }), G && (0, a.jsx)(x.default, {
          user: t,
          relationshipType: B,
          friendToken: S,
          onClose: V
        })]
      }), (0, a.jsxs)("div", {
        className: R.usernameBadgeList,
        children: [(0, a.jsx)(_.default, {
          className: R.username,
          user: t,
          guildId: M,
          nicknameVariant: "heading-xl/bold",
          tags: (0, a.jsx)(N.UserProfilePronounsTag, {
            pronouns: null == s ? void 0 : s.pronouns
          })
        }), (0, a.jsx)(T.default, {
          className: R.badgeList,
          user: t,
          guildId: M,
          size: T.BadgeSizes.SIZE_24
        })]
      })]
    })]
  })
}