"use strict";
n.r(e), n.d(e, {
  ActiveTimestamp: function() {
    return c
  },
  useTimestampTickedNow: function() {
    return d
  }
}), n("47120");
var r = n("735250"),
  i = n("470079"),
  o = n("442837"),
  u = n("846519"),
  a = n("481060"),
  E = n("706454"),
  s = n("506071"),
  l = n("561308"),
  T = n("592567");

function d(t) {
  let [e, n] = i.useState(Date.now()), r = (0, s.useIsWindowFocused)(), o = i.useMemo(() => {
    let {
      hours: n
    } = (0, l.calculateActiveTimestampDurations)(t, e);
    return n > 0 ? 3e5 : 1e3
  }, [t, e]);
  return i.useEffect(() => {
    let t = new u.Interval;
    return t.start(o, () => {
      n(Date.now())
    }), !r && t.stop(), () => t.stop()
  }, [o, r]), e
}
let c = t => {
  let {
    entry: e,
    inline: n = !1,
    textColor: o
  } = t, u = d(e), E = i.useMemo(() => (0, l.formatActiveTimestamp)(e, u), [e, u]);
  return (0, r.jsx)(a.Text, {
    className: n ? T.inlineTimestamp : void 0,
    variant: "text-xs/normal",
    tabularNumbers: !0,
    color: o,
    children: E
  })
};
e.default = t => {
  let {
    entry: e,
    textColor: n
  } = t, i = (0, l.isEntryActive)(e), u = (0, o.useStateFromStores)([E.default], () => E.default.locale);
  return i ? (0, r.jsx)(c, {
    entry: e,
    textColor: n
  }) : (0, r.jsx)(a.Text, {
    variant: "text-xs/normal",
    color: n,
    lineClamp: 1,
    children: (0, l.formatEndedTimestamp)(e, u)
  })
}