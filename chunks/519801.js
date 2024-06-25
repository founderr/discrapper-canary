t.d(n, {
  Z: function() {
    return p
  }
}), t(789020);
var r = t(735250),
  s = t(470079),
  a = t(131388),
  l = t(607070),
  i = t(745510),
  o = t(171246),
  u = t(689011),
  c = t(931905),
  d = t(598),
  I = t(409813),
  _ = t(586585),
  T = t(456251),
  E = t(614277),
  N = t(698708),
  S = t(750143),
  h = t(689938);

function p(e) {
  var n, t;
  let p, C, {
      showBenefits: A,
      handleClose: m,
      onSubscriptionConfirmation: O
    } = e,
    {
      updatedSubscription: P,
      readySlideId: f,
      selectedSku: g,
      selectedStoreListing: R,
      application: v
    } = (0, d.usePaymentContext)(),
    x = (0, a.Z)(S.i),
    {
      createMultipleConfettiAt: L
    } = s.useContext(i.h),
    M = null !== (n = null == g ? void 0 : g.name) && void 0 !== n ? n : "",
    b = () => {
      m(), null == O || O()
    },
    U = f === I.h8.CONFIRM,
    Z = (0, o.KW)(null !== (t = null == g ? void 0 : g.flags) && void 0 !== t ? t : 0),
    B = null != R && R.benefits.length > 0 ? h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_BENEFITS_SUBTITLE.format({
      benefitCount: R.benefits.length
    }) : null;
  return A ? x ? p = (0, r.jsx)(c.h, {
    title: h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE_V2.format({
      tierName: M
    }),
    subtitle: null != R && R.benefits.length > 0 ? h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({
      benefits: B
    }) : null,
    onConfirm: b,
    confirmCta: h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
  }) : (p = null != R && null != v ? (0, r.jsx)(u.Oc, {
    icon: R.thumbnail,
    storeListingBenefits: R.benefits,
    application: v,
    title: h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_TITLE_V2.format({
      tier: M
    }),
    subtitle: h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_BENEFITS_PREVIEW,
    description: Z ? h.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      applicationName: null == v ? void 0 : v.name
    }) : h.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_SUBTITLE.format({
      tier: M
    })
  }) : (0, r.jsx)(T.Z, {}), C = (0, r.jsx)(_.Z, {
    onPrimary: b,
    primaryCTA: _.g.CONTINUE,
    primaryText: h.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
  })) : p = x ? (0, r.jsx)(c.m, {
    tierName: M,
    onConfirm: b,
    subscription: P
  }) : (0, r.jsx)(u.xe, {
    tierName: M,
    onConfirm: b,
    subscription: P
  }), s.useEffect(() => {
    l.Z.useReducedMotion && U && L(window.innerWidth / 2, window.innerHeight / 2)
  }, [L, U]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(E.C3, {
      children: [(0, r.jsx)(N.Z, {}), p]
    }), null != C && (0, r.jsx)(E.O3, {
      children: C
    })]
  })
}