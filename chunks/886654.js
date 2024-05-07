"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  s = n("673591");
t.default = e => {
  let {
    copy: t,
    isSelected: n = !1,
    onSelect: a
  } = e;
  return r.useEffect(() => {
    n && (null == a || a())
  }, [n, a]), (0, i.jsx)(s.default, {
    copy: t
  })
}