"use strict";
r.r(t), r.d(t, {
  CollectiblesCollectedModalInner: function() {
    return M
  }
}), r("47120"), r("627341");
var a = r("735250"),
  n = r("470079"),
  o = r("887024"),
  l = r("512722"),
  s = r.n(l),
  i = r("278074"),
  c = r("979554"),
  u = r("399606"),
  d = r("481060"),
  f = r("37234"),
  p = r("607070"),
  C = r("100527"),
  g = r("906732"),
  v = r("1585"),
  b = r("125988"),
  m = r("300284"),
  h = r("876917"),
  y = r("642619"),
  E = r("594174"),
  I = r("884697"),
  S = r("318028"),
  T = r("635552"),
  A = r("328456"),
  x = r("624377"),
  L = r("530618"),
  N = r("141011"),
  _ = r("372654"),
  O = r("216541"),
  P = r("302800"),
  k = r("215023"),
  R = r("689938"),
  B = r("167052"),
  w = r("660097");
let M = e => {
  var t, r;
  let {
    product: o,
    onClose: l,
    confettiTarget: P,
    confettiCanvas: M,
    hideConfetti: j = !1,
    analyticsLocations: F
  } = e, {
    confettiColors: D
  } = (0, x.default)(o.styles), H = (0, u.useStateFromStores)([E.default], () => {
    let e = E.default.getCurrentUser();
    return s()(null != e, "User cannot be undefined"), e
  }), z = (0, u.useStateFromStores)([p.default], () => p.default.useReducedMotion), [U] = o.items, {
    avatarDecorationSrc: V
  } = (0, b.default)({
    user: H,
    avatarDecorationOverride: (null == U ? void 0 : U.type) === c.CollectiblesItemType.AVATAR_DECORATION ? U : null,
    size: (0, v.getDecorationSizeForAvatarSize)(d.AvatarSizes.SIZE_120)
  }), W = n.useRef(null), {
    analyticsLocations: G
  } = (0, g.default)([...F, C.default.COLLECTIBLES_COLLECTED_MODAL]), Y = (0, m.default)({
    analyticsLocations: G
  }), Z = n.useCallback(() => {
    if (l(), (0, f.popLayer)(), Y(), o.type === c.CollectiblesItemType.AVATAR_DECORATION) {
      s()(U.type === c.CollectiblesItemType.AVATAR_DECORATION, "product type and item type are the same"), (0, v.openAvatarDecorationModal)({
        initialSelectedDecoration: U,
        analyticsLocations: G
      });
      return
    }
    o.type === c.CollectiblesItemType.PROFILE_EFFECT && (0, y.openProfileEffectModal)({
      initialSelectedEffectId: U.id,
      analyticsLocations: G
    })
  }, [l, Y, o.type, U, G]), {
    handleUseNow: K
  } = (0, T.useHandleUseNow)({
    product: o,
    onSuccess: l,
    onError: l
  }), {
    firstAvatarDecoration: X,
    firstProfileEffect: q
  } = (0, A.useShopProductItems)(o), J = null != X && null != q, {
    category: Q,
    isFetching: $
  } = (0, S.useFetchCollectiblesProductCategory)(o.skuId), ee = null !== (r = null == Q ? void 0 : Q.successModalBg) && void 0 !== r ? r : o.banner;
  return (0, a.jsxs)(g.AnalyticsLocationProvider, {
    value: G,
    children: [(0, a.jsxs)("div", {
      className: B.modalInner,
      ref: W,
      children: [(0, a.jsxs)("div", {
        className: B.bannerContainer,
        children: [(0, a.jsx)(N.default, {
          asset: $ ? void 0 : ee,
          addGradient: null === (t = k.categoryBannerOverrides[o.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
          size: (0, _.getAssetSizeByHeight)(880),
          className: B.decorationBanner,
          blur: !0
        }), (0, i.match)(o.type).with(c.CollectiblesItemType.PROFILE_EFFECT, () => (0, a.jsx)("div", {
          className: B.profileEffectShopPreview,
          children: (0, a.jsx)(h.default, {
            forCollectedModal: !0,
            profileEffectId: U.id
          })
        })).with(c.CollectiblesItemType.AVATAR_DECORATION, () => (s()(U.type === c.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, a.jsx)(d.Avatar, {
          size: d.AvatarSizes.SIZE_120,
          src: w,
          avatarDecoration: V,
          className: B.avatarDecoration,
          "aria-label": o.name
        }))).with(c.CollectiblesItemType.BUNDLE, () => (0, a.jsx)("div", {
          className: B.bundlePreview,
          children: (0, a.jsx)(O.BundlePreview, {
            product: o,
            user: H,
            isPurchased: !1,
            isHighlighted: !0,
            profileEffectClassName: B.bundleProfileEffectCard
          })
        })).otherwise(() => null)]
      }), (0, a.jsxs)("div", {
        className: B.collectedInfoContainer,
        children: [(0, a.jsxs)("div", {
          className: B.collectedTextContainer,
          children: [(0, a.jsx)(d.Heading, {
            variant: "heading-lg/bold",
            children: R.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: o.name
            })
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: (0, i.match)(null == o ? void 0 : o.type).with(c.CollectiblesItemType.BUNDLE, () => R.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE).with(c.CollectiblesItemType.PROFILE_EFFECT, () => R.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION).otherwise(() => R.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION)
          })]
        }), (0, I.isBundleProduct)(o) ? (0, a.jsxs)("div", {
          className: B.buttons,
          children: [(0, a.jsx)(d.Button, {
            color: J ? d.ButtonColors.PRIMARY : d.ButtonColors.BRAND,
            onClick: Z,
            children: R.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE
          }), J ? (0, a.jsx)(d.Button, {
            onClick: K,
            children: R.default.Messages.COLLECTIBLES_USE_NOW
          }) : null]
        }) : (0, a.jsx)(d.Button, {
          onClick: Z,
          children: R.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, a.jsx)(d.ModalCloseButton, {
        onClick: l,
        className: B.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !j && !z && (0, a.jsx)(L.default, {
      confettiTarget: null != P ? P : W.current,
      confettiCanvas: M,
      sprites: (0, _.getConfettiSprites)(o.categorySkuId),
      colors: null == D ? void 0 : D.map(e => e.toHexString())
    })]
  })
};
t.default = e => {
  let {
    transitionState: t,
    product: r,
    onClose: l,
    analyticsLocations: s
  } = e, i = n.useRef(new o.Environment), [c, u] = n.useState(null), f = (0, P.getCustomConfettiDisplayOptions)(r.skuId);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.ConfettiCanvas, {
      ref: u,
      className: B.confettiCanvas,
      environment: i.current
    }), (0, a.jsxs)(d.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: d.ModalSize.DYNAMIC,
      className: B.modalRoot,
      children: [null != f && (0, a.jsx)("img", {
        src: f.confettiAssetSrc,
        className: B.customConfetti,
        style: f.style,
        alt: "",
        "aria-hidden": "true"
      }), (0, a.jsx)(d.ModalContent, {
        className: B.modalContent,
        children: (0, a.jsx)(M, {
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