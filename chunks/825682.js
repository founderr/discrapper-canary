"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("788307"),
  l = n("280234"),
  i = n("509275"),
  r = n("51144"),
  o = n("908105");
t.default = function(e) {
  let {
    hovered: t,
    activities: n,
    applicationStream: u,
    status: d,
    user: c,
    lastOnlineTimestamp: f,
    experimentLocation: E = "status_text"
  } = e, {
    isFriendsAndDMsEnabled: h
  } = l.default.useExperiment({
    location: E
  }, {
    autoTrackExposure: !0
  });
  if (n.length > 0) return (0, a.jsx)(s.default, {
    className: o.activity,
    textClassName: o.text,
    emojiClassName: o.customStatusEmoji,
    activities: n,
    applicationStream: u,
    animate: t,
    user: c
  });
  if (null == f || !h) return (0, a.jsx)("div", {
    className: o.text,
    children: (0, r.humanizeStatus)(d)
  });
  {
    let e = (0, i.formatRecentlyOnlineStatus)(f);
    return (0, a.jsx)("div", {
      className: o.text,
      children: e
    })
  }
}