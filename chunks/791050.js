"use strict";
r.r(t), r.d(t, {
  default: function() {
    return R
  }
}), r("222007");
var a = r("37983"),
  n = r("884691"),
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
  g = r("659117"),
  T = r("765221"),
  v = r("49111"),
  A = r("646718"),
  P = r("782340"),
  N = r("446812");

function L(e) {
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
  }), [v, L] = n.useState(() => {
    var e;
    if (null != o) return o;
    if (void 0 !== h) return h;
    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
    let a = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = a.find(e => (0, I.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
  }), {
    product: R,
    purchase: y
  } = (0, f.default)(null == v ? void 0 : v.skuId), x = C.default.canUseCollectibles(t), b = n.useRef(null), M = (0, p.default)(u), U = (0, I.isEqualAvatarDecoration)(v, void 0 === h ? null == t ? void 0 : t.avatarDecoration : h), O = () => {
    _(v), i()
  }, F = n.useCallback(() => {
    i(), (0, c.openCollectiblesShop)({
      analyticsLocations: u,
      analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != v ? v.skuId : void 0
    })
  }, [u, i, v]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(s.ModalHeader, {
      separator: !1,
      className: N.modalHeader,
      children: [(0, a.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: P.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, a.jsx)(s.ModalCloseButton, {
        className: N.modalCloseButton,
        onClick: i
      })]
    }), (0, a.jsxs)(s.ModalContent, {
      className: N.modalContent,
      scrollbarType: "none",
      children: [(0, a.jsx)(T.default, {
        user: t,
        pendingAvatarDecoration: v,
        selectedAvatarDecorationRef: b,
        onSelect: e => {
          L(e), null != e && M(e)
        },
        onOpenShop: F
      }), (0, a.jsx)(g.default, {
        className: N.modalPreview,
        user: t,
        avatarDecorationOverride: v
      })]
    }), (0, a.jsxs)(s.ModalFooter, {
      className: N.modalFooter,
      children: [(() => {
        let e = null != y && (!(0, d.isPremiumCollectiblesPurchase)(y) || x);
        if (e || null === v) return (0, a.jsx)(s.Button, {
          onClick: O,
          disabled: U,
          children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = x || !(0, d.isPremiumCollectiblesProduct)(R);
        return r ? (0, a.jsx)(s.Button, {
          className: N.modalFooterShopButton,
          onClick: F,
          children: P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, a.jsx)(E.default, {
          subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
          buttonText: C.default.isPremium(t) ? P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })(), (0, a.jsx)(s.Button, {
        look: s.Button.Looks.LINK,
        color: s.Button.Colors.PRIMARY,
        onClick: i,
        children: P.default.Messages.CANCEL
      })]
    })]
  })
}

function R(e) {
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
    purchases: g,
    isFetchingCategories: T,
    isFetchingPurchases: A
  } = (0, m.default)(), P = T || A && 0 === g.size;
  return n.useEffect(() => {
    _.default.track(v.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: C
    })
  }, [C]), n.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...I.values()],
      itemTypes: [u.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [I]), null == E ? null : (0, a.jsx)(S, {
    children: (0, a.jsx)(s.ModalRoot, {
      transitionState: t,
      className: N.modal,
      size: P ? s.ModalSize.DYNAMIC : s.ModalSize.MEDIUM,
      children: P ? (0, a.jsx)(s.Spinner, {
        className: N.spinner,
        type: s.Spinner.Type.SPINNING_CIRCLE
      }) : (0, a.jsx)(L, {
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