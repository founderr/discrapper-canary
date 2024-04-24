"use strict";
a.r(v), a("653041"), a("47120");
var t = a("735250"),
  l = a("470079"),
  e = a("120356"),
  i = a.n(e),
  s = a("393903"),
  n = a("206771");

function r(h, v) {
  let a = [],
    t = [],
    l = 0,
    e = 0,
    i = !1;
  for (var s = 0; s < h.length; s++) {
    let n = h[s],
      r = v.widths[s],
      d = s === h.length - 1,
      M = e === v.maxLines - 1,
      Z = e + 2 < v.maxLines,
      H = r > v.parentWidth,
      V = M && !d ? v.overflowWidth : 0,
      f = 0 === v.parentWidth,
      o = !i && l + r + v.spacing + V < v.parentWidth;
    f || o ? (l += r + v.spacing, a.push(n)) : e < v.maxLines - 1 ? (e++, l = r + v.spacing, a.push(n)) : H && !M && 0 === l ? (e++, a.push(n)) : H && Z && l > 0 ? (a.push(n), e += 2) : (i = !0, t.push(n))
  }
  return {
    ...v,
    visible: a,
    overflow: t
  }
}
v.default = function(h) {
  let {
    items: v,
    renderItem: a,
    renderOverflow: e,
    className: d,
    maxLines: M,
    overflowWidth: Z = 65,
    spacing: H = 8
  } = h, [V, f] = l.useState(() => ({
    parentWidth: 0,
    visible: v,
    overflow: [],
    widths: Array(v.length).fill(0),
    maxLines: M,
    overflowWidth: Z,
    spacing: H
  })), o = {
    visibility: 0 === V.parentWidth ? "hidden" : "visible"
  }, c = (0, s.useResizeObserver)(h => {
    f(a => r(v, {
      ...a,
      parentWidth: h.contentRect.width
    }))
  });
  return l.useLayoutEffect(() => {
    f(h => {
      var a;
      let t = [...h.widths];
      return null === (a = c.current) || void 0 === a || a.childNodes.forEach((h, v) => {
        let a = h.offsetWidth;
        t[v] = a
      }), r(v, {
        ...h,
        widths: t
      })
    })
  }, [c, v, f]), (0, t.jsxs)("div", {
    style: o,
    className: i()(n.container, d),
    ref: c,
    children: [V.visible.map(a), V.overflow.length > 0 ? e(V.overflow) : null]
  })
}