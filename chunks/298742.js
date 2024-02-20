"use strict";
n.r(t), n.d(t, {
  FormItem: function() {
    return o
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("516826"),
  a = n("818810");
let o = r.forwardRef(function(e, t) {
  var n, o;
  let {
    children: l,
    disabled: u = !1,
    className: c,
    titleClassName: d,
    tag: p = "h5",
    required: h = !1,
    style: f,
    title: E,
    error: _,
    ...m
  } = e, S = r.useId(), g = r.useId(), T = null !== (n = m.titleId) && void 0 !== n ? n : S, I = null != _ ? null !== (o = m.errorId) && void 0 !== o ? o : g : void 0;
  return (0, i.jsxs)("div", {
    ref: t,
    className: null != c ? c : void 0,
    style: null != f ? f : void 0,
    children: [null != E || null != _ ? (0, i.jsx)(a.FormTitle, {
      tag: p,
      disabled: u,
      required: h,
      error: _,
      className: d,
      id: T,
      errorId: I,
      ...m,
      children: E
    }) : null, (0, i.jsx)(s.FormContextProvider, {
      titleId: T,
      errorId: I,
      error: null != _ ? _ : void 0,
      children: l
    })]
  })
})