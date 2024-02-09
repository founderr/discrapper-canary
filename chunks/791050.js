"use strict";
r.r(t), r.d(t, {
  default: function() {
    return R
  }
}), r("222007");
var a = r("37983"),
  s = r("884691"),
  n = r("265586"),
  i = r("446674"),
  l = r("77078"),
  u = r("812204"),
  o = r("685665"),
  c = r("21526"),
  d = r("491232"),
  f = r("984002"),
  E = r("235898"),
  m = r("170313"),
  C = r("635956"),
  p = r("91653"),
  _ = r("697218"),
  S = r("599110"),
  A = r("719923"),
  g = r("234251"),
  h = r("659117"),
  v = r("765221"),
  I = r("49111"),
  N = r("646718"),
  T = r("782340"),
  x = r("705057");

function O(e) {
  let {
    user: t,
    categories: r,
    analyticsLocations: n,
    onClose: i,
    initialSelectedDecoration: o,
    isTryItOutFlow: E
  } = e, {
    pendingAvatarDecoration: _,
    setPendingAvatarDecoration: S
  } = (0, p.default)({
    analyticsLocations: n,
    isTryItOut: E
  }), [I, O] = s.useState(() => {
    var e;
    if (null != o) return o;
    if (void 0 !== _) return _;
    if ((null == t ? void 0 : t.avatarDecoration) == null || 0 === r.size) return null;
    let a = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = a.find(e => (0, g.isEqualAvatarDecoration)(e, t.avatarDecoration))) && void 0 !== e ? e : null
  }), {
    product: R,
    purchase: M
  } = (0, f.default)(null == I ? void 0 : I.skuId), D = A.default.canUseCollectibles(t), b = s.useRef(null), P = (0, m.default)(n), L = (0, g.isEqualAvatarDecoration)(I, void 0 === _ ? null == t ? void 0 : t.avatarDecoration : _), j = () => {
    S(I), i()
  }, U = s.useCallback(() => {
    i(), (0, c.openCollectiblesShop)({
      analyticsLocations: n,
      analyticsSource: u.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != I ? I.skuId : void 0
    })
  }, [n, i, I]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.ModalHeader, {
      separator: !1,
      className: x.modalHeader,
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: T.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, a.jsx)(l.ModalCloseButton, {
        className: x.modalCloseButton,
        onClick: i
      })]
    }), (0, a.jsxs)(l.ModalContent, {
      className: x.modalContent,
      scrollbarType: "none",
      children: [(0, a.jsx)(v.default, {
        user: t,
        pendingAvatarDecoration: I,
        selectedAvatarDecorationRef: b,
        onSelect: e => {
          O(e), null != e && P(e)
        },
        onOpenShop: U
      }), (0, a.jsx)(h.default, {
        className: x.modalPreview,
        user: t,
        avatarDecorationOverride: I
      })]
    }), (0, a.jsxs)(l.ModalFooter, {
      className: x.modalFooter,
      children: [(() => {
        let e = null != M && (!(0, d.isPremiumCollectiblesPurchase)(M) || D);
        if (e || null === I) return (0, a.jsx)(l.Button, {
          onClick: j,
          disabled: L,
          children: T.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = D || !(0, d.isPremiumCollectiblesProduct)(R);
        return r ? (0, a.jsx)(l.Button, {
          className: x.modalFooterShopButton,
          onClick: U,
          children: T.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, a.jsx)(C.default, {
          subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
          buttonText: A.default.isPremium(t) ? T.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : T.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })(), (0, a.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: i,
        children: T.default.Messages.CANCEL
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
    isTryItOutFlow: m
  } = e, C = (0, i.useStateFromStores)([_.default], () => _.default.getCurrentUser()), {
    AnalyticsLocationProvider: p,
    analyticsLocations: A
  } = (0, o.default)(r, u.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: g,
    purchases: h,
    isFetchingCategories: v,
    isFetchingPurchases: N
  } = (0, E.default)(), T = v || N && 0 === h.size;
  return s.useEffect(() => {
    S.default.track(I.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: A
    })
  }, [A]), s.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...g.values()],
      itemTypes: [n.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [g]), null == C ? null : (0, a.jsx)(p, {
    children: (0, a.jsx)(l.ModalRoot, {
      transitionState: t,
      className: x.modal,
      size: T ? l.ModalSize.DYNAMIC : l.ModalSize.MEDIUM,
      children: T ? (0, a.jsx)(l.Spinner, {
        className: x.spinner,
        type: l.Spinner.Type.SPINNING_CIRCLE
      }) : (0, a.jsx)(O, {
        user: C,
        categories: g,
        analyticsLocations: A,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: m
      })
    })
  })
}