t.d(r, {
  Z: function() {
    return T
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  i = t(120356),
  l = t.n(i),
  o = t(913527),
  c = t.n(o),
  s = t(481060),
  d = t(570140),
  u = t(4912),
  h = t(502568),
  m = t(55935),
  g = t(428530),
  p = t(257785),
  b = t(484036),
  y = t(681619),
  x = t(621060),
  f = t(205899),
  k = t(719556);

function v(e) {
  return parseFloat(e.toFixed(3))
}
let j = [{
  key: "store",
  cellClassName: f.actionColumn,
  render(e) {
    let {
      trace: r
    } = e;
    return r.name
  }
}, {
  key: "time",
  cellClassName: f.totalTimeColumn,
  render(e) {
    let {
      trace: r
    } = e;
    return "".concat(v(r.time), " ms")
  }
}];

function w(e) {
  let {
    actionLog: r
  } = e, t = n.useMemo(() => r.traces.map(e => ({
    key: e.name,
    trace: e
  })), [r]);
  return (0, a.jsx)(s.ScrollerThin, {
    children: (0, a.jsx)(y.Z, {
      columns: j,
      data: t
    })
  })
}
let N = [{
  id: "action",
  name: "Action",
  render(e) {
    var r;
    let {
      actionLog: t
    } = e, n = c()(t.createdAt);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(p.E, {
        className: f.actionProperties,
        children: [(0, a.jsx)(p.Z9, {
          name: "Created at",
          children: (0, a.jsx)("time", {
            dateTime: null === (r = t.createdAt) || void 0 === r ? void 0 : r.toISOString(),
            title: (0, m.vc)(n, "LLLL"),
            children: (0, m.Y4)(n)
          })
        }), (0, a.jsxs)(p.Z9, {
          name: "Total Time",
          children: [v(t.totalTime), " ms"]
        })]
      }), (0, a.jsx)(s.ScrollerThin, {
        className: f.inspectorContainer,
        children: (0, a.jsx)(g.Z, {
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

function C(e) {
  let {
    actionLog: r,
    initialHeight: t
  } = e, i = n.useMemo(() => r.error ? [...N, {
    id: "error",
    name: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.Z, {
        className: f.errorIcon
      }), "Error"]
    }),
    render(e) {
      let {
        actionLog: r
      } = e;
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: l()(f.errorToolbar, k.toolbar),
          children: (0, a.jsx)("div", {
            className: k.toolbarGroup,
            children: (0, a.jsx)(s.Button, {
              className: k.toolbarButton,
              size: s.Button.Sizes.MIN,
              onClick: () => console.error(r.error),
              children: "Log to Console"
            })
          })
        }), (0, a.jsx)(s.ScrollerThin, {
          className: f.inspectorContainer,
          children: (0, a.jsx)(g.Z, {
            data: r.error
          })
        })]
      })
    }
  }] : N, [r]), {
    TabBar: o,
    renderSelectedTab: c
  } = (0, x.Z)({
    tabs: i
  }, [i]);
  return (0, a.jsxs)(b.Z, {
    className: f.subPanel,
    minHeight: 100,
    initialHeight: t,
    children: [(0, a.jsx)(o, {}), (0, a.jsxs)(h.ZP, {
      className: l()(k.headerBar, f.subPanelHeaderBar),
      children: [(0, a.jsx)(h.ZP.Icon, {
        icon: s.ReceiptIcon,
        tooltip: r.name
      }), (0, a.jsx)(h.ZP.Title, {
        children: r.name
      })]
    }), c({
      actionLog: r
    })]
  })
}
let S = [{
  key: "action",
  cellClassName: f.actionColumn,
  render(e) {
    let {
      actionLog: r
    } = e;
    return (0, a.jsxs)(a.Fragment, {
      children: [r.error && (0, a.jsx)(u.Z, {
        className: f.errorIcon
      }), r.name]
    })
  }
}, {
  key: "total time",
  cellClassName: f.totalTimeColumn,
  render(e) {
    let {
      actionLog: r
    } = e;
    return "".concat(v(r.totalTime), " ms")
  }
}];

function T() {
  let e = n.useRef(null),
    r = function(e) {
      let [r, t] = n.useState([...e.logs]), a = n.useCallback(() => t([...e.logs]), [e]);
      return n.useEffect(() => (e.on("log", a), () => {
        e.off("log", a)
      }), [e, a]), r
    }(d.Z.actionLogger),
    t = n.useMemo(() => r.map(e => ({
      key: e.id.toString(),
      actionLog: e
    })), [r]),
    [i, o] = n.useState(),
    c = r.find(e => e.id === i);
  return (0, a.jsxs)("div", {
    ref: e,
    className: l()(k.panel, f.panel),
    children: [(0, a.jsx)(s.ScrollerThin, {
      className: f.tableContainer,
      children: (0, a.jsx)(y.Z, {
        columns: S,
        data: t,
        selectedRowKey: null == i ? void 0 : i.toString(),
        onClickRow: e => o(Number.parseInt(e, 10))
      })
    }), null != c && (0, a.jsx)(C, {
      actionLog: c,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300
    })]
  })
}