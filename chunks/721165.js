t.d(n, {
  Z: function() {
return C;
  }
}), t(789020);
var i = t(735250),
  r = t(470079),
  o = t(442837),
  a = t(131388),
  s = t(171246),
  l = t(689011),
  c = t(931905),
  d = t(430824),
  u = t(598),
  _ = t(409813),
  p = t(586585),
  f = t(614277),
  I = t(750143),
  m = t(689938);

function C(e) {
  let {
handleStepChange: n,
handleClose: t
  } = e, {
subscriptionMetadataRequest: C,
selectedSku: S,
selectedStoreListing: b,
application: h
  } = (0, u.usePaymentContext)(), T = (0, a.Z)(I.i), g = (0, o.e7)([d.Z], () => d.Z.getGuild(null == C ? void 0 : C.guild_id)), E = r.useCallback(() => n(_.h8.REVIEW), [n]);
  if (null == S)
return null;
  let N = (0, s.KW)(S.flags);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(f.C3, {
    children: T ? (0, i.jsx)(c.h, {
      confirmCta: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_CONTINUE_BUTTON,
      onConfirm: E,
      onCancel: t,
      title: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_TITLE_V2.format({
        tier: S.name
      }),
      subtitle: N ? m.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE : m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_LITE_SUBTITLE.format({
        guildName: null == g ? void 0 : g.name
      }),
      showOpenDiscord: !1
    }) : (0, i.jsx)(l.Oc, {
      icon: null == b ? void 0 : b.thumbnail,
      storeListingBenefits: null == b ? void 0 : b.benefits,
      application: null != h ? h : void 0,
      title: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_BENEFITS_TITLE_V2.format({
        tier: S.name
      }),
      subtitle: N ? m.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_HEADER : m.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_HEADER,
      description: N ? m.Z.Messages.APPLICATION_USER_SUBSCRIPTION_LISTING_DETAILS.format({
        applicationName: null == h ? void 0 : h.name
      }) : m.Z.Messages.APPLICATION_GUILD_SUBSCRIPTION_LISTING_DETAILS
    })
  }),
  !T && (0, i.jsx)(f.O3, {
    children: (0, i.jsx)(p.Z, {
      onBack: t,
      backText: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CANCEL_BUTTON,
      onPrimary: E,
      primaryCTA: p.g.CONTINUE,
      primaryText: m.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_CONTINUE_BUTTON
    })
  })
]
  });
}