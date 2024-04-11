"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  a = n("673591");
t.default = e => {
  let {
    copy: t,
    isSelected: n = !1,
    onSelect: s
  } = e;
  return r.useEffect(() => {
    n && (null == s || s())
  }, [n, s]), (0, i.jsx)(a.default, {
    copy: t
  })
}