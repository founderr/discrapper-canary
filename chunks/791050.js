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
  p = r("91653"),
  m = r("697218"),
  I = r("599110"),
  C = r("719923"),
  T = r("234251"),
  S = r("659117"),
  g = r("765221"),
  h = r("49111"),
  N = r("646718"),
  R = r("782340"),
  v = r("705057");

function O(e) {
  let {
    user: t,
    categories: r,
    analyticsLocations: i,
    onClose: s,
    initialSelectedDecoration: l,
    isTryItOutFlow: E
  } = e, {
    pendingAvatarDecoration: m,
    setPendingAvatarDecoration: I
  } = (0, p.default)({
    analyticsLocations: i,
    isTryItOut: E
  }), [h, O] = a.useState(() => {
    var e;
    if (null != l) return l;
    if (void 0 !== m) return m;
    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
    let n = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = n.find(e => (0, T.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
  }), {
    product: M,
    purchase: x
  } = (0, f.default)(null == h ? void 0 : h.skuId), D = C.default.canUseCollectibles(t), b = a.useRef(null), P = (0, _.default)(i), H = (0, T.isEqualAvatarDecoration)(h, void 0 === m ? null == t ? void 0 : t.avatarDecoration : m), L = () => {
    I(h), s()
  }, U = a.useCallback(() => {
    s(), (0, c.openCollectiblesShop)({
      analyticsLocations: i,
      analyticsSource: o.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != h ? h.skuId : void 0
    })
  }, [i, s, h]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(u.ModalHeader, {
      separator: !1,
      className: v.modalHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        children: R.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, n.jsx)(u.ModalCloseButton, {
        className: v.modalCloseButton,
        onClick: s
      })]
    }), (0, n.jsxs)(u.ModalContent, {
      className: v.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(g.default, {
        user: t,
        pendingAvatarDecoration: h,
        selectedAvatarDecorationRef: b,
        onSelect: e => {
          O(e), null != e && P(e)
        },
        onOpenShop: U
      }), (0, n.jsx)(S.default, {
        className: v.modalPreview,
        user: t,
        avatarDecorationOverride: h
      })]
    }), (0, n.jsxs)(u.ModalFooter, {
      className: v.modalFooter,
      children: [(() => {
        let e = null != x && (!(0, d.isPremiumCollectiblesPurchase)(x) || D);
        if (e || null === h) return (0, n.jsx)(u.Button, {
          onClick: L,
          disabled: H,
          children: R.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = D || !(0, d.isPremiumCollectiblesProduct)(M);
        return r ? (0, n.jsx)(u.Button, {
          className: v.modalFooterShopButton,
          onClick: U,
          children: R.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, n.jsx)(A.default, {
          subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
          buttonText: C.default.isPremium(t) ? R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })(), (0, n.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: s,
        children: R.default.Messages.CANCEL
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
  } = e, A = (0, s.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
    AnalyticsLocationProvider: p,
    analyticsLocations: C
  } = (0, l.default)(r, o.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: T,
    purchases: S,
    isFetchingCategories: g,
    isFetchingPurchases: N
  } = (0, E.default)(), R = g || N && 0 === S.size;
  return a.useEffect(() => {
    I.default.track(h.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: C
    })
  }, [C]), a.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...T.values()],
      itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [T]), null == A ? null : (0, n.jsx)(p, {
    children: (0, n.jsx)(u.ModalRoot, {
      transitionState: t,
      className: v.modal,
      size: R ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
      children: R ? (0, n.jsx)(u.Spinner, {
        className: v.spinner,
        type: u.Spinner.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(O, {
        user: A,
        categories: T,
        analyticsLocations: C,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: _
      })
    })
  })
}