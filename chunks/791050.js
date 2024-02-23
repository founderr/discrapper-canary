"use strict";
r.r(t), r.d(t, {
  default: function() {
    return L
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
  E = r("170313"),
  p = r("635956"),
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
    analyticsLocations: u,
    onClose: i,
    initialSelectedDecoration: o,
    isTryItOutFlow: m,
    guild: h
  } = e, {
    pendingAvatarDecoration: _,
    setPendingAvatarDecoration: v,
    savedAvatarDecoration: R
  } = (0, S.default)({
    analyticsLocations: u,
    isTryItOut: m,
    guildId: null == h ? void 0 : h.id
  }), [L, y] = n.useState(() => {
    var e;
    if (null != o) return o;
    if (void 0 !== _) return _;
    if (null == R || 0 === r.size) return null;
    let t = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = t.find(e => (0, I.isEqualAvatarDecoration)(e, R))) && void 0 !== e ? e : null
  }), {
    product: b,
    purchase: x
  } = (0, f.default)(null == L ? void 0 : L.skuId), M = C.default.canUseCollectibles(t), U = n.useRef(null), O = (0, E.default)(u), F = (0, I.isEqualAvatarDecoration)(L, void 0 === _ ? R : _), D = () => {
    v(L), i()
  }, k = n.useCallback(() => {
    i(), (0, c.openCollectiblesShop)({
      analyticsLocations: u,
      analyticsSource: l.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != L ? L.skuId : void 0
    })
  }, [u, i, L]);
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
        guild: h,
        pendingAvatarDecoration: L,
        selectedAvatarDecorationRef: U,
        onSelect: e => {
          y(e), null != e && O(e)
        },
        onOpenShop: k
      }), (0, a.jsx)(g.default, {
        className: N.modalPreview,
        user: t,
        avatarDecorationOverride: L
      })]
    }), (0, a.jsxs)(s.ModalFooter, {
      className: N.modalFooter,
      children: [(() => {
        let e = null != x && (!(0, d.isPremiumCollectiblesPurchase)(x) || M);
        if (e || null === L) return (0, a.jsx)(s.Button, {
          onClick: D,
          disabled: F,
          children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = M || !(0, d.isPremiumCollectiblesProduct)(b);
        return r ? (0, a.jsx)(s.Button, {
          className: N.modalFooterShopButton,
          onClick: k,
          children: P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, a.jsx)(p.default, {
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

function L(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: d,
    initialSelectedDecoration: f,
    isTryItOutFlow: E,
    guild: p
  } = e, S = (0, i.useStateFromStores)([h.default], () => h.default.getCurrentUser()), {
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
    children: (0, a.jsx)(s.ModalRoot, {
      transitionState: t,
      className: N.modal,
      size: L ? s.ModalSize.DYNAMIC : s.ModalSize.MEDIUM,
      children: L ? (0, a.jsx)(s.Spinner, {
        className: N.spinner,
        type: s.Spinner.Type.SPINNING_CIRCLE
      }) : (0, a.jsx)(R, {
        user: S,
        guild: p,
        categories: g,
        analyticsLocations: I,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: E
      })
    })
  })
}