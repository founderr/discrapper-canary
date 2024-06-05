"use strict";
n.r(e), n.d(e, {
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
  u = n("846519"),
  a = n("481060"),
  s = n("706454"),
  T = n("506071"),
  E = n("561308"),
  l = n("592567");

function d(t) {
  let [e, n] = o.useState(Date.now()), r = (0, T.useIsWindowFocused)(), i = o.useMemo(() => {
    let {
      hours: n
    } = (0, E.calculateActiveTimestampDurations)(t, e);
    return n > 0 ? 3e5 : 1e3
  }, [t, e]);
  return o.useEffect(() => {
    let t = new u.Interval;
    return t.start(i, () => {
      n(Date.now())
    }), !r && t.stop(), () => t.stop()
  }, [i, r]), e
}
let _ = t => {
  let {
    entry: e,
    inline: n = !1,
    textColor: i
  } = t, u = d(e), s = o.useMemo(() => (0, E.formatActiveTimestamp)(e, u), [e, u]);
  return (0, r.jsx)(a.Text, {
    className: n ? l.inlineTimestamp : void 0,
    variant: "text-xs/normal",
    tabularNumbers: !0,
    color: i,
    children: s
  })
};
e.default = t => {
  let {
    entry: e,
    textColor: n
  } = t, o = (0, E.isEntryActive)(e), u = (0, i.useStateFromStores)([s.default], () => s.default.locale);
  return o ? (0, r.jsx)(_, {
    entry: e,
    textColor: n
  }) : (0, r.jsx)(a.Text, {
    variant: "text-xs/normal",
    color: n,
    lineClamp: 1,
    children: (0, E.formatEndedTimestamp)(e, u)
  })
}