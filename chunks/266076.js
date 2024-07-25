var l = n(735250),
  a = n(470079),
  i = n(481060),
  s = n(43267),
  r = n(93687),
  c = n(785232);
t.Z = a.memo(function(e) {
  let {
channel: t,
size: n,
facepileSizeOverride: a,
experimentLocation: u,
isTyping: o,
status: d,
className: _,
animated: f = !1,
...h
  } = e, {
isFacepileEnabled: E
  } = r.Z.useExperiment({
location: u
  }, {
autoTrackExposure: !0
  });
  return t.recipients.length >= 2 && E && null == t.icon ? (0, l.jsx)(c.Z, {
'aria-label': h['aria-label'],
'aria-hidden': h['aria-hidden'],
className: _,
recipients: t.recipients,
size: null != a ? a : n,
isTyping: o,
status: d
  }) : (0, l.jsx)(i.Avatar, {
'aria-hidden': h['aria-hidden'],
'aria-label': h['aria-label'],
className: _,
size: n,
src: (0, s.x)(t, 80, f)
  });
});