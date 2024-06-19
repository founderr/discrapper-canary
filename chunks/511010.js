var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(132338),
  o = n(105461);
let c = i.forwardRef(function(e, t) {
  let {
    className: n,
    isBeforeGroup: i = !1,
    ...s
  } = e, {
    children: c
  } = s;
  return (0, l.jsx)(r.Z, {
    ...s,
    ref: t,
    role: "separator",
    "aria-label": "string" == typeof c ? c : void 0,
    className: a()(n, {
      [o.divider]: !0,
      [o.hasContent]: null != c,
      [o.beforeGroup]: i
    })
  })
});
t.Z = i.memo(c)