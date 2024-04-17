"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("47120");
var l = s("735250");
s("470079");
var a = s("442837"),
  i = s("974674"),
  o = s("696826"),
  r = s("420660"),
  n = s("233440"),
  u = s("158776"),
  d = s("998502"),
  c = s("505737"),
  f = s("204197"),
  S = s("78675"),
  E = s("184325"),
  m = s("438163"),
  I = s("652853"),
  v = s("530"),
  _ = s("894374"),
  A = s("30556"),
  T = s("228168"),
  x = s("182294"),
  N = s("231338"),
  U = s("262572");
let p = d.default.getEnableHardwareAcceleration() ? i.AnimatedAvatar : i.Avatar;

function h(e) {
  let {
    user: t,
    displayProfile: s,
    activity: i,
    customStatusActivity: d,
    guildId: h,
    channelId: C,
    className: P,
    onClose: j
  } = e, {
    theme: M
  } = (0, I.useUserProfileThemeContext)(), y = (0, c.default)(t.id, h), {
    avatarSrc: R,
    eventHandlers: g,
    avatarDecorationSrc: O
  } = (0, f.default)({
    user: t,
    guildId: null == s ? void 0 : s.guildId,
    size: x.AvatarSizes.SIZE_120
  }), [F, L] = (0, a.useStateFromStoresArray)([u.default], () => {
    let e = u.default.isMobileOnline(t.id);
    return (0, n.shouldDisableUserPresenceInChannel)(t, C) ? [N.StatusTypes.UNKNOWN, e] : (0, r.default)(i) ? [N.StatusTypes.STREAMING, e] : [u.default.getStatus(t.id), e]
  });
  return (0, l.jsxs)("header", {
    className: P,
    children: [(0, l.jsx)(S.default, {
      user: t,
      displayProfile: s,
      profileType: T.UserProfileTypes.FULL_SIZE,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null
    }), (0, l.jsxs)("div", {
      className: U.inner,
      children: [(0, l.jsxs)("div", {
        ...g,
        children: [(0, l.jsx)(p, {
          src: R,
          avatarDecoration: O,
          size: x.AvatarSizes.SIZE_120,
          className: U.avatar,
          status: F,
          statusBackdropColor: (0, o.getStatusBackdropColor)(M),
          "aria-label": t.username,
          isMobile: L,
          statusTooltip: !0
        }), null != d && (0, l.jsx)(m.UserProfileCustomStatusBubble, {
          positionStyle: U.statusBubblePosition,
          statusActivity: d
        })]
      }), (0, l.jsx)("div", {
        className: U.buttons,
        children: y && (0, l.jsx)(A.default, {
          user: t,
          onClose: j
        })
      }), (0, l.jsxs)("div", {
        className: U.usernameBadgeList,
        children: [(0, l.jsx)(v.default, {
          className: U.username,
          user: t,
          guildId: null == s ? void 0 : s.guildId,
          nicknameVariant: "heading-xl/bold",
          tags: (0, l.jsx)(_.UserProfilePronounsTag, {
            pronouns: null == s ? void 0 : s.pronouns
          })
        }), (0, l.jsx)(E.default, {
          className: U.badgeList,
          user: t,
          guildId: null == s ? void 0 : s.guildId,
          size: E.BadgeSizes.SIZE_24
        })]
      })]
    })]
  })
}