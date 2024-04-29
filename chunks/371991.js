"use strict";
n.r(t), n.d(t, {
  ActiveTimestampFromDuration: function() {
    return h
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("846519"),
  r = n("481060"),
  o = n("706454"),
  u = n("709054"),
  d = n("506071"),
  c = n("561308");
let f = e => {
    let {
      entry: t,
      textColor: n
    } = e, s = u.default.extractTimestamp(t.id), [i, r] = l.useState(Date.now()), {
      seconds: o,
      minutes: d,
      hours: f
    } = (0, c.calculateActiveTimestampDurations)(t, i);
    return (0, a.jsx)(h, {
      textColor: n,
      startTime: s,
      seconds: o,
      minutes: d,
      hours: f,
      now: i,
      setNow: r
    })
  },
  h = e => {
    let {
      startTime: t,
      seconds: n,
      minutes: s,
      hours: o,
      now: u,
      setNow: f,
      textColor: h
    } = e, m = (0, d.useIsWindowFocused)(), p = l.useMemo(() => {
      let {
        hours: e
      } = (0, c.calculateActiveTimestampDurationsFromStart)(t, u);
      return e > 0 ? 3e5 : 1e3
    }, [t, u]);
    l.useEffect(() => {
      let e = new i.Interval;
      return e.start(p, () => {
        f(Date.now())
      }), !m && e.stop(), () => e.stop()
    }, [p, m, f]);
    let E = l.useMemo(() => (0, c.formatActiveTimestampFromUnits)(n, s, o), [n, s, o]);
    return (0, a.jsx)(r.Text, {
      variant: "text-xs/normal",
      tabularNumbers: !0,
      color: h,
      children: E
    })
  };
t.default = e => {
  let {
    entry: t,
    textColor: n
  } = e, l = (0, c.isEntryActive)(t), i = (0, s.useStateFromStores)([o.default], () => o.default.locale);
  return l ? (0, a.jsx)(f, {
    entry: t,
    textColor: n
  }) : (0, a.jsx)(r.Text, {
    variant: "text-xs/normal",
    color: n,
    lineClamp: 1,
    children: (0, c.formatEndedTimestamp)(t, i)
  })
}