"use strict";
a.r(t);
var n = a("735250"),
  i = a("470079"),
  r = a("673591");
t.default = e => {
  let {
    copy: t,
    isSelected: a = !1,
    onSelect: s
  } = e;
  return i.useEffect(() => {
    a && (null == s || s())
  }, [a, s]), (0, n.jsx)(r.default, {
    copy: t
  })
}