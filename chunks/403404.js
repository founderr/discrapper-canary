"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("424602"),
  i = n("397698"),
  r = n("776862"),
  o = n("701488"),
  u = n("981631");

function d(e) {
  let {
    channel: t,
    guildId: d,
    locationObject: c,
    openInPopout: f,
    initialSelectedApplicationId: E,
    initialSlide: _ = o.ActivityShelfSlides.DIRECTORY,
    enableSelectedTextChannelInvite: m = !1,
    analyticsLocations: T,
    opensAppLauncherModal: I = !1
  } = e, p = T.length > 0 ? T[T.length - 1] : "open-activity-shelf", {
    enabled: h
  } = l.DesktopAppLauncherInActivitiesShelfExperiment.getCurrentConfig({
    location: p
  });
  if (I && h) {
    null != t && (0, i.default)({
      openInPopout: f,
      channel: t,
      analyticsLocation: p
    });
    return
  }
  f && (0, r.default)(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  let N = f ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
  return (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("99182"), n.e("64250")]).then(n.bind(n, "471840"));
    return n => (0, s.jsx)(e, {
      ...n,
      channel: t,
      guildId: d,
      locationObject: c,
      initialSlide: _,
      initialSelectedApplicationId: E,
      enableSelectedTextChannelInvite: m,
      analyticsLocations: T
    })
  }, {
    modalKey: o.ACTIVITY_SHELF_WEB_MODAL_KEY,
    contextKey: N
  })
}