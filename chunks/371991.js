"use strict";
n.r(t), n.d(t, {
  ActiveTimestamp: function() {
    return _
  },
  useTimestampTickedNow: function() {
    return d
  }
}), n("47120");
var r = n("735250"),
  o = n("470079"),
  i = n("442837"),
  a = n("846519"),
  u = n("481060"),
  s = n("706454"),
  E = n("506071"),
  T = n("561308"),
  l = n("592567");

function d(e) {
  let [t, n] = o.useState(Date.now()), r = (0, E.useIsWindowFocused)(), i = o.useMemo(() => {
    let {
      hours: n
    } = (0, T.calculateActiveTimestampDurations)(e, t);
    return n > 0 ? 3e5 : 1e3
  }, [e, t]);
  return o.useEffect(() => {
    let e = new a.Interval;
    return e.start(i, () => {
      n(Date.now())
    }), !r && e.stop(), () => e.stop()
  }, [i, r]), t
}
let _ = e => {
  let {
    entry: t,
    inline: n = !1,
    textColor: i
  } = e, a = d(t), s = o.useMemo(() => (0, T.formatActiveTimestamp)(t, a), [t, a]);
  return (0, r.jsx)(u.Text, {
    className: n ? l.inlineTimestamp : void 0,
    variant: "text-xs/normal",
    tabularNumbers: !0,
    color: i,
    children: s
  })
};
t.default = e => {
  let {
    entry: t,
    textColor: n
  } = e, o = (0, T.isEntryActive)(t), a = (0, i.useStateFromStores)([s.default], () => s.default.locale);
  return o ? (0, r.jsx)(_, {
    entry: t,
    textColor: n
  }) : (0, r.jsx)(u.Text, {
    variant: "text-xs/normal",
    color: n,
    lineClamp: 1,
    children: (0, T.formatEndedTimestamp)(t, a)
  })
}