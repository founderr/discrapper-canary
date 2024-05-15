"use strict";
r.r(t), r.d(t, {
  default: function() {
    return E
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("913527"),
  s = r.n(o),
  c = r("481060"),
  d = r("570140"),
  u = r("435274"),
  h = r("4912"),
  m = r("502568"),
  p = r("55935"),
  g = r("428530"),
  f = r("257785"),
  y = r("484036"),
  b = r("681619"),
  x = r("621060"),
  k = r("585864"),
  v = r("277513");

function C(e) {
  return parseFloat(e.toFixed(3))
}
let j = [{
  key: "store",
  cellClassName: k.actionColumn,
  render(e) {
    let {
      trace: t
    } = e;
    return t.name
  }
}, {
  key: "time",
  cellClassName: k.totalTimeColumn,
  render(e) {
    let {
      trace: t
    } = e;
    return "".concat(C(t.time), " ms")
  }
}];

function S(e) {
  let {
    actionLog: t
  } = e, r = i.useMemo(() => t.traces.map(e => ({
    key: e.name,
    trace: e
  })), [t]);
  return (0, a.jsx)(c.ScrollerThin, {
    children: (0, a.jsx)(b.default, {
      columns: j,
      data: r
    })
  })
}
let T = [{
  id: "action",
  name: "Action",
  render(e) {
    var t;
    let {
      actionLog: r
    } = e, i = s()(r.createdAt);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(f.Properties, {
        className: k.actionProperties,
        children: [(0, a.jsx)(f.Property, {
          name: "Created at",
          children: (0, a.jsx)("time", {
            dateTime: null === (t = r.createdAt) || void 0 === t ? void 0 : t.toISOString(),
            title: (0, p.dateFormat)(i, "LLLL"),
            children: (0, p.calendarFormat)(i)
          })
        }), (0, a.jsxs)(f.Property, {
          name: "Total Time",
          children: [C(r.totalTime), " ms"]
        })]
      }), (0, a.jsx)(c.ScrollerThin, {
        className: k.inspectorContainer,
        children: (0, a.jsx)(g.default, {
          data: r.action
        })
      })]
    })
  }
}, {
  id: "traces",
  name: "Store Handlers",
  render(e) {
    let {
      actionLog: t
    } = e;
    return (0, a.jsx)(S, {
      actionLog: t
    })
  }
}];

function N(e) {
  let {
    actionLog: t,
    initialHeight: r
  } = e, l = i.useMemo(() => t.error ? [...T, {
    id: "error",
    name: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(h.default, {
        className: k.errorIcon
      }), "Error"]
    }),
    render(e) {
      let {
        actionLog: t
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: n()(k.errorToolbar, v.toolbar),
          children: (0, a.jsx)("div", {
            className: v.toolbarGroup,
            children: (0, a.jsx)(c.Button, {
              className: v.toolbarButton,
              size: c.Button.Sizes.MIN,
              onClick: () => console.error(t.error),
              children: "Log to Console"
            })
          })
        }), (0, a.jsx)(c.ScrollerThin, {
          className: k.inspectorContainer,
          children: (0, a.jsx)(g.default, {
            data: t.error
          })
        })]
      })
    }
  }] : T, [t]), {
    TabBar: o,
    renderSelectedTab: s
  } = (0, x.default)({
    tabs: l
  }, [l]);
  return (0, a.jsxs)(y.default, {
    className: k.subPanel,
    minHeight: 100,
    initialHeight: r,
    children: [(0, a.jsx)(o, {}), (0, a.jsxs)(m.default, {
      className: n()(v.headerBar, k.subPanelHeaderBar),
      children: [(0, a.jsx)(m.default.Icon, {
        icon: u.default,
        tooltip: t.name
      }), (0, a.jsx)(m.default.Title, {
        children: t.name
      })]
    }), s({
      actionLog: t
    })]
  })
}
let w = [{
  key: "action",
  cellClassName: k.actionColumn,
  render(e) {
    let {
      actionLog: t
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [t.error && (0, a.jsx)(h.default, {
        className: k.errorIcon
      }), t.name]
    })
  }
}, {
  key: "total time",
  cellClassName: k.totalTimeColumn,
  render(e) {
    let {
      actionLog: t
    } = e;
    return "".concat(C(t.totalTime), " ms")
  }
}];

function E() {
  let e = i.useRef(null),
    t = function(e) {
      let [t, r] = i.useState([...e.logs]), a = i.useCallback(() => r([...e.logs]), [e]);
      return i.useEffect(() => (e.on("log", a), () => {
        e.off("log", a)
      }), [e, a]), t
    }(d.default.actionLogger),
    r = i.useMemo(() => t.map(e => ({
      key: e.id.toString(),
      actionLog: e
    })), [t]),
    [l, o] = i.useState(),
    s = t.find(e => e.id === l);
  return (0, a.jsxs)("div", {
    ref: e,
    className: n()(v.panel, k.panel),
    children: [(0, a.jsx)(c.ScrollerThin, {
      className: k.tableContainer,
      children: (0, a.jsx)(b.default, {
        columns: w,
        data: r,
        selectedRowKey: null == l ? void 0 : l.toString(),
        onClickRow: e => o(Number.parseInt(e, 10))
      })
    }), null != s && (0, a.jsx)(N, {
      actionLog: s,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}