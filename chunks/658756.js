"use strict";
r.r(t), r.d(t, {
  CollectiblesCollectedModalInner: function() {
    return k
  },
  default: function() {
    return M
  }
}), r("222007");
var n = r("37983"),
  o = r("884691"),
  a = r("414456"),
  l = r.n(a),
  s = r("516555"),
  i = r("627445"),
  c = r.n(i),
  u = r("265586"),
  d = r("65597"),
  f = r("77078"),
  C = r("54239"),
  p = r("206230"),
  g = r("812204"),
  b = r("685665"),
  E = r("606292"),
  v = r("688318"),
  y = r("38766"),
  m = r("601095"),
  x = r("493390"),
  I = r("697218"),
  S = r("923702"),
  T = r("716120"),
  h = r("408381"),
  O = r("177586"),
  N = r("380171"),
  _ = r("782340"),
  A = r("580864"),
  L = r("53708");
let k = e => {
  let {
    product: t,
    onClose: r,
    confettiTarget: a,
    confettiCanvas: s,
    analyticsLocations: i
  } = e, {
    confettiColors: k,
    backgroundColors: M,
    buttonColors: R
  } = (0, O.default)(t.styles), j = null != R ? {
    background: (0, h.getBackgroundGradient)(R, 90),
    color: R.text.toHslString()
  } : void 0, B = null != M ? {
    background: (0, h.getBackgroundGradient)(M, 135)
  } : {
    backgroundColor: "var(--modal-background)"
  }, F = (0, d.default)([I.default], () => {
    let e = I.default.getCurrentUser();
    return c(null != e, "User cannot be undefined"), e
  }), w = (0, d.default)([p.default], () => p.default.useReducedMotion), [H] = t.items, {
    avatarDecorationSrc: D
  } = (0, v.default)({
    user: F,
    avatarDecorationOverride: (null == H ? void 0 : H.type) === u.CollectiblesItemType.AVATAR_DECORATION ? H : null,
    size: (0, E.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_120)
  }), P = o.useRef(null), {
    analyticsLocations: z,
    AnalyticsLocationProvider: U
  } = (0, b.default)([...i, g.default.COLLECTIBLES_COLLECTED_MODAL]), V = (0, y.default)({
    analyticsLocations: z
  });
  return (0, n.jsxs)(U, {
    children: [(0, n.jsxs)("div", {
      className: A.modalInner,
      ref: P,
      style: B,
      children: [(0, n.jsxs)("div", {
        className: l(A.bannerContainer, {
          [A.bannerBackgroundFallback]: null == M
        }),
        children: [(0, n.jsx)(T.default, {
          assetUrlOverride: N.categoryBannerOverrides[t.categorySkuId],
          asset: t.banner,
          size: (0, h.getAssetSizeByHeight)(440),
          className: A.decorationBanner
        }), (null == H ? void 0 : H.type) === u.CollectiblesItemType.AVATAR_DECORATION && (0, n.jsx)(f.Avatar, {
          size: f.AvatarSizes.SIZE_120,
          src: L,
          avatarDecoration: D,
          className: A.avatarDecoration,
          "aria-label": t.name
        }), (null == H ? void 0 : H.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, n.jsx)("div", {
          className: A.profileEffectShopPreview,
          children: (0, n.jsx)(m.default, {
            forCollectedModal: !0,
            profileEffectId: H.id
          })
        })]
      }), (0, n.jsxs)("div", {
        className: l(A.collectedInfoContainer, {
          [A.default]: null == M
        }),
        children: [(0, n.jsxs)("div", {
          className: A.collectedTextContainer,
          children: [(0, n.jsx)(f.Heading, {
            variant: "heading-lg/bold",
            color: "always-white",
            children: _.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: t.name
            })
          }), (0, n.jsx)(f.Text, {
            color: "always-white",
            variant: "text-sm/normal",
            children: (null == H ? void 0 : H.type) === u.CollectiblesItemType.PROFILE_EFFECT ? _.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : _.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, n.jsx)(f.Button, {
          onClick: () => {
            if (r(), (0, C.popLayer)(), V(), (null == H ? void 0 : H.type) === u.CollectiblesItemType.AVATAR_DECORATION) {
              (0, E.openAvatarDecorationModal)({
                initialSelectedDecoration: H,
                analyticsLocations: z
              });
              return
            }(null == H ? void 0 : H.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, x.openProfileEffectModal)({
              initialSelectedEffectId: H.id,
              analyticsLocations: z
            })
          },
          style: j,
          children: _.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, n.jsx)(f.ModalCloseButton, {
        onClick: r,
        className: A.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !w && (0, n.jsx)(S.default, {
      confettiTarget: null != a ? a : P.current,
      confettiCanvas: s,
      sprites: (0, h.getConfettiSprites)(t.categorySkuId),
      colors: null == k ? void 0 : k.map(e => e.toHexString())
    })]
  })
};
var M = e => {
  let {
    transitionState: t,
    product: r,
    onClose: a,
    analyticsLocations: l
  } = e, i = o.useRef(new s.Environment), [c, u] = o.useState(null);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(s.ConfettiCanvas, {
      ref: u,
      className: A.confettiCanvas,
      environment: i.current
    }), (0, n.jsx)(f.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: f.ModalSize.DYNAMIC,
      className: A.modalRoot,
      children: (0, n.jsx)(f.ModalContent, {
        className: A.modalContent,
        children: (0, n.jsx)(k, {
          product: r,
          onClose: a,
          confettiCanvas: c,
          analyticsLocations: l
        })
      })
    })]
  })
}