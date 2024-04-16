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
  o = s("696826"),
  n = s("420660"),
  r = s("233440"),
  u = s("158776"),
  d = s("135431"),
  c = s("998502"),
  f = s("204197"),
  S = s("249003"),
  E = s("78675"),
  I = s("184325"),
  m = s("438163"),
  T = s("652853"),
  _ = s("530"),
  A = s("894374"),
  p = s("18816"),
  v = s("301984"),
  N = s("30556"),
  x = s("228168"),
  U = s("182294"),
  h = s("231338"),
  C = s("262572");
let P = c.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function R(e) {
  let {
    user: t,
    displayProfile: s,
    activity: i,
    customStatusActivity: c,
    friendToken: R,
    channelId: M,
    className: j,
    onClose: g
  } = e, {
    theme: y
  } = (0, T.useUserProfileThemeContext)(), {
    avatarSrc: O,
    eventHandlers: D,
    avatarDecorationSrc: F
  } = (0, f.default)({
    user: t,
    guildId: null == s ? void 0 : s.guildId,
    size: U.AvatarSizes.SIZE_120
  }), {
    relationshipType: L,
    canReceiveMessage: B,
    canReceiveFriendRequest: b
  } = (0, S.default)(t), G = (null == s ? void 0 : s.application) != null && (0, d.canInstallApplication)(s.application), [k, w] = (0, a.useStateFromStoresArray)([u.default], () => {
    let e = u.default.isMobileOnline(t.id);
    return (0, r.shouldDisableUserPresenceInChannel)(t, M) ? [h.StatusTypes.UNKNOWN, e] : (0, n.default)(i) ? [h.StatusTypes.STREAMING, e] : [u.default.getStatus(t.id), e]
  });
  return (0, l.jsxs)("header", {
    className: j,
    children: [(0, l.jsx)(E.default, {
      user: t,
      displayProfile: s,
      profileType: x.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, l.jsxs)("div", {
      className: C.inner,
      children: [(0, l.jsxs)("div", {
        ...D,
        children: [(0, l.jsx)(P, {
          src: O,
          avatarDecoration: F,
          size: U.AvatarSizes.SIZE_120,
          className: C.avatar,
          status: k,
          statusBackdropColor: (0, o.getStatusBackdropColor)(y),
          "aria-label": t.username,
          isMobile: w,
          statusTooltip: !0
        }), null != c && (0, l.jsx)(m.UserProfileCustomStatusBubble, {
          positionStyle: C.statusBubblePosition,
          statusActivity: c
        })]
      }), (0, l.jsxs)("div", {
        className: C.buttons,
        children: [B && (0, l.jsx)(N.default, {
          user: t,
          compact: G || b,
          onClose: g
        }), G && (0, l.jsx)(p.default, {
          application: s.application
        }), b && (0, l.jsx)(v.default, {
          user: t,
          relationshipType: L,
          friendToken: R,
          onClose: g
        })]
      }), (0, l.jsxs)("div", {
        className: C.usernameBadgeList,
        children: [(0, l.jsx)(_.default, {
          className: C.username,
          user: t,
          guildId: null == s ? void 0 : s.guildId,
          nicknameVariant: "heading-xl/bold",
          tags: (0, l.jsx)(A.UserProfilePronounsTag, {
            pronouns: null == s ? void 0 : s.pronouns
          })
        }), (0, l.jsx)(I.default, {
          className: C.badgeList,
          user: t,
          guildId: null == s ? void 0 : s.guildId,
          size: I.BadgeSizes.SIZE_24
        })]
      })]
    })]
  })
}