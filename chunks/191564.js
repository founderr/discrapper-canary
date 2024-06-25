s.r(n), s.d(n, {
  default: function() {
    return S
  }
}), s(47120);
var l = s(735250),
  t = s(470079),
  i = s(979554),
  r = s(442837),
  a = s(481060),
  o = s(100527),
  c = s(906732),
  u = s(335131),
  d = s(884697),
  E = s(449217),
  m = s(566111),
  f = s(197115),
  h = s(150039),
  p = s(594174),
  v = s(626135),
  I = s(74538),
  g = s(934261),
  C = s(52268),
  _ = s(981631),
  Z = s(474936),
  P = s(689938),
  x = s(408156);

function A(e) {
  let {
    user: n,
    product: s,
    purchase: i,
    onApply: r,
    onClose: c,
    disableApplyButton: E,
    canUseCollectibles: m,
    selectedProfileEffectId: h,
    selectedProfileEffectItem: p,
    analyticsLocations: v
  } = e, g = t.useCallback(() => {
    c(), (0, u.mK)({
      analyticsLocations: v,
      analyticsSource: o.Z.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != p ? p.skuId : void 0
    })
  }, [c, v, p]);
  return (0, l.jsx)(a.ModalFooter, {
    className: x.modalFooter,
    children: (0, l.jsxs)("div", {
      className: x.buttonsRight,
      children: [(0, l.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        onClick: c,
        children: P.Z.Messages.CANCEL
      }), null != i && (!(0, d.qS)(i) || m) || null === h ? (0, l.jsx)(a.Button, {
        onClick: r,
        disabled: E,
        children: P.Z.Messages.AVATAR_DECORATION_MODAL_APPLY
      }) : m || !(0, d.G1)(s) ? (0, l.jsx)(a.Button, {
        className: x.__invalid_modalFooterShopButton,
        onClick: g,
        children: P.Z.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
      }) : (0, l.jsx)(f.Z, {
        subscriptionTier: Z.Si.TIER_2,
        buttonText: I.ZP.isPremium(n) ? P.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
      })]
    })
  })
}

function T(e) {
  let {
    user: n,
    guild: s,
    categories: i,
    purchases: r,
    onClose: o,
    initialSelectedProfileEffectId: c,
    currentSavedEffectId: u,
    analyticsLocations: m
  } = e, {
    pendingProfileEffectId: f
  } = (0, h.bd)(s), [p, v] = t.useMemo(() => {
    let e = (0, d.bl)(i, r);
    return [e.purchased, e.shopPreviews]
  }, [i, r]), [_, Z] = t.useState(() => null != c ? c : void 0 !== f ? f : null == u ? null : null != u ? u : null), [T, S] = t.useMemo(() => {
    var e;
    let n = p.find(e => (null == e ? void 0 : e.id) === _),
      s = null != n || null === _;
    return [null !== (e = null != n ? n : v.find(e => (null == e ? void 0 : e.id) === _)) && void 0 !== e ? e : null, s]
  }, [_, p, v]), {
    product: N,
    purchase: j
  } = (0, E.Z)(null == T ? void 0 : T.skuId), R = t.useRef(null), M = I.ZP.canUseCollectibles(n), O = _ === (void 0 === f ? null != u ? u : null : f), y = t.useCallback(e => {
    Z(e)
  }, [Z]);
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(a.ModalHeader, {
      separator: !1,
      className: x.modalHeader,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: P.Z.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, l.jsx)(a.ModalCloseButton, {
        className: x.modalCloseButton,
        onClick: o
      })]
    }), (0, l.jsxs)(a.ModalContent, {
      className: x.modalContent,
      children: [(0, l.jsx)(C.Z, {
        user: n,
        guild: s,
        pendingProfileEffect: _,
        selectedProfileEffectRef: R,
        onSelect: y,
        onClose: o
      }), (0, l.jsx)(g.Z, {
        user: n,
        canApplySelectedChange: S,
        pendingProfileEffectRecord: T,
        product: N,
        purchase: j,
        guild: s
      })]
    }), (0, l.jsx)(A, {
      user: n,
      onApply: () => {
        (0, h.s6)(_, u, s), o()
      },
      onClose: o,
      product: N,
      purchase: j,
      canUseCollectibles: M,
      selectedProfileEffectId: _,
      selectedProfileEffectItem: T,
      disableApplyButton: O,
      analyticsLocations: m
    })]
  })
}

function S(e) {
  let {
    transitionState: n,
    analyticsLocations: s,
    initialSelectedEffectId: d,
    guild: E,
    onClose: f
  } = e, {
    isFetching: I,
    categories: g,
    purchases: C
  } = (0, m.Z)(), Z = (0, r.e7)([p.default], () => p.default.getCurrentUser()), {
    analyticsLocations: P
  } = (0, c.ZP)(s, o.Z.EDIT_PROFILE_EFFECT_MODAL), A = (0, h.Kg)(Z, E);
  return t.useEffect(() => {
    v.default.track(_.rMx.OPEN_MODAL, {
      type: _.jXE.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: P
    })
  }, [P]), t.useEffect(() => () => {
    (0, u.K$)({
      categories: [...g.values()],
      itemTypes: [i.Z.PROFILE_EFFECT]
    })
  }, [g]), (0, l.jsx)(c.Gt, {
    value: P,
    children: (0, l.jsx)(a.ModalRoot, {
      transitionState: n,
      className: x.modal,
      size: I ? a.ModalSize.DYNAMIC : a.ModalSize.MEDIUM,
      children: I ? (0, l.jsx)(a.Spinner, {
        className: x.spinner,
        type: a.Spinner.Type.SPINNING_CIRCLE
      }) : (0, l.jsx)(T, {
        user: Z,
        guild: E,
        categories: g,
        purchases: C,
        initialSelectedProfileEffectId: d,
        currentSavedEffectId: A,
        onClose: f,
        analyticsLocations: P
      })
    })
  })
}