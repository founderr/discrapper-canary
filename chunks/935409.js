"use strict";
a.r(t), a.d(t, {
  UserPopoutBadgeList: function() {
    return L
  },
  UserPopoutAvatar: function() {
    return G
  },
  default: function() {
    return b
  }
}), a("794252");
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  i = a.n(s),
  r = a("506838"),
  u = a("446674"),
  o = a("669491"),
  c = a("77078"),
  d = a("606292"),
  f = a("980215"),
  T = a("824794"),
  E = a("635471"),
  A = a("305961"),
  _ = a("423487"),
  S = a("587974"),
  m = a("599110"),
  C = a("719923"),
  N = a("50885"),
  g = a("713135"),
  v = a("106435"),
  p = a("289918"),
  I = a("878569"),
  h = a("590006"),
  M = a("430312"),
  O = a("401642"),
  U = a("590456"),
  R = a("49111"),
  x = a("646718"),
  y = a("782340"),
  j = a("524466");
let P = c.AvatarSizes.SIZE_80,
  H = (0, d.getDecorationSizeForAvatarSize)(P);

function L(e) {
  let {
    user: t,
    guildId: a,
    isTryItOutFlow: n,
    forProfileEffectModal: s
  } = e, i = (0, u.useStateFromStores)([g.default], () => g.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([A.default], () => A.default.getGuild(a), [a]), d = (0, f.useClydeProfilesEnabled)(r);
  return (0, l.jsxs)(l.Fragment, {
    children: [(null == i ? void 0 : i.profileFetchFailed) && (!t.isClyde() || d) && (0, l.jsx)(c.Tooltip, {
      text: y.default.Messages.USER_PROFILE_LOAD_ERROR,
      spacing: 16,
      children: e => (0, l.jsx)(_.default, {
        ...e,
        className: j.warningCircleIcon,
        color: o.default.unsafe_rawColors.YELLOW_300.css
      })
    }), (0, l.jsx)(h.default, {
      className: s ? j.profileBadgesCompactNoTouch : j.profileBadges,
      user: t,
      guildId: a,
      isTryItOutFlow: n,
      size: h.BadgeSizes.SIZE_22
    })]
  })
}
let D = N.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

function G(e) {
  let {
    user: t,
    displayProfile: a,
    avatarSrc: s,
    hasBanner: u,
    status: o,
    isMobile: d,
    guildId: f,
    channelId: E,
    onClose: A,
    disableUserProfileLink: _,
    profileType: N,
    animateOnHover: g,
    hasProfileEffect: p
  } = e, {
    profileTheme: h
  } = n.useContext(M.UserProfileContext), L = n.useContext(m.AnalyticsContext), G = t.isNonUserBot() && !t.isClyde(), b = C.default.isPremiumAtLeast(null == a ? void 0 : a.premiumType, x.PremiumTypes.TIER_2), B = n.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, E), [t, E]), F = _ || t.isClyde(), {
    avatarDecorationSrc: w,
    avatarSrc: k,
    eventHandlers: V
  } = (0, v.default)({
    user: t,
    guildId: f,
    size: P,
    animateOnHover: g
  }), W = (0, l.jsx)("div", {
    className: j.avatarHoverTarget,
    ...V,
    children: (0, l.jsx)(D, {
      src: null != s ? s : k,
      avatarDecoration: w,
      size: P,
      "aria-label": t.username,
      status: B ? R.StatusTypes.UNKNOWN : o,
      statusBackdropColor: null != h && b && !B ? (0, c.getStatusBackdropColor)(h) : void 0,
      isMobile: d,
      statusTooltip: !0
    })
  }), Y = (0, r.match)(N).with(U.UserProfileTypes.POPOUT, () => {
    let e = (0, I.buildGetPremiumUserBannerStyles)({
      premiumUserWithBanner: j.avatarPositionPremiumBanner,
      premiumUserWithoutBanner: j.avatarPositionPremiumNoBanner,
      default: j.avatarPositionNormal
    });
    return e({
      isPremium: b && !G,
      hasBanner: u,
      hasProfileEffect: p
    })
  }).with(U.UserProfileTypes.POMELO_POPOUT, () => j.avatarPositionPomelo).with(U.UserProfileTypes.PANEL, () => j.avatarPositionPanel).exhaustive();
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)(c.Clickable, {
      className: i({
        [j.clickable]: !F,
        [j.avatarWrapperNonUserBot]: G,
        [j.avatarWrapperNormal]: !G
      }, Y),
      onClick: G || F ? void 0 : function() {
        (0, O.openUserProfileModal)({
          userId: t.id,
          guildId: null != f ? f : void 0,
          channelId: null != E ? E : void 0,
          analyticsLocation: L.location
        }), null == A || A()
      },
      children: [W, !F && function() {
        let e = null != w,
          t = e ? H : (0, c.getAvatarSize)(P);
        return (0, l.jsx)(S.default, {
          mask: null == o || o === R.StatusTypes.UNKNOWN || B ? S.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, d]).with([!0, !0], () => S.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => S.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => S.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => S.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
          className: e ? j.avatarDecorationHint : j.avatarHint,
          style: e ? {
            borderRadius: .4 * t
          } : void 0,
          width: t,
          height: t,
          children: (0, l.jsx)("div", {
            className: j.avatarHintInner,
            children: y.default.Messages.VIEW_PROFILE
          })
        })
      }()]
    })
  })
}

function b(e) {
  let {
    user: t,
    displayProfile: a,
    guildId: n,
    channelId: s,
    onClose: i,
    isMobile: r,
    isStreaming: u,
    status: o,
    disableUserProfileLink: c,
    isHovering: d,
    showPremiumBadgeUpsell: f = !0,
    upsell: T
  } = e;
  return (0, l.jsxs)(l.Fragment, {
    children: [T, (0, l.jsx)(p.default, {
      user: t,
      displayProfile: a,
      onClose: i,
      guildId: n,
      profileType: U.UserProfileTypes.POPOUT,
      showPremiumBadgeUpsell: f,
      isHovering: d,
      hasProfileEffect: (null == a ? void 0 : a.profileEffectId) != null
    }), (null == a ? void 0 : a.profileEffectId) != null && (0, l.jsx)(E.default, {
      profileEffectId: null == a ? void 0 : a.profileEffectId,
      bannerAdjustment: 0,
      isHovering: d
    }), (0, l.jsx)(G, {
      user: t,
      displayProfile: a,
      status: u ? R.StatusTypes.STREAMING : o,
      isMobile: r,
      guildId: n,
      channelId: s,
      onClose: i,
      disableUserProfileLink: c,
      hasBanner: (null == a ? void 0 : a.banner) != null,
      hasProfileEffect: (null == a ? void 0 : a.profileEffectId) != null,
      profileType: U.UserProfileTypes.POPOUT
    }), (0, l.jsx)(L, {
      user: t,
      guildId: n
    })]
  })
}