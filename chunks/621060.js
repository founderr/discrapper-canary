t.d(r, {
  Z: function() {
    return g
  }
}), t(47120), t(653041);
var a = t(735250),
  i = t(470079),
  n = t(120356),
  o = t.n(n),
  l = t(481060),
  c = t(424625),
  s = t(823379),
  d = t(246992),
  u = t(719556);
let h = i.forwardRef(function(e, r) {
  let {
    id: t,
    selected: i,
    onClick: n,
    children: c
  } = e;
  return (0, a.jsx)(l.Clickable, {
    className: o()(u.tabItem, {
      [u.selected]: i
    }),
    "data-tab-id": t,
    innerRef: r,
    onClick: n,
    children: c
  })
});

function m(e) {
  let {
    tabs: r,
    selectedTabId: t,
    onSelectTab: n
  } = e, o = i.useRef(null), m = i.useRef(0), g = i.useRef(new Map), [p, b] = i.useState([]), y = i.useCallback(() => {
    var e, a, i, n;
    if (null == o.current) return;
    let l = [],
      c = o.current.getBoundingClientRect().width;
    if (c !== m.current) {
      for (let o of (m.current = c, c -= null !== (a = null === (e = g.current.get(t)) || void 0 === e ? void 0 : e.width) && void 0 !== a ? a : 0, r)) {
        if (o.id !== t)(c -= null !== (n = null === (i = g.current.get(o.id)) || void 0 === i ? void 0 : i.width) && void 0 !== n ? n : 0) < 0 && l.push(o.id)
      }
      b(l)
    }
  }, [r, t]), x = i.useRef(null);
  i.useEffect(() => (x.current = new ResizeObserver(() => y()), null != o.current && x.current.observe(o.current), () => {
    var e;
    null === (e = x.current) || void 0 === e || e.disconnect()
  }), [y]);
  let f = i.useCallback(e => {
    let {
      closePopout: i
    } = e;
    return (0, a.jsx)(l.Menu, {
      navId: "devtools-overflow",
      variant: "fixed",
      onClose: i,
      "aria-label": "Overflowed DevTools Tabs",
      onSelect: i,
      children: r.map(e => {
        let {
          id: r,
          name: i
        } = e;
        return p.includes(r) && t !== r ? (0, a.jsx)(l.MenuItem, {
          id: r,
          label: i,
          action: () => n(r)
        }, r) : null
      }).filter(s.lm)
    })
  }, [r, p, n, t]);
  return (0, a.jsxs)("div", {
    className: u.tabBar,
    ref: o,
    children: [r.map(e => {
      let {
        id: r,
        name: i
      } = e;
      if (!p.includes(r)) return (0, a.jsx)(h, {
        id: r,
        selected: t === r,
        ref: e => {
          var t, a, i;
          let n = null !== (a = null === (t = g.current.get(r)) || void 0 === t ? void 0 : t.width) && void 0 !== a ? a : 0;
          g.current.set(r, {
            node: e,
            width: null !== (i = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== i ? i : n
          })
        },
        onClick: t !== r ? () => n(r) : void 0,
        children: i
      }, r)
    }).filter(s.lm), p.length > 0 && (0, a.jsx)(a.Fragment, {
      children: (0, a.jsx)(l.Popout, {
        layerContext: d.O$,
        renderPopout: f,
        position: "bottom",
        align: "right",
        spacing: 0,
        children: e => (0, a.jsx)(l.Button, {
          ...e,
          className: u.overflowChevron,
          size: l.Button.Sizes.ICON,
          look: l.Button.Looks.BLANK,
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
  var t, n, o;
  let {
    tabs: l,
    initialSelectedTabId: c,
    onChangeTab: s
  } = e, [d, u] = i.useState(null != c ? c : null === (t = l[0]) || void 0 === t ? void 0 : t.id), h = i.useCallback(() => (0, a.jsx)(m, {
    tabs: l,
    selectedTabId: d,
    onSelectTab: e => {
      u(e), null == s || s(e)
    }
  }), [d, u, s, ...r]);
  return {
    TabBar: h,
    renderSelectedTab: null !== (o = null === (n = l.find(e => e.id === d)) || void 0 === n ? void 0 : n.render) && void 0 !== o ? o : () => null,
    selectedTabId: d
  }
}