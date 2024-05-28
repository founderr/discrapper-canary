"use strict";
n.r(t), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("481060"),
  l = n("393903"),
  u = n("689938"),
  d = n("691553");

function _(e) {
  let {
    items: t,
    renderItem: n
  } = e;
  return (0, i.jsx)(o.Tooltip, {
    text: (0, i.jsx)("div", {
      className: d.tooltip,
      children: t.map(n)
    }),
    "aria-label": "overflow",
    children: e => (0, i.jsx)("div", {
      ...e,
      children: n(u.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
        count: t.length
      }))
    })
  })
}
t.default = function(e) {
  let {
    className: t,
    items: n,
    renderItem: s,
    itemGapPx: o = 0,
    maxLines: c
  } = e, {
    lastVisibleIndex: E,
    containerRef: I,
    itemsRef: T,
    overflowItemsRef: f
  } = function(e) {
    let {
      itemGapPx: t,
      items: n,
      maxLines: i
    } = e, [s, a] = r.useState(0), [o, u] = r.useState(0), d = r.useRef([]), _ = r.useRef(0), c = r.useRef(0), E = r.useRef(null), I = r.useRef(null), T = (0, l.useResizeObserver)(e => {
      let t = null == e ? void 0 : e.getBoundingClientRect().width;
      null != t && u(t)
    });
    return r.useLayoutEffect(() => {
      var e;
      if (null == E.current || null == I.current) return;
      d.current.length = n.length, E.current.childNodes.forEach((e, t) => {
        let {
          width: n
        } = e.getBoundingClientRect();
        d.current[t] = n
      }), _.current = null !== (e = I.current.getBoundingClientRect().width) && void 0 !== e ? e : 0;
      let r = function(e) {
        let {
          items: t,
          maxLines: n,
          itemWidths: i,
          itemGapPx: r,
          containerWidth: s,
          overflowWidth: a
        } = e, o = 0, l = 0, u = 0;
        for (let e = 0; e < t.length; e++) {
          let d = i[e];
          if (isNaN(d) || d > s) continue;
          let _ = o === n - 1,
            c = e === t.length - 1;
          if (!(l + d + (_ && !c ? a + r : 0) < s)) {
            if (_) break;
            o++, l = 0
          }
          u = e, l += d + r
        }
        return u
      }({
        items: n,
        maxLines: i,
        itemGapPx: t,
        containerWidth: o,
        itemWidths: d.current,
        overflowWidth: _.current
      });
      r !== c.current && (c.current = r, a(e => e + 1))
    }, [o, t, n, i]), r.useMemo(() => ({
      lastVisibleIndex: c.current,
      containerRef: T,
      itemsRef: E,
      overflowItemsRef: I,
      version: s
    }), [T, s])
  }({
    items: n,
    itemGapPx: o,
    maxLines: c
  }), S = r.useMemo(() => n.slice(0, E + 1), [n, E]), h = r.useMemo(() => n.slice(E + 1), [n, E]);
  return (0, i.jsxs)("div", {
    className: a()(t, d.items),
    ref: I,
    children: [(0, i.jsxs)("div", {
      "aria-hidden": !0,
      className: d.measurements,
      children: [(0, i.jsx)("div", {
        className: d.itemMeasurements,
        ref: T,
        children: n.map(s)
      }), (0, i.jsx)("div", {
        className: d.overflowMeasurement,
        ref: f,
        children: s(u.default.Messages.CLAN_DISCOVERY_TRAIT_OVERFLOW.format({
          count: Number("1".concat(n.length))
        }))
      })]
    }), S.map(s), h.length > 0 && (0, i.jsx)(_, {
      items: h,
      renderItem: s
    })]
  })
}