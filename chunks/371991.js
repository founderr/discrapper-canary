"use strict";
n.r(t), n.d(t, {
  ActiveTimestamp: function() {
    return f
  },
  useTimestampTickedNow: function() {
    return E
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  i = n("442837"),
  l = n("846519"),
  r = n("481060"),
  u = n("706454"),
  o = n("506071"),
  d = n("561308"),
  c = n("592567");

function E(e) {
  let [t, n] = a.useState(Date.now()), s = (0, o.useIsWindowFocused)(), i = a.useMemo(() => {
    let {
      hours: n
    } = (0, d.calculateActiveTimestampDurations)(e, t);
    return n > 0 ? 3e5 : 1e3
  }, [e, t]);
  return a.useEffect(() => {
    let e = new l.Interval;
    return e.start(i, () => {
      n(Date.now())
    }), !s && e.stop(), () => e.stop()
  }, [i, s]), t
}
let f = e => {
  let {
    entry: t,
    inline: n = !1,
    textColor: i
  } = e, l = E(t), u = a.useMemo(() => (0, d.formatActiveTimestamp)(t, l), [t, l]);
  return (0, s.jsx)(r.Text, {
    className: n ? c.inlineTimestamp : void 0,
    variant: "text-xs/normal",
    tabularNumbers: !0,
    color: i,
    children: u
  })
};
t.default = e => {
  let {
    entry: t,
    textColor: n
  } = e, a = (0, d.isEntryActive)(t), l = (0, i.useStateFromStores)([u.default], () => u.default.locale);
  return a ? (0, s.jsx)(f, {
    entry: t,
    textColor: n
  }) : (0, s.jsx)(r.Text, {
    variant: "text-xs/normal",
    color: n,
    lineClamp: 1,
    children: (0, d.formatEndedTimestamp)(t, l)
  })
}