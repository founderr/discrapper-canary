var i = n(735250),
  s = n(470079),
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
    isRecentlyOnlineTrackable: g
  } = (0, a.$)(h);
  if (s.useEffect(() => {
      g && !I && a.Z.trackExposure({
        location: _
      })
    }, [g, I, _]), I) return (0, i.jsx)(l.Z, {
    className: c.activity,
    textClassName: c.text,
    emojiClassName: c.customStatusEmoji,
    activities: n,
    applicationStream: u,
    animate: t,
    user: E
  });
  if (!m) return (0, i.jsx)("div", {
    className: c.text,
    children: (0, o.u5)(d)
  });
  {
    let e = (0, r.H)(h);
    return (0, i.jsx)("div", {
      className: c.text,
      children: e
    })
  }
}