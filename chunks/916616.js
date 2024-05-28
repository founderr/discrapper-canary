"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("627341");
var i = n("735250");
n("470079");
var l = n("278074"),
  s = n("979554"),
  a = n("481060"),
  r = n("1585"),
  u = n("125988"),
  o = n("583434"),
  c = n("479446"),
  d = n("981632"),
  m = n("731896"),
  p = n("680295"),
  f = n("998502"),
  S = n("987209"),
  I = n("689938"),
  _ = n("170189"),
  P = n("241822");
let E = f.default.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function T(e) {
  let {
    avatarDecoration: t
  } = e, {
    avatarDecorationSrc: n,
    eventHandlers: l,
    avatarPlaceholderSrc: s
  } = (0, u.default)({
    avatarDecorationOverride: t,
    size: (0, r.getDecorationSizeForAvatarSize)(a.AvatarSizes.SIZE_152)
  });
  return (0, i.jsx)("div", {
    className: _.giftMainAnimationWrapper,
    children: (0, i.jsx)(E, {
      ...l,
      avatarDecoration: n,
      src: s,
      className: _.avatar,
      size: a.AvatarSizes.SIZE_152,
      "aria-label": I.default.Messages.USER_SETTINGS_AVATAR
    })
  })
}

function v(e) {
  var t;
  let {
    id: n
  } = e, l = null === (t = (0, m.useProfileEffectPreset)(n)) || void 0 === t ? void 0 : t.config;
  return (0, i.jsxs)("div", {
    className: _.profileEffectContainer,
    children: [(0, i.jsx)("img", {
      src: P,
      alt: null == l ? void 0 : l.accessibilityLabel,
      className: _.profileEffectBackground
    }), (0, i.jsx)(p.default, {
      profileEffectId: n
    })]
  })
}

function h(e) {
  let {
    sku: t
  } = e, {
    selectedGiftStyle: n
  } = (0, S.useGiftContext)(), {
    product: a
  } = (0, o.useFetchCollectiblesProduct)(null == t ? void 0 : t.id), r = null == a ? void 0 : a.items[0], u = (0, l.match)(r).with({
    type: s.CollectiblesItemType.AVATAR_DECORATION
  }, e => (0, i.jsx)(T, {
    avatarDecoration: e
  })).with({
    type: s.CollectiblesItemType.PROFILE_EFFECT
  }, e => (0, i.jsx)(v, {
    id: e.id
  })).otherwise(() => null);
  return null != n && null == u ? (0, i.jsx)("div", {
    className: _.giftMainAnimationWrapper,
    children: (0, i.jsx)(d.default, {
      defaultAnimationState: c.AnimationState.LOOP,
      giftStyle: n,
      shouldAnimate: !0,
      className: _.__invalid_giftMainAnimation
    })
  }) : u
}