"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("627341");
var i = n("735250");
n("470079");
var s = n("278074"),
  a = n("979554"),
  r = n("481060"),
  l = n("1585"),
  u = n("125988"),
  o = n("583434"),
  c = n("479446"),
  d = n("981632"),
  m = n("731896"),
  f = n("680295"),
  p = n("998502"),
  _ = n("987209"),
  S = n("689938"),
  I = n("506027"),
  E = n("241822");
let P = p.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function T(e) {
  let {
    avatarDecoration: t
  } = e, {
    avatarDecorationSrc: n,
    eventHandlers: s,
    avatarPlaceholderSrc: a
  } = (0, u.default)({
    avatarDecorationOverride: t,
    size: (0, l.getDecorationSizeForAvatarSize)(r.AvatarSizes.SIZE_152)
  });
  return (0, i.jsx)("div", {
    className: I.giftMainAnimationWrapper,
    children: (0, i.jsx)(P, {
      ...s,
      avatarDecoration: n,
      src: a,
      className: I.avatar,
      size: r.AvatarSizes.SIZE_152,
      "aria-label": S.default.Messages.USER_SETTINGS_AVATAR
    })
  })
}

function N(e) {
  var t;
  let {
    id: n
  } = e, s = null === (t = (0, m.useProfileEffectPreset)(n)) || void 0 === t ? void 0 : t.config;
  return (0, i.jsxs)("div", {
    className: I.profileEffectContainer,
    children: [(0, i.jsx)("img", {
      src: E,
      alt: null == s ? void 0 : s.accessibilityLabel,
      className: I.profileEffectBackground
    }), (0, i.jsx)(f.default, {
      profileEffectId: n
    })]
  })
}

function h(e) {
  let {
    sku: t
  } = e, {
    selectedGiftStyle: n
  } = (0, _.useGiftContext)(), {
    product: r
  } = (0, o.useFetchCollectiblesProduct)(null == t ? void 0 : t.id), l = null == r ? void 0 : r.items[0], u = (0, s.match)(l).with({
    type: a.CollectiblesItemType.AVATAR_DECORATION
  }, e => (0, i.jsx)(T, {
    avatarDecoration: e
  })).with({
    type: a.CollectiblesItemType.PROFILE_EFFECT
  }, e => (0, i.jsx)(N, {
    id: e.id
  })).otherwise(() => null);
  return null != n && null == u ? (0, i.jsx)("div", {
    className: I.giftMainAnimationWrapper,
    children: (0, i.jsx)(d.default, {
      defaultAnimationState: c.AnimationState.LOOP,
      giftStyle: n,
      shouldAnimate: !0,
      className: I.__invalid_giftMainAnimation
    })
  }) : u
}