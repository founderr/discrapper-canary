"use strict";
t.r(r), t.d(r, {
  default: function() {
    return f
  }
}), t("222007"), t("424973");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  l = t.n(i),
  o = t("77078"),
  s = t("811151"),
  c = t("449008"),
  d = t("811199"),
  u = t("694735");
let h = n.forwardRef(function(e, r) {
  let {
    id: t,
    selected: n,
    onClick: i,
    children: s
  } = e;
  return (0, a.jsx)(o.Clickable, {
    className: l(u.tabItem, {
      [u.selected]: n
    }),
    "data-tab-id": t,
    innerRef: r,
    onClick: i,
    children: s
  })
});

function p(e) {
  let {
    tabs: r,
    selectedTabId: t,
    onSelectTab: i
  } = e, l = n.useRef(null), p = n.useRef(0), f = n.useRef(new Map), [m, g] = n.useState([]), b = n.useCallback(() => {
    var e, a, n, i;
    if (null == l.current) return;
    let o = [],
      s = l.current.getBoundingClientRect().width;
    if (s !== p.current) {
      for (let l of (p.current = s, s -= null !== (a = null === (e = f.current.get(t)) || void 0 === e ? void 0 : e.width) && void 0 !== a ? a : 0, r)) l.id !== t && (s -= null !== (i = null === (n = f.current.get(l.id)) || void 0 === n ? void 0 : n.width) && void 0 !== i ? i : 0) < 0 && o.push(l.id);
      g(o)
    }
  }, [r, t]), y = n.useRef(null);
  n.useEffect(() => (y.current = new ResizeObserver(() => b()), null != l.current && y.current.observe(l.current), () => {
    var e;
    null === (e = y.current) || void 0 === e || e.disconnect()
  }), [b]);
  let x = n.useCallback(e => {
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
        return m.includes(r) && t !== r ? (0, a.jsx)(o.MenuItem, {
          id: r,
          label: n,
          action: () => i(r)
        }, r) : null
      }).filter(c.isNotNullish)
    })
  }, [r, m, i, t]);
  return (0, a.jsxs)("div", {
    className: u.tabBar,
    ref: l,
    children: [r.map(e => {
      let {
        id: r,
        name: n
      } = e;
      if (!m.includes(r)) return (0, a.jsx)(h, {
        id: r,
        selected: t === r,
        ref: e => {
          var t, a, n;
          let i = null !== (a = null === (t = f.current.get(r)) || void 0 === t ? void 0 : t.width) && void 0 !== a ? a : 0;
          f.current.set(r, {
            node: e,
            width: null !== (n = null == e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : i
          })
        },
        onClick: t !== r ? () => i(r) : void 0,
        children: n
      }, r)
    }).filter(c.isNotNullish), m.length > 0 && (0, a.jsx)(a.Fragment, {
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
            className: u.overflowIcon,
            width: 16,
            height: 16
          })
        })
      })
    })]
  })
}

function f(e, r) {
  var t, i, l;
  let {
    tabs: o,
    initialSelectedTabId: s,
    onChangeTab: c
  } = e, [d, u] = n.useState(null != s ? s : null === (t = o[0]) || void 0 === t ? void 0 : t.id), h = n.useCallback(() => (0, a.jsx)(p, {
    tabs: o,
    selectedTabId: d,
    onSelectTab: e => {
      u(e), null == c || c(e)
    }
  }), [d, u, c, ...r]), f = null !== (l = null === (i = o.find(e => e.id === d)) || void 0 === i ? void 0 : i.render) && void 0 !== l ? l : () => null;
  return {
    TabBar: h,
    renderSelectedTab: f,
    selectedTabId: d
  }
}