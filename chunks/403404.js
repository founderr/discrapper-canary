n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(481060),
  l = n(424602),
  a = n(397698),
  r = n(776862),
  o = n(701488),
  c = n(981631);

function u(e) {
  let {
    channel: t,
    guildId: u,
    locationObject: d,
    openInPopout: E,
    initialSelectedApplicationId: _,
    initialSlide: I = o.ag.DIRECTORY,
    enableSelectedTextChannelInvite: T = !1,
    analyticsLocations: m,
    opensAppLauncherModal: N = !1
  } = e, h = m.length > 0 ? m[m.length - 1] : "open-activity-shelf", {
    enabled: C
  } = l.m1.getCurrentConfig({
    location: h
  }, {
    autoTrackExposure: !1
  });
  if (N && C) {
    null != t && (0, a.Z)({
      openInPopout: E,
      channel: t
    });
    return
  }
  E && (0, r.Z)(c.KJ3.CHANNEL_CALL_POPOUT);
  let S = E ? i.POPOUT_MODAL_CONTEXT : i.DEFAULT_MODAL_CONTEXT;
  return (0, i.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("19945")]).then(n.bind(n, 471840));
    return n => (0, s.jsx)(e, {
      ...n,
      channel: t,
      guildId: u,
      locationObject: d,
      initialSlide: I,
      initialSelectedApplicationId: _,
      enableSelectedTextChannelInvite: T,
      analyticsLocations: m
    })
  }, {
    modalKey: o.AC,
    contextKey: S
  })
}