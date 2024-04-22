"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("627341");
var i = n("735250");
n("470079");
var s = n("278074"),
  l = n("979554"),
  r = n("481060"),
  a = n("1585"),
  u = n("125988"),
  o = n("583434"),
  c = n("479446"),
  d = n("981632"),
  m = n("731896"),
  f = n("680295"),
  p = n("998502"),
  I = n("987209"),
  _ = n("689938"),
  S = n("506027"),
  P = n("241822");
let E = p.default.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function T(e) {
  let {
    avatarDecoration: t
  } = e, {
    avatarDecorationSrc: n,
    eventHandlers: s,
    avatarPlaceholderSrc: l
  } = (0, u.default)({
    avatarDecorationOverride: t,
    size: (0, a.getDecorationSizeForAvatarSize)(r.AvatarSizes.SIZE_152)
  });
  return (0, i.jsx)("div", {
    className: S.giftMainAnimationWrapper,
    children: (0, i.jsx)(E, {
      ...s,
      avatarDecoration: n,
      src: l,
      className: S.avatar,
      size: r.AvatarSizes.SIZE_152,
      "aria-label": _.default.Messages.USER_SETTINGS_AVATAR
    })
  })
}

function v(e) {
  var t;
  let {
    id: n
  } = e, s = null === (t = (0, m.useProfileEffectPreset)(n)) || void 0 === t ? void 0 : t.config;
  return (0, i.jsxs)("div", {
    className: S.profileEffectContainer,
    children: [(0, i.jsx)("img", {
      src: P,
      alt: null == s ? void 0 : s.accessibilityLabel,
      className: S.profileEffectBackground
    }), (0, i.jsx)(f.default, {
      profileEffectId: n
    })]
  })
}

function N(e) {
  let {
    sku: t
  } = e, {
    selectedGiftStyle: n
  } = (0, I.useGiftContext)(), {
    product: r
  } = (0, o.useFetchCollectiblesProduct)(null == t ? void 0 : t.id), a = null == r ? void 0 : r.items[0], u = (0, s.match)(a).with({
    type: l.CollectiblesItemType.AVATAR_DECORATION
  }, e => (0, i.jsx)(T, {
    avatarDecoration: e
  })).with({
    type: l.CollectiblesItemType.PROFILE_EFFECT
  }, e => (0, i.jsx)(v, {
    id: e.id
  })).otherwise(() => null);
  return null != n && null == u ? (0, i.jsx)("div", {
    className: S.giftMainAnimationWrapper,
    children: (0, i.jsx)(d.default, {
      defaultAnimationState: c.AnimationState.LOOP,
      giftStyle: n,
      shouldAnimate: !0,
      className: S.__invalid_giftMainAnimation
    })
  }) : u
}