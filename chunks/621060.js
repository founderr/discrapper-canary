"use strict";
r.r(t), r.d(t, {
  default: function() {
    return g
  }
}), r("47120"), r("653041");
var a = r("735250"),
  i = r("470079"),
  n = r("120356"),
  l = r.n(n),
  o = r("481060"),
  c = r("424625"),
  s = r("823379"),
  d = r("246992"),
  u = r("277513");
let h = i.forwardRef(function(e, t) {
  let {
    id: r,
    selected: i,
    onClick: n,
    children: c
  } = e;
  return (0, a.jsx)(o.Clickable, {
    className: l()(u.tabItem, {
      [u.selected]: i
    }),
    "data-tab-id": r,
    innerRef: t,
    onClick: n,
    children: c
  })
});

function p(e) {
  let {
    tabs: t,
    selectedTabId: r,
    onSelectTab: n
  } = e, l = i.useRef(null), p = i.useRef(0), g = i.useRef(new Map), [m, f] = i.useState([]), y = i.useCallback(() => {
    var e, a, i, n;
    if (null == l.current) return;
    let o = [],
      c = l.current.getBoundingClientRect().width;
    if (c !== p.current) {
      for (let l of (p.current = c, c -= null !== (a = null === (e = g.current.get(r)) || void 0 === e ? void 0 : e.width) && void 0 !== a ? a : 0, t)) l.id !== r && (c -= null !== (n = null === (i = g.current.get(l.id)) || void 0 === i ? void 0 : i.width) && void 0 !== n ? n : 0) < 0 && o.push(l.id);
      f(o)
    }
  }, [t, r]), b = i.useRef(null);
  i.useEffect(() => (b.current = new ResizeObserver(() => y()), null != l.current && b.current.observe(l.current), () => {
    var e;
    null === (e = b.current) || void 0 === e || e.disconnect()
  }), [y]);
  let x = i.useCallback(e => {
    let {
      closePopout: i
    } = e;
    return (0, a.jsx)(o.Menu, {
      navId: "devtools-overflow",
      variant: "fixed",
      onClose: i,
      "aria-label": "Overflowed DevTools Tabs",
      onSelect: i,
      children: t.map(e => {
        let {
          id: t,
          name: i
        } = e;
        return m.includes(t) && r !== t ? (0, a.jsx)(o.MenuItem, {
          id: t,
          label: i,
          action: () => n(t)
        }, t) : null
      }).filter(s.isNotNullish)
    })
  }, [t, m, n, r]);
  return (0, a.jsxs)("div", {
    className: u.tabBar,
    ref: l,
    children: [t.map(e => {
      let {
        id: t,
        name: i
      } = e;
      if (!m.includes(t)) return (0, a.jsx)(h, {
        id: t,
        selected: r === t,
        ref: e => {
          var r, a, i;
          let n = null !== (a = null === (r = g.current.get(t)) || void 0 === r ? void 0 : r.width) && void 0 !== a ? a : 0;
          g.current.set(t, {
            node: e,
            width: null !== (i = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== i ? i : n
          })
        },
        onClick: r !== t ? () => n(t) : void 0,
        children: i
      }, t)
    }).filter(s.isNotNullish), m.length > 0 && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(o.Popout, {
        layerContext: d.devToolsLayerContext,
        renderPopout: x,
        position: "bottom",
        align: "right",
        spacing: 0,
        children: e => (0, a.jsx)(o.Button, {
          ...e,
          className: u.overflowChevron,
          size: o.Button.Sizes.ICON,
          look: o.Button.Looks.BLANK,
          children: (0, a.jsx)(c.default, {
            className: u.__invalid_overflowIcon,
            width: 16,
            height: 16
          })
        })
      })
    })]
  })
}

function g(e, t) {
  var r, n, l;
  let {
    tabs: o,
    initialSelectedTabId: c,
    onChangeTab: s
  } = e, [d, u] = i.useState(null != c ? c : null === (r = o[0]) || void 0 === r ? void 0 : r.id), h = i.useCallback(() => (0, a.jsx)(p, {
    tabs: o,
    selectedTabId: d,
    onSelectTab: e => {
      u(e), null == s || s(e)
    }
  }), [d, u, s, ...t]);
  return {
    TabBar: h,
    renderSelectedTab: null !== (l = null === (n = o.find(e => e.id === d)) || void 0 === n ? void 0 : n.render) && void 0 !== l ? l : () => null,
    selectedTabId: d
  }
}