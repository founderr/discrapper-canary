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
  s = r("6048"),
  d = r("548420"),
  u = r("502568"),
  h = r("428530"),
  p = r("484036"),
  g = r("681619"),
  m = r("621060"),
  f = r("277513"),
  y = r("672822");

function b(e, t) {
  return e.store.getName().localeCompare(t.store.getName())
}

function x(e) {
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
    className: y.inspectorContainer,
    children: (0, a.jsx)(h.default, {
      data: n
    })
  })
}
let k = [{
    key: "name",
    cellClassName: y.__invalid_eventColumn,
    render(e) {
      let {
        store: t
      } = e;
      return t.getName()
    }
  }],
  v = [{
    id: "local",
    name: "Local Variables",
    render(e) {
      let {
        store: t
      } = e;
      return null == t.__getLocalVars ? (0, a.jsxs)("div", {
        className: y.inspectorContainer,
        children: ["Store is missing ", (0, a.jsx)("code", {
          children: "__getLocalVars"
        }), " method."]
      }) : (0, a.jsx)(x, {
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
      return (0, a.jsx)(x, {
        store: t,
        dataGetter: e => e
      })
    }
  }];

function T(e) {
  let {
    store: t,
    initialHeight: r
  } = e, {
    TabBar: i,
    renderSelectedTab: n
  } = (0, m.default)({
    tabs: v
  }, []);
  return (0, a.jsxs)(p.default, {
    className: y.subPanel,
    minHeight: 100,
    initialHeight: r,
    children: [(0, a.jsx)(i, {}), (0, a.jsxs)(u.default, {
      className: l()(f.headerBar, y.subPanelHeaderBar),
      children: [(0, a.jsx)(u.default.Icon, {
        icon: d.default,
        tooltip: t.getName()
      }), (0, a.jsx)(u.default.Title, {
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
    d = i.useMemo(() => n.map(e => ({
      key: e._dispatchToken,
      store: e
    })).sort(b), [n]).filter(e => (function(e, t) {
      let {
        store: r
      } = e;
      return r.getName().toLowerCase().includes(t.toLowerCase())
    })(e, t)),
    [u, h] = i.useState(),
    p = n.find(e => e._dispatchToken === u);
  return (0, a.jsxs)("div", {
    ref: e,
    className: l()(f.panel, y.panel),
    children: [(0, a.jsx)("div", {
      className: y.toolbar,
      children: (0, a.jsx)(s.default, {
        className: y.searchBar,
        size: s.default.Sizes.SMALL,
        query: t,
        onChange: r,
        onClear: () => r(""),
        placeholder: "Search stores",
        "aria-label": "Search stores"
      })
    }), (0, a.jsx)(c.ScrollerThin, {
      className: y.tableContainer,
      children: (0, a.jsx)(g.default, {
        columns: k,
        data: d,
        selectedRowKey: u,
        onClickRow: h
      })
    }), null != p && (0, a.jsx)(T, {
      store: p,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}