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
var n = a("37983"),
  l = a("884691"),
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
  m = a("305961"),
  S = a("423487"),
  A = a("587974"),
  g = a("599110"),
  _ = a("719923"),
  C = a("50885"),
  p = a("713135"),
  v = a("106435"),
  N = a("289918"),
  I = a("878569"),
  h = a("590006"),
  M = a("430312"),
  x = a("401642"),
  O = a("590456"),
  y = a("49111"),
  R = a("646718"),
  U = a("782340"),
  j = a("524466");
let P = c.AvatarSizes.SIZE_80,
  H = (0, d.getDecorationSizeForAvatarSize)(P);

function L(e) {
  let {
    user: t,
    guildId: a,
    isTryItOutFlow: l,
    forProfileEffectModal: s
  } = e, i = (0, u.useStateFromStores)([p.default], () => p.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([m.default], () => m.default.getGuild(a), [a]), d = (0, f.useClydeProfilesEnabled)(r);
  return (0, n.jsxs)(n.Fragment, {
    children: [(null == i ? void 0 : i.profileFetchFailed) && (!t.isClyde() || d) && (0, n.jsx)(c.Tooltip, {
      text: U.default.Messages.USER_PROFILE_LOAD_ERROR,
      spacing: 16,
      children: e => (0, n.jsx)(S.default, {
        ...e,
        className: j.warningCircleIcon,
        color: o.default.unsafe_rawColors.YELLOW_300.css
      })
    }), (0, n.jsx)(h.default, {
      className: s ? j.profileBadgesCompactNoTouch : j.profileBadges,
      user: t,
      guildId: a,
      isTryItOutFlow: l,
      size: h.BadgeSizes.SIZE_22
    })]
  })
}
let D = C.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

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
    onClose: m,
    disableUserProfileLink: S,
    profileType: C,
    animateOnHover: p,
    hasProfileEffect: N
  } = e, {
    profileTheme: h
  } = l.useContext(M.UserProfileContext), L = l.useContext(g.AnalyticsContext), G = t.isNonUserBot() && !t.isClyde(), b = _.default.isPremiumAtLeast(null == a ? void 0 : a.premiumType, R.PremiumTypes.TIER_2), B = l.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, E), [t, E]), F = S || t.isClyde(), {
    avatarDecorationSrc: w,
    avatarSrc: k,
    eventHandlers: V
  } = (0, v.default)({
    user: t,
    guildId: f,
    size: P,
    animateOnHover: p
  }), W = (0, n.jsx)("div", {
    className: j.avatarHoverTarget,
    ...V,
    children: (0, n.jsx)(D, {
      src: null != s ? s : k,
      avatarDecoration: w,
      size: P,
      "aria-label": t.username,
      status: B ? y.StatusTypes.UNKNOWN : o,
      statusBackdropColor: null != h && b && !B ? (0, c.getStatusBackdropColor)(h) : void 0,
      isMobile: d,
      statusTooltip: !0
    })
  }), Y = (0, r.match)(C).with(O.UserProfileTypes.POPOUT, () => {
    let e = (0, I.buildGetPremiumUserBannerStyles)({
      premiumUserWithBanner: j.avatarPositionPremiumBanner,
      premiumUserWithoutBanner: j.avatarPositionPremiumNoBanner,
      default: j.avatarPositionNormal
    });
    return e({
      isPremium: b && !G,
      hasBanner: u,
      hasProfileEffect: N
    })
  }).with(O.UserProfileTypes.POMELO_POPOUT, () => j.avatarPositionPomelo).with(O.UserProfileTypes.PANEL, () => j.avatarPositionPanel).exhaustive();
  return (0, n.jsx)(n.Fragment, {
    children: (0, n.jsxs)(c.Clickable, {
      className: i({
        [j.clickable]: !F,
        [j.avatarWrapperNonUserBot]: G,
        [j.avatarWrapperNormal]: !G
      }, Y),
      onClick: G || F ? void 0 : function() {
        (0, x.openUserProfileModal)({
          userId: t.id,
          guildId: null != f ? f : void 0,
          channelId: null != E ? E : void 0,
          analyticsLocation: L.location
        }), null == m || m()
      },
      children: [W, !F && function() {
        let e = null != w,
          t = e ? H : (0, c.getAvatarSize)(P);
        return (0, n.jsx)(A.default, {
          mask: null == o || o === y.StatusTypes.UNKNOWN || B ? A.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, d]).with([!0, !0], () => A.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => A.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => A.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => A.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
          className: e ? j.avatarDecorationHint : j.avatarHint,
          style: e ? {
            borderRadius: .4 * t
          } : void 0,
          width: t,
          height: t,
          children: (0, n.jsx)("div", {
            className: j.avatarHintInner,
            children: U.default.Messages.VIEW_PROFILE
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
    guildId: l,
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
  return (0, n.jsxs)(n.Fragment, {
    children: [T, (0, n.jsx)(N.default, {
      user: t,
      displayProfile: a,
      onClose: i,
      guildId: l,
      profileType: O.UserProfileTypes.POPOUT,
      showPremiumBadgeUpsell: f,
      isHovering: d,
      hasProfileEffect: (null == a ? void 0 : a.profileEffectId) != null
    }), (null == a ? void 0 : a.profileEffectId) != null && (0, n.jsx)(E.default, {
      profileEffectId: null == a ? void 0 : a.profileEffectId,
      bannerAdjustment: 0,
      isHovering: d
    }), (0, n.jsx)(G, {
      user: t,
      displayProfile: a,
      status: u ? y.StatusTypes.STREAMING : o,
      isMobile: r,
      guildId: l,
      channelId: s,
      onClose: i,
      disableUserProfileLink: c,
      hasBanner: (null == a ? void 0 : a.banner) != null,
      hasProfileEffect: (null == a ? void 0 : a.profileEffectId) != null,
      profileType: O.UserProfileTypes.POPOUT
    }), (0, n.jsx)(L, {
      user: t,
      guildId: l
    })]
  })
}