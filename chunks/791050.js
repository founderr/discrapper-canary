"use strict";
r.r(t), r.d(t, {
  default: function() {
    return O
  }
}), r("222007");
var a = r("37983"),
  n = r("884691"),
  s = r("265586"),
  i = r("446674"),
  u = r("77078"),
  o = r("812204"),
  l = r("685665"),
  c = r("21526"),
  d = r("491232"),
  f = r("984002"),
  E = r("235898"),
  m = r("170313"),
  p = r("635956"),
  C = r("91653"),
  _ = r("697218"),
  g = r("599110"),
  A = r("719923"),
  S = r("234251"),
  h = r("659117"),
  v = r("765221"),
  I = r("49111"),
  N = r("646718"),
  T = r("782340"),
  x = r("705057");

function R(e) {
  let {
    user: t,
    categories: r,
    analyticsLocations: s,
    onClose: i,
    initialSelectedDecoration: l,
    isTryItOutFlow: E
  } = e, {
    pendingAvatarDecoration: _,
    setPendingAvatarDecoration: g
  } = (0, C.default)({
    analyticsLocations: s,
    isTryItOut: E
  }), [I, R] = n.useState(() => {
    var e;
    if (null != l) return l;
    if (void 0 !== _) return _;
    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
    let a = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = a.find(e => (0, S.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
  }), {
    product: O,
    purchase: M
  } = (0, f.default)(null == I ? void 0 : I.skuId), b = A.default.canUseCollectibles(t), D = n.useRef(null), P = (0, m.default)(s), L = (0, S.isEqualAvatarDecoration)(I, void 0 === _ ? null == t ? void 0 : t.avatarDecoration : _), j = () => {
    g(I), i()
  }, U = n.useCallback(() => {
    i(), (0, c.openCollectiblesShop)({
      analyticsLocations: s,
      analyticsSource: o.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != I ? I.skuId : void 0
    })
  }, [s, i, I]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.ModalHeader, {
      separator: !1,
      className: x.modalHeader,
      children: [(0, a.jsx)(u.Heading, {
        variant: "heading-lg/semibold",
        children: T.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, a.jsx)(u.ModalCloseButton, {
        className: x.modalCloseButton,
        onClick: i
      })]
    }), (0, a.jsxs)(u.ModalContent, {
      className: x.modalContent,
      scrollbarType: "none",
      children: [(0, a.jsx)(v.default, {
        user: t,
        pendingAvatarDecoration: I,
        selectedAvatarDecorationRef: D,
        onSelect: e => {
          R(e), null != e && P(e)
        },
        onOpenShop: U
      }), (0, a.jsx)(h.default, {
        className: x.modalPreview,
        user: t,
        avatarDecorationOverride: I
      })]
    }), (0, a.jsxs)(u.ModalFooter, {
      className: x.modalFooter,
      children: [(() => {
        let e = null != M && (!(0, d.isPremiumCollectiblesPurchase)(M) || b);
        if (e || null === I) return (0, a.jsx)(u.Button, {
          onClick: j,
          disabled: L,
          children: T.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = b || !(0, d.isPremiumCollectiblesProduct)(O);
        return r ? (0, a.jsx)(u.Button, {
          className: x.modalFooterShopButton,
          onClick: U,
          children: T.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, a.jsx)(p.default, {
          subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
          buttonText: A.default.isPremium(t) ? T.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : T.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })(), (0, a.jsx)(u.Button, {
        look: u.Button.Looks.LINK,
        color: u.Button.Colors.PRIMARY,
        onClick: i,
        children: T.default.Messages.CANCEL
      })]
    })]
  })
}

function O(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: d,
    initialSelectedDecoration: f,
    isTryItOutFlow: m
  } = e, p = (0, i.useStateFromStores)([_.default], () => _.default.getCurrentUser()), {
    AnalyticsLocationProvider: C,
    analyticsLocations: A
  } = (0, l.default)(r, o.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: S,
    purchases: h,
    isFetchingCategories: v,
    isFetchingPurchases: N
  } = (0, E.default)(), T = v || N && 0 === h.size;
  return n.useEffect(() => {
    g.default.track(I.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: A
    })
  }, [A]), n.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...S.values()],
      itemTypes: [s.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [S]), null == p ? null : (0, a.jsx)(C, {
    children: (0, a.jsx)(u.ModalRoot, {
      transitionState: t,
      className: x.modal,
      size: T ? u.ModalSize.DYNAMIC : u.ModalSize.MEDIUM,
      children: T ? (0, a.jsx)(u.Spinner, {
        className: x.spinner,
        type: u.Spinner.Type.SPINNING_CIRCLE
      }) : (0, a.jsx)(R, {
        user: p,
        categories: S,
        analyticsLocations: A,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: m
      })
    })
  })
}