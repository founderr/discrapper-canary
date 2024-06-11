"use strict";
r.r(t), r.d(t, {
  default: function() {
    return S
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  n = r("120356"),
  l = r.n(n),
  o = r("442837"),
  c = r("481060"),
  s = r("548420"),
  d = r("502568"),
  u = r("428530"),
  h = r("484036"),
  p = r("681619"),
  g = r("621060"),
  m = r("277513"),
  f = r("672822");

function y(e, t) {
  return e.store.getName().localeCompare(t.store.getName())
}

function b(e) {
  let {
    store: t,
    dataGetter: r
  } = e, [n, l] = i.useState(r(t));
  return i.useEffect(() => {
    let e = () => l(r(t));
    return e(), t.addChangeListener(e), () => {
      t.removeChangeListener(e)
    }
  }, [t, r]), (0, a.jsx)(c.ScrollerThin, {
    className: f.inspectorContainer,
    children: (0, a.jsx)(u.default, {
      data: n
    })
  })
}
let x = [{
    key: "name",
    cellClassName: f.__invalid_eventColumn,
    render(e) {
      let {
        store: t
      } = e;
      return t.getName()
    }
  }],
  k = [{
    id: "local",
    name: "Local Variables",
    render(e) {
      let {
        store: t
      } = e;
      return null == t.__getLocalVars ? (0, a.jsxs)("div", {
        className: f.inspectorContainer,
        children: ["Store is missing ", (0, a.jsx)("code", {
          children: "__getLocalVars"
        }), " method."]
      }) : (0, a.jsx)(b, {
        store: t,
        dataGetter: e => e.__getLocalVars()
      })
    }
  }, {
    id: "instance",
    name: "Store Instance",
    render(e) {
      let {
        store: t
      } = e;
      return (0, a.jsx)(b, {
        store: t,
        dataGetter: e => e
      })
    }
  }];

function v(e) {
  let {
    store: t,
    initialHeight: r
  } = e, {
    TabBar: i,
    renderSelectedTab: n
  } = (0, g.default)({
    tabs: k
  }, []);
  return (0, a.jsxs)(h.default, {
    className: f.subPanel,
    minHeight: 100,
    initialHeight: r,
    children: [(0, a.jsx)(i, {}), (0, a.jsxs)(d.default, {
      className: l()(m.headerBar, f.subPanelHeaderBar),
      children: [(0, a.jsx)(d.default.Icon, {
        icon: s.default,
        tooltip: t.getName()
      }), (0, a.jsx)(d.default.Title, {
        children: t.getName()
      })]
    }), n({
      store: t
    })]
  })
}

function S() {
  let e = i.useRef(null),
    [t, r] = i.useState(""),
    n = o.Store.getAll(),
    s = i.useMemo(() => n.map(e => ({
      key: e._dispatchToken,
      store: e
    })).sort(y), [n]).filter(e => (function(e, t) {
      let {
        store: r
      } = e;
      return r.getName().toLowerCase().includes(t.toLowerCase())
    })(e, t)),
    [d, u] = i.useState(),
    h = n.find(e => e._dispatchToken === d);
  return (0, a.jsxs)("div", {
    ref: e,
    className: l()(m.panel, f.panel),
    children: [(0, a.jsx)("div", {
      className: f.toolbar,
      children: (0, a.jsx)(c.SearchBar, {
        className: f.searchBar,
        size: c.SearchBar.Sizes.SMALL,
        query: t,
        onChange: r,
        onClear: () => r(""),
        placeholder: "Search stores",
        "aria-label": "Search stores"
      })
    }), (0, a.jsx)(c.ScrollerThin, {
      className: f.tableContainer,
      children: (0, a.jsx)(p.default, {
        columns: x,
        data: s,
        selectedRowKey: d,
        onClickRow: u
      })
    }), null != h && (0, a.jsx)(v, {
      store: h,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}