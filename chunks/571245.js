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
    onChange: n,
    className: d
  } = e, c = s.useRef(null), f = s.useMemo(() => (0, o.generateTimeOptions)(), []), [E, h] = s.useState("");
  return (0, a.jsx)(l.SearchableSelect, {
    ref: c,
    wrapperClassName: d,
    options: f,
    value: t,
    onChange: n,
    onSearchChange: h,
    onKeyDown: function(e) {
      if ("Enter" === e.key) {
        let e;
        let a = (0, i.convertToTimeOfADay)(u.ARBITRARY_MIDNIGHT, E);
        if (E in r.ExtendedTimeOptions ? e = E : null != a && (e = a.format(u.LOCALE_TIME_FORMAT)), null != e) {
          var t;
          n(e), null === (t = c.current) || void 0 === t || t.close()
        }
      }
    }
  })
}