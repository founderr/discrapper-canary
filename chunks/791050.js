"use strict";
r.r(t), r.d(t, {
  default: function() {
    return L
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
  m = r("235898"),
  p = r("170313"),
  E = r("635956"),
  S = r("91653"),
  h = r("697218"),
  _ = r("599110"),
  C = r("719923"),
  I = r("234251"),
  T = r("659117"),
  g = r("765221"),
  v = r("49111"),
  N = r("646718"),
  A = r("782340"),
  P = r("446812");

function R(e) {
  let {
    user: t,
    categories: r,
    analyticsLocations: u,
    onClose: i,
    initialSelectedDecoration: o,
    isTryItOutFlow: m
  } = e, {
    pendingAvatarDecoration: h,
    setPendingAvatarDecoration: _
  } = (0, S.default)({
    analyticsLocations: u,
    isTryItOut: m
  }), [v, R] = a.useState(() => {
    var e;
    if (null != o) return o;
    if (void 0 !== h) return h;
    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
    let n = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = n.find(e => (0, I.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
  }), {
    product: L,
    purchase: y
  } = (0, f.default)(null == v ? void 0 : v.skuId), x = C.default.canUseCollectibles(t), b = a.useRef(null), M = (0, p.default)(u), O = (0, I.isEqualAvatarDecoration)(v, void 0 === h ? null == t ? void 0 : t.avatarDecoration : h), U = () => {
    _(v), i()
  }, F = a.useCallback(() => {
    i(), (0, c.openCollectiblesShop)({
      analyticsLocations: u,
      analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != v ? v.skuId : void 0
    })
  }, [u, i, v]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(s.ModalHeader, {
      separator: !1,
      className: P.modalHeader,
      children: [(0, n.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: A.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, n.jsx)(s.ModalCloseButton, {
        className: P.modalCloseButton,
        onClick: i
      })]
    }), (0, n.jsxs)(s.ModalContent, {
      className: P.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(g.default, {
        user: t,
        pendingAvatarDecoration: v,
        selectedAvatarDecorationRef: b,
        onSelect: e => {
          R(e), null != e && M(e)
        },
        onOpenShop: F
      }), (0, n.jsx)(T.default, {
        className: P.modalPreview,
        user: t,
        avatarDecorationOverride: v
      })]
    }), (0, n.jsxs)(s.ModalFooter, {
      className: P.modalFooter,
      children: [(() => {
        let e = null != y && (!(0, d.isPremiumCollectiblesPurchase)(y) || x);
        if (e || null === v) return (0, n.jsx)(s.Button, {
          onClick: U,
          disabled: O,
          children: A.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = x || !(0, d.isPremiumCollectiblesProduct)(L);
        return r ? (0, n.jsx)(s.Button, {
          className: P.modalFooterShopButton,
          onClick: F,
          children: A.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, n.jsx)(E.default, {
          subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
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

function L(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: d,
    initialSelectedDecoration: f,
    isTryItOutFlow: p
  } = e, E = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser()), {
    AnalyticsLocationProvider: S,
    analyticsLocations: C
  } = (0, o.default)(r, l.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: I,
    purchases: T,
    isFetchingCategories: g,
    isFetchingPurchases: N
  } = (0, m.default)(), A = g || N && 0 === T.size;
  return a.useEffect(() => {
    _.default.track(v.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: C
    })
  }, [C]), a.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...I.values()],
      itemTypes: [u.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [I]), null == E ? null : (0, n.jsx)(S, {
    children: (0, n.jsx)(s.ModalRoot, {
      transitionState: t,
      className: P.modal,
      size: A ? s.ModalSize.DYNAMIC : s.ModalSize.MEDIUM,
      children: A ? (0, n.jsx)(s.Spinner, {
        className: P.spinner,
        type: s.Spinner.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(R, {
        user: E,
        categories: I,
        analyticsLocations: C,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: p
      })
    })
  })
}