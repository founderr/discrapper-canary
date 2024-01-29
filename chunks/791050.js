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
  S = r("719923"),
  C = r("234251"),
  T = r("659117"),
  h = r("765221"),
  N = r("49111"),
  v = r("646718"),
  R = r("782340"),
  g = r("705057");

function O(e) {
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
  }), [N, O] = a.useState(() => {
    var e;
    if (null != l) return l;
    if (void 0 !== p) return p;
    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
    let n = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = n.find(e => (0, C.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
  }), {
    product: M,
    purchase: x
  } = (0, f.default)(null == N ? void 0 : N.skuId), D = S.default.canUseCollectibles(t), P = a.useRef(null), b = (0, _.default)(i), H = (0, C.isEqualAvatarDecoration)(N, void 0 === p ? null == t ? void 0 : t.avatarDecoration : p), L = () => {
    m(N), s()
  }, y = a.useCallback(() => {
    s(), (0, c.openCollectiblesShop)({
      analyticsLocations: i,
      analyticsSource: o.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != N ? N.skuId : void 0
    })
  }, [i, s, N]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(u.ModalHeader, {
      separator: !1,
      className: g.modalHeader,
      children: [(0, n.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        children: R.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, n.jsx)(u.ModalCloseButton, {
        className: g.modalCloseButton,
        onClick: s
      })]
    }), (0, n.jsxs)(u.ModalContent, {
      className: g.modalContent,
      scrollbarType: "none",
      children: [(0, n.jsx)(h.default, {
        user: t,
        pendingAvatarDecoration: N,
        selectedAvatarDecorationRef: P,
        onSelect: e => {
          O(e), null != e && b(e)
        },
        onOpenShop: y
      }), (0, n.jsx)(T.default, {
        className: g.modalPreview,
        user: t,
        avatarDecorationOverride: N
      })]
    }), (0, n.jsxs)(u.ModalFooter, {
      className: g.modalFooter,
      children: [(() => {
        let e = null != x && (!(0, d.isPremiumCollectiblesPurchase)(x) || D);
        if (e || null === N) return (0, n.jsx)(u.Button, {
          onClick: L,
          disabled: H,
          children: R.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = D || !(0, d.isPremiumCollectiblesProduct)(M);
        return r ? (0, n.jsx)(u.Button, {
          className: g.modalFooterShopButton,
          onClick: y,
          children: R.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, n.jsx)(A.default, {
          subscriptionTier: v.PremiumSubscriptionSKUs.TIER_2,
          buttonText: S.default.isPremium(t) ? R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : R.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
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
  } = e, A = (0, s.useStateFromStores)([p.default], () => p.default.getCurrentUser()), {
    AnalyticsLocationProvider: I,
    analyticsLocations: S
  } = (0, l.default)(r, o.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: C,
    purchases: T,
    isFetchingCategories: h,
    isFetchingPurchases: v
  } = (0, E.default)(), R = h || v && 0 === T.size;
  return a.useEffect(() => {
    m.default.track(N.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: S
    })
  }, [S]), a.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...C.values()],
      itemTypes: [i.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [C]), null == A ? null : (0, n.jsx)(I, {
    children: (0, n.jsx)(u.ModalRoot, {
      transitionState: t,
      className: g.modal,
      size: R ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
      children: R ? (0, n.jsx)(u.Spinner, {
        className: g.spinner,
        type: u.Spinner.Type.SPINNING_CIRCLE
      }) : (0, n.jsx)(O, {
        user: A,
        categories: C,
        analyticsLocations: S,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: _
      })
    })
  })
}