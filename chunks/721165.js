n.d(t, {
  Z: function() {
    return C
  }
}), n(789020);
var r = n(735250),
  s = n(470079),
  a = n(442837),
  l = n(131388),
  i = n(171246),
  u = n(689011),
  o = n(931905),
  c = n(430824),
  d = n(598),
  I = n(409813),
  _ = n(586585),
  E = n(614277),
  A = n(750143),
  N = n(689938);

function C(e) {
  let {
    handleStepChange: t,
    handleClose: n
  } = e, {
    subscriptionMetadataRequest: C,
    selectedSku: O,
    selectedStoreListing: T,
    application: S
  } = (0, d.usePaymentContext)(), P = (0, l.Z)(A.i), f = (0, a.e7)([c.Z], () => c.Z.getGuild(null == C ? void 0 : C.guild_id)), h = s.useCallback(() => t(I.h8.REVIEW), [t]);
  if (null == O) return null;
  let R = (0, i.KW)(O.flags);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(E.C3, {
      children: P ? (0, r.jsx)(o.h, {
        confirmCta: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
        onConfirm: h,
        onCancel: n,
        title: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
          tier: O.name
        }),
        subtitle: R ? N.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
          guildName: null == f ? void 0 : f.name
        }),
        showOpenDiscord: !1
      }) : (0, r.jsx)(u.Oc, {
        icon: null == T ? void 0 : T.thumbnail,
        storeListingBenefits: null == T ? void 0 : T.benefits,
        application: null != S ? S : void 0,
        title: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
          tier: O.name
        }),
        subtitle: R ? N.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : N.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
        description: R ? N.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
          applicationName: null == S ? void 0 : S.name
        }) : N.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
      })
    }), !P && (0, r.jsx)(E.O3, {
      children: (0, r.jsx)(_.Z, {
        onBack: n,
        backText: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
        onPrimary: h,
        primaryCTA: _.g.CONTINUE,
        primaryText: N.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
      })
    })]
  })
}