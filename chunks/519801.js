n.d(t, {
  Z: function() {
    return T
  }
}), n(789020);
var r = n(735250),
  s = n(470079),
  a = n(131388),
  l = n(607070),
  i = n(745510),
  u = n(171246),
  o = n(689011),
  c = n(931905),
  d = n(598),
  I = n(409813),
  _ = n(586585),
  E = n(456251),
  A = n(614277),
  N = n(698708),
  C = n(750143),
  O = n(689938);

function T(e) {
  var t, n;
  let T, S, {
      showBenefits: P,
      handleClose: f,
      onSubscriptionConfirmation: h
    } = e,
    {
      updatedSubscription: R,
      readySlideId: L,
      selectedSku: m,
      selectedStoreListing: p,
      application: M
    } = (0, d.usePaymentContext)(),
    g = (0, a.Z)(C.i),
    {
      createMultipleConfettiAt: Z
    } = s.useContext(i.h),
    U = null !== (t = null == m ? void 0 : m.name) && void 0 !== t ? t : "",
    b = () => {
      f(), null == h || h()
    },
    x = L === I.h8.CONFIRM,
    B = (0, u.KW)(null !== (n = null == m ? void 0 : m.flags) && void 0 !== n ? n : 0),
    D = null != p && p.benefits.length > 0 ? O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: p.benefits.length
    }) : null;
  return P ? g ? T = (0, r.jsx)(c.h, {
    title: O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: U
    }),
    subtitle: null != p && p.benefits.length > 0 ? O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: D
    }) : null,
    onConfirm: b,
    confirmCta: O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (T = null != p && null != M ? (0, r.jsx)(o.Oc, {
    icon: p.thumbnail,
    storeListingBenefits: p.benefits,
    application: M,
    title: O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: U
    }),
    subtitle: O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: B ? O.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == M ? void 0 : M.name
    }) : O.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: U
    })
  }) : (0, r.jsx)(E.Z, {}), S = (0, r.jsx)(_.Z, {
    onPrimary: b,
    primaryCTA: _.g.CONTINUE,
    primaryText: O.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : T = g ? (0, r.jsx)(c.m, {
    tierName: U,
    onConfirm: b,
    subscription: R
  }) : (0, r.jsx)(o.xe, {
    tierName: U,
    onConfirm: b,
    subscription: R
  }), s.useEffect(() => {
    l.Z.useReducedMotion && x && Z(window.innerWidth / 2, window.innerHeight / 2)
  }, [Z, x]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(A.C3, {
      children: [(0, r.jsx)(N.Z, {}), T]
    }), null != S && (0, r.jsx)(A.O3, {
      children: S
    })]
  })
}