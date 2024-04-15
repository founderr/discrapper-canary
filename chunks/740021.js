"use strict";
s.r(t), s.d(t, {
  default: function() {
    return R
  }
}), s("47120");
var l = s("735250");
s("470079");
var a = s("442837"),
  i = s("974674"),
  n = s("696826"),
  o = s("420660"),
  r = s("233440"),
  u = s("158776"),
  d = s("135431"),
  c = s("998502"),
  f = s("204197"),
  S = s("249003"),
  E = s("78675"),
  I = s("184325"),
  m = s("652853"),
  _ = s("530"),
  T = s("894374"),
  p = s("18816"),
  A = s("301984"),
  N = s("30556"),
  v = s("228168"),
  x = s("182294"),
  U = s("231338"),
  h = s("262572");
let C = c.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function R(e) {
  let {
    user: t,
    displayProfile: s,
    activity: i,
    friendToken: c,
    channelId: R,
    className: P,
    onClose: M
  } = e, {
    profileTheme: g
  } = (0, m.useUserProfileThemeContext)(), {
    avatarSrc: j,
    eventHandlers: y,
    avatarDecorationSrc: O
  } = (0, f.default)({
    user: t,
    guildId: null == s ? void 0 : s.guildId,
    size: x.AvatarSizes.SIZE_120
  }), {
    relationshipType: D,
    canReceiveMessage: F,
    canReceiveFriendRequest: L
  } = (0, S.default)(t), B = (null == s ? void 0 : s.application) != null && (0, d.canInstallApplication)(s.application), [b, G] = (0, a.useStateFromStoresArray)([u.default], () => {
    let e = u.default.isMobileOnline(t.id);
    return (0, r.shouldDisableUserPresenceInChannel)(t, R) ? [U.StatusTypes.UNKNOWN, e] : (0, o.default)(i) ? [U.StatusTypes.STREAMING, e] : [u.default.getStatus(t.id), e]
  });
  return (0, l.jsxs)("header", {
    className: P,
    children: [(0, l.jsx)(E.default, {
      user: t,
      displayProfile: s,
      profileType: v.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, l.jsxs)("div", {
      className: h.inner,
      children: [(0, l.jsx)("div", {
        ...y,
        children: (0, l.jsx)(C, {
          src: j,
          avatarDecoration: O,
          size: x.AvatarSizes.SIZE_120,
          className: h.avatar,
          status: b,
          statusBackdropColor: (0, n.getStatusBackdropColor)(g),
          "aria-label": t.username,
          isMobile: G,
          statusTooltip: !0
        })
      }), (0, l.jsxs)("div", {
        className: h.buttons,
        children: [F && (0, l.jsx)(N.default, {
          user: t,
          compact: B || L,
          onClose: M
        }), B && (0, l.jsx)(p.default, {
          application: s.application
        }), L && (0, l.jsx)(A.default, {
          user: t,
          relationshipType: D,
          friendToken: c,
          onClose: M
        })]
      }), (0, l.jsxs)("div", {
        className: h.usernameBadgeList,
        children: [(0, l.jsx)(_.default, {
          className: h.username,
          user: t,
          guildId: null == s ? void 0 : s.guildId,
          nicknameVariant: "heading-xl/bold",
          tags: (0, l.jsx)(T.UserProfilePronounsTag, {
            pronouns: null == s ? void 0 : s.pronouns
          })
        }), (0, l.jsx)(I.default, {
          className: h.badgeList,
          user: t,
          guildId: null == s ? void 0 : s.guildId,
          size: I.BadgeSizes.SIZE_24
        })]
      })]
    })]
  })
}