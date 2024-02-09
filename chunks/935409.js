"use strict";
l.r(t), l.d(t, {
  UserPopoutBadgeList: function() {
    return b
  },
  UserPopoutAvatar: function() {
    return D
  },
  default: function() {
    return H
  }
}), l("794252");
var r = l("37983"),
  a = l("884691"),
  n = l("414456"),
  s = l.n(n),
  i = l("506838"),
  o = l("446674"),
  u = l("669491"),
  d = l("77078"),
  c = l("606292"),
  f = l("980215"),
  T = l("824794"),
  p = l("635471"),
  m = l("305961"),
  E = l("423487"),
  P = l("587974"),
  S = l("599110"),
  v = l("719923"),
  h = l("50885"),
  g = l("713135"),
  _ = l("106435"),
  N = l("289918"),
  O = l("878569"),
  U = l("590006"),
  A = l("430312"),
  C = l("401642"),
  I = l("590456"),
  y = l("49111"),
  M = l("646718"),
  x = l("782340"),
  L = l("524466");
let R = d.AvatarSizes.SIZE_80,
  j = (0, c.getDecorationSizeForAvatarSize)(R);

function b(e) {
  let {
    user: t,
    guildId: l,
    isTryItOutFlow: a,
    forProfileEffectModal: n
  } = e, s = (0, o.useStateFromStores)([g.default], () => g.default.getUserProfile(t.id), [t]), i = (0, o.useStateFromStores)([m.default], () => m.default.getGuild(l), [l]), c = (0, f.useClydeProfilesEnabled)(i);
  return (0, r.jsxs)(r.Fragment, {
    children: [(null == s ? void 0 : s.profileFetchFailed) && (!t.isClyde() || c) && (0, r.jsx)(d.Tooltip, {
      text: x.default.Messages.USER_PROFILE_LOAD_ERROR,
      spacing: 16,
      children: e => (0, r.jsx)(E.default, {
        ...e,
        className: L.warningCircleIcon,
        color: u.default.unsafe_rawColors.YELLOW_300.css
      })
    }), (0, r.jsx)(U.default, {
      className: n ? L.profileBadgesCompactNoTouch : L.profileBadges,
      user: t,
      guildId: l,
      isTryItOutFlow: a,
      size: U.BadgeSizes.SIZE_22
    })]
  })
}
let B = h.default.getEnableHardwareAcceleration() ? d.AnimatedAvatar : d.Avatar;

function D(e) {
  let {
    user: t,
    displayProfile: l,
    avatarSrc: n,
    hasBanner: o,
    status: u,
    isMobile: c,
    guildId: f,
    channelId: p,
    onClose: m,
    disableUserProfileLink: E,
    profileType: h,
    animateOnHover: g,
    hasProfileEffect: N
  } = e, {
    profileTheme: U
  } = a.useContext(A.UserProfileContext), b = a.useContext(S.AnalyticsContext), D = t.isNonUserBot() && !t.isClyde(), H = v.default.isPremiumAtLeast(null == l ? void 0 : l.premiumType, M.PremiumTypes.TIER_2), w = a.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, p), [t, p]), G = E || t.isClyde(), {
    avatarDecorationSrc: F,
    avatarSrc: k,
    eventHandlers: W
  } = (0, _.default)({
    user: t,
    guildId: f,
    size: R,
    animateOnHover: g
  }), z = (0, r.jsx)("div", {
    className: L.avatarHoverTarget,
    ...W,
    children: (0, r.jsx)(B, {
      src: null != n ? n : k,
      avatarDecoration: F,
      size: R,
      "aria-label": t.username,
      status: w ? y.StatusTypes.UNKNOWN : u,
      statusBackdropColor: null != U && H && !w ? (0, d.getStatusBackdropColor)(U) : void 0,
      isMobile: c,
      statusTooltip: !0
    })
  }), Y = (0, i.match)(h).with(I.UserProfileTypes.POPOUT, () => {
    let e = (0, O.buildGetPremiumUserBannerStyles)({
      premiumUserWithBanner: L.avatarPositionPremiumBanner,
      premiumUserWithoutBanner: L.avatarPositionPremiumNoBanner,
      default: L.avatarPositionNormal
    });
    return e({
      isPremium: H && !D,
      hasBanner: o,
      hasProfileEffect: N
    })
  }).with(I.UserProfileTypes.POMELO_POPOUT, () => L.avatarPositionPomelo).with(I.UserProfileTypes.PANEL, () => L.avatarPositionPanel).exhaustive();
  return (0, r.jsx)(r.Fragment, {
    children: (0, r.jsxs)(d.Clickable, {
      className: s({
        [L.clickable]: !G,
        [L.avatarWrapperNonUserBot]: D,
        [L.avatarWrapperNormal]: !D
      }, Y),
      onClick: D || G ? void 0 : function() {
        (0, C.openUserProfileModal)({
          userId: t.id,
          guildId: null != f ? f : void 0,
          channelId: null != p ? p : void 0,
          analyticsLocation: b.location
        }), null == m || m()
      },
      children: [z, !G && function() {
        let e = null != F,
          t = e ? j : (0, d.getAvatarSize)(R);
        return (0, r.jsx)(P.default, {
          mask: null == u || u === y.StatusTypes.UNKNOWN || w ? P.default.Masks.AVATAR_DEFAULT : (0, i.match)([e, c]).with([!0, !0], () => P.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => P.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => P.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => P.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
          className: e ? L.avatarDecorationHint : L.avatarHint,
          style: e ? {
            borderRadius: .4 * t
          } : void 0,
          width: t,
          height: t,
          children: (0, r.jsx)("div", {
            className: L.avatarHintInner,
            children: x.default.Messages.VIEW_PROFILE
          })
        })
      }()]
    })
  })
}

function H(e) {
  let {
    user: t,
    displayProfile: l,
    guildId: a,
    channelId: n,
    onClose: s,
    isMobile: i,
    isStreaming: o,
    status: u,
    disableUserProfileLink: d,
    isHovering: c,
    showPremiumBadgeUpsell: f = !0,
    upsell: T
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [T, (0, r.jsx)(N.default, {
      user: t,
      displayProfile: l,
      onClose: s,
      guildId: a,
      profileType: I.UserProfileTypes.POPOUT,
      showPremiumBadgeUpsell: f,
      isHovering: c,
      hasProfileEffect: (null == l ? void 0 : l.profileEffectId) != null
    }), (null == l ? void 0 : l.profileEffectId) != null && (0, r.jsx)(p.default, {
      profileEffectId: null == l ? void 0 : l.profileEffectId,
      bannerAdjustment: 0,
      isHovering: c
    }), (0, r.jsx)(D, {
      user: t,
      displayProfile: l,
      status: o ? y.StatusTypes.STREAMING : u,
      isMobile: i,
      guildId: a,
      channelId: n,
      onClose: s,
      disableUserProfileLink: d,
      hasBanner: (null == l ? void 0 : l.banner) != null,
      hasProfileEffect: (null == l ? void 0 : l.profileEffectId) != null,
      profileType: I.UserProfileTypes.POPOUT
    }), (0, r.jsx)(b, {
      user: t,
      guildId: a
    })]
  })
}