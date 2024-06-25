t.d(r, {
  Z: function() {
    return g
  }
}), t(47120), t(653041);
var a = t(735250),
  n = t(470079),
  i = t(120356),
  l = t.n(i),
  o = t(481060),
  c = t(424625),
  s = t(823379),
  d = t(246992),
  u = t(719556);
let h = n.forwardRef(function(e, r) {
  let {
    id: t,
    selected: n,
    onClick: i,
    children: c
  } = e;
  return (0, a.jsx)(o.Clickable, {
    className: l()(u.tabItem, {
      [u.selected]: n
    }),
    "data-tab-id": t,
    innerRef: r,
    onClick: i,
    children: c
  })
});

function m(e) {
  let {
    tabs: r,
    selectedTabId: t,
    onSelectTab: i
  } = e, l = n.useRef(null), m = n.useRef(0), g = n.useRef(new Map), [p, b] = n.useState([]), y = n.useCallback(() => {
    var e, a, n, i;
    if (null == l.current) return;
    let o = [],
      c = l.current.getBoundingClientRect().width;
    if (c !== m.current) {
      for (let l of (m.current = c, c -= null !== (a = null === (e = g.current.get(t)) || void 0 === e ? void 0 : e.width) && void 0 !== a ? a : 0, r)) {
        if (l.id !== t)(c -= null !== (i = null === (n = g.current.get(l.id)) || void 0 === n ? void 0 : n.width) && void 0 !== i ? i : 0) < 0 && o.push(l.id)
      }
      b(o)
    }
  }, [r, t]), x = n.useRef(null);
  n.useEffect(() => (x.current = new ResizeObserver(() => y()), null != l.current && x.current.observe(l.current), () => {
    var e;
    null === (e = x.current) || void 0 === e || e.disconnect()
  }), [y]);
  let f = n.useCallback(e => {
    let {
      closePopout: n
    } = e;
    return (0, a.jsx)(o.Menu, {
      navId: "devtools-overflow",
      variant: "fixed",
      onClose: n,
      "aria-label": "Overflowed DevTools Tabs",
      onSelect: n,
      children: r.map(e => {
        let {
          id: r,
          name: n
        } = e;
        return p.includes(r) && t !== r ? (0, a.jsx)(o.MenuItem, {
          id: r,
          label: n,
          action: () => i(r)
        }, r) : null
      }).filter(s.lm)
    })
  }, [r, p, i, t]);
  return (0, a.jsxs)("div", {
    className: u.tabBar,
    ref: l,
    children: [r.map(e => {
      let {
        id: r,
        name: n
      } = e;
      if (!p.includes(r)) return (0, a.jsx)(h, {
        id: r,
        selected: t === r,
        ref: e => {
          var t, a, n;
          let i = null !== (a = null === (t = g.current.get(r)) || void 0 === t ? void 0 : t.width) && void 0 !== a ? a : 0;
          g.current.set(r, {
            node: e,
            width: null !== (n = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : i
          })
        },
        onClick: t !== r ? () => i(r) : void 0,
        children: n
      }, r)
    }).filter(s.lm), p.length > 0 && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(o.Popout, {
        layerContext: d.O$,
        renderPopout: f,
        position: "bottom",
        align: "right",
        spacing: 0,
        children: e => (0, a.jsx)(o.Button, {
          ...e,
          className: u.overflowChevron,
          size: o.Button.Sizes.ICON,
          look: o.Button.Looks.BLANK,
          children: (0, a.jsx)(c.Z, {
            className: u.__invalid_overflowIcon,
            width: 16,
            height: 16
          })
        })
      })
    })]
  })
}

function g(e, r) {
  var t, i, l;
  let {
    tabs: o,
    initialSelectedTabId: c,
    onChangeTab: s
  } = e, [d, u] = n.useState(null != c ? c : null === (t = o[0]) || void 0 === t ? void 0 : t.id), h = n.useCallback(() => (0, a.jsx)(m, {
    tabs: o,
    selectedTabId: d,
    onSelectTab: e => {
      u(e), null == s || s(e)
    }
  }), [d, u, s, ...r]);
  return {
    TabBar: h,
    renderSelectedTab: null !== (l = null === (i = o.find(e => e.id === d)) || void 0 === i ? void 0 : i.render) && void 0 !== l ? l : () => null,
    selectedTabId: d
  }
}