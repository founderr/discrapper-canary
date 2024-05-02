"use strict";
n.r(t);
var a = n("735250"),
  r = n("470079"),
  i = n("673591");
t.default = e => {
  let {
    copy: t,
    isSelected: n = !1,
    onSelect: s
  } = e;
  return r.useEffect(() => {
    n && (null == s || s())
  }, [n, s]), (0, a.jsx)(i.default, {
    copy: t
  })
}