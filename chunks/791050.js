"use strict";
r.r(t), r.d(t, {
  default: function() {
    return y
  }
}), r("222007");
var a = r("37983"),
  n = r("884691"),
  u = r("265586"),
  i = r("446674"),
  l = r("77078"),
  s = r("812204"),
  o = r("685665"),
  c = r("21526"),
  d = r("491232"),
  f = r("984002"),
  E = r("235898"),
  m = r("170313"),
  p = r("635956"),
  S = r("91653"),
  C = r("697218"),
  h = r("599110"),
  I = r("719923"),
  _ = r("234251"),
  g = r("659117"),
  T = r("765221"),
  v = r("49111"),
  A = r("646718"),
  P = r("782340"),
  R = r("446812");

function L(e) {
  let {
    user: t,
    categories: r,
    analyticsLocations: u,
    onClose: i,
    initialSelectedDecoration: o,
    isTryItOutFlow: E,
    guild: C
  } = e, {
    pendingAvatarDecoration: h,
    setPendingAvatarDecoration: v,
    savedAvatarDecoration: L
  } = (0, S.default)({
    analyticsLocations: u,
    isTryItOut: E,
    guildId: null == C ? void 0 : C.id
  }), [y, N] = n.useState(() => {
    var e;
    if (null != o) return o;
    if (void 0 !== h) return h;
    if (null == L || 0 === r.size) return null;
    let t = (0, d.getAvatarDecorationsFromCategories)(r);
    return null !== (e = t.find(e => (0, _.isEqualAvatarDecoration)(e, L))) && void 0 !== e ? e : null
  }), {
    product: O,
    purchase: b
  } = (0, f.default)(null == y ? void 0 : y.skuId), F = I.default.canUseCollectibles(t), M = n.useRef(null), U = (0, m.default)(u), x = (0, _.isEqualAvatarDecoration)(y, void 0 === h ? L : h), D = () => {
    v(y), i()
  }, k = n.useCallback(() => {
    i(), (0, c.openCollectiblesShop)({
      analyticsLocations: u,
      analyticsSource: s.default.EDIT_AVATAR_DECORATION_MODAL,
      initialProductSkuId: null != y ? y.skuId : void 0
    })
  }, [u, i, y]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.ModalHeader, {
      separator: !1,
      className: R.modalHeader,
      children: [(0, a.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        children: P.default.Messages.USER_SETTINGS_CHANGE_AVATAR_DECORATION
      }), (0, a.jsx)(l.ModalCloseButton, {
        className: R.modalCloseButton,
        onClick: i
      })]
    }), (0, a.jsxs)(l.ModalContent, {
      className: R.modalContent,
      scrollbarType: "none",
      children: [(0, a.jsx)(T.default, {
        user: t,
        guild: C,
        pendingAvatarDecoration: y,
        selectedAvatarDecorationRef: M,
        onSelect: e => {
          N(e), null != e && U(e)
        },
        onOpenShop: k
      }), (0, a.jsx)(g.default, {
        className: R.modalPreview,
        user: t,
        avatarDecorationOverride: y
      })]
    }), (0, a.jsxs)(l.ModalFooter, {
      className: R.modalFooter,
      children: [(() => {
        let e = null != b && (!(0, d.isPremiumCollectiblesPurchase)(b) || F);
        if (e || null === y) return (0, a.jsx)(l.Button, {
          onClick: D,
          disabled: x,
          children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = F || !(0, d.isPremiumCollectiblesProduct)(O);
        return r ? (0, a.jsx)(l.Button, {
          className: R.modalFooterShopButton,
          onClick: k,
          children: P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, a.jsx)(p.default, {
          subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
          buttonText: I.default.isPremium(t) ? P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })(), (0, a.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: i,
        children: P.default.Messages.CANCEL
      })]
    })]
  })
}

function y(e) {
  let {
    transitionState: t,
    analyticsLocations: r,
    onClose: d,
    initialSelectedDecoration: f,
    isTryItOutFlow: m,
    guild: p
  } = e, S = (0, i.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
    AnalyticsLocationProvider: I,
    analyticsLocations: _
  } = (0, o.default)(r, s.default.EDIT_AVATAR_DECORATION_MODAL), {
    categories: g,
    purchases: T,
    isFetchingCategories: A,
    isFetchingPurchases: P
  } = (0, E.default)(), y = A || P && 0 === T.size;
  return n.useEffect(() => {
    h.default.track(v.AnalyticEvents.OPEN_MODAL, {
      type: "Edit Avatar Decoration Modal",
      location_stack: _
    })
  }, [_]), n.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...g.values()],
      itemTypes: [u.CollectiblesItemType.AVATAR_DECORATION]
    })
  }, [g]), null == S ? null : (0, a.jsx)(I, {
    children: (0, a.jsx)(l.ModalRoot, {
      transitionState: t,
      className: R.modal,
      size: y ? l.ModalSize.DYNAMIC : l.ModalSize.MEDIUM,
      children: y ? (0, a.jsx)(l.Spinner, {
        className: R.spinner,
        type: l.Spinner.Type.SPINNING_CIRCLE
      }) : (0, a.jsx)(L, {
        user: S,
        guild: p,
        categories: g,
        analyticsLocations: _,
        initialSelectedDecoration: f,
        onClose: d,
        isTryItOutFlow: m
      })
    })
  })
}