"use strict";
r.r(t), r.d(t, {
  CollectiblesCollectedModalInner: function() {
    return M
  }
}), r("47120");
var o = r("735250"),
  a = r("470079"),
  n = r("803997"),
  l = r.n(n),
  s = r("911765"),
  i = r("512722"),
  c = r.n(i),
  u = r("979554"),
  d = r("399606"),
  f = r("481060"),
  g = r("37234"),
  C = r("607070"),
  p = r("100527"),
  b = r("906732"),
  m = r("1585"),
  y = r("125988"),
  v = r("300284"),
  h = r("876917"),
  k = r("642619"),
  x = r("594174"),
  E = r("318028"),
  S = r("624377"),
  I = r("530618"),
  T = r("141011"),
  L = r("372654"),
  A = r("302800"),
  N = r("414592"),
  O = r("689938"),
  _ = r("176929"),
  F = r("660097");
let M = e => {
  var t, r;
  let {
    product: n,
    onClose: s,
    confettiTarget: i,
    confettiCanvas: A,
    hideConfetti: M = !1,
    analyticsLocations: B
  } = e, {
    confettiColors: R,
    backgroundColors: j,
    buttonColors: D,
    isDarkText: z
  } = (0, S.default)(n.styles), P = !0 === z ? _.darkText : _.lightText, H = null != D ? {
    background: (0, L.getBackgroundGradient)(D, 90),
    color: D.text.toHslString()
  } : void 0, w = null != j ? {
    background: (0, L.getBackgroundGradient)(j, 135)
  } : {
    backgroundColor: "var(--modal-background)"
  }, G = (0, d.useStateFromStores)([x.default], () => {
    let e = x.default.getCurrentUser();
    return c()(null != e, "User cannot be undefined"), e
  }), W = (0, d.useStateFromStores)([C.default], () => C.default.useReducedMotion), [U] = n.items, {
    avatarDecorationSrc: V
  } = (0, y.default)({
    user: G,
    avatarDecorationOverride: (null == U ? void 0 : U.type) === u.CollectiblesItemType.AVATAR_DECORATION ? U : null,
    size: (0, m.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_120)
  }), K = a.useRef(null), {
    analyticsLocations: Y
  } = (0, b.default)([...B, p.default.COLLECTIBLES_COLLECTED_MODAL]), X = (0, v.default)({
    analyticsLocations: Y
  }), {
    category: Z,
    isFetching: q
  } = (0, E.useFetchCollectiblesProductCategory)(n.skuId), J = null !== (r = null == Z ? void 0 : Z.successModalBg) && void 0 !== r ? r : n.banner;
  return (0, o.jsxs)(b.AnalyticsLocationProvider, {
    value: Y,
    children: [(0, o.jsxs)("div", {
      className: _.modalInner,
      ref: K,
      style: w,
      children: [(0, o.jsxs)("div", {
        className: l()(_.bannerContainer, {
          [_.bannerBackgroundFallback]: null == j
        }),
        children: [(0, o.jsx)(T.default, {
          asset: q ? void 0 : J,
          addGradient: null === (t = N.categoryBannerOverrides[n.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
          size: (0, L.getAssetSizeByHeight)(880),
          className: _.decorationBanner,
          blur: !0
        }), (null == U ? void 0 : U.type) === u.CollectiblesItemType.AVATAR_DECORATION && (0, o.jsx)(f.Avatar, {
          size: f.AvatarSizes.SIZE_120,
          src: F,
          avatarDecoration: V,
          className: _.avatarDecoration,
          "aria-label": n.name
        }), (null == U ? void 0 : U.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, o.jsx)("div", {
          className: _.profileEffectShopPreview,
          children: (0, o.jsx)(h.default, {
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
            className: P,
            children: O.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: n.name
            })
          }), (0, o.jsx)(f.Text, {
            variant: "text-sm/normal",
            className: P,
            children: (null == U ? void 0 : U.type) === u.CollectiblesItemType.PROFILE_EFFECT ? O.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : O.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, o.jsx)(f.Button, {
          onClick: () => {
            if (s(), (0, g.popLayer)(), X(), (null == U ? void 0 : U.type) === u.CollectiblesItemType.AVATAR_DECORATION) {
              (0, m.openAvatarDecorationModal)({
                initialSelectedDecoration: U,
                analyticsLocations: Y
              });
              return
            }(null == U ? void 0 : U.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, k.openProfileEffectModal)({
              initialSelectedEffectId: U.id,
              analyticsLocations: Y
            })
          },
          style: H,
          children: O.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, o.jsx)(f.ModalCloseButton, {
        onClick: s,
        className: _.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !M && !W && (0, o.jsx)(I.default, {
      confettiTarget: null != i ? i : K.current,
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
  } = e, i = a.useRef(new s.Environment), [c, u] = a.useState(null), d = (0, A.getCustomConfettiDisplayOptions)(r.skuId);
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(s.ConfettiCanvas, {
      ref: u,
      className: _.confettiCanvas,
      environment: i.current
    }), (0, o.jsxs)(f.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: f.ModalSize.DYNAMIC,
      className: _.modalRoot,
      children: [null != d && (0, o.jsx)("img", {
        src: d.confettiAssetSrc,
        className: _.customConfetti,
        style: d.style,
        alt: "",
        "aria-hidden": "true"
      }), (0, o.jsx)(f.ModalContent, {
        className: _.modalContent,
        children: (0, o.jsx)(M, {
          product: r,
          onClose: n,
          confettiCanvas: c,
          hideConfetti: null != d,
          analyticsLocations: l
        })
      })]
    })]
  })
}