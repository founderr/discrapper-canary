"use strict";
r.r(t), r.d(t, {
  default: function() {
    return p
  }
}), r("47120"), r("653041");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("481060"),
  s = r("424625"),
  c = r("823379"),
  d = r("246992"),
  u = r("277513");
let h = i.forwardRef(function(e, t) {
  let {
    id: r,
    selected: i,
    onClick: l,
    children: s
  } = e;
  return (0, a.jsx)(o.Clickable, {
    className: n()(u.tabItem, {
      [u.selected]: i
    }),
    "data-tab-id": r,
    innerRef: t,
    onClick: l,
    children: s
  })
});

function m(e) {
  let {
    tabs: t,
    selectedTabId: r,
    onSelectTab: l
  } = e, n = i.useRef(null), m = i.useRef(0), p = i.useRef(new Map), [g, f] = i.useState([]), y = i.useCallback(() => {
    var e, a, i, l;
    if (null == n.current) return;
    let o = [],
      s = n.current.getBoundingClientRect().width;
    if (s !== m.current) {
      for (let n of (m.current = s, s -= null !== (a = null === (e = p.current.get(r)) || void 0 === e ? void 0 : e.width) && void 0 !== a ? a : 0, t)) n.id !== r && (s -= null !== (l = null === (i = p.current.get(n.id)) || void 0 === i ? void 0 : i.width) && void 0 !== l ? l : 0) < 0 && o.push(n.id);
      f(o)
    }
  }, [t, r]), b = i.useRef(null);
  i.useEffect(() => (b.current = new ResizeObserver(() => y()), null != n.current && b.current.observe(n.current), () => {
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
        return g.includes(t) && r !== t ? (0, a.jsx)(o.MenuItem, {
          id: t,
          label: i,
          action: () => l(t)
        }, t) : null
      }).filter(c.isNotNullish)
    })
  }, [t, g, l, r]);
  return (0, a.jsxs)("div", {
    className: u.tabBar,
    ref: n,
    children: [t.map(e => {
      let {
        id: t,
        name: i
      } = e;
      if (!g.includes(t)) return (0, a.jsx)(h, {
        id: t,
        selected: r === t,
        ref: e => {
          var r, a, i;
          let l = null !== (a = null === (r = p.current.get(t)) || void 0 === r ? void 0 : r.width) && void 0 !== a ? a : 0;
          p.current.set(t, {
            node: e,
            width: null !== (i = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== i ? i : l
          })
        },
        onClick: r !== t ? () => l(t) : void 0,
        children: i
      }, t)
    }).filter(c.isNotNullish), g.length > 0 && (0, a.jsx)(a.Fragment, {
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

function p(e, t) {
  var r, l, n;
  let {
    tabs: o,
    initialSelectedTabId: s,
    onChangeTab: c
  } = e, [d, u] = i.useState(null != s ? s : null === (r = o[0]) || void 0 === r ? void 0 : r.id), h = i.useCallback(() => (0, a.jsx)(m, {
    tabs: o,
    selectedTabId: d,
    onSelectTab: e => {
      u(e), null == c || c(e)
    }
  }), [d, u, c, ...t]);
  return {
    TabBar: h,
    renderSelectedTab: null !== (n = null === (l = o.find(e => e.id === d)) || void 0 === l ? void 0 : l.render) && void 0 !== n ? n : () => null,
    selectedTabId: d
  }
}