"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("481060"),
  l = n("993123");
let u = r.memo(function(e) {
  let {
    text: t,
    variant: n = "text-xs/medium",
    color: s = "text-normal",
    icon: u,
    className: d,
    selected: _,
    onMouseEnter: c,
    onMouseLeave: E,
    onClick: I
  } = e, T = r.useMemo(() => {
    if (null != I) return () => I(t)
  }, [I, t]);
  return (0, i.jsxs)(o.Clickable, {
    className: a()(l.trait, {
      [l.selected]: _,
      [l.selectable]: null != T,
      [l.clickable]: null != T
    }, d),
    onMouseEnter: c,
    onMouseLeave: E,
    onClick: T,
    children: [null != u && (0, i.jsx)(u, {
      height: 16,
      width: 16
    }), (0, i.jsx)(o.Text, {
      variant: n,
      color: s,
      lineClamp: 1,
      children: t
    })]
  })
});
t.default = u