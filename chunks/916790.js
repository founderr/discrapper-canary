"use strict";
t.r(r), t.d(r, {
  default: function() {
    return L
  }
}), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  o = t("913527"),
  c = t.n(o),
  s = t("481060"),
  d = t("570140"),
  u = t("435274"),
  h = t("4912"),
  m = t("502568"),
  p = t("55935"),
  g = t("428530"),
  f = t("257785"),
  b = t("484036"),
  y = t("681619"),
  x = t("621060"),
  k = t("832540"),
  v = t("893048");

function j(e) {
  return parseFloat(e.toFixed(3))
}
let C = [{
  key: "store",
  cellClassName: k.actionColumn,
  render(e) {
    let {
      trace: r
    } = e;
    return r.name
  }
}, {
  key: "time",
  cellClassName: k.totalTimeColumn,
  render(e) {
    let {
      trace: r
    } = e;
    return "".concat(j(r.time), " ms")
  }
}];

function w(e) {
  let {
    actionLog: r
  } = e, t = i.useMemo(() => r.traces.map(e => ({
    key: e.name,
    trace: e
  })), [r]);
  return (0, a.jsx)(s.ScrollerThin, {
    children: (0, a.jsx)(y.default, {
      columns: C,
      data: t
    })
  })
}
let S = [{
  id: "action",
  name: "Action",
  render(e) {
    var r;
    let {
      actionLog: t
    } = e, i = c()(t.createdAt);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(f.Properties, {
        className: k.actionProperties,
        children: [(0, a.jsx)(f.Property, {
          name: "Created at",
          children: (0, a.jsx)("time", {
            dateTime: null === (r = t.createdAt) || void 0 === r ? void 0 : r.toISOString(),
            title: (0, p.dateFormat)(i, "LLLL"),
            children: (0, p.calendarFormat)(i)
          })
        }), (0, a.jsxs)(f.Property, {
          name: "Total Time",
          children: [j(t.totalTime), " ms"]
        })]
      }), (0, a.jsx)(s.ScrollerThin, {
        className: k.inspectorContainer,
        children: (0, a.jsx)(g.default, {
          data: t.action
        })
      })]
    })
  }
}, {
  id: "traces",
  name: "Store Handlers",
  render(e) {
    let {
      actionLog: r
    } = e;
    return (0, a.jsx)(w, {
      actionLog: r
    })
  }
}];

function N(e) {
  let {
    actionLog: r,
    initialHeight: t
  } = e, l = i.useMemo(() => r.error ? [...S, {
    id: "error",
    name: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(h.default, {
        className: k.errorIcon
      }), "Error"]
    }),
    render(e) {
      let {
        actionLog: r
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: n()(k.errorToolbar, v.toolbar),
          children: (0, a.jsx)("div", {
            className: v.toolbarGroup,
            children: (0, a.jsx)(s.Button, {
              className: v.toolbarButton,
              size: s.Button.Sizes.MIN,
              onClick: () => console.error(r.error),
              children: "Log to Console"
            })
          })
        }), (0, a.jsx)(s.ScrollerThin, {
          className: k.inspectorContainer,
          children: (0, a.jsx)(g.default, {
            data: r.error
          })
        })]
      })
    }
  }] : S, [r]), {
    TabBar: o,
    renderSelectedTab: c
  } = (0, x.default)({
    tabs: l
  }, [l]);
  return (0, a.jsxs)(b.default, {
    className: k.subPanel,
    minHeight: 100,
    initialHeight: t,
    children: [(0, a.jsx)(o, {}), (0, a.jsxs)(m.default, {
      className: n()(v.headerBar, k.subPanelHeaderBar),
      children: [(0, a.jsx)(m.default.Icon, {
        icon: u.default,
        tooltip: r.name
      }), (0, a.jsx)(m.default.Title, {
        children: r.name
      })]
    }), c({
      actionLog: r
    })]
  })
}
let T = [{
  key: "action",
  cellClassName: k.actionColumn,
  render(e) {
    let {
      actionLog: r
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [r.error && (0, a.jsx)(h.default, {
        className: k.errorIcon
      }), r.name]
    })
  }
}, {
  key: "total time",
  cellClassName: k.totalTimeColumn,
  render(e) {
    let {
      actionLog: r
    } = e;
    return "".concat(j(r.totalTime), " ms")
  }
}];

function L() {
  let e = i.useRef(null),
    r = function(e) {
      let [r, t] = i.useState([...e.logs]), a = i.useCallback(() => t([...e.logs]), [e]);
      return i.useEffect(() => (e.on("log", a), () => {
        e.off("log", a)
      }), [e, a]), r
    }(d.default.actionLogger),
    t = i.useMemo(() => r.map(e => ({
      key: e.id.toString(),
      actionLog: e
    })), [r]),
    [l, o] = i.useState(),
    c = r.find(e => e.id === l);
  return (0, a.jsxs)("div", {
    ref: e,
    className: n()(v.panel, k.panel),
    children: [(0, a.jsx)(s.ScrollerThin, {
      className: k.tableContainer,
      children: (0, a.jsx)(y.default, {
        columns: T,
        data: t,
        selectedRowKey: null == l ? void 0 : l.toString(),
        onClickRow: e => o(Number.parseInt(e, 10))
      })
    }), null != c && (0, a.jsx)(N, {
      actionLog: c,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}