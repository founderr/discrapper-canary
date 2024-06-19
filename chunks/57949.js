n.d(t, {
  z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(772848),
  l = n(481060),
  a = n(976255),
  r = n(667),
  o = n(626135),
  c = n(981631);

function u(e) {
  let {
    guildProductListing: t,
    guildId: u,
    sourceAnalyticsLocations: d
  } = e, E = !1, _ = (0, i.Z)(), I = () => {
    E = !0
  };
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("77298"), n.e("23357"), n.e("15972"), n.e("12013"), n.e("6416"), n.e("43906"), n.e("32776"), n.e("95900"), n.e("27436")]).then(n.bind(n, 578780));
    return n => (0, s.jsx)(e, {
      ...n,
      applicationId: t.application_id,
      skuId: t.id,
      sourceAnalyticsLocations: d,
      guildProductContext: {
        guildProductListingId: t.id,
        guildId: u
      },
      loadId: _,
      onComplete: I
    })
  }, {
    onCloseCallback: () => {
      !E && o.default.track(c.rMx.PAYMENT_FLOW_CANCELED, {
        load_id: _,
        payment_type: c.Zuq[c.GZQ.ONE_TIME],
        is_gift: !1,
        location_stack: Array.isArray(d) ? d : [d]
      }), (0, a.fw)(), (0, r.p)()
    },
    onCloseRequest: c.dG4
  })
}