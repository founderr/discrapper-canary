"use strict";
n.r(t), n.d(t, {
  ActiveTimestamp: function() {
    return i
  },
  useTimestampTickedNow: function() {
    return l
  }
}), n("47120");
var r = n("735250"),
  s = n("470079"),
  a = n("442837"),
  E = n("846519"),
  u = n("481060"),
  T = n("706454"),
  _ = n("506071"),
  A = n("561308"),
  I = n("592567");

function l(e) {
  let [t, n] = s.useState(Date.now()), r = (0, _.useIsWindowFocused)(), a = s.useMemo(() => {
    let {
      hours: n
    } = (0, A.calculateActiveTimestampDurations)(e, t);
    return n > 0 ? 3e5 : 1e3
  }, [e, t]);
  return s.useEffect(() => {
    let e = new E.Interval;
    return e.start(a, () => {
      n(Date.now())
    }), !r && e.stop(), () => e.stop()
  }, [a, r]), t
}
let i = e => {
  let {
    entry: t,
    inline: n = !1,
    textColor: a
  } = e, E = l(t), T = s.useMemo(() => (0, A.formatActiveTimestamp)(t, E), [t, E]);
  return (0, r.jsx)(u.Text, {
    className: n ? I.inlineTimestamp : void 0,
    variant: "text-xs/normal",
    tabularNumbers: !0,
    color: a,
    children: T
  })
};
t.default = e => {
  let {
    entry: t,
    textColor: n
  } = e, s = (0, A.isEntryActive)(t), E = (0, a.useStateFromStores)([T.default], () => T.default.locale);
  return s ? (0, r.jsx)(i, {
    entry: t,
    textColor: n
  }) : (0, r.jsx)(u.Text, {
    variant: "text-xs/normal",
    color: n,
    lineClamp: 1,
    children: (0, A.formatEndedTimestamp)(t, E)
  })
}