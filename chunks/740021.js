"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
}), s("47120");
var a = s("735250");
s("470079");
var l = s("442837"),
  i = s("974674"),
  n = s("696826"),
  o = s("37234"),
  r = s("420660"),
  u = s("233440"),
  d = s("158776"),
  c = s("135431"),
  f = s("998502"),
  S = s("204197"),
  E = s("249003"),
  m = s("78675"),
  I = s("184325"),
  T = s("652853"),
  p = s("530"),
  _ = s("894374"),
  N = s("18816"),
  x = s("301984"),
  A = s("30556"),
  v = s("228168"),
  U = s("182294"),
  h = s("231338"),
  C = s("262572");
let R = f.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function P(e) {
  let {
    user: t,
    displayProfile: s,
    activity: i,
    friendToken: f,
    guildId: P,
    channelId: j,
    className: M,
    onClose: g
  } = e, {
    profileTheme: y
  } = (0, T.useUserProfileThemeContext)(), {
    avatarSrc: O,
    eventHandlers: D,
    avatarDecorationSrc: F
  } = (0, S.default)({
    user: t,
    size: U.AvatarSizes.SIZE_120
  }), {
    relationshipType: L,
    canReceiveMessage: B,
    canReceiveFriendRequest: b
  } = (0, E.default)(t), G = (null == s ? void 0 : s.application) != null && (0, c.canInstallApplication)(s.application), [k, w] = (0, l.useStateFromStoresArray)([d.default], () => {
    let e = d.default.isMobileOnline(t.id);
    return (0, u.shouldDisableUserPresenceInChannel)(t, j) ? [h.StatusTypes.UNKNOWN, e] : (0, r.default)(i) ? [h.StatusTypes.STREAMING, e] : [d.default.getStatus(t.id), e]
  }), z = () => {
    g(), (0, o.popLayer)()
  };
  return (0, a.jsxs)("header", {
    className: M,
    children: [(0, a.jsx)(m.default, {
      user: t,
      displayProfile: s,
      profileType: v.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, a.jsxs)("div", {
      className: C.inner,
      children: [(0, a.jsx)("div", {
        ...D,
        children: (0, a.jsx)(R, {
          src: O,
          avatarDecoration: F,
          size: U.AvatarSizes.SIZE_120,
          className: C.avatar,
          status: k,
          statusBackdropColor: (0, n.getStatusBackdropColor)(y),
          "aria-label": t.username,
          isMobile: w,
          statusTooltip: !0
        })
      }), (0, a.jsxs)("div", {
        className: C.buttons,
        children: [B && (0, a.jsx)(A.default, {
          user: t,
          compact: G || b,
          onClose: z
        }), G && (0, a.jsx)(N.default, {
          application: s.application
        }), b && (0, a.jsx)(x.default, {
          user: t,
          relationshipType: L,
          friendToken: f,
          onClose: z
        })]
      }), (0, a.jsxs)("div", {
        className: C.usernameBadgeList,
        children: [(0, a.jsx)(p.default, {
          className: C.username,
          user: t,
          guildId: P,
          nicknameVariant: "heading-xl/bold",
          tags: (0, a.jsx)(_.UserProfilePronounsTag, {
            pronouns: null == s ? void 0 : s.pronouns
          })
        }), (0, a.jsx)(I.default, {
          className: C.badgeList,
          user: t,
          guildId: P,
          size: I.BadgeSizes.SIZE_24
        })]
      })]
    })]
  })
}