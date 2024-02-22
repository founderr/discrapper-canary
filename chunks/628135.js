"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("794252");
var i = n("37983");
n("884691");
var r = n("506838"),
  a = n("265586"),
  l = n("65597"),
  s = n("77078"),
  u = n("606292"),
  o = n("688318"),
  c = n("426188"),
  d = n("210721"),
  p = n("65324"),
  m = n("845962"),
  S = n("635471"),
  f = n("50885"),
  P = n("635357"),
  I = n("782340"),
  h = n("285311"),
  E = n("93902");
let T = f.default.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;

function v(e) {
  let {
    avatarDecoration: t
  } = e, {
    avatarDecorationSrc: n,
    eventHandlers: r,
    avatarPlaceholderSrc: a
  } = (0, o.default)({
    avatarDecorationOverride: t,
    size: (0, u.getDecorationSizeForAvatarSize)(s.AvatarSizes.SIZE_152)
  });
  return (0, i.jsx)("div", {
    className: h.giftMainAnimationWrapper,
    children: (0, i.jsx)(T, {
      ...r,
      avatarDecoration: n,
      src: a,
      className: h.avatar,
      size: s.AvatarSizes.SIZE_152,
      "aria-label": I.default.Messages.USER_SETTINGS_AVATAR
    })
  })
}

function y(e) {
  let {
    id: t
  } = e, n = (0, l.default)([m.default], () => {
    var e;
    return null === (e = m.default.getProfileEffectById(t)) || void 0 === e ? void 0 : e.config
  });
  return (0, i.jsxs)("div", {
    className: h.profileEffectContainer,
    children: [(0, i.jsx)("img", {
      src: E,
      alt: null == n ? void 0 : n.accessibilityLabel,
      className: h.profileEffectBackground
    }), (0, i.jsx)(S.default, {
      profileEffectId: t
    })]
  })
}

function x(e) {
  let {
    sku: t
  } = e, {
    selectedGiftStyle: n
  } = (0, P.useGiftContext)(), {
    product: l
  } = (0, c.useFetchCollectiblesProduct)(null == t ? void 0 : t.id), s = null == l ? void 0 : l.items[0], u = (0, r.match)(s).with({
    type: a.CollectiblesItemType.AVATAR_DECORATION
  }, e => (0, i.jsx)(v, {
    avatarDecoration: e
  })).with({
    type: a.CollectiblesItemType.PROFILE_EFFECT
  }, e => (0, i.jsx)(y, {
    id: e.id
  })).otherwise(() => null);
  return null != n && null == u ? (0, i.jsx)("div", {
    className: h.giftMainAnimationWrapper,
    children: (0, i.jsx)(p.default, {
      defaultAnimationState: d.AnimationState.LOOP,
      giftStyle: n,
      shouldAnimate: !0,
      className: h.giftMainAnimation
    })
  }) : u
}