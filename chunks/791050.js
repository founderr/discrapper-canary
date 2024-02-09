"use strict";
r.r(t), r.d(t, {
  default: function() {
    return M
  }
}), r("222007");
var n = r("37983"),
  a = r("884691"),
  i = r("265586"),
  s = r("446674"),
  u = r("77078"),
  o = r("812204"),
  l = r("685665"),
  c = r("21526"),
  d = r("491232"),
  E = r("984002"),
  f = r("235898"),
  _ = r("170313"),
  A = r("635956"),
  C = r("91653"),
  p = r("697218"),
  I = r("599110"),
  m = r("719923"),
  T = r("234251"),
  S = r("659117"),
  N = r("765221"),
  R = r("49111"),
  g = r("646718"),
  O = r("782340"),
  h = r("705057");

function v(e) {
  let {
    user: t,
    categories: r,
    analyticsLocations: i,
    onClose: s,
    initialSelectedDecoration: l,
    isTryItOutFlow: f
  } = e, {
    pendingAvatarDecoration: p,
    setPendingAvatarDecoration: I
  } = (0, C.default)({
    analyticsLocations: i,
    isTryItOut: f
  }), [R, v] = a.useState(() => {
    var e;
    if (null != l) return l;
    if (void 0 !== p) return p;
    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
    let n = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = n.find(e => (0, T.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
  }), {
    product: M,
    purchase: D
  } = (0, E.default)(null == R ? void 0 : R.skuId), x = m.default.canUseCollectibles(t), b = a.useRef(null), P = (0, _.default)(i), L = (0, T.isEqualAvatarDecoration)(R, void 0 === p ? null == t ? void 0 : t.avatarDecoration : p), H = () => {
    I(R), s()
  }, U = a.useCallback(() => {
    s(), (0, c.openCollectiblesShop)({
      analyticsLocations: i,
      analyticsSource: o.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != R ? R.skuId : void 0
    })
  }, [i, s, R]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(u.ModalHeader, {
      separator: !1,
      className: h.modalHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        children: O.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, n.jsx)(u.ModalCloseButton, {
        className: h.modalCloseButton,
        onClick: s
      })]
    }), (0, n.jsxs)(u.ModalContent, {
      className: h.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(N.default, {
        user: t,
        pendingAvatarDecoration: R,
        selectedAvatarDecorationRef: b,
        onSelect: e => {
          v(e), null != e && P(e)
        },
        onOpenShop: U
      }), (0, n.jsx)(S.default, {
        className: h.modalPreview,
        user: t,
        avatarDecorationOverride: R
      })]
    }), (0, n.jsxs)(u.ModalFooter, {
      className: h.modalFooter,
      children: [(() => {
        let e = null != D && (!(0, d.isPremiumCollectiblesPurchase)(D) || x);
        if (e || null === R) return (0, n.jsx)(u.Button, {
          onClick: H,
          disabled: L,
          children: O.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = x || !(0, d.isPremiumCollectiblesProduct)(M);
        return r ? (0, n.jsx)(u.Button, {
          className: h.modalFooterShopButton,
          onClick: U,
          children: O.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, n.jsx)(A.default, {
          subscriptionTier: g.PremiumSubscriptionSKUs.TIER_2,
          buttonText: m.default.isPremium(t) ? O.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : O.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })(), (0, n.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: s,
        children: O.default.Messages.CANCEL
      })]
    })]
  })
}

function M(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: d,
    initialSelectedDecoration: E,
    isTryItOutFlow: _
  } = e, A = (0, s.useStateFromStores)([p.default], () => p.default.getCurrentUser()), {
    AnalyticsLocationProvider: C,
    analyticsLocations: m
  } = (0, l.default)(r, o.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: T,
    purchases: S,
    isFetchingCategories: N,
    isFetchingPurchases: g
  } = (0, f.default)(), O = N || g && 0 === S.size;
  return a.useEffect(() => {
    I.default.track(R.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: m
    })
  }, [m]), a.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...T.values()],
      itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [T]), null == A ? null : (0, n.jsx)(C, {
    children: (0, n.jsx)(u.ModalRoot, {
      transitionState: t,
      className: h.modal,
      size: O ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
      children: O ? (0, n.jsx)(u.Spinner, {
        className: h.spinner,
        type: u.Spinner.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(v, {
        user: A,
        categories: T,
        analyticsLocations: m,
        initialSelectedDecoration: E,
        onClose: d,
        isTryItOutFlow: _
      })
    })
  })
}