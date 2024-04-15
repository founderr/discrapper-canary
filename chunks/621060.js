"use strict";
r.r(t), r.d(t, {
  default: function() {
    return m
  }
}), r("47120"), r("653041");
var a = r("735250"),
  n = r("470079"),
  i = r("120356"),
  o = r.n(i),
  l = r("481060"),
  s = r("424625"),
  c = r("823379"),
  d = r("246992"),
  u = r("779869");
let h = n.forwardRef(function(e, t) {
  let {
    id: r,
    selected: n,
    onClick: i,
    children: s
  } = e;
  return (0, a.jsx)(l.Clickable, {
    className: o()(u.tabItem, {
      [u.selected]: n
    }),
    "data-tab-id": r,
    innerRef: t,
    onClick: i,
    children: s
  })
});

function p(e) {
  let {
    tabs: t,
    selectedTabId: r,
    onSelectTab: i
  } = e, o = n.useRef(null), p = n.useRef(0), m = n.useRef(new Map), [g, f] = n.useState([]), y = n.useCallback(() => {
    var e, a, n, i;
    if (null == o.current) return;
    let l = [],
      s = o.current.getBoundingClientRect().width;
    if (s !== p.current) {
      for (let o of (p.current = s, s -= null !== (a = null === (e = m.current.get(r)) || void 0 === e ? void 0 : e.width) && void 0 !== a ? a : 0, t)) o.id !== r && (s -= null !== (i = null === (n = m.current.get(o.id)) || void 0 === n ? void 0 : n.width) && void 0 !== i ? i : 0) < 0 && l.push(o.id);
      f(l)
    }
  }, [t, r]), b = n.useRef(null);
  n.useEffect(() => (b.current = new ResizeObserver(() => y()), null != o.current && b.current.observe(o.current), () => {
    var e;
    null === (e = b.current) || void 0 === e || e.disconnect()
  }), [y]);
  let x = n.useCallback(e => {
    let {
      closePopout: n
    } = e;
    return (0, a.jsx)(l.Menu, {
      navId: "devtools-overflow",
      variant: "fixed",
      onClose: n,
      "aria-label": "Overflowed DevTools Tabs",
      onSelect: n,
      children: t.map(e => {
        let {
          id: t,
          name: n
        } = e;
        return g.includes(t) && r !== t ? (0, a.jsx)(l.MenuItem, {
          id: t,
          label: n,
          action: () => i(t)
        }, t) : null
      }).filter(c.isNotNullish)
    })
  }, [t, g, i, r]);
  return (0, a.jsxs)("div", {
    className: u.tabBar,
    ref: o,
    children: [t.map(e => {
      let {
        id: t,
        name: n
      } = e;
      if (!g.includes(t)) return (0, a.jsx)(h, {
        id: t,
        selected: r === t,
        ref: e => {
          var r, a, n;
          let i = null !== (a = null === (r = m.current.get(t)) || void 0 === r ? void 0 : r.width) && void 0 !== a ? a : 0;
          m.current.set(t, {
            node: e,
            width: null !== (n = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : i
          })
        },
        onClick: r !== t ? () => i(t) : void 0,
        children: n
      }, t)
    }).filter(c.isNotNullish), g.length > 0 && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(l.Popout, {
        layerContext: d.devToolsLayerContext,
        renderPopout: x,
        position: "bottom",
        align: "right",
        spacing: 0,
        children: e => (0, a.jsx)(l.Button, {
          ...e,
          className: u.overflowChevron,
          size: l.Button.Sizes.ICON,
          look: l.Button.Looks.BLANK,
          children: (0, a.jsx)(s.default, {
            className: u.__invalid_overflowIcon,
            width: 16,
            height: 16
          })
        })
      })
    })]
  })
}

function m(e, t) {
  var r, i, o;
  let {
    tabs: l,
    initialSelectedTabId: s,
    onChangeTab: c
  } = e, [d, u] = n.useState(null != s ? s : null === (r = l[0]) || void 0 === r ? void 0 : r.id), h = n.useCallback(() => (0, a.jsx)(p, {
    tabs: l,
    selectedTabId: d,
    onSelectTab: e => {
      u(e), null == c || c(e)
    }
  }), [d, u, c, ...t]);
  return {
    TabBar: h,
    renderSelectedTab: null !== (o = null === (i = l.find(e => e.id === d)) || void 0 === i ? void 0 : i.render) && void 0 !== o ? o : () => null,
    selectedTabId: d
  }
}