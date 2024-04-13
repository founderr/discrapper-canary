"use strict";
i.r(t);
var n = i("735250"),
  r = i("470079"),
  s = i("673591");
t.default = e => {
  let {
    copy: t,
    isSelected: i = !1,
    onSelect: a
  } = e;
  return r.useEffect(() => {
    i && (null == a || a())
  }, [i, a]), (0, n.jsx)(s.default, {
    copy: t
  })
}