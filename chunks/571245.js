"use strict";
a.r(t), a("47120");
var n = a("735250"),
  s = a("470079"),
  l = a("481060"),
  i = a("563040"),
  r = a("227120"),
  o = a("924801"),
  u = a("308083");
t.default = e => {
  let {
    value: t,
    onChange: a,
    className: d
  } = e, c = s.useRef(null), f = s.useMemo(() => (0, o.generateTimeOptions)(), []), [E, h] = s.useState("");
  return (0, n.jsx)(l.SearchableSelect, {
    ref: c,
    wrapperClassName: d,
    options: f,
    value: t,
    onChange: a,
    onSearchChange: h,
    onKeyDown: function(e) {
      if ("Enter" === e.key) {
        let e;
        let n = (0, i.convertToTimeOfADay)(u.ARBITRARY_MIDNIGHT, E);
        if (E in r.ExtendedTimeOptions ? e = E : null != n && (e = n.format(u.LOCALE_TIME_FORMAT)), null != e) {
          var t;
          a(e), null === (t = c.current) || void 0 === t || t.close()
        }
      }
    }
  })
}