"use strict";
r.r(t), r.d(t, {
  default: function() {
    return L
  }
}), r("222007");
var a = r("37983"),
  n = r("884691"),
  u = r("265586"),
  s = r("446674"),
  i = r("77078"),
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

function R(e) {
  let {
    user: t,
    categories: r,
    purchases: u,
    analyticsLocations: s,
    onClose: o,
    initialSelectedDecoration: m,
    isTryItOutFlow: h,
    guild: _
  } = e, {
    pendingAvatarDecoration: v,
    setPendingAvatarDecoration: R,
    savedAvatarDecoration: L
  } = (0, S.default)({
    analyticsLocations: s,
    isTryItOut: h,
    guildId: null == _ ? void 0 : _.id
  }), [y, b] = n.useState(() => {
    var e;
    if (null != m) return m;
    if (void 0 !== v) return v;
    if (null == L || 0 === r.size) return null;
    let t = (0, d.getAvatarDecorations)(u, r);
    return null !== (e = t.find(e => (0, I.isEqualAvatarDecoration)(e, L))) && void 0 !== e ? e : null
  }), {
    product: x,
    purchase: M
  } = (0, f.default)(null == y ? void 0 : y.skuId), U = C.default.canUseCollectibles(t), O = n.useRef(null), F = (0, p.default)(s), D = (0, I.isEqualAvatarDecoration)(y, void 0 === v ? L : v), k = () => {
    R(y), o()
  }, H = n.useCallback(() => {
    o(), (0, c.openCollectiblesShop)({
      analyticsLocations: s,
      analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != y ? y.skuId : void 0
    })
  }, [s, o, y]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(i.ModalHeader, {
      separator: !1,
      className: N.modalHeader,
      children: [(0, a.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: P.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, a.jsx)(i.ModalCloseButton, {
        className: N.modalCloseButton,
        onClick: o
      })]
    }), (0, a.jsxs)(i.ModalContent, {
      className: N.modalContent,
      scrollbarType: "none",
      children: [(0, a.jsx)(T.default, {
        user: t,
        guild: _,
        pendingAvatarDecoration: y,
        selectedAvatarDecorationRef: O,
        onSelect: e => {
          b(e), null != e && F(e)
        },
        onOpenShop: H
      }), (0, a.jsx)(g.default, {
        className: N.modalPreview,
        user: t,
        avatarDecorationOverride: y
      })]
    }), (0, a.jsxs)(i.ModalFooter, {
      className: N.modalFooter,
      children: [(() => {
        let e = null != M && (!(0, d.isPremiumCollectiblesPurchase)(M) || U);
        if (e || null === y) return (0, a.jsx)(i.Button, {
          onClick: k,
          disabled: D,
          children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = U || !(0, d.isPremiumCollectiblesProduct)(x);
        return r ? (0, a.jsx)(i.Button, {
          className: N.modalFooterShopButton,
          onClick: H,
          children: P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, a.jsx)(E.default, {
          subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
          buttonText: C.default.isPremium(t) ? P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })(), (0, a.jsx)(i.Button, {
        look: i.Button.Looks.LINK,
        color: i.Button.Colors.PRIMARY,
        onClick: o,
        children: P.default.Messages.CANCEL
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
    isTryItOutFlow: p,
    guild: E
  } = e, S = (0, s.useStateFromStores)([h.default], () => h.default.getCurrentUser()), {
    AnalyticsLocationProvider: C,
    analyticsLocations: I
  } = (0, o.default)(r, l.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: g,
    purchases: T,
    isFetchingCategories: A,
    isFetchingPurchases: P
  } = (0, m.default)(), L = A || P && 0 === T.size;
  return n.useEffect(() => {
    _.default.track(v.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: I
    })
  }, [I]), n.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...g.values()],
      itemTypes: [u.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [g]), null == S ? null : (0, a.jsx)(C, {
    children: (0, a.jsx)(i.ModalRoot, {
      transitionState: t,
      className: N.modal,
      size: L ? i.ModalSize.DYNAMIC : i.ModalSize.MEDIUM,
      children: L ? (0, a.jsx)(i.Spinner, {
        className: N.spinner,
        type: i.Spinner.Type.SPINNING_CIRCLE
      }) : (0, a.jsx)(R, {
        user: S,
        guild: E,
        categories: g,
        purchases: T,
        analyticsLocations: I,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: p
      })
    })
  })
}