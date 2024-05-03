"use strict";
a.r(t);
var n = a("735250"),
  r = a("470079"),
  i = a("673591");
t.default = e => {
  let {
    copy: t,
    isSelected: a = !1,
    onSelect: s
  } = e;
  return r.useEffect(() => {
    a && (null == s || s())
  }, [a, s]), (0, n.jsx)(i.default, {
    copy: t
  })
}