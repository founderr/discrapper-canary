"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("43267"),
  i = n("93687"),
  r = n("276423");
t.default = function(e) {
  let {
    channel: t,
    size: n,
    facepileSizeOverride: o,
    experimentLocation: u,
    isTyping: d,
    status: c,
    className: f,
    animated: h = !1,
    ...m
  } = e, {
    isFacepileEnabled: p
  } = i.default.useExperiment({
    location: u
  }, {
    autoTrackExposure: !0
  });
  return t.recipients.length >= 2 && p && null == t.icon ? (0, a.jsx)(r.default, {
    "aria-label": m["aria-label"],
    "aria-hidden": m["aria-hidden"],
    className: f,
    recipients: t.recipients,
    size: null != o ? o : (0, l.getAvatarSize)(n),
    isTyping: d,
    status: c
  }) : (0, a.jsx)(l.Avatar, {
    "aria-hidden": m["aria-hidden"],
    "aria-label": m["aria-label"],
    className: f,
    size: n,
    src: (0, s.getChannelIconURL)(t, 80, h)
  })
}