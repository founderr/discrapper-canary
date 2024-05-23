"use strict";
r.r(t), r.d(t, {
  CollectiblesCollectedModalInner: function() {
    return w
  }
}), r("47120"), r("627341");
var a = r("735250"),
  l = r("470079"),
  o = r("887024"),
  n = r("512722"),
  s = r.n(n),
  i = r("278074"),
  c = r("979554"),
  u = r("399606"),
  d = r("481060"),
  f = r("37234"),
  C = r("607070"),
  p = r("100527"),
  g = r("906732"),
  v = r("1585"),
  b = r("125988"),
  m = r("300284"),
  h = r("876917"),
  y = r("642619"),
  E = r("594174"),
  I = r("318028"),
  S = r("635552"),
  T = r("328456"),
  A = r("624377"),
  x = r("530618"),
  N = r("141011"),
  L = r("372654"),
  _ = r("216541"),
  O = r("302800"),
  k = r("215023"),
  R = r("689938"),
  B = r("167052"),
  P = r("660097");
let w = e => {
  var t, r;
  let {
    product: o,
    onClose: n,
    confettiTarget: O,
    confettiCanvas: w,
    hideConfetti: D = !1,
    analyticsLocations: F
  } = e, {
    confettiColors: M
  } = (0, A.default)(o.styles), j = (0, u.useStateFromStores)([E.default], () => {
    let e = E.default.getCurrentUser();
    return s()(null != e, "User cannot be undefined"), e
  }), H = (0, u.useStateFromStores)([C.default], () => C.default.useReducedMotion), [z] = o.items, {
    avatarDecorationSrc: U
  } = (0, b.default)({
    user: j,
    avatarDecorationOverride: (null == z ? void 0 : z.type) === c.CollectiblesItemType.AVATAR_DECORATION ? z : null,
    size: (0, v.getDecorationSizeForAvatarSize)(d.AvatarSizes.SIZE_120)
  }), V = l.useRef(null), {
    analyticsLocations: W
  } = (0, g.default)([...F, p.default.COLLECTIBLES_COLLECTED_MODAL]), G = (0, m.default)({
    analyticsLocations: W
  }), Y = l.useCallback(() => {
    if (n(), (0, f.popLayer)(), G(), o.type === c.CollectiblesItemType.AVATAR_DECORATION) {
      s()(z.type === c.CollectiblesItemType.AVATAR_DECORATION, "product type and item type are the same"), (0, v.openAvatarDecorationModal)({
        initialSelectedDecoration: z,
        analyticsLocations: W
      });
      return
    }
    o.type === c.CollectiblesItemType.PROFILE_EFFECT && (0, y.openProfileEffectModal)({
      initialSelectedEffectId: z.id,
      analyticsLocations: W
    })
  }, [n, G, o.type, z, W]), {
    handleUseNow: Z
  } = (0, S.useHandleUseNow)({
    product: o,
    onSuccess: n,
    onError: n
  }), {
    firstAvatarDecoration: K,
    firstProfileEffect: X
  } = (0, T.useShopProductItems)(o), q = null != K && null != X, {
    category: J,
    isFetching: Q
  } = (0, I.useFetchCollectiblesProductCategory)(o.skuId), $ = null !== (r = null == J ? void 0 : J.successModalBg) && void 0 !== r ? r : o.banner;
  return (0, a.jsxs)(g.AnalyticsLocationProvider, {
    value: W,
    children: [(0, a.jsxs)("div", {
      className: B.modalInner,
      ref: V,
      children: [(0, a.jsxs)("div", {
        className: B.bannerContainer,
        children: [(0, a.jsx)(N.default, {
          asset: Q ? void 0 : $,
          addGradient: null === (t = k.categoryBannerOverrides[o.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
          size: (0, L.getAssetSizeByHeight)(880),
          className: B.decorationBanner,
          blur: !0
        }), (0, i.match)(o.type).with(c.CollectiblesItemType.PROFILE_EFFECT, () => (0, a.jsx)("div", {
          className: B.profileEffectShopPreview,
          children: (0, a.jsx)(h.default, {
            forCollectedModal: !0,
            profileEffectId: z.id
          })
        })).with(c.CollectiblesItemType.AVATAR_DECORATION, () => (s()(z.type === c.CollectiblesItemType.AVATAR_DECORATION, "ts-match already checked the type"), (0, a.jsx)(d.Avatar, {
          size: d.AvatarSizes.SIZE_120,
          src: P,
          avatarDecoration: U,
          className: B.avatarDecoration,
          "aria-label": o.name
        }))).with(c.CollectiblesItemType.BUNDLE, () => (0, a.jsx)("div", {
          className: B.bundlePreview,
          children: (0, a.jsx)(_.BundlePreview, {
            product: o,
            user: j,
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
        }), (null == o ? void 0 : o.type) === c.CollectiblesItemType.BUNDLE ? (0, a.jsxs)("div", {
          className: B.buttons,
          children: [(0, a.jsx)(d.Button, {
            color: q ? d.ButtonColors.PRIMARY : d.ButtonColors.BRAND,
            onClick: Y,
            children: R.default.Messages.USER_SETTINGS_EDIT_USER_PROFILE
          }), q ? (0, a.jsx)(d.Button, {
            onClick: Z,
            children: R.default.Messages.COLLECTIBLES_USE_NOW
          }) : null]
        }) : (0, a.jsx)(d.Button, {
          onClick: Y,
          children: R.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, a.jsx)(d.ModalCloseButton, {
        onClick: n,
        className: B.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !D && !H && (0, a.jsx)(x.default, {
      confettiTarget: null != O ? O : V.current,
      confettiCanvas: w,
      sprites: (0, L.getConfettiSprites)(o.categorySkuId),
      colors: null == M ? void 0 : M.map(e => e.toHexString())
    })]
  })
};
t.default = e => {
  let {
    transitionState: t,
    product: r,
    onClose: n,
    analyticsLocations: s
  } = e, i = l.useRef(new o.Environment), [c, u] = l.useState(null), f = (0, O.getCustomConfettiDisplayOptions)(r.skuId);
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
        children: (0, a.jsx)(w, {
          product: r,
          onClose: n,
          confettiCanvas: c,
          hideConfetti: null != f,
          analyticsLocations: s
        })
      })]
    })]
  })
}