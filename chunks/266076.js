var a = i(735250),
  n = i(470079),
  l = i(481060),
  s = i(43267),
  r = i(93687),
  d = i(785232);
t.Z = n.memo(function(e) {
  let {
    channel: t,
    size: i,
    facepileSizeOverride: n,
    experimentLocation: u,
    isTyping: c,
    status: o,
    className: A,
    animated: I = !1,
    ...S
  } = e, {
    isFacepileEnabled: E
  } = r.Z.useExperiment({
    location: u
  }, {
    autoTrackExposure: !0
  });
  return t.recipients.length >= 2 && E && null == t.icon ? (0, a.jsx)(d.Z, {
    "aria-label": S["aria-label"],
    "aria-hidden": S["aria-hidden"],
    className: A,
    recipients: t.recipients,
    size: null != n ? n : i,
    isTyping: c,
    status: o
  }) : (0, a.jsx)(l.Avatar, {
    "aria-hidden": S["aria-hidden"],
    "aria-label": S["aria-label"],
    className: A,
    size: i,
    src: (0, s.x)(t, 80, I)
  })
})