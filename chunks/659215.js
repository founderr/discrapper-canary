n.r(t), n.d(t, {
  default: function() {
    return p
  },
  openBurstReactionsUpsellModal: function() {
    return g
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(230711),
  l = n(104494),
  o = n(639119),
  r = n(790527),
  u = n(474936),
  c = n(981631),
  d = n(689938),
  h = n(487690),
  m = n(784370);

function p(e) {
  var t, n;
  let {
    onClose: s,
    analyticsSource: p,
    ...g
  } = e, T = d.Z.Messages.SUPER_REACTIONS_UPSELL_UNLIMITED_BODY.format({
    onClick: () => {
      a.Z.open(c.oAB.PREMIUM), s()
    }
  }), f = (0, o.N)(), v = (0, l.Ng)(), E = null != f || null != v;
  return (0, i.jsx)(r.Z, {
    artURL: m,
    artContainerClassName: h.artContainer,
    modalClassName: h.modalContainer,
    bodyClassName: h.bodyContainer,
    type: u.cd.BURST_REACTION_UPSELL,
    title: d.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE,
    body: T,
    glowUp: T,
    analyticsSource: p,
    analyticsLocation: {
      page: c.ZY5.PREMIUM_UPSELL_BURST_REACTIONS,
      object: c.qAy.BUTTON_CTA
    },
    onClose: s,
    subscribeButtonText: E ? void 0 : d.Z.Messages.PREMIUM_SETTINGS_GET,
    subscriptionTier: null !== (n = null == f ? void 0 : null === (t = f.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : u.Si.TIER_2,
    backButtonText: d.Z.Messages.NO_THANKS,
    ...g
  })
}

function g(e) {
  let {
    analytics: t
  } = e;
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 659215));
    return n => (0, i.jsx)(e, {
      analyticsSource: t,
      ...n
    })
  })
}