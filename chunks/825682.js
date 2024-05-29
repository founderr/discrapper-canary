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
    experimentLocation: h = "status_text"
  } = e, {
    isRecentlyOnlineEnabled: _
  } = i.default.useExperiment({
    location: h
  }, {
    autoTrackExposure: !1
  }), C = n.length > 0, m = !C && null != E && (0, i.isRecentlyOnline)(E);
  if (s.useEffect(() => {
      m && i.default.trackExposure({
        location: h
      })
    }, [m, h]), C) return (0, a.jsx)(l.default, {
    className: u.activity,
    textClassName: u.text,
    emojiClassName: u.customStatusEmoji,
    activities: n,
    applicationStream: d,
    animate: t,
    user: f
  });
  if (!m || !_) return (0, a.jsx)("div", {
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