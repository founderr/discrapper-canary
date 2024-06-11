"use strict";
a.r(t);
var i = a("735250"),
  s = a("470079"),
  n = a("481060"),
  l = a("43267"),
  r = a("93687"),
  d = a("785232");
t.default = s.memo(function(e) {
  let {
    channel: t,
    size: a,
    facepileSizeOverride: s,
    experimentLocation: u,
    isTyping: o,
    status: c,
    className: I,
    animated: A = !1,
    ..._
  } = e, {
    isFacepileEnabled: E
  } = r.default.useExperiment({
    location: u
  }, {
    autoTrackExposure: !0
  });
  return t.recipients.length >= 2 && E && null == t.icon ? (0, i.jsx)(d.default, {
    "aria-label": _["aria-label"],
    "aria-hidden": _["aria-hidden"],
    className: I,
    recipients: t.recipients,
    size: null != s ? s : a,
    isTyping: o,
    status: c
  }) : (0, i.jsx)(n.Avatar, {
    "aria-hidden": _["aria-hidden"],
    "aria-label": _["aria-label"],
    className: I,
    size: a,
    src: (0, l.getChannelIconURL)(t, 80, A)
  })
})