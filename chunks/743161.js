a.r(o);
var s = a(735250),
  t = a(470079),
  c = a(442837),
  l = a(481060),
  n = a(424602),
  r = a(541099),
  u = a(827498),
  i = a(421591),
  d = a(314734),
  p = a(689938),
  E = a(594992);
o.default = t.memo(function(e) {
  let {
    channel: o,
    analyticsLocation: a,
    ...h
  } = e;
  n.m1.useExperiment({
    location: a
  }, {
    autoTrackExposure: !0
  });
  let _ = (0, c.e7)([r.Z], () => r.Z.shouldShowModal());
  return t.useEffect(() => {
    !_ && (0, l.closeModal)(d.e9)
  }), (0, s.jsx)(l.ModalRoot, {
    className: E.root,
    "aria-label": p.Z.Messages.EMBEDDED_ACTIVITIES_SHELF_TITLE,
    ...h,
    children: (0, s.jsx)(i.Z, {
      channel: o,
      entrypoint: u._.VOICE
    })
  })
})