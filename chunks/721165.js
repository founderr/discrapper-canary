t.d(n, {
  Z: function() {
    return S
  }
}), t(789020);
var r = t(735250),
  s = t(470079),
  a = t(442837),
  l = t(131388),
  i = t(171246),
  o = t(689011),
  u = t(931905),
  c = t(430824),
  d = t(598),
  I = t(409813),
  _ = t(586585),
  T = t(614277),
  E = t(750143),
  N = t(689938);

function S(e) {
  let {
    handleStepChange: n,
    handleClose: t
  } = e, {
    subscriptionMetadataRequest: S,
    selectedSku: h,
    selectedStoreListing: p,
    application: C
  } = (0, d.usePaymentContext)(), A = (0, l.Z)(E.i), m = (0, a.e7)([c.Z], () => c.Z.getGuild(null == S ? void 0 : S.guild_id)), O = s.useCallback(() => n(I.h8.REVIEW), [n]);
  if (null == h) return null;
  let P = (0, i.KW)(h.flags);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(T.C3, {
      children: A ? (0, r.jsx)(u.h, {
        confirmCta: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: O,
        onCancel: t,
        title: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: h.name
        }),
        subtitle: P ? N.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == m ? void 0 : m.name
        }),
        showOpenDiscord: !1
      }) : (0, r.jsx)(o.Oc, {
        icon: null == p ? void 0 : p.thumbnail,
        storeListingBenefits: null == p ? void 0 : p.benefits,
        application: null != C ? C : void 0,
        title: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
          tier: h.name
        }),
        subtitle: P ? N.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : N.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
        description: P ? N.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
          applicationName: null == C ? void 0 : C.name
        }) : N.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
      })
    }), !A && (0, r.jsx)(T.O3, {
      children: (0, r.jsx)(_.Z, {
        onBack: t,
        backText: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
        onPrimary: O,
        primaryCTA: _.g.CONTINUE,
        primaryText: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}