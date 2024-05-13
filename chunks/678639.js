"use strict";
r.r(t), r.d(t, {
  default: function() {
    return C
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("442837"),
  s = r("481060"),
  c = r("6048"),
  d = r("548420"),
  u = r("502568"),
  h = r("428530"),
  m = r("484036"),
  p = r("681619"),
  g = r("621060"),
  f = r("277513"),
  y = r("672822");

function b(e, t) {
  return e.store.getName().localeCompare(t.store.getName())
}

function x(e) {
  let {
    store: t,
    dataGetter: r
  } = e, [l, n] = i.useState(r(t));
  return i.useEffect(() => {
    let e = () => n(r(t));
    return e(), t.addChangeListener(e), () => {
      t.removeChangeListener(e)
    }
  }, [t, r]), (0, a.jsx)(s.ScrollerThin, {
    className: y.inspectorContainer,
    children: (0, a.jsx)(h.default, {
      data: l
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

function j(e) {
  let {
    store: t,
    initialHeight: r
  } = e, {
    TabBar: i,
    renderSelectedTab: l
  } = (0, g.default)({
    tabs: v
  }, []);
  return (0, a.jsxs)(m.default, {
    className: y.subPanel,
    minHeight: 100,
    initialHeight: r,
    children: [(0, a.jsx)(i, {}), (0, a.jsxs)(u.default, {
      className: n()(f.headerBar, y.subPanelHeaderBar),
      children: [(0, a.jsx)(u.default.Icon, {
        icon: d.default,
        tooltip: t.getName()
      }), (0, a.jsx)(u.default.Title, {
        children: t.getName()
      })]
    }), l({
      store: t
    })]
  })
}

function C() {
  let e = i.useRef(null),
    [t, r] = i.useState(""),
    l = o.Store.getAll(),
    d = i.useMemo(() => l.map(e => ({
      key: e._dispatchToken,
      store: e
    })).sort(b), [l]).filter(e => (function(e, t) {
      let {
        store: r
      } = e;
      return r.getName().toLowerCase().includes(t.toLowerCase())
    })(e, t)),
    [u, h] = i.useState(),
    m = l.find(e => e._dispatchToken === u);
  return (0, a.jsxs)("div", {
    ref: e,
    className: n()(f.panel, y.panel),
    children: [(0, a.jsx)("div", {
      className: y.toolbar,
      children: (0, a.jsx)(c.default, {
        className: y.searchBar,
        size: c.default.Sizes.SMALL,
        query: t,
        onChange: r,
        onClear: () => r(""),
        placeholder: "Search stores",
        "aria-label": "Search stores"
      })
    }), (0, a.jsx)(s.ScrollerThin, {
      className: y.tableContainer,
      children: (0, a.jsx)(p.default, {
        columns: k,
        data: d,
        selectedRowKey: u,
        onClickRow: h
      })
    }), null != m && (0, a.jsx)(j, {
      store: m,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}