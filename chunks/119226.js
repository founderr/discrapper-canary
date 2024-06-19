s.d(n, {
  Z: function() {
    return A
  }
}), s(627341);
var l = s(735250);
s(470079);
var t = s(278074),
  i = s(979554),
  r = s(481060),
  a = s(1585),
  c = s(125988),
  o = s(583434),
  u = s(479446),
  d = s(981632),
  _ = s(731896),
  m = s(680295),
  I = s(447452),
  E = s(998502),
  p = s(987209),
  N = s(689938),
  T = s(463597),
  S = s(241822),
  x = s(500215);
let h = E.ZP.getEnableHardwareAcceleration() ? r.AnimatedAvatar : r.Avatar;

function P(e) {
  let {
    avatarDecoration: n
  } = e, {
    avatarDecorationSrc: s,
    eventHandlers: t,
    avatarPlaceholderSrc: i
  } = (0, c.Z)({
    avatarDecorationOverride: n,
    size: (0, a.y9)(r.AvatarSizes.SIZE_152)
  });
  return (0, l.jsx)("div", {
    className: T.giftMainAnimationWrapper,
    children: (0, l.jsx)(h, {
      ...t,
      avatarDecoration: s,
      src: i,
      className: T.avatar,
      size: r.AvatarSizes.SIZE_152,
      "aria-label": N.Z.Messages.USER_SETTINGS_AVATAR
    })
  })
}

function v(e) {
  var n;
  let {
    id: s
  } = e, t = null === (n = (0, _.V)(s)) || void 0 === n ? void 0 : n.config, {
    updatedOnAllSurfaces: i
  } = (0, I.t)({
    location: "ProfileEffectImage"
  });
  return (0, l.jsxs)("div", {
    className: T.profileEffectContainer,
    children: [(0, l.jsx)("img", {
      src: i ? x : S,
      alt: null == t ? void 0 : t.accessibilityLabel,
      className: T.profileEffectBackground
    }), (0, l.jsx)(m.Z, {
      profileEffectId: s
    })]
  })
}

function A(e) {
  let {
    sku: n
  } = e, {
    selectedGiftStyle: s
  } = (0, p.wD)(), {
    product: r
  } = (0, o.T)(null == n ? void 0 : n.id), a = null == r ? void 0 : r.items[0], c = (0, t.EQ)(a).with({
    type: i.Z.AVATAR_DECORATION
  }, e => (0, l.jsx)(P, {
    avatarDecoration: e
  })).with({
    type: i.Z.PROFILE_EFFECT
  }, e => (0, l.jsx)(v, {
    id: e.id
  })).otherwise(() => null);
  return null != s && null == c ? (0, l.jsx)("div", {
    className: T.giftMainAnimationWrapper,
    children: (0, l.jsx)(d.Z, {
      defaultAnimationState: u.S.LOOP,
      giftStyle: s,
      shouldAnimate: !0,
      className: T.__invalid_giftMainAnimation
    })
  }) : c
}