"use strict";
r.r(t), r.d(t, {
  CollectiblesCollectedModalInner: function() {
    return F
  }
}), r("47120"), r("627341");
var a = r("735250"),
  o = r("470079"),
  l = r("887024"),
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
  I = r("884697"),
  S = r("318028"),
  T = r("635552"),
  A = r("328456"),
  x = r("624377"),
  N = r("530618"),
  L = r("141011"),
  _ = r("372654"),
  O = r("216541"),
  k = r("302800"),
  P = r("215023"),
  R = r("689938"),
  B = r("167052"),
  w = r("660097");
let F = e => {
  var t, r;
  let {
    product: l,
    onClose: n,
    confettiTarget: k,
    confettiCanvas: F,
    hideConfetti: M = !1,
    analyticsLocations: j
  } = e, {
    confettiColors: D
  } = (0, x.default)(l.styles), H = (0, u.useStateFromStores)([E.default], () => {
    let e = E.default.getCurrentUser();
    return s()(null != e, "User cannot be undefined"), e
  }), z = (0, u.useStateFromStores)([C.default], () => C.default.useReducedMotion), [U] = l.items, {
    avatarDecorationSrc: V
  } = (0, b.default)({
    user: H,
    avatarDecorationOverride: (null == U ? void 0 : U.type) === c.CollectiblesItemType.AVATAR_DECORATION ? U : null,
    size: (0, v.getDecorationSizeForAvatarSize)(d.AvatarSizes.SIZE_120)
  }), W = o.useRef(null), {
    analyticsLocations: G
  } = (0, g.default)([...j, p.default.COLLECTIBLES_COLLECTED_MODAL]), Y = (0, m.default)({
    analyticsLocations: G
  }), Z = o.useCallback(() => {
    if (n(), (0, f.popLayer)(), Y(), l.type === c.CollectiblesItemType.AVATAR_DECORATION) {
      s()(U.type === c.CollectiblesItemType.AVATAR_DECORATION, "product type and item type are the same"), (0, v.openAvatarDecorationModal)({
        initialSelectedDecoration: U,
        analyticsLocations: G
      });
      return
    }
    l.type === c.CollectiblesItemType.PROFILE_EFFECT && (0, y.openProfileEffectModal)({
      initialSelectedEffectId: U.id,
      analyticsLocations: G
    })
  }, [n, Y, l.type, U, G]), {
    handleUseNow: K
  } = (0, T.useHandleUseNow)({
    product: l,
    onSuccess: n,
    onError: n
  }), {
    firstAvatarDecoration: X,
    firstProfileEffect: q
  } = (0, A.useShopProductItems)(l), J = null != X && null != q, {
    category: Q,
    isFetching: $
  } = (0, S.useFetchCollectiblesProductCategory)(l.skuId), ee = null !== (r = null == Q ? void 0 : Q.successModalBg) && void 0 !== r ? r : l.banner;
  return (0, a.jsxs)(g.AnalyticsLocationProvider, {
    value: G,
    children: [(0, a.jsxs)("div", {
      className: B.modalInner,
      ref: W,
      children: [(0, a.jsxs)("div", {
        className: B.bannerContainer,
        children: [(0, a.jsx)(L.default, {
          asset: $ ? void 0 : ee,
          addGradient: null === (t = P.categoryBannerOverrides[l.categorySkuId]) || void 0 === t ? void 0 : t.addGradient,
          size: (0, _.getAssetSizeByHeight)(880),
          className: B.decorationBanner,
          blur: !0
        }), (0, i.match)(l.type).with(c.CollectiblesItemType.PROFILE_EFFECT, () => (0, a.jsx)("div", {
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
          "aria-label": l.name
        }))).with(c.CollectiblesItemType.BUNDLE, () => (0, a.jsx)("div", {
          className: B.bundlePreview,
          children: (0, a.jsx)(O.BundlePreview, {
            product: l,
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
              itemName: l.name
            })
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/normal",
            children: (0, i.match)(null == l ? void 0 : l.type).with(c.CollectiblesItemType.BUNDLE, () => R.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION_BUNDLE).with(c.CollectiblesItemType.PROFILE_EFFECT, () => R.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION).otherwise(() => R.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION)
          })]
        }), (0, I.isBundleProduct)(l) ? (0, a.jsxs)("div", {
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
        onClick: n,
        className: B.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !M && !z && (0, a.jsx)(N.default, {
      confettiTarget: null != k ? k : W.current,
      confettiCanvas: F,
      sprites: (0, _.getConfettiSprites)(l.categorySkuId),
      colors: null == D ? void 0 : D.map(e => e.toHexString())
    })]
  })
};
t.default = e => {
  let {
    transitionState: t,
    product: r,
    onClose: n,
    analyticsLocations: s
  } = e, i = o.useRef(new l.Environment), [c, u] = o.useState(null), f = (0, k.getCustomConfettiDisplayOptions)(r.skuId);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(l.ConfettiCanvas, {
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
        children: (0, a.jsx)(F, {
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