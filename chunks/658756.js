"use strict";
n.r(t), n.d(t, {
  CollectiblesCollectedModalInner: function() {
    return L
  },
  default: function() {
    return M
  }
}), n("222007");
var r = n("37983"),
  a = n("884691"),
  o = n("414456"),
  l = n.n(o),
  s = n("516555"),
  i = n("627445"),
  c = n.n(i),
  u = n("265586"),
  d = n("65597"),
  f = n("77078"),
  C = n("54239"),
  p = n("206230"),
  g = n("812204"),
  b = n("685665"),
  v = n("606292"),
  E = n("688318"),
  m = n("38766"),
  y = n("601095"),
  x = n("493390"),
  T = n("697218"),
  I = n("923702"),
  S = n("716120"),
  h = n("408381"),
  O = n("177586"),
  N = n("782340"),
  _ = n("580864"),
  A = n("53708");
let L = e => {
  let {
    product: t,
    onClose: n,
    confettiTarget: o,
    confettiCanvas: s,
    analyticsLocations: i
  } = e, {
    confettiColors: L,
    backgroundColors: M,
    buttonColors: k
  } = (0, O.default)(t.styles), R = null != k ? {
    background: (0, h.getBackgroundGradient)(k, 90),
    color: k.text.toHslString()
  } : void 0, j = null != M ? {
    background: (0, h.getBackgroundGradient)(M, 135)
  } : {
    backgroundColor: "var(--modal-background)"
  }, F = (0, d.default)([T.default], () => {
    let e = T.default.getCurrentUser();
    return c(null != e, "User cannot be undefined"), e
  }), B = (0, d.default)([p.default], () => p.default.useReducedMotion), [w] = t.items, {
    avatarDecorationSrc: H
  } = (0, E.default)({
    user: F,
    avatarDecorationOverride: (null == w ? void 0 : w.type) === u.CollectiblesItemType.AVATAR_DECORATION ? w : null,
    size: (0, v.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_120)
  }), D = a.useRef(null), {
    analyticsLocations: P,
    AnalyticsLocationProvider: z
  } = (0, b.default)([...i, g.default.COLLECTIBLES_COLLECTED_MODAL]), V = (0, m.default)({
    analyticsLocations: P
  });
  return (0, r.jsxs)(z, {
    children: [(0, r.jsxs)("div", {
      className: _.modalInner,
      ref: D,
      style: j,
      children: [(0, r.jsxs)("div", {
        className: l(_.bannerContainer, {
          [_.bannerBackgroundFallback]: null == M
        }),
        children: [(0, r.jsx)(S.default, {
          asset: t.banner,
          size: (0, h.getAssetSizeByHeight)(440),
          className: _.decorationBanner
        }), (null == w ? void 0 : w.type) === u.CollectiblesItemType.AVATAR_DECORATION && (0, r.jsx)(f.Avatar, {
          size: f.AvatarSizes.SIZE_120,
          src: A,
          avatarDecoration: H,
          className: _.avatarDecoration,
          "aria-label": t.name
        }), (null == w ? void 0 : w.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, r.jsx)("div", {
          className: _.profileEffectShopPreview,
          children: (0, r.jsx)(y.default, {
            forCollectedModal: !0,
            profileEffectId: w.id
          })
        })]
      }), (0, r.jsxs)("div", {
        className: l(_.collectedInfoContainer, {
          [_.default]: null == M
        }),
        children: [(0, r.jsxs)("div", {
          className: _.collectedTextContainer,
          children: [(0, r.jsx)(f.Heading, {
            variant: "heading-lg/bold",
            color: "always-white",
            children: N.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: t.name
            })
          }), (0, r.jsx)(f.Text, {
            color: "always-white",
            variant: "text-sm/normal",
            children: (null == w ? void 0 : w.type) === u.CollectiblesItemType.PROFILE_EFFECT ? N.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : N.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, r.jsx)(f.Button, {
          onClick: () => {
            if (n(), (0, C.popLayer)(), V(), (null == w ? void 0 : w.type) === u.CollectiblesItemType.AVATAR_DECORATION) {
              (0, v.openAvatarDecorationModal)({
                initialSelectedDecoration: w,
                analyticsLocations: P
              });
              return
            }(null == w ? void 0 : w.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, x.openProfileEffectModal)({
              initialSelectedEffectId: w.id,
              analyticsLocations: P
            })
          },
          style: R,
          children: N.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, r.jsx)(f.ModalCloseButton, {
        onClick: n,
        className: _.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !B && (0, r.jsx)(I.default, {
      confettiTarget: null != o ? o : D.current,
      confettiCanvas: s,
      sprites: (0, h.getConfettiSprites)(t.categorySkuId),
      colors: null == L ? void 0 : L.map(e => e.toHexString())
    })]
  })
};
var M = e => {
  let {
    transitionState: t,
    product: n,
    onClose: o,
    analyticsLocations: l
  } = e, i = a.useRef(new s.Environment), [c, u] = a.useState(null);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.ConfettiCanvas, {
      ref: u,
      className: _.confettiCanvas,
      environment: i.current
    }), (0, r.jsx)(f.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: f.ModalSize.DYNAMIC,
      className: _.modalRoot,
      children: (0, r.jsx)(f.ModalContent, {
        className: _.modalContent,
        children: (0, r.jsx)(L, {
          product: n,
          onClose: o,
          confettiCanvas: c,
          analyticsLocations: l
        })
      })
    })]
  })
}