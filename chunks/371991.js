"use strict";
n.r(t), n.d(t, {
  ActiveTimestamp: function() {
    return E
  },
  useTimestampTickedNow: function() {
    return f
  }
}), n("47120");
var i = n("735250"),
  a = n("470079"),
  s = n("442837"),
  r = n("846519"),
  l = n("481060"),
  u = n("706454"),
  o = n("506071"),
  d = n("561308"),
  c = n("592567");

function f(e) {
  let [t, n] = a.useState(Date.now()), i = (0, o.useIsWindowFocused)(), s = a.useMemo(() => {
    let {
      hours: n
    } = (0, d.calculateActiveTimestampDurations)(e, t);
    return n > 0 ? 3e5 : 1e3
  }, [e, t]);
  return a.useEffect(() => {
    let e = new r.Interval;
    return e.start(s, () => {
      n(Date.now())
    }), !i && e.stop(), () => e.stop()
  }, [s, i]), t
}
let E = e => {
  let {
    entry: t,
    inline: n = !1,
    textColor: s
  } = e, r = f(t), u = a.useMemo(() => (0, d.formatActiveTimestamp)(t, r), [t, r]);
  return (0, i.jsx)(l.Text, {
    className: n ? c.inlineTimestamp : void 0,
    variant: "text-xs/normal",
    tabularNumbers: !0,
    color: s,
    children: u
  })
};
t.default = e => {
  let {
    entry: t,
    textColor: n
  } = e, a = (0, d.isEntryActive)(t), r = (0, s.useStateFromStores)([u.default], () => u.default.locale);
  return a ? (0, i.jsx)(E, {
    entry: t,
    textColor: n
  }) : (0, i.jsx)(l.Text, {
    variant: "text-xs/normal",
    color: n,
    lineClamp: 1,
    children: (0, d.formatEndedTimestamp)(t, r)
  })
}