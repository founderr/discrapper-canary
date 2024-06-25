var s = n(735250),
  i = n(470079),
  l = n(788307),
  a = n(280234),
  r = n(509275),
  o = n(51144),
  c = n(166896);
t.Z = function(e) {
  let {
    hovered: t,
    activities: n,
    applicationStream: u,
    status: d,
    user: E,
    lastOnlineTimestamp: h,
    experimentLocation: _ = "status_text"
  } = e, I = n.length > 0, {
    isRecentlyOnlineShowable: m,
    isRecentlyOnlineTrackable: T
  } = (0, a.$)(h);
  if (i.useEffect(() => {
      T && !I && a.Z.trackExposure({
        location: _
      })
    }, [T, I, _]), I) return (0, s.jsx)(l.Z, {
    className: c.activity,
    textClassName: c.text,
    emojiClassName: c.customStatusEmoji,
    activities: n,
    applicationStream: u,
    animate: t,
    user: E
  });
  if (!m) return (0, s.jsx)("div", {
    className: c.text,
    children: (0, o.u5)(d)
  });
  {
    let e = (0, r.H)(h);
    return (0, s.jsx)("div", {
      className: c.text,
      children: e
    })
  }
}