"use strict";
n.r(e), n.d(e, {
  ActiveTimestamp: function() {
    return c
  },
  useTimestampTickedNow: function() {
    return T
  }
}), n("47120");
var r = n("735250"),
  i = n("470079"),
  u = n("442837"),
  o = n("846519"),
  a = n("481060"),
  l = n("706454"),
  s = n("506071"),
  E = n("561308"),
  d = n("592567");

function T(t) {
  let [e, n] = i.useState(Date.now()), r = (0, s.useIsWindowFocused)(), u = i.useMemo(() => {
    let {
      hours: n
    } = (0, E.calculateActiveTimestampDurations)(t, e);
    return n > 0 ? 3e5 : 1e3
  }, [t, e]);
  return i.useEffect(() => {
    let t = new o.Interval;
    return t.start(u, () => {
      n(Date.now())
    }), !r && t.stop(), () => t.stop()
  }, [u, r]), e
}
let c = t => {
  let {
    entry: e,
    inline: n = !1,
    textColor: u
  } = t, o = T(e), l = i.useMemo(() => (0, E.formatActiveTimestamp)(e, o), [e, o]);
  return (0, r.jsx)(a.Text, {
    className: n ? d.inlineTimestamp : void 0,
    variant: "text-xs/normal",
    tabularNumbers: !0,
    color: u,
    children: l
  })
};
e.default = t => {
  let {
    entry: e,
    textColor: n
  } = t, i = (0, E.isEntryActive)(e), o = (0, u.useStateFromStores)([l.default], () => l.default.locale);
  return i ? (0, r.jsx)(c, {
    entry: e,
    textColor: n
  }) : (0, r.jsx)(a.Text, {
    variant: "text-xs/normal",
    color: n,
    lineClamp: 1,
    children: (0, E.formatEndedTimestamp)(e, o)
  })
}