"use strict";
n.d(t, {
  ZP: function() {
    return k
  },
  tZ: function() {
    return B
  }
}), n(627341);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(278074),
  l = n(442837),
  u = n(692547),
  _ = n(481060),
  c = n(906732),
  d = n(1585),
  E = n(797610),
  I = n(233440),
  T = n(680295),
  h = n(430824),
  f = n(806519),
  S = n(626135),
  N = n(74538),
  A = n(998502),
  m = n(785717),
  O = n(621853),
  p = n(204197),
  R = n(735336),
  g = n(793397),
  C = n(184325),
  v = n(652853),
  L = n(171368),
  D = n(228168),
  M = n(981631),
  P = n(474936),
  y = n(689938),
  U = n(561727);
let b = _.AvatarSizes.SIZE_80,
  G = (0, d.y9)(b);

function w(e) {
  let {
    user: t,
    guildId: n,
    isTryItOutFlow: r,
    forProfileEffectModal: s,
    onClick: o
  } = e, a = (0, l.e7)([O.Z], () => O.Z.getUserProfile(t.id), [t]), c = (0, l.e7)([h.Z], () => h.Z.getGuild(n), [n]), d = (0, E.OR)(c);
  return (0, i.jsxs)(i.Fragment, {
    children: [(null == a ? void 0 : a.profileFetchFailed) && (!t.isClyde() || d) && (0, i.jsx)(_.Tooltip, {
      text: y.Z.Messages.USER_PROFILE_LOAD_ERROR,
      spacing: 16,
      children: e => (0, i.jsx)(_.CircleExclamationPointIcon, {
        size: "custom",
        width: 20,
        height: 20,
        ...e,
        className: U.warningCircleIcon,
        color: u.Z.unsafe_rawColors.YELLOW_300.css
      })
    }), (0, i.jsx)(C.Z, {
      className: s ? U.profileBadgesCompactNoTouch : U.profileBadges,
      user: t,
      guildId: n,
      isTryItOutFlow: r,
      size: C.V.SIZE_22,
      onBadgeClick: o
    })]
  })
}
let x = A.ZP.getEnableHardwareAcceleration() ? _.AnimatedAvatar : _.Avatar;

function B(e) {
  let {
    user: t,
    displayProfile: n,
    avatarSrc: s,
    hasBanner: l,
    status: u,
    isMobile: d,
    guildId: E,
    channelId: T,
    onClose: h,
    disableUserProfileLink: A,
    profileType: O,
    animateOnHover: R,
    hasProfileEffect: C,
    statusTooltipDelay: w
  } = e, {
    theme: B
  } = (0, v.z)(), k = r.useContext(S.AnalyticsContext), V = t.isNonUserBot() && !t.isClyde(), Z = N.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, P.p9.TIER_2), H = r.useMemo(() => (0, I.W)(t, T), [t, T]), {
    analyticsLocations: F
  } = (0, c.ZP)(), {
    trackUserProfileAction: Y,
    messageId: j,
    roleId: W
  } = (0, m.KZ)(), K = A || t.isClyde(), {
    avatarDecorationSrc: z,
    avatarSrc: q,
    eventHandlers: X
  } = (0, p.Z)({
    user: t,
    guildId: E,
    size: b,
    animateOnHover: R
  }), Q = (0, i.jsx)("div", {
    className: U.avatarHoverTarget,
    ...X,
    children: (0, i.jsx)(x, {
      src: null != s ? s : q,
      avatarDecoration: z,
      size: b,
      "aria-label": t.username,
      status: H ? M.Skl.UNKNOWN : u,
      statusBackdropColor: Z && !H ? (0, _.getStatusBackdropColor)(B) : void 0,
      isMobile: d,
      statusTooltip: !0,
      statusTooltipDelay: w
    })
  }), J = (0, a.EQ)(O).with(D.y0.POPOUT, () => (0, g.zW)({
    premiumUserWithBanner: U.avatarPositionPremiumBanner,
    premiumUserWithoutBanner: U.avatarPositionPremiumNoBanner,
    default: U.avatarPositionNormal
  })({
    isPremium: Z,
    hasBanner: l,
    hasProfileEffect: C
  })).with(D.y0.POMELO_POPOUT, () => U.avatarPositionPomelo).with(D.y0.PANEL, () => U.avatarPositionPanel).with(D.y0.BITE_SIZE, () => U.avatarPositionBiteSize).exhaustive();
  return (0, i.jsx)(i.Fragment, {
    children: (0, i.jsxs)(_.Clickable, {
      className: o()({
        [U.clickable]: !K,
        [U.avatarWrapperNonUserBot]: V,
        [U.avatarWrapperNormal]: !V
      }, J),
      onClick: V || K ? void 0 : function() {
        Y({
          action: "PRESS_VIEW_PROFILE"
        }), (0, L.openUserProfileModal)({
          userId: t.id,
          guildId: E,
          channelId: T,
          messageId: j,
          roleId: W,
          sourceAnalyticsLocations: F,
          analyticsLocation: k.location
        }), null == h || h()
      },
      children: [Q, !K && function() {
        let e = null != z,
          t = e ? G : (0, _.getAvatarSize)(b);
        return (0, i.jsx)(f.ZP, {
          mask: null == u || u === M.Skl.UNKNOWN || H ? f.ZP.Masks.AVATAR_DEFAULT : (0, a.EQ)([e, d]).with([!0, !0], () => f.ZP.Masks.AVATAR_DECORATION_PROFILE_STATUS_MOBILE_SQUARE_80).with([!0, !1], () => f.ZP.Masks.AVATAR_DECORATION_PROFILE_STATUS_SQUARE_80).with([!1, !0], () => f.ZP.Masks.AVATAR_STATUS_MOBILE_80).with([!1, !1], () => f.ZP.Masks.AVATAR_STATUS_ROUND_80).exhaustive(),
          className: e ? U.avatarDecorationHint : U.avatarHint,
          style: e ? {
            borderRadius: .4 * t
          } : void 0,
          width: t,
          height: t,
          children: (0, i.jsx)("div", {
            className: U.avatarHintInner,
            children: y.Z.Messages.VIEW_PROFILE
          })
        })
      }()]
    })
  })
}

function k(e) {
  let {
    user: t,
    displayProfile: n,
    guildId: r,
    channelId: s,
    onClose: o,
    isMobile: a,
    isStreaming: l,
    status: u,
    disableUserProfileLink: _,
    isHovering: c,
    showPremiumBadgeUpsell: d = !0,
    upsell: E
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [E, (0, i.jsx)(R.Z, {
      user: t,
      displayProfile: n,
      onClose: o,
      guildId: r,
      profileType: D.y0.POPOUT,
      showPremiumBadgeUpsell: d,
      isHovering: c,
      hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null
    }), (null == n ? void 0 : n.profileEffectId) != null && (0, i.jsx)(T.Z, {
      profileEffectId: null == n ? void 0 : n.profileEffectId,
      bannerAdjustment: 0,
      isHovering: c
    }), (0, i.jsx)(B, {
      user: t,
      displayProfile: n,
      status: l ? M.Skl.STREAMING : u,
      isMobile: a,
      guildId: r,
      channelId: s,
      onClose: o,
      disableUserProfileLink: _,
      hasBanner: (null == n ? void 0 : n.banner) != null,
      hasProfileEffect: (null == n ? void 0 : n.profileEffectId) != null,
      profileType: D.y0.POPOUT
    }), (0, i.jsx)(w, {
      user: t,
      guildId: r,
      onClick: o
    })]
  })
}