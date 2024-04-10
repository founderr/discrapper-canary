"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
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
  T = s("747074"),
  p = s("530"),
  N = s("894374"),
  x = s("18816"),
  A = s("301984"),
  v = s("30556"),
  _ = s("228168"),
  C = s("182294"),
  h = s("231338"),
  U = s("262572");
let R = S.default.getEnableHardwareAcceleration() ? n.AnimatedAvatar : n.Avatar;

function j(e) {
  let {
    user: t,
    displayProfile: s,
    activity: n,
    friendToken: S,
    guildId: j,
    channelId: P,
    className: M,
    onClose: y
  } = e, {
    profileTheme: O
  } = l.useContext(T.UserProfileContext), {
    avatarSrc: g,
    eventHandlers: D,
    avatarDecorationSrc: F
  } = (0, E.default)({
    user: t,
    size: C.AvatarSizes.SIZE_120
  }), {
    relationshipType: L,
    canReceiveMessage: B,
    canReceiveFriendRequest: b
  } = (0, m.default)(t), G = (null == s ? void 0 : s.application) != null && (0, f.canInstallApplication)(s.application), [k, w] = (0, i.useStateFromStoresArray)([c.default], () => {
    let e = c.default.isMobileOnline(t.id);
    return (0, d.shouldDisableUserPresenceInChannel)(t, P) ? [h.StatusTypes.UNKNOWN, e] : (0, u.default)(n) ? [h.StatusTypes.STREAMING, e] : [c.default.getStatus(t.id), e]
  }), z = () => {
    y(), (0, r.popLayer)()
  };
  return (0, a.jsxs)("header", {
    className: M,
    children: [(0, a.jsx)(I.default, {
      user: t,
      displayProfile: s,
      profileType: _.UserProfileTypes.MODAL,
      hasProfileEffect: (null == s ? void 0 : s.profileEffectId) != null,
      onClose: z
    }), (0, a.jsxs)("div", {
      className: U.inner,
      children: [(0, a.jsx)("div", {
        ...D,
        children: (0, a.jsx)(R, {
          src: g,
          avatarDecoration: F,
          size: C.AvatarSizes.SIZE_120,
          className: U.avatar,
          status: k,
          statusBackdropColor: (0, o.getStatusBackdropColor)(O),
          "aria-label": t.username,
          isMobile: w,
          statusTooltip: !0
        })
      }), (0, a.jsxs)("div", {
        className: U.buttons,
        children: [B && (0, a.jsx)(v.default, {
          user: t,
          compact: G || b,
          onClose: z
        }), G && (0, a.jsx)(x.default, {
          application: s.application
        }), b && (0, a.jsx)(A.default, {
          user: t,
          relationshipType: L,
          friendToken: S,
          onClose: z
        })]
      }), (0, a.jsx)(p.default, {
        className: U.username,
        user: t,
        guildId: j,
        nicknameVariant: "heading-xl/bold",
        tags: (0, a.jsx)(N.UserProfilePronounsTag, {
          pronouns: null == s ? void 0 : s.pronouns
        })
      })]
    })]
  })
}