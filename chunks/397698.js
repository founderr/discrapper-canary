"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("776862"),
  i = n("499254"),
  r = n("827498"),
  o = n("314734"),
  u = n("981631");

function d(e) {
  let {
    channel: t,
    openInPopout: d,
    analyticsLocation: c
  } = e;
  d && (0, l.default)(u.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
  let f = d ? a.POPOUT_MODAL_CONTEXT : a.DEFAULT_MODAL_CONTEXT;
  return (0, i.dismissAppLauncher)(), (0, i.showAppLauncher)(r.AppLauncherEntrypoint.VOICE), (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("81056")]).then(n.bind(n, "743161"));
    return n => (0, s.jsx)(e, {
      channel: t,
      analyticsLocation: c,
      ...n
    })
  }, {
    modalKey: o.APP_LAUNCHER_WEB_MODAL_KEY,
    contextKey: f
  })
}