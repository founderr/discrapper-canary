"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("424602"),
  i = n("776862"),
  r = n("701488"),
  o = n("981631");

function u(e) {
  let {
    channel: t,
    guildId: u,
    locationObject: d,
    openInPopout: c,
    initialSelectedApplicationId: f,
    initialSlide: E = r.ActivityShelfSlides.DIRECTORY,
    enableSelectedTextChannelInvite: _ = !1,
    analyticsLocations: m,
    opensAppLauncherModal: T = !1
  } = e, I = m.length > 0 ? m[m.length - 1] : "open-activity-shelf", {
    enabled: p
  } = l.DesktopAppLauncherInActivitiesShelfExperiment.getCurrentConfig({
    location: I
  });
  if (T && p) return;
  c && (0, i.default)(o.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  let h = c ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
  return (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("99182"), n.e("64250")]).then(n.bind(n, "471840"));
    return n => (0, s.jsx)(e, {
      ...n,
      channel: t,
      guildId: u,
      locationObject: d,
      initialSlide: E,
      initialSelectedApplicationId: f,
      enableSelectedTextChannelInvite: _,
      analyticsLocations: m
    })
  }, {
    modalKey: r.ACTIVITY_SHELF_WEB_MODAL_KEY,
    contextKey: h
  })
}