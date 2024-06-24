n.d(t, {
  Z: function() {
    return h
  }
}), n(789020);
var r = n(735250),
  a = n(470079),
  s = n(131388),
  l = n(607070),
  i = n(745510),
  o = n(171246),
  u = n(689011),
  c = n(931905),
  d = n(598),
  I = n(409813),
  _ = n(586585),
  E = n(456251),
  C = n(614277),
  N = n(698708),
  A = n(750143),
  O = n(689938);

function h(e) {
  var t, n;
  let h, S, {
      showBenefits: T,
      handleClose: f,
      onSubscriptionConfirmation: P
    } = e,
    {
      updatedSubscription: p,
      readySlideId: R,
      selectedSku: m,
      selectedStoreListing: L,
      application: g
    } = (0, d.usePaymentContext)(),
    M = (0, s.Z)(A.i),
    {
      createMultipleConfettiAt: b
    } = a.useContext(i.h),
    v = null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : "",
    Z = () => {
      f(), null == P || P()
    },
    x = R === I.h8.CONFIRM,
    U = (0, o.KW)(null !== (n = null == m ? void 0 : m.flags) && void 0 !== n ? n : 0),
    B = null != L && L.benefits.length > 0 ? O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: L.benefits.length
    }) : null;
  return T ? M ? h = (0, r.jsx)(c.h, {
    title: O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: v
    }),
    subtitle: null != L && L.benefits.length > 0 ? O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: B
    }) : null,
    onConfirm: Z,
    confirmCta: O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (h = null != L && null != g ? (0, r.jsx)(u.Oc, {
    icon: L.thumbnail,
    storeListingBenefits: L.benefits,
    application: g,
    title: O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: v
    }),
    subtitle: O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: U ? O.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == g ? void 0 : g.name
    }) : O.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: v
    })
  }) : (0, r.jsx)(E.Z, {}), S = (0, r.jsx)(_.Z, {
    onPrimary: Z,
    primaryCTA: _.g.CONTINUE,
    primaryText: O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : h = M ? (0, r.jsx)(c.m, {
    tierName: v,
    onConfirm: Z,
    subscription: p
  }) : (0, r.jsx)(u.xe, {
    tierName: v,
    onConfirm: Z,
    subscription: p
  }), a.useEffect(() => {
    l.Z.useReducedMotion && x && b(window.innerWidth / 2, window.innerHeight / 2)
  }, [b, x]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(C.C3, {
      children: [(0, r.jsx)(N.Z, {}), h]
    }), null != S && (0, r.jsx)(C.O3, {
      children: S
    })]
  })
}