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
  f = r("984002"),
  E = r("235898"),
  _ = r("170313"),
  A = r("635956"),
  I = r("91653"),
  p = r("697218"),
  m = r("599110"),
  C = r("719923"),
  S = r("234251"),
  T = r("659117"),
  N = r("765221"),
  R = r("49111"),
  h = r("646718"),
  v = r("782340"),
  O = r("705057");

function g(e) {
  let {
    user: t,
    categories: r,
    analyticsLocations: i,
    onClose: s,
    initialSelectedDecoration: l,
    isTryItOutFlow: E
  } = e, {
    pendingAvatarDecoration: p,
    setPendingAvatarDecoration: m
  } = (0, I.default)({
    analyticsLocations: i,
    isTryItOut: E
  }), [R, g] = a.useState(() => {
    var e;
    if (null != l) return l;
    if (void 0 !== p) return p;
    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
    let n = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = n.find(e => (0, S.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
  }), {
    product: M,
    purchase: D
  } = (0, f.default)(null == R ? void 0 : R.skuId), x = C.default.canUseCollectibles(t), P = a.useRef(null), b = (0, _.default)(i), L = (0, S.isEqualAvatarDecoration)(R, void 0 === p ? null == t ? void 0 : t.avatarDecoration : p), H = () => {
    m(R), s()
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
      className: O.modalHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        children: v.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, n.jsx)(u.ModalCloseButton, {
        className: O.modalCloseButton,
        onClick: s
      })]
    }), (0, n.jsxs)(u.ModalContent, {
      className: O.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(N.default, {
        user: t,
        pendingAvatarDecoration: R,
        selectedAvatarDecorationRef: P,
        onSelect: e => {
          g(e), null != e && b(e)
        },
        onOpenShop: U
      }), (0, n.jsx)(T.default, {
        className: O.modalPreview,
        user: t,
        avatarDecorationOverride: R
      })]
    }), (0, n.jsxs)(u.ModalFooter, {
      className: O.modalFooter,
      children: [(() => {
        let e = null != D && (!(0, d.isPremiumCollectiblesPurchase)(D) || x);
        if (e || null === R) return (0, n.jsx)(u.Button, {
          onClick: H,
          disabled: L,
          children: v.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = x || !(0, d.isPremiumCollectiblesProduct)(M);
        return r ? (0, n.jsx)(u.Button, {
          className: O.modalFooterShopButton,
          onClick: U,
          children: v.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, n.jsx)(A.default, {
          subscriptionTier: h.PremiumSubscriptionSKUs.TIER_2,
          buttonText: C.default.isPremium(t) ? v.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : v.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })(), (0, n.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: s,
        children: v.default.Messages.CANCEL
      })]
    })]
  })
}

function M(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: d,
    initialSelectedDecoration: f,
    isTryItOutFlow: _
  } = e, A = (0, s.useStateFromStores)([p.default], () => p.default.getCurrentUser()), {
    AnalyticsLocationProvider: I,
    analyticsLocations: C
  } = (0, l.default)(r, o.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: S,
    purchases: T,
    isFetchingCategories: N,
    isFetchingPurchases: h
  } = (0, E.default)(), v = N || h && 0 === T.size;
  return a.useEffect(() => {
    m.default.track(R.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: C
    })
  }, [C]), a.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...S.values()],
      itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [S]), null == A ? null : (0, n.jsx)(I, {
    children: (0, n.jsx)(u.ModalRoot, {
      transitionState: t,
      className: O.modal,
      size: v ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
      children: v ? (0, n.jsx)(u.Spinner, {
        className: O.spinner,
        type: u.Spinner.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(g, {
        user: A,
        categories: S,
        analyticsLocations: C,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: _
      })
    })
  })
}