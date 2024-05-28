"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("788307"),
  i = n("280234"),
  r = n("509275"),
  o = n("51144"),
  u = n("908105");
t.default = function(e) {
  let {
    hovered: t,
    activities: n,
    applicationStream: d,
    status: c,
    user: f,
    lastOnlineTimestamp: E,
    experimentLocation: C = "status_text"
  } = e, {
    isRecentlyOnlineEnabled: h
  } = i.default.useExperiment({
    location: C
  }, {
    autoTrackExposure: !1
  }), _ = n.length > 0, S = !_ && null != E && (0, i.isRecentlyOnline)(E);
  if (s.useEffect(() => {
      S && i.default.trackExposure({
        location: C
      })
    }, [S, C]), _) return (0, a.jsx)(l.default, {
    className: u.activity,
    textClassName: u.text,
    emojiClassName: u.customStatusEmoji,
    activities: n,
    applicationStream: d,
    animate: t,
    user: f
  });
  if (!S || !h) return (0, a.jsx)("div", {
    className: u.text,
    children: (0, o.humanizeStatus)(c)
  });
  {
    let e = (0, r.formatRecentlyOnlineStatus)(E);
    return (0, a.jsx)("div", {
      className: u.text,
      children: e
    })
  }
}