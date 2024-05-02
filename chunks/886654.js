"use strict";
n.r(t);
var a = n("735250"),
  r = n("470079"),
  s = n("673591");
t.default = e => {
  let {
    copy: t,
    isSelected: n = !1,
    onSelect: i
  } = e;
  return r.useEffect(() => {
    n && (null == i || i())
  }, [n, i]), (0, a.jsx)(s.default, {
    copy: t
  })
}