"use strict";
r.r(t), r.d(t, {
  default: function() {
    return S
  }
}), r("47120");
var a = r("735250"),
  n = r("470079"),
  i = r("803997"),
  o = r.n(i),
  l = r("442837"),
  s = r("481060"),
  c = r("6048"),
  d = r("548420"),
  u = r("502568"),
  h = r("428530"),
  p = r("484036"),
  m = r("681619"),
  g = r("621060"),
  f = r("779869"),
  b = r("852535");

function y(e, t) {
  return e.store.getName().localeCompare(t.store.getName())
}

function x(e) {
  let {
    store: t,
    dataGetter: r
  } = e, [i, o] = n.useState(r(t));
  return n.useEffect(() => {
    let e = () => o(r(t));
    return e(), t.addChangeListener(e), () => {
      t.removeChangeListener(e)
    }
  }, [t, r]), (0, a.jsx)(s.ScrollerThin, {
    className: b.inspectorContainer,
    children: (0, a.jsx)(h.default, {
      data: i
    })
  })
}
let k = [{
    key: "name",
    cellClassName: b.__invalid_eventColumn,
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
        className: b.inspectorContainer,
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

function C(e) {
  let {
    store: t,
    initialHeight: r
  } = e, {
    TabBar: n,
    renderSelectedTab: i
  } = (0, g.default)({
    tabs: v
  }, []);
  return (0, a.jsxs)(p.default, {
    className: b.subPanel,
    minHeight: 100,
    initialHeight: r,
    children: [(0, a.jsx)(n, {}), (0, a.jsxs)(u.default, {
      className: o()(f.headerBar, b.subPanelHeaderBar),
      children: [(0, a.jsx)(u.default.Icon, {
        icon: d.default,
        tooltip: t.getName()
      }), (0, a.jsx)(u.default.Title, {
        children: t.getName()
      })]
    }), i({
      store: t
    })]
  })
}

function S() {
  let e = n.useRef(null),
    [t, r] = n.useState(""),
    i = l.Store.getAll(),
    d = n.useMemo(() => i.map(e => ({
      key: e._dispatchToken,
      store: e
    })).sort(y), [i]).filter(e => (function(e, t) {
      let {
        store: r
      } = e;
      return r.getName().toLowerCase().includes(t.toLowerCase())
    })(e, t)),
    [u, h] = n.useState(),
    p = i.find(e => e._dispatchToken === u);
  return (0, a.jsxs)("div", {
    ref: e,
    className: o()(f.panel, b.panel),
    children: [(0, a.jsx)("div", {
      className: b.toolbar,
      children: (0, a.jsx)(c.default, {
        className: b.searchBar,
        size: c.default.Sizes.SMALL,
        query: t,
        onChange: r,
        onClear: () => r(""),
        placeholder: "Search stores",
        "aria-label": "Search stores"
      })
    }), (0, a.jsx)(s.ScrollerThin, {
      className: b.tableContainer,
      children: (0, a.jsx)(m.default, {
        columns: k,
        data: d,
        selectedRowKey: u,
        onClickRow: h
      })
    }), null != p && (0, a.jsx)(C, {
      store: p,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}