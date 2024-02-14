"use strict";
n.r(t), n.d(t, {
  CollectiblesCollectedModalInner: function() {
    return h
  },
  default: function() {
    return R
  }
}), n("222007");
var o = n("37983"),
  r = n("884691"),
  a = n("414456"),
  l = n.n(a),
  s = n("516555"),
  i = n("627445"),
  c = n.n(i),
  u = n("265586"),
  d = n("65597"),
  f = n("77078"),
  C = n("54239"),
  p = n("206230"),
  g = n("812204"),
  E = n("685665"),
  b = n("606292"),
  T = n("688318"),
  m = n("38766"),
  v = n("601095"),
  _ = n("493390"),
  y = n("697218"),
  S = n("923702"),
  I = n("716120"),
  O = n("408381"),
  N = n("177586"),
  x = n("782340"),
  L = n("580864"),
  A = n("53708");
let h = e => {
  let {
    product: t,
    onClose: n,
    confettiTarget: a,
    confettiCanvas: s,
    analyticsLocations: i
  } = e, {
    confettiColors: h,
    backgroundColors: R,
    buttonColors: M
  } = (0, N.default)(t.styles), k = null != M ? {
    background: (0, O.getBackgroundGradient)(M, 90),
    color: M.text.toHslString()
  } : void 0, B = null != R ? {
    background: (0, O.getBackgroundGradient)(R, 135)
  } : {
    backgroundColor: "var(--modal-background)"
  }, j = (0, d.default)([y.default], () => {
    let e = y.default.getCurrentUser();
    return c(null != e, "User cannot be undefined"), e
  }), F = (0, d.default)([p.default], () => p.default.useReducedMotion), [D] = t.items, {
    avatarDecorationSrc: P
  } = (0, T.default)({
    user: j,
    avatarDecorationOverride: (null == D ? void 0 : D.type) === u.CollectiblesItemType.AVATAR_DECORATION ? D : null,
    size: (0, b.getDecorationSizeForAvatarSize)(f.AvatarSizes.SIZE_120)
  }), w = r.useRef(null), {
    analyticsLocations: H,
    AnalyticsLocationProvider: z
  } = (0, E.default)([...i, g.default.COLLECTIBLES_COLLECTED_MODAL]), U = (0, m.default)({
    analyticsLocations: H
  });
  return (0, o.jsxs)(z, {
    children: [(0, o.jsxs)("div", {
      className: L.modalInner,
      ref: w,
      style: B,
      children: [(0, o.jsxs)("div", {
        className: l(L.bannerContainer, {
          [L.bannerBackgroundFallback]: null == R
        }),
        children: [(0, o.jsx)(I.default, {
          asset: t.banner,
          size: (0, O.getAssetSizeByHeight)(440),
          className: L.decorationBanner
        }), (null == D ? void 0 : D.type) === u.CollectiblesItemType.AVATAR_DECORATION && (0, o.jsx)(f.Avatar, {
          size: f.AvatarSizes.SIZE_120,
          src: A,
          avatarDecoration: P,
          className: L.avatarDecoration,
          "aria-label": t.name
        }), (null == D ? void 0 : D.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, o.jsx)("div", {
          className: L.profileEffectShopPreview,
          children: (0, o.jsx)(v.default, {
            forCollectedModal: !0,
            profileEffectId: D.id
          })
        })]
      }), (0, o.jsxs)("div", {
        className: l(L.collectedInfoContainer, {
          [L.default]: null == R
        }),
        children: [(0, o.jsxs)("div", {
          className: L.collectedTextContainer,
          children: [(0, o.jsx)(f.Heading, {
            variant: "heading-lg/bold",
            color: "always-white",
            children: x.default.Messages.COLLECTIBLES_YOU_COLLECTED.format({
              itemName: t.name
            })
          }), (0, o.jsx)(f.Text, {
            color: "always-white",
            variant: "text-sm/normal",
            children: (null == D ? void 0 : D.type) === u.CollectiblesItemType.PROFILE_EFFECT ? x.default.Messages.COLLECTIBLES_PROFILE_EFFECT_PERMANENT_COLLECTION : x.default.Messages.COLLECTIBLES_PERMANENT_COLLECTION
          })]
        }), (0, o.jsx)(f.Button, {
          onClick: () => {
            if (n(), (0, C.popLayer)(), U(), (null == D ? void 0 : D.type) === u.CollectiblesItemType.AVATAR_DECORATION) {
              (0, b.openAvatarDecorationModal)({
                initialSelectedDecoration: D,
                analyticsLocations: H
              });
              return
            }(null == D ? void 0 : D.type) === u.CollectiblesItemType.PROFILE_EFFECT && (0, _.openProfileEffectModal)({
              initialSelectedEffectId: D.id,
              analyticsLocations: H
            })
          },
          style: k,
          children: x.default.Messages.COLLECTIBLES_USE_NOW
        })]
      }), (0, o.jsx)(f.ModalCloseButton, {
        onClick: n,
        className: L.modalCloseButton,
        withCircleBackground: !0
      })]
    }), !F && (0, o.jsx)(S.default, {
      confettiTarget: null != a ? a : w.current,
      confettiCanvas: s,
      sprites: (0, O.getConfettiSprites)(t.categorySkuId),
      colors: null == h ? void 0 : h.map(e => e.toHexString())
    })]
  })
};
var R = e => {
  let {
    transitionState: t,
    product: n,
    onClose: a,
    analyticsLocations: l
  } = e, i = r.useRef(new s.Environment), [c, u] = r.useState(null);
  return (0, o.jsxs)(o.Fragment, {
    children: [(0, o.jsx)(s.ConfettiCanvas, {
      ref: u,
      className: L.confettiCanvas,
      environment: i.current
    }), (0, o.jsx)(f.ModalRoot, {
      hideShadow: !0,
      transitionState: t,
      size: f.ModalSize.DYNAMIC,
      className: L.modalRoot,
      children: (0, o.jsx)(f.ModalContent, {
        className: L.modalContent,
        children: (0, o.jsx)(h, {
          product: n,
          onClose: a,
          confettiCanvas: c,
          analyticsLocations: l
        })
      })
    })]
  })
}