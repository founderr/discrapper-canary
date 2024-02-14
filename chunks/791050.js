"use strict";
r.r(t), r.d(t, {
  default: function() {
    return P
  }
}), r("222007");
var n = r("37983"),
  a = r("884691"),
  u = r("265586"),
  i = r("446674"),
  s = r("77078"),
  l = r("812204"),
  o = r("685665"),
  c = r("21526"),
  d = r("491232"),
  f = r("984002"),
  E = r("235898"),
  m = r("170313"),
  p = r("635956"),
  S = r("91653"),
  h = r("697218"),
  _ = r("599110"),
  C = r("719923"),
  I = r("234251"),
  g = r("659117"),
  T = r("765221"),
  N = r("49111"),
  v = r("646718"),
  A = r("782340"),
  R = r("446812");

function L(e) {
  let {
    user: t,
    categories: r,
    analyticsLocations: u,
    onClose: i,
    initialSelectedDecoration: o,
    isTryItOutFlow: E
  } = e, {
    pendingAvatarDecoration: h,
    setPendingAvatarDecoration: _
  } = (0, S.default)({
    analyticsLocations: u,
    isTryItOut: E
  }), [N, L] = a.useState(() => {
    var e;
    if (null != o) return o;
    if (void 0 !== h) return h;
    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
    let n = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = n.find(e => (0, I.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
  }), {
    product: P,
    purchase: y
  } = (0, f.default)(null == N ? void 0 : N.skuId), O = C.default.canUseCollectibles(t), x = a.useRef(null), b = (0, m.default)(u), M = (0, I.isEqualAvatarDecoration)(N, void 0 === h ? null == t ? void 0 : t.avatarDecoration : h), U = () => {
    _(N), i()
  }, F = a.useCallback(() => {
    i(), (0, c.openCollectiblesShop)({
      analyticsLocations: u,
      analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != N ? N.skuId : void 0
    })
  }, [u, i, N]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.ModalHeader, {
      separator: !1,
      className: R.modalHeader,
      children: [(0, n.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: A.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, n.jsx)(s.ModalCloseButton, {
        className: R.modalCloseButton,
        onClick: i
      })]
    }), (0, n.jsxs)(s.ModalContent, {
      className: R.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(T.default, {
        user: t,
        pendingAvatarDecoration: N,
        selectedAvatarDecorationRef: x,
        onSelect: e => {
          L(e), null != e && b(e)
        },
        onOpenShop: F
      }), (0, n.jsx)(g.default, {
        className: R.modalPreview,
        user: t,
        avatarDecorationOverride: N
      })]
    }), (0, n.jsxs)(s.ModalFooter, {
      className: R.modalFooter,
      children: [(() => {
        let e = null != y && (!(0, d.isPremiumCollectiblesPurchase)(y) || O);
        if (e || null === N) return (0, n.jsx)(s.Button, {
          onClick: U,
          disabled: M,
          children: A.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = O || !(0, d.isPremiumCollectiblesProduct)(P);
        return r ? (0, n.jsx)(s.Button, {
          className: R.modalFooterShopButton,
          onClick: F,
          children: A.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, n.jsx)(p.default, {
          subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
          buttonText: C.default.isPremium(t) ? A.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : A.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })(), (0, n.jsx)(s.Button, {
        look: s.Button.Looks.LINK,
        color: s.Button.Colors.PRIMARY,
        onClick: i,
        children: A.default.Messages.CANCEL
      })]
    })]
  })
}

function P(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: d,
    initialSelectedDecoration: f,
    isTryItOutFlow: m
  } = e, p = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser()), {
    AnalyticsLocationProvider: S,
    analyticsLocations: C
  } = (0, o.default)(r, l.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: I,
    purchases: g,
    isFetchingCategories: T,
    isFetchingPurchases: v
  } = (0, E.default)(), A = T || v && 0 === g.size;
  return a.useEffect(() => {
    _.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: C
    })
  }, [C]), a.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...I.values()],
      itemTypes: [u.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [I]), null == p ? null : (0, n.jsx)(S, {
    children: (0, n.jsx)(s.ModalRoot, {
      transitionState: t,
      className: R.modal,
      size: A ? s.ModalSize.DYNAMIC : s.ModalSize.MEDIUM,
      children: A ? (0, n.jsx)(s.Spinner, {
        className: R.spinner,
        type: s.Spinner.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(L, {
        user: p,
        categories: I,
        analyticsLocations: C,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: m
      })
    })
  })
}