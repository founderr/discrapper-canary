"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  i = n("265586"),
  r = n("446674"),
  o = n("77078"),
  a = n("812204"),
  u = n("685665"),
  c = n("21526"),
  d = n("491232"),
  f = n("984002"),
  h = n("161009"),
  C = n("635956"),
  v = n("906932"),
  p = n("217513"),
  E = n("790618"),
  m = n("697218"),
  g = n("599110"),
  I = n("719923"),
  L = n("717262"),
  x = n("598854"),
  _ = n("49111"),
  N = n("646718"),
  S = n("782340"),
  M = n("811855");

function A(e) {
  let {
    user: t,
    product: n,
    purchase: i,
    onApply: r,
    onClose: u,
    disableApplyButton: f,
    canUseCollectibles: h,
    selectedProfileEffectId: v,
    selectedProfileEffectItem: p,
    analyticsLocations: E
  } = e, m = l.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: E,
      analyticsSource: a.default.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != p ? p.skuId : void 0
    })
  }, [u, E, p]);
  return (0, s.jsx)(o.ModalFooter, {
    className: M.modalFooter,
    children: (0, s.jsxs)("div", {
      className: M.buttonsRight,
      children: [(0, s.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: u,
        children: S.default.Messages.CANCEL
      }), (() => {
        let e = null != i && (!(0, d.isPremiumCollectiblesPurchase)(i) || h);
        if (e || null === v) return (0, s.jsx)(o.Button, {
          onClick: r,
          disabled: f,
          children: S.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let l = h || !(0, d.isPremiumCollectiblesProduct)(n);
        return l ? (0, s.jsx)(o.Button, {
          className: M.modalFooterShopButton,
          onClick: m,
          children: S.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, s.jsx)(C.default, {
          subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
          buttonText: I.default.isPremium(t) ? S.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : S.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })()]
    })
  })
}

function R(e) {
  let {
    user: t,
    categories: n,
    purchases: i,
    onClose: a,
    initialSelectedProfileEffectId: u,
    currentSavedEffectId: c,
    analyticsLocations: h
  } = e, C = (0, r.useStateFromStores)([E.default], () => E.default.getPendingProfileEffectId()), [p, m] = l.useMemo(() => {
    let e = (0, d.groupProfileEffects)(n, i);
    return [e.purchased, e.shopPreviews]
  }, [n, i]), [g, _] = l.useState(() => null != u ? u : void 0 !== C ? C : null == c ? null : null != c ? c : null), [N, R] = l.useMemo(() => {
    var e;
    let t = p.find(e => (null == e ? void 0 : e.id) === g),
      n = null != t || null === g,
      s = null !== (e = null != t ? t : m.find(e => (null == e ? void 0 : e.id) === g)) && void 0 !== e ? e : null;
    return [s, n]
  }, [g, p, m]), {
    product: T,
    purchase: O
  } = (0, f.default)(null == N ? void 0 : N.skuId), P = l.useRef(null), w = I.default.canUseCollectibles(t), j = g === (void 0 === C ? null != c ? c : null : C), y = l.useCallback(e => {
    _(e)
  }, [_]);
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsxs)(o.ModalHeader, {
      separator: !1,
      className: M.modalHeader,
      children: [(0, s.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: S.default.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, s.jsx)(o.ModalCloseButton, {
        className: M.modalCloseButton,
        onClick: a
      })]
    }), (0, s.jsxs)(o.ModalContent, {
      className: M.modalContent,
      children: [(0, s.jsx)(x.default, {
        user: t,
        pendingProfileEffect: g,
        selectedProfileEffectRef: P,
        onSelect: y,
        onClose: a
      }), (0, s.jsx)(L.default, {
        user: t,
        canApplySelectedChange: R,
        pendingProfileEffectRecord: N,
        product: T,
        purchase: O
      })]
    }), (0, s.jsx)(A, {
      user: t,
      onApply: () => {
        (0, v.setNewPendingProfileEffectId)(g, c), a()
      },
      onClose: a,
      product: T,
      purchase: O,
      canUseCollectibles: w,
      selectedProfileEffectId: g,
      selectedProfileEffectItem: N,
      disableApplyButton: j,
      analyticsLocations: h
    })]
  })
}

function T(e) {
  var t;
  let {
    transitionState: n,
    analyticsLocations: d,
    initialSelectedEffectId: f,
    onClose: C
  } = e, {
    isFetching: v,
    categories: E,
    purchases: I
  } = (0, h.default)(), L = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
    AnalyticsLocationProvider: x,
    analyticsLocations: N
  } = (0, u.default)(d, a.default.EDIT_PROFILE_EFFECT_MODAL), S = (0, p.default)(null !== (t = null == L ? void 0 : L.id) && void 0 !== t ? t : ""), A = null == S ? void 0 : S.profileEffectId;
  return l.useEffect(() => {
    g.default.track(_.AnalyticEvents.OPEN_MODAL, {
      type: _.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: N
    })
  }, [N]), l.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...E.values()],
      itemTypes: [i.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [E]), null == L ? null : (0, s.jsx)(x, {
    children: (0, s.jsx)(o.ModalRoot, {
      transitionState: n,
      size: o.ModalSize.DYNAMIC,
      className: M.modal,
      children: v ? (0, s.jsx)(o.Spinner, {
        className: M.spinner,
        type: o.Spinner.Type.SPINNING_CIRCLE
      }) : (0, s.jsx)(R, {
        user: L,
        categories: E,
        purchases: I,
        initialSelectedProfileEffectId: f,
        currentSavedEffectId: A,
        onClose: C,
        analyticsLocations: N
      })
    })
  })
}