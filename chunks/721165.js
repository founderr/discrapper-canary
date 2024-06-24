n.d(t, {
  Z: function() {
    return A
  }
}), n(789020);
var r = n(735250),
  a = n(470079),
  s = n(442837),
  l = n(131388),
  i = n(171246),
  o = n(689011),
  u = n(931905),
  c = n(430824),
  d = n(598),
  I = n(409813),
  _ = n(586585),
  E = n(614277),
  C = n(750143),
  N = n(689938);

function A(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    subscriptionMetadataRequest: A,
    selectedSku: O,
    selectedStoreListing: h,
    application: S
  } = (0, d.usePaymentContext)(), T = (0, l.Z)(C.i), f = (0, s.e7)([c.Z], () => c.Z.getGuild(null == A ? void 0 : A.guild_id)), P = a.useCallback(() => t(I.h8.REVIEW), [t]);
  if (null == O) return null;
  let p = (0, i.KW)(O.flags);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(E.C3, {
      children: T ? (0, r.jsx)(u.h, {
        confirmCta: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: P,
        onCancel: n,
        title: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: O.name
        }),
        subtitle: p ? N.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == f ? void 0 : f.name
        }),
        showOpenDiscord: !1
      }) : (0, r.jsx)(o.Oc, {
        icon: null == h ? void 0 : h.thumbnail,
        storeListingBenefits: null == h ? void 0 : h.benefits,
        application: null != S ? S : void 0,
        title: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
          tier: O.name
        }),
        subtitle: p ? N.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : N.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
        description: p ? N.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
          applicationName: null == S ? void 0 : S.name
        }) : N.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
      })
    }), !T && (0, r.jsx)(E.O3, {
      children: (0, r.jsx)(_.Z, {
        onBack: n,
        backText: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
        onPrimary: P,
        primaryCTA: _.g.CONTINUE,
        primaryText: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}