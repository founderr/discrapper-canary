"use strict";
a.r(t), a.d(t, {
  CollectiblesCollectedModalInner: function() {
    return k
  }
}), a("47120"), a("627341");
var r = a("735250"),
  s = a("470079"),
  n = a("887024"),
  o = a("512722"),
  l = a.n(o),
  i = a("278074"),
  c = a("979554"),
  u = a("399606"),
  d = a("481060"),
  f = a("37234"),
  C = a("607070"),
  p = a("100527"),
  b = a("906732"),
  g = a("1585"),
  E = a("125988"),
  I = a("300284"),
  T = a("876917"),
  S = a("642619"),
  _ = a("594174"),
  m = a("884697"),
  v = a("318028"),
  L = a("635552"),
  h = a("328456"),
  A = a("624377"),
  y = a("530618"),
  O = a("141011"),
  N = a("372654"),
  x = a("216541"),
  P = a("302800"),
  R = a("215023"),
  B = a("689938"),
  D = a("167052"),
  H = a("660097");
let k = e => {
  var t, a;
  let {
    product: n,
    onClose: o,
    confettiTarget: P,
    confettiCanvas: k,
    hideConfetti: w = !1,
    analyticsLocations: M
  } = e, {
    confettiColors: F
  } = (0, A.default)(n.styles), j = (0, u.useStateFromStores)([_.default], () => {
    let e = _.default.getCurrentUser();
    return l()(null != e, "User cannot be undefined"), e
  }), z = (0, u.useStateFromStores)([C.default], () => C.default.useReducedMotion), [Y] = n.items, {
    avatarDecorationSrc: U
  } = (0, E.default)({
    user: j,
    avatarDecorationOverride: (null == Y ? void 0 : Y.type) === c.CollectiblesItemType.AVATAR_DECORATION ? Y : null,
    size: (0, g.getDecorationSizeForAvatarSize)(d.AvatarSizes.SIZE_120)
  }), V = s.useRef(null), {
    analyticsLocations: G
  } = (0, b.default)([...M, p.default.COLLECTIBLES_COLLECTED_MODAL]), W = (0, I.default)({
    analyticsLocations: G
  }), X = s.useCallback(() => {
    if (o(), (0, f.popLayer)(), W(), n.type === c.CollectiblesItemType.AVATAR_DECORATION) {
      l()(Y.type === c.CollectiblesItemType.AVATAR_DECORATION, "product type and item type are the same"), (0, g.openAvatarDecorationModal)({
        initialSelectedDecoration: Y,
        analyticsLocations: G
      });
      return
    }
    n.type === c.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
      initialSelectedEffectId: Y.id,
      analyticsLocations: G
    })
  }, [o, W, n.type, Y, G]), {
    handleUseNow: Z
  } = (0, L.useHandleUseNow)({
    product: n,
    onSuccess: o,
    onError: o
  }), {
    firstAvatarDecoration: K,
    firstProfileEffect: q
  } = (0, h.useShopProductItems)(n), J = null != K && null != q, {
    category: Q,
    isFetching: $
  } = (0, v.useFetchCollectiblesProductCategory)(n.skuId), ee = null !== (a = null == Q ? void 0 : Q.successModalBg) && void 0 !== a ? a : n.banner;
  return (0, r.jsxs)(b.AnalyticsLocationProvider, {
    value: G,
    children: [(0, r.jsxs)("div", {
      className: D.modalInner,
      ref: V,
      children: [(0, r.jsxs)("div", {
        className: D.bannerContainer,
        children: [(0, r.jsx)(O.default, {
          asset: $ ? void 0 : ee,
          addGradient: null === (t = R.categoryBannerOverrides[n.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
          size: (0, N.getAssetSizeByHeight)(880),
          className: D.decorationBanner,
          blur: !0
        }), (0, i.match)(n.type).with(c.CollectiblesItemType.PROFILE_EFFECT, () => (0, r.jsx)("div", {
          className: D.profileEffectShopPreview,
          children: (0, r.jsx)(T.default, {
            forCollectedModal: !0,
            profileEffectId: Y.id
          })
        })).with(c.CollectiblesItemType.AVATAR_DECORATION, () => (l()(Y.type === c.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, r.jsx)(d.Avatar, {
          size: d.AvatarSizes.SIZE_120,
          src: H,
          avatarDecoration: U,
          className: D.avatarDecoration,
          "aria-label": n.name
        }))).with(c.CollectiblesItemType.BUNDLE, () => (0, r.jsx)("div", {
          className: D.bundlePreview,
          children: (0, r.jsx)(x.BundlePreview, {
            product: n,
            user: j,
            isPurchased: !1,
            isHighlighted: !0,
            profileEffectClassName: D.bundleProfileEffectCard
          })
        })).otherwise(() => null)]
      }), (0, r.jsxs)("div", {
        className: D.collectedInfoContainer,
        children: [(0, r.jsxs)("div", {
          className: D.collectedTextContainer,
          children: [(0, r.jsx)(d.Heading, {
            variant: "heading-lg/bold",
            children: B.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: n.name
            })
          }), (0, r.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: (0, i.match)(null == n ? void 0 : n.type).with(c.CollectiblesItemType.BUNDLE, () => B.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE).with(c.CollectiblesItemType.PROFILE_EFFECT, () => B.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION).otherwise(() => B.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION)
          })]
        }), (0, m.isBundleProduct)(n) ? (0, r.jsxs)("div", {
          className: D.buttons,
          children: [(0, r.jsx)(d.Button, {
            color: J ? d.ButtonColors.PRIMARY : d.ButtonColors.BRAND,
            onClick: X,
            children: B.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE
          }), J ? (0, r.jsx)(d.Button, {
            onClick: Z,
            children: B.default.Messages.COLLECTIBLES_USE_NOW
          }) : null]
        }) : (0, r.jsx)(d.Button, {
          onClick: X,
          children: B.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, r.jsx)(d.ModalCloseButton, {
        onClick: o,
        className: D.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !w && !z && (0, r.jsx)(y.default, {
      confettiTarget: null != P ? P : V.current,
      confettiCanvas: k,
      sprites: (0, N.getConfettiSprites)(n.categorySkuId),
      colors: null == F ? void 0 : F.map(e => e.toHexString())
    })]
  })
};
t.default = e => {
  let {
    transitionState: t,
    product: a,
    onClose: o,
    analyticsLocations: l
  } = e, i = s.useRef(new n.Environment), [c, u] = s.useState(null), f = (0, P.getCustomConfettiDisplayOptions)(a.skuId);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(n.ConfettiCanvas, {
      ref: u,
      className: D.confettiCanvas,
      environment: i.current
    }), (0, r.jsxs)(d.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: d.ModalSize.DYNAMIC,
      className: D.modalRoot,
      children: [null != f && (0, r.jsx)("img", {
        src: f.confettiAssetSrc,
        className: D.customConfetti,
        style: f.style,
        alt: "",
        "aria-hidden": "true"
      }), (0, r.jsx)(d.ModalContent, {
        className: D.modalContent,
        children: (0, r.jsx)(k, {
          product: a,
          onClose: o,
          confettiCanvas: c,
          hideConfetti: null != f,
          analyticsLocations: l
        })
      })]
    })]
  })
}