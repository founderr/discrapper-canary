"use strict";
l.r(t), l.d(t, {
  UserPopoutBadgeList: function() {
    return L
  },
  UserPopoutAvatar: function() {
    return D
  },
  default: function() {
    return B
  }
}), l("794252");
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("506838"),
  u = l("446674"),
  o = l("669491"),
  c = l("77078"),
  d = l("606292"),
  f = l("980215"),
  T = l("824794"),
  E = l("635471"),
  A = l("305961"),
  _ = l("423487"),
  S = l("587974"),
  m = l("599110"),
  C = l("719923"),
  N = l("50885"),
  g = l("713135"),
  v = l("106435"),
  p = l("289918"),
  I = l("878569"),
  M = l("590006"),
  h = l("430312"),
  O = l("401642"),
  U = l("590456"),
  R = l("49111"),
  x = l("646718"),
  y = l("782340"),
  j = l("524466");
let P = c.AvatarSizes.SIZE_80,
  H = (0, d.getDecorationSizeForAvatarSize)(P);

function L(e) {
  let {
    user: t,
    guildId: l,
    isTryItOutFlow: n,
    forProfileEffectModal: s
  } = e, i = (0, u.useStateFromStores)([g.default], () => g.default.getUserProfile(t.id), [t]), r = (0, u.useStateFromStores)([A.default], () => A.default.getGuild(l), [l]), d = (0, f.useClydeProfilesEnabled)(r);
  return (0, a.jsxs)(a.Fragment, {
    children: [(null == i ? void 0 : i.profileFetchFailed) && (!t.isClyde() || d) && (0, a.jsx)(c.Tooltip, {
      text: y.default.Messages.USER_PROFILE_LOAD_ERROR,
      spacing: 16,
      children: e => (0, a.jsx)(_.default, {
        ...e,
        className: j.warningCircleIcon,
        color: o.default.unsafe_rawColors.YELLOW_300.css
      })
    }), (0, a.jsx)(M.default, {
      className: s ? j.profileBadgesCompactNoTouch : j.profileBadges,
      user: t,
      guildId: l,
      isTryItOutFlow: n,
      size: M.BadgeSizes.SIZE_22
    })]
  })
}
let G = N.default.getEnableHardwareAcceleration() ? c.AnimatedAvatar : c.Avatar;

function D(e) {
  let {
    user: t,
    displayProfile: l,
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
    profileTheme: M
  } = n.useContext(h.UserProfileContext), L = n.useContext(m.AnalyticsContext), D = t.isNonUserBot() && !t.isClyde(), B = C.default.isPremiumAtLeast(null == l ? void 0 : l.premiumType, x.PremiumTypes.TIER_2), b = n.useMemo(() => (0, T.shouldDisableUserPresenceInChannel)(t, E), [t, E]), F = _ || t.isClyde(), {
    avatarDecorationSrc: w,
    avatarSrc: k,
    eventHandlers: V
  } = (0, v.default)({
    user: t,
    guildId: f,
    size: P,
    animateOnHover: g
  }), W = (0, a.jsx)("div", {
    className: j.avatarHoverTarget,
    ...V,
    children: (0, a.jsx)(G, {
      src: null != s ? s : k,
      avatarDecoration: w,
      size: P,
      "aria-label": t.username,
      status: b ? R.StatusTypes.UNKNOWN : o,
      statusBackdropColor: null != M && B && !b ? (0, c.getStatusBackdropColor)(M) : void 0,
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
      isPremium: B && !D,
      hasBanner: u,
      hasProfileEffect: p
    })
  }).with(U.UserProfileTypes.POMELO_POPOUT, () => j.avatarPositionPomelo).with(U.UserProfileTypes.PANEL, () => j.avatarPositionPanel).exhaustive();
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)(c.Clickable, {
      className: i({
        [j.clickable]: !F,
        [j.avatarWrapperNonUserBot]: D,
        [j.avatarWrapperNormal]: !D
      }, Y),
      onClick: D || F ? void 0 : function() {
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
        return (0, a.jsx)(S.default, {
          mask: null == o || o === R.StatusTypes.UNKNOWN || b ? S.default.Masks.AVATAR_DEFAULT : (0, r.match)([e, d]).with([!0, !0], () => S.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => S.default.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => S.default.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => S.default.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
          className: e ? j.avatarDecorationHint : j.avatarHint,
          style: e ? {
            borderRadius: .4 * t
          } : void 0,
          width: t,
          height: t,
          children: (0, a.jsx)("div", {
            className: j.avatarHintInner,
            children: y.default.Messages.VIEW_PROFILE
          })
        })
      }()]
    })
  })
}

function B(e) {
  let {
    user: t,
    displayProfile: l,
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
  return (0, a.jsxs)(a.Fragment, {
    children: [T, (0, a.jsx)(p.default, {
      user: t,
      displayProfile: l,
      onClose: i,
      guildId: n,
      profileType: U.UserProfileTypes.POPOUT,
      showPremiumBadgeUpsell: f,
      isHovering: d,
      hasProfileEffect: (null == l ? void 0 : l.profileEffectId) != null
    }), (null == l ? void 0 : l.profileEffectId) != null && (0, a.jsx)(E.default, {
      profileEffectId: null == l ? void 0 : l.profileEffectId,
      bannerAdjustment: 0,
      isHovering: d
    }), (0, a.jsx)(D, {
      user: t,
      displayProfile: l,
      status: u ? R.StatusTypes.STREAMING : o,
      isMobile: r,
      guildId: n,
      channelId: s,
      onClose: i,
      disableUserProfileLink: c,
      hasBanner: (null == l ? void 0 : l.banner) != null,
      hasProfileEffect: (null == l ? void 0 : l.profileEffectId) != null,
      profileType: U.UserProfileTypes.POPOUT
    }), (0, a.jsx)(L, {
      user: t,
      guildId: n
    })]
  })
}