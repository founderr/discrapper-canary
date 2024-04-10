"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
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
  m = s("249003"),
  I = s("735336"),
  T = s("184325"),
  p = s("747074"),
  N = s("530"),
  x = s("894374"),
  A = s("18816"),
  v = s("301984"),
  _ = s("30556"),
  h = s("228168"),
  C = s("182294"),
  U = s("231338"),
  j = s("262572");
let R = S.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;

function P(e) {
  let {
    user: t,
    displayProfile: s,
    activity: n,
    friendToken: S,
    guildId: P,
    channelId: M,
    className: y,
    onClose: g
  } = e, {
    profileTheme: O
  } = l.useContext(p.UserProfileContext), {
    avatarSrc: D,
    eventHandlers: F,
    avatarDecorationSrc: L
  } = (0, E.default)({
    user: t,
    size: C.AvatarSizes.SIZE_120
  }), {
    relationshipType: B,
    canReceiveMessage: b,
    canReceiveFriendRequest: G
  } = (0, m.default)(t), k = (null == s ? void 0 : s.application) != null && (0, f.canInstallApplication)(s.application), [z, w] = (0, i.useStateFromStoresArray)([c.default], () => {
    let e = c.default.isMobileOnline(t.id);
    return (0, d.shouldDisableUserPresenceInChannel)(t, M) ? [U.StatusTypes.UNKNOWN, e] : (0, u.default)(n) ? [U.StatusTypes.STREAMING, e] : [c.default.getStatus(t.id), e]
  }), V = () => {
    g(), (0, r.popLayer)()
  };
  return (0, a.jsxs)("header", {
    className: y,
    children: [(0, a.jsx)(I.default, {
      user: t,
      displayProfile: s,
      profileType: h.UserProfileTypes.MODAL,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null,
      onClose: V
    }), (0, a.jsxs)("div", {
      className: j.inner,
      children: [(0, a.jsx)("div", {
        ...F,
        children: (0, a.jsx)(R, {
          src: D,
          avatarDecoration: L,
          size: C.AvatarSizes.SIZE_120,
          className: j.avatar,
          status: z,
          statusBackdropColor: (0, o.getStatusBackdropColor)(O),
          "aria-label": t.username,
          isMobile: w,
          statusTooltip: !0
        })
      }), (0, a.jsxs)("div", {
        className: j.buttons,
        children: [b && (0, a.jsx)(_.default, {
          user: t,
          compact: k || G,
          onClose: V
        }), k && (0, a.jsx)(A.default, {
          application: s.application
        }), G && (0, a.jsx)(v.default, {
          user: t,
          relationshipType: B,
          friendToken: S,
          onClose: V
        })]
      }), (0, a.jsxs)("div", {
        className: j.usernameBadgeList,
        children: [(0, a.jsx)(N.default, {
          className: j.username,
          user: t,
          guildId: P,
          nicknameVariant: "heading-xl/bold",
          tags: (0, a.jsx)(x.UserProfilePronounsTag, {
            pronouns: null == s ? void 0 : s.pronouns
          })
        }), (0, a.jsx)(T.default, {
          className: j.badgeList,
          user: t,
          guildId: P,
          size: T.BadgeSizes.SIZE_24
        })]
      })]
    })]
  })
}