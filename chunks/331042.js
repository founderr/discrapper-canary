"use strict";
r.r(t), r.d(t, {
  CollectiblesCollectedModalInner: function() {
    return F
  }
}), r("47120");
var o = r("735250"),
  a = r("470079"),
  n = r("803997"),
  l = r.n(n),
  s = r("911765"),
  i = r("512722"),
  c = r.n(i),
  d = r("979554"),
  u = r("399606"),
  f = r("481060"),
  g = r("37234"),
  C = r("607070"),
  b = r("100527"),
  p = r("906732"),
  y = r("1585"),
  S = r("125988"),
  k = r("300284"),
  v = r("876917"),
  m = r("642619"),
  E = r("594174"),
  h = r("318028"),
  x = r("624377"),
  I = r("530618"),
  T = r("141011"),
  L = r("372654"),
  A = r("302800"),
  N = r("414592"),
  O = r("689938"),
  _ = r("176929"),
  B = r("660097");
let F = e => {
  var t, r;
  let {
    product: n,
    onClose: s,
    confettiTarget: i,
    confettiCanvas: A,
    hideConfetti: F = !1,
    analyticsLocations: M
  } = e, {
    confettiColors: R,
    backgroundColors: j,
    buttonColors: D,
    isDarkText: P
  } = (0, x.default)(n.styles), z = !0 === P ? _.darkText : _.lightText, G = null != D ? {
    background: (0, L.getBackgroundGradient)(D, 90),
    color: D.text.toHslString()
  } : void 0, H = null != j ? {
    background: (0, L.getBackgroundGradient)(j, 135)
  } : {
    backgroundColor: "var(--modal-background)"
  }, w = (0, u.useStateFromStores)([E.default], () => {
    let e = E.default.getCurrentUser();
    return c()(null != e, "User cannot be undefined"), e
  }), W = (0, u.useStateFromStores)([C.default], () => C.default.useReducedMotion), [U] = n.items, {
    avatarDecorationSrc: Y
  } = (0, S.default)({
    user: w,
    avatarDecorationOverride: (null == U ? void 0 : U.type) === d.CollectiblesItemType.AVATAR_DECORATION ? U : null,
    size: (0, y.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_120)
  }), V = a.useRef(null), {
    analyticsLocations: K
  } = (0, p.default)([...M, b.default.COLLECTIBLES_COLLECTED_MODAL]), X = (0, k.default)({
    analyticsLocations: K
  }), {
    category: Z,
    isFetching: q
  } = (0, h.useFetchCollectiblesProductCategory)(n.skuId), J = null !== (r = null == Z ? void 0 : Z.successModalBg) && void 0 !== r ? r : n.banner;
  return (0, o.jsxs)(p.AnalyticsLocationProvider, {
    value: K,
    children: [(0, o.jsxs)("div", {
      className: _.modalInner,
      ref: V,
      style: H,
      children: [(0, o.jsxs)("div", {
        className: l()(_.bannerContainer, {
          [_.bannerBackgroundFallback]: null == j
        }),
        children: [(0, o.jsx)(T.default, {
          asset: q ? void 0 : J,
          addGradient: null === (t = N.categoryBannerOverrides[n.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
          size: (0, L.getAssetSizeByHeight)(440),
          className: _.decorationBanner
        }), (null == U ? void 0 : U.type) === d.CollectiblesItemType.AVATAR_DECORATION && (0, o.jsx)(f.Avatar, {
          size: f.AvatarSizes.SIZE_120,
          src: B,
          avatarDecoration: Y,
          className: _.avatarDecoration,
          "aria-label": n.name
        }), (null == U ? void 0 : U.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, o.jsx)("div", {
          className: _.profileEffectShopPreview,
          children: (0, o.jsx)(v.default, {
            forCollectedModal: !0,
            profileEffectId: U.id
          })
        })]
      }), (0, o.jsxs)("div", {
        className: l()(_.collectedInfoContainer, {
          [_.default]: null == j
        }),
        children: [(0, o.jsxs)("div", {
          className: _.collectedTextContainer,
          children: [(0, o.jsx)(f.Heading, {
            variant: "heading-lg/bold",
            className: z,
            children: O.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: n.name
            })
          }), (0, o.jsx)(f.Text, {
            variant: "text-sm/normal",
            className: z,
            children: (null == U ? void 0 : U.type) === d.CollectiblesItemType.PROFILE_EFFECT ? O.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : O.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, o.jsx)(f.Button, {
          onClick: () => {
            if (s(), (0, g.popLayer)(), X(), (null == U ? void 0 : U.type) === d.CollectiblesItemType.AVATAR_DECORATION) {
              (0, y.openAvatarDecorationModal)({
                initialSelectedDecoration: U,
                analyticsLocations: K
              });
              return
            }(null == U ? void 0 : U.type) === d.CollectiblesItemType.PROFILE_EFFECT && (0, m.openProfileEffectModal)({
              initialSelectedEffectId: U.id,
              analyticsLocations: K
            })
          },
          style: G,
          children: O.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, o.jsx)(f.ModalCloseButton, {
        onClick: s,
        className: _.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !F && !W && (0, o.jsx)(I.default, {
      confettiTarget: null != i ? i : V.current,
      confettiCanvas: A,
      sprites: (0, L.getConfettiSprites)(n.categorySkuId),
      colors: null == R ? void 0 : R.map(e => e.toHexString())
    })]
  })
};
t.default = e => {
  let {
    transitionState: t,
    product: r,
    onClose: n,
    analyticsLocations: l
  } = e, i = a.useRef(new s.Environment), [c, d] = a.useState(null), u = (0, A.getCustomConfettiDisplayOptions)(r.skuId);
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(s.ConfettiCanvas, {
      ref: d,
      className: _.confettiCanvas,
      environment: i.current
    }), (0, o.jsxs)(f.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: f.ModalSize.DYNAMIC,
      className: _.modalRoot,
      children: [null != u && (0, o.jsx)("img", {
        src: u.confettiAssetSrc,
        className: _.customConfetti,
        style: u.style,
        alt: "",
        "aria-hidden": "true"
      }), (0, o.jsx)(f.ModalContent, {
        className: _.modalContent,
        children: (0, o.jsx)(F, {
          product: r,
          onClose: n,
          confettiCanvas: c,
          hideConfetti: null != u,
          analyticsLocations: l
        })
      })]
    })]
  })
}