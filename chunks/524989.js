"use strict";
l.r(a), l("653041"), l("47120");
var t = l("735250"),
  i = l("470079"),
  n = l("120356"),
  s = l.n(n),
  r = l("393903"),
  d = l("206771");

function c(e, a) {
  let l = [],
    t = [],
    i = 0,
    n = 0,
    s = !1;
  for (var r = 0; r < e.length; r++) {
    let d = e[r],
      c = a.widths[r],
      o = r === e.length - 1,
      h = n === a.maxLines - 1,
      x = n + 2 < a.maxLines,
      V = c > a.parentWidth,
      H = h && !o ? a.overflowWidth : 0,
      u = 0 === a.parentWidth,
      m = !s && i + c + a.spacing + H < a.parentWidth;
    u || m ? (i += c + a.spacing, l.push(d)) : n < a.maxLines - 1 ? (n++, i = c + a.spacing, l.push(d)) : V && !h && 0 === i ? (n++, l.push(d)) : V && x && i > 0 ? (l.push(d), n += 2) : (s = !0, t.push(d))
  }
  return {
    ...a,
    visible: l,
    overflow: t
  }
}
a.default = function(e) {
  let {
    items: a,
    renderItem: l,
    renderOverflow: n,
    className: o,
    maxLines: h,
    overflowWidth: x = 65,
    spacing: V = 8
  } = e, [H, u] = i.useState(() => ({
    parentWidth: 0,
    visible: a,
    overflow: [],
    widths: Array(a.length).fill(0),
    maxLines: h,
    overflowWidth: x,
    spacing: V
  })), m = {
    visibility: 0 === H.parentWidth ? "hidden" : "visible"
  }, f = (0, r.useResizeObserver)(e => {
    u(l => c(a, {
      ...l,
      parentWidth: e.contentRect.width
    }))
  });
  return i.useLayoutEffect(() => {
    u(e => {
      var l;
      let t = [...e.widths];
      return null === (l = f.current) || void 0 === l || l.childNodes.forEach((e, a) => {
        let l = e.offsetWidth;
        t[a] = l
      }), c(a, {
        ...e,
        widths: t
      })
    })
  }, [f, a, u]), (0, t.jsxs)("div", {
    style: m,
    className: s()(d.container, o),
    ref: f,
    children: [H.visible.map(l), H.overflow.length > 0 ? n(H.overflow) : null]
  })
}