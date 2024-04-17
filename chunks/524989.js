"use strict";
l.r(a), l("653041"), l("47120");
var t = l("735250"),
  i = l("470079"),
  n = l("120356"),
  s = l.n(n),
  d = l("393903"),
  r = l("206771");

function c(e, a) {
  let l = [],
    t = [],
    i = 0,
    n = 0,
    s = !1;
  for (var d = 0; d < e.length; d++) {
    let r = e[d],
      c = a.widths[d],
      o = d === e.length - 1,
      V = n === a.maxLines - 1,
      h = n + 2 < a.maxLines,
      H = c > a.parentWidth,
      x = V && !o ? a.overflowWidth : 0,
      u = 0 === a.parentWidth,
      f = !s && i + c + a.spacing + x < a.parentWidth;
    u || f ? (i += c + a.spacing, l.push(r)) : n < a.maxLines - 1 ? (n++, i = c + a.spacing, l.push(r)) : H && !V && 0 === i ? (n++, l.push(r)) : H && h && i > 0 ? (l.push(r), n += 2) : (s = !0, t.push(r))
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
    maxLines: V,
    overflowWidth: h = 65,
    spacing: H = 8
  } = e, [x, u] = i.useState(() => ({
    parentWidth: 0,
    visible: a,
    overflow: [],
    widths: Array(a.length).fill(0),
    maxLines: V,
    overflowWidth: h,
    spacing: H
  })), f = {
    visibility: 0 === x.parentWidth ? "hidden" : "visible"
  }, p = (0, d.useResizeObserver)(e => {
    u(l => c(a, {
      ...l,
      parentWidth: e.contentRect.width
    }))
  });
  return i.useLayoutEffect(() => {
    u(e => {
      var l;
      let t = [...e.widths];
      return null === (l = p.current) || void 0 === l || l.childNodes.forEach((e, a) => {
        let l = e.offsetWidth;
        t[a] = l
      }), c(a, {
        ...e,
        widths: t
      })
    })
  }, [p, a, u]), (0, t.jsxs)("div", {
    style: f,
    className: s()(r.container, o),
    ref: p,
    children: [x.visible.map(l), x.overflow.length > 0 ? n(x.overflow) : null]
  })
}