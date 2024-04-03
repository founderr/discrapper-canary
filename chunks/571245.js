"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("481060"),
  i = n("563040"),
  r = n("227120"),
  o = n("924801"),
  u = n("308083");
t.default = e => {
  let {
    value: t,
    onChange: n
  } = e, d = s.useRef(null), c = s.useMemo(() => (0, o.generateTimeOptions)(), []), [f, E] = s.useState("");
  return (0, a.jsx)(l.SearchableSelect, {
    ref: d,
    options: c,
    value: t,
    onChange: n,
    onSearchChange: E,
    onKeyDown: function(e) {
      if ("Enter" === e.key) {
        let e;
        let a = (0, i.convertToTimeOfADay)(u.ARBITRARY_MIDNIGHT, f);
        if (f in r.ExtendedTimeOptions ? e = f : null != a && (e = a.format(u.LOCALE_TIME_FORMAT)), null != e) {
          var t;
          n(e), null === (t = d.current) || void 0 === t || t.close()
        }
      }
    }
  })
}