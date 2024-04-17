"use strict";
r.r(t), r.d(t, {
  CollectiblesCollectedModalInner: function() {
    return _
  }
}), r("47120");
var o = r("735250"),
  n = r("470079"),
  a = r("236471"),
  l = r("512722"),
  s = r.n(l),
  i = r("979554"),
  c = r("399606"),
  u = r("481060"),
  d = r("37234"),
  f = r("607070"),
  C = r("100527"),
  g = r("906732"),
  p = r("1585"),
  b = r("125988"),
  m = r("300284"),
  v = r("876917"),
  y = r("642619"),
  E = r("594174"),
  S = r("318028"),
  h = r("624377"),
  x = r("530618"),
  I = r("141011"),
  L = r("372654"),
  T = r("302800"),
  k = r("414592"),
  A = r("689938"),
  N = r("176929"),
  O = r("660097");
let _ = e => {
  var t, r;
  let {
    product: a,
    onClose: l,
    confettiTarget: T,
    confettiCanvas: _,
    hideConfetti: F = !1,
    analyticsLocations: M
  } = e, {
    confettiColors: R,
    buttonColors: j
  } = (0, h.default)(a.styles), B = null != j ? {
    background: (0, L.getBackgroundGradient)(j, 90),
    color: j.text.toHslString()
  } : void 0, D = (0, c.useStateFromStores)([E.default], () => {
    let e = E.default.getCurrentUser();
    return s()(null != e, "User cannot be undefined"), e
  }), z = (0, c.useStateFromStores)([f.default], () => f.default.useReducedMotion), [P] = a.items, {
    avatarDecorationSrc: H
  } = (0, b.default)({
    user: D,
    avatarDecorationOverride: (null == P ? void 0 : P.type) === i.CollectiblesItemType.AVATAR_DECORATION ? P : null,
    size: (0, p.getDecorationSizeForAvatarSize)(u.AvatarSizes.SIZE_120)
  }), w = n.useRef(null), {
    analyticsLocations: W
  } = (0, g.default)([...M, C.default.COLLECTIBLES_COLLECTED_MODAL]), G = (0, m.default)({
    analyticsLocations: W
  }), {
    category: U,
    isFetching: V
  } = (0, S.useFetchCollectiblesProductCategory)(a.skuId), K = null !== (r = null == U ? void 0 : U.successModalBg) && void 0 !== r ? r : a.banner;
  return (0, o.jsxs)(g.AnalyticsLocationProvider, {
    value: W,
    children: [(0, o.jsxs)("div", {
      className: N.modalInner,
      ref: w,
      children: [(0, o.jsxs)("div", {
        className: N.bannerContainer,
        children: [(0, o.jsx)(I.default, {
          asset: V ? void 0 : K,
          addGradient: null === (t = k.categoryBannerOverrides[a.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
          size: (0, L.getAssetSizeByHeight)(880),
          className: N.decorationBanner,
          blur: !0
        }), (null == P ? void 0 : P.type) === i.CollectiblesItemType.AVATAR_DECORATION && (0, o.jsx)(u.Avatar, {
          size: u.AvatarSizes.SIZE_120,
          src: O,
          avatarDecoration: H,
          className: N.avatarDecoration,
          "aria-label": a.name
        }), (null == P ? void 0 : P.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, o.jsx)("div", {
          className: N.profileEffectShopPreview,
          children: (0, o.jsx)(v.default, {
            forCollectedModal: !0,
            profileEffectId: P.id
          })
        })]
      }), (0, o.jsxs)("div", {
        className: N.collectedInfoContainer,
        children: [(0, o.jsxs)("div", {
          className: N.collectedTextContainer,
          children: [(0, o.jsx)(u.Heading, {
            variant: "heading-lg/bold",
            children: A.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: a.name
            })
          }), (0, o.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: (null == P ? void 0 : P.type) === i.CollectiblesItemType.PROFILE_EFFECT ? A.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : A.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, o.jsx)(u.Button, {
          onClick: () => {
            if (l(), (0, d.popLayer)(), G(), (null == P ? void 0 : P.type) === i.CollectiblesItemType.AVATAR_DECORATION) {
              (0, p.openAvatarDecorationModal)({
                initialSelectedDecoration: P,
                analyticsLocations: W
              });
              return
            }(null == P ? void 0 : P.type) === i.CollectiblesItemType.PROFILE_EFFECT && (0, y.openProfileEffectModal)({
              initialSelectedEffectId: P.id,
              analyticsLocations: W
            })
          },
          style: B,
          children: A.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, o.jsx)(u.ModalCloseButton, {
        onClick: l,
        className: N.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !F && !z && (0, o.jsx)(x.default, {
      confettiTarget: null != T ? T : w.current,
      confettiCanvas: _,
      sprites: (0, L.getConfettiSprites)(a.categorySkuId),
      colors: null == R ? void 0 : R.map(e => e.toHexString())
    })]
  })
};
t.default = e => {
  let {
    transitionState: t,
    product: r,
    onClose: l,
    analyticsLocations: s
  } = e, i = n.useRef(new a.Environment), [c, d] = n.useState(null), f = (0, T.getCustomConfettiDisplayOptions)(r.skuId);
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(a.ConfettiCanvas, {
      ref: d,
      className: N.confettiCanvas,
      environment: i.current
    }), (0, o.jsxs)(u.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: u.ModalSize.DYNAMIC,
      className: N.modalRoot,
      children: [null != f && (0, o.jsx)("img", {
        src: f.confettiAssetSrc,
        className: N.customConfetti,
        style: f.style,
        alt: "",
        "aria-hidden": "true"
      }), (0, o.jsx)(u.ModalContent, {
        className: N.modalContent,
        children: (0, o.jsx)(_, {
          product: r,
          onClose: l,
          confettiCanvas: c,
          hideConfetti: null != f,
          analyticsLocations: s
        })
      })]
    })]
  })
}