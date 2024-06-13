"use strict";
a.r(t);
var s = a("735250"),
  o = a("470079"),
  l = a("442837"),
  u = a("481060"),
  r = a("424602"),
  c = a("541099"),
  i = a("421591"),
  n = a("314734"),
  d = a("689938"),
  p = a("952095");
t.default = o.memo(function(e) {
  let {
    channel: t,
    analyticsLocation: a,
    ...E
  } = e;
  r.DesktopAppLauncherInActivitiesShelfExperiment.useExperiment({
    location: a
  }, {
    autoTrackExposure: !0
  });
  let h = (0, l.useStateFromStores)([c.default], () => c.default.shouldShowModal());
  return o.useEffect(() => {
    !h && (0, u.closeModal)(n.APP_LAUNCHER_WEB_MODAL_KEY)
  }), (0, s.jsx)(u.ModalRoot, {
    className: p.root,
    "aria-label": d.default.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
    ...E,
    children: (0, s.jsx)(i.default, {
      channel: t
    })
  })
})