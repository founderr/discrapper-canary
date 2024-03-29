"use strict";
r.r(t), r.d(t, {
  CollectiblesCollectedModalInner: function() {
    return F
  }
}), r("47120");
var a = r("735250"),
  o = r("470079"),
  n = r("803997"),
  l = r.n(n),
  s = r("911765"),
  i = r("512722"),
  c = r.n(i),
  u = r("979554"),
  d = r("399606"),
  f = r("481060"),
  C = r("37234"),
  g = r("607070"),
  p = r("100527"),
  b = r("906732"),
  y = r("1585"),
  S = r("125988"),
  E = r("300284"),
  m = r("876917"),
  v = r("642619"),
  I = r("594174"),
  T = r("318028"),
  x = r("624377"),
  h = r("530618"),
  k = r("141011"),
  N = r("372654"),
  O = r("302800"),
  _ = r("414592"),
  L = r("689938"),
  A = r("176929"),
  M = r("660097");
let F = e => {
  var t, r;
  let {
    product: n,
    onClose: s,
    confettiTarget: i,
    confettiCanvas: O,
    hideConfetti: F = !1,
    analyticsLocations: R
  } = e, {
    confettiColors: B,
    backgroundColors: j,
    buttonColors: D,
    isDarkText: P
  } = (0, x.default)(n.styles), G = !0 === P ? A.darkText : A.lightText, H = null != D ? {
    background: (0, N.getBackgroundGradient)(D, 90),
    color: D.text.toHslString()
  } : void 0, w = null != j ? {
    background: (0, N.getBackgroundGradient)(j, 135)
  } : {
    backgroundColor: "var(--modal-background)"
  }, z = (0, d.useStateFromStores)([I.default], () => {
    let e = I.default.getCurrentUser();
    return c()(null != e, "User cannot be undefined"), e
  }), V = (0, d.useStateFromStores)([g.default], () => g.default.useReducedMotion), [W] = n.items, {
    avatarDecorationSrc: U
  } = (0, S.default)({
    user: z,
    avatarDecorationOverride: (null == W ? void 0 : W.type) === u.CollectiblesItemType.AVATAR_DECORATION ? W : null,
    size: (0, y.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_120)
  }), Y = o.useRef(null), {
    analyticsLocations: K
  } = (0, b.default)([...R, p.default.COLLECTIBLES_COLLECTED_MODAL]), X = (0, E.default)({
    analyticsLocations: K
  }), {
    category: Z,
    isFetching: q
  } = (0, T.useFetchCollectiblesProductCategory)(n.skuId), J = null !== (r = null == Z ? void 0 : Z.successModalBg) && void 0 !== r ? r : n.banner;
  return (0, a.jsxs)(b.AnalyticsLocationProvider, {
    value: K,
    children: [(0, a.jsxs)("div", {
      className: A.modalInner,
      ref: Y,
      style: w,
      children: [(0, a.jsxs)("div", {
        className: l()(A.bannerContainer, {
          [A.bannerBackgroundFallback]: null == j
        }),
        children: [(0, a.jsx)(k.default, {
          asset: q ? void 0 : J,
          addGradient: null === (t = _.categoryBannerOverrides[n.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
          size: (0, N.getAssetSizeByHeight)(440),
          className: A.decorationBanner
        }), (null == W ? void 0 : W.type) === u.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)(f.Avatar, {
          size: f.AvatarSizes.SIZE_120,
          src: M,
          avatarDecoration: U,
          className: A.avatarDecoration,
          "aria-label": n.name
        }), (null == W ? void 0 : W.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, a.jsx)("div", {
          className: A.profileEffectShopPreview,
          children: (0, a.jsx)(m.default, {
            forCollectedModal: !0,
            profileEffectId: W.id
          })
        })]
      }), (0, a.jsxs)("div", {
        className: l()(A.collectedInfoContainer, {
          [A.default]: null == j
        }),
        children: [(0, a.jsxs)("div", {
          className: A.collectedTextContainer,
          children: [(0, a.jsx)(f.Heading, {
            variant: "heading-lg/bold",
            className: G,
            children: L.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: n.name
            })
          }), (0, a.jsx)(f.Text, {
            variant: "text-sm/normal",
            className: G,
            children: (null == W ? void 0 : W.type) === u.CollectiblesItemType.PROFILE_EFFECT ? L.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : L.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, a.jsx)(f.Button, {
          onClick: () => {
            if (s(), (0, C.popLayer)(), X(), (null == W ? void 0 : W.type) === u.CollectiblesItemType.AVATAR_DECORATION) {
              (0, y.openAvatarDecorationModal)({
                initialSelectedDecoration: W,
                analyticsLocations: K
              });
              return
            }(null == W ? void 0 : W.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, v.openProfileEffectModal)({
              initialSelectedEffectId: W.id,
              analyticsLocations: K
            })
          },
          style: H,
          children: L.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, a.jsx)(f.ModalCloseButton, {
        onClick: s,
        className: A.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !F && !V && (0, a.jsx)(h.default, {
      confettiTarget: null != i ? i : Y.current,
      confettiCanvas: O,
      sprites: (0, N.getConfettiSprites)(n.categorySkuId),
      colors: null == B ? void 0 : B.map(e => e.toHexString())
    })]
  })
};
t.default = e => {
  let {
    transitionState: t,
    product: r,
    onClose: n,
    analyticsLocations: l
  } = e, i = o.useRef(new s.Environment), [c, u] = o.useState(null), d = (0, O.getCustomConfettiDisplayOptions)(r.skuId);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.ConfettiCanvas, {
      ref: u,
      className: A.confettiCanvas,
      environment: i.current
    }), (0, a.jsxs)(f.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: f.ModalSize.DYNAMIC,
      className: A.modalRoot,
      children: [null != d && (0, a.jsx)("img", {
        src: d.confettiAssetSrc,
        className: A.customConfetti,
        style: d.style,
        alt: "",
        "aria-hidden": "true"
      }), (0, a.jsx)(f.ModalContent, {
        className: A.modalContent,
        children: (0, a.jsx)(F, {
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