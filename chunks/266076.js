var i = n(735250),
  a = n(470079),
  s = n(481060),
  l = n(43267),
  r = n(93687),
  o = n(785232);
t.Z = a.memo(function(e) {
  let {
channel: t,
size: n,
facepileSizeOverride: a,
experimentLocation: c,
isTyping: u,
status: d,
className: h,
animated: p = !1,
...m
  } = e, {
isFacepileEnabled: _
  } = r.Z.useExperiment({
location: c
  }, {
autoTrackExposure: !0
  });
  return t.recipients.length >= 2 && _ && null == t.icon ? (0, i.jsx)(o.Z, {
'aria-label': m['aria-label'],
'aria-hidden': m['aria-hidden'],
className: h,
recipients: t.recipients,
size: null != a ? a : n,
isTyping: u,
status: d
  }) : (0, i.jsx)(s.Avatar, {
'aria-hidden': m['aria-hidden'],
'aria-label': m['aria-label'],
className: h,
size: n,
src: (0, l.x)(t, 80, p)
  });
});