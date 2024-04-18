"use strict";
t.r(r), t.d(r, {
  default: function() {
    return C
  }
}), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  o = t("442837"),
  c = t("481060"),
  s = t("6048"),
  d = t("548420"),
  u = t("502568"),
  h = t("428530"),
  m = t("484036"),
  g = t("681619"),
  p = t("621060"),
  f = t("779869"),
  b = t("852535");

function y(e, r) {
  return e.store.getName().localeCompare(r.store.getName())
}

function x(e) {
  let {
    store: r,
    dataGetter: t
  } = e, [l, n] = i.useState(t(r));
  return i.useEffect(() => {
    let e = () => n(t(r));
    return e(), r.addChangeListener(e), () => {
      r.removeChangeListener(e)
    }
  }, [r, t]), (0, a.jsx)(c.ScrollerThin, {
    className: b.inspectorContainer,
    children: (0, a.jsx)(h.default, {
      data: l
    })
  })
}
let k = [{
    key: "name",
    cellClassName: b.__invalid_eventColumn,
    render(e) {
      let {
        store: r
      } = e;
      return r.getName()
    }
  }],
  v = [{
    id: "local",
    name: "Local Variables",
    render(e) {
      let {
        store: r
      } = e;
      return null == r.__getLocalVars ? (0, a.jsxs)("div", {
        className: b.inspectorContainer,
        children: ["Store is missing ", (0, a.jsx)("code", {
          children: "__getLocalVars"
        }), " method."]
      }) : (0, a.jsx)(x, {
        store: r,
        dataGetter: e => e.__getLocalVars()
      })
    }
  }, {
    id: "instance",
    name: "Store Instance",
    render(e) {
      let {
        store: r
      } = e;
      return (0, a.jsx)(x, {
        store: r,
        dataGetter: e => e
      })
    }
  }];

function j(e) {
  let {
    store: r,
    initialHeight: t
  } = e, {
    TabBar: i,
    renderSelectedTab: l
  } = (0, p.default)({
    tabs: v
  }, []);
  return (0, a.jsxs)(m.default, {
    className: b.subPanel,
    minHeight: 100,
    initialHeight: t,
    children: [(0, a.jsx)(i, {}), (0, a.jsxs)(u.default, {
      className: n()(f.headerBar, b.subPanelHeaderBar),
      children: [(0, a.jsx)(u.default.Icon, {
        icon: d.default,
        tooltip: r.getName()
      }), (0, a.jsx)(u.default.Title, {
        children: r.getName()
      })]
    }), l({
      store: r
    })]
  })
}

function C() {
  let e = i.useRef(null),
    [r, t] = i.useState(""),
    l = o.Store.getAll(),
    d = i.useMemo(() => l.map(e => ({
      key: e._dispatchToken,
      store: e
    })).sort(y), [l]).filter(e => (function(e, r) {
      let {
        store: t
      } = e;
      return t.getName().toLowerCase().includes(r.toLowerCase())
    })(e, r)),
    [u, h] = i.useState(),
    m = l.find(e => e._dispatchToken === u);
  return (0, a.jsxs)("div", {
    ref: e,
    className: n()(f.panel, b.panel),
    children: [(0, a.jsx)("div", {
      className: b.toolbar,
      children: (0, a.jsx)(s.default, {
        className: b.searchBar,
        size: s.default.Sizes.SMALL,
        query: r,
        onChange: t,
        onClear: () => t(""),
        placeholder: "Search stores",
        "aria-label": "Search stores"
      })
    }), (0, a.jsx)(c.ScrollerThin, {
      className: b.tableContainer,
      children: (0, a.jsx)(g.default, {
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