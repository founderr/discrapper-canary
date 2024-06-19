t.d(r, {
  Z: function() {
    return E
  }
}), t(47120);
var a = t(735250),
  i = t(470079),
  n = t(120356),
  o = t.n(n),
  l = t(913527),
  c = t.n(l),
  s = t(442837),
  d = t(481060),
  u = t(129861),
  h = t(594174),
  m = t(502568),
  g = t(55935),
  p = t(120816),
  b = t(31336),
  y = t(257785),
  x = t(484036),
  f = t(681619),
  k = t(621060),
  v = t(689938),
  j = t(206884),
  w = t(719556);
let N = [{
  key: "event",
  cellClassName: j.eventColumn,
  render(e) {
    let {
      event: r
    } = e;
    return r
  }
}, {
  key: "location",
  cellClassName: j.locationColumn,
  render(e) {
    let {
      properties: r
    } = e;
    return r.location
  }
}];

function C(e) {
  let {
    children: r
  } = e;
  return (0, a.jsx)(d.ScrollerThin, {
    className: j.customPropertiesContainer,
    children: (0, a.jsx)("dl", {
      children: r
    })
  })
}

function S(e) {
  let {
    name: r,
    children: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: j.customPropertiesName,
      children: r
    }), (0, a.jsx)("dd", {
      className: j.customPropertiesValue,
      children: t
    })]
  })
}
let T = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedEvent: {
          event: r,
          properties: t,
          timestamp: i,
          fingerprint: n
        }
      } = e, l = h.default.getUser(n), s = c()(i);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(m.ZP, {
          className: o()(w.headerBar, j.subPanelHeaderBar),
          children: [(0, a.jsx)(m.ZP.Icon, {
            icon: d.AnalyticsIcon,
            tooltip: r
          }), (0, a.jsx)(m.ZP.Title, {
            children: r
          })]
        }), (0, a.jsxs)(y.E, {
          className: j.commonProperties,
          children: [(0, a.jsx)(y.Z9, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: i.toISOString(),
              title: (0, g.vc)(s, "LLLL"),
              children: (0, g.Y4)(s)
            })
          }), null != l && (0, a.jsx)(y.Z9, {
            name: "User",
            children: (0, a.jsx)(u.Z, {
              user: l
            })
          }), (0, a.jsx)(y.Z9, {
            name: "Fingerprint",
            children: (0, a.jsx)("code", {
              children: n
            })
          })]
        }), (0, a.jsx)(C, {
          children: Object.entries(t).map(e => {
            let [r, t] = e;
            return (0, a.jsx)(S, {
              name: "".concat(r, ":"),
              children: null != t ? (0, a.jsx)("code", {
                children: JSON.stringify(t)
              }) : (0, a.jsx)("code", {
                className: j.emptyProperty,
                children: "null"
              })
            }, r)
          })
        })]
      })
    }
  }],
  Z = {
    events: {
      label: "Events",
      filter: e => Object.entries(Z).filter(e => {
        let [r] = e;
        return "events" !== r
      }).map(r => {
        let [t, {
          filter: a
        }] = r;
        return !a(e)
      }).every(e => e)
    },
    experiments: {
      label: "Experiments",
      filter: e => ["experiment_user_triggered", "experiment_guild_triggered"].includes(e.event)
    },
    impressions: {
      label: "Impressions",
      filter: e => e.event.startsWith("impression_")
    },
    networkActions: {
      label: "Network",
      filter: e => e.event.startsWith("network_action")
    }
  };

function E() {
  let e = i.useRef(null),
    r = (0, s.e7)([p.Z], () => p.Z.loggedEvents),
    [t, n] = i.useState(Object.keys(Z)),
    l = r.filter(e => {
      for (let r of t)
        if (Z[r].filter(e)) return !0;
      return !1
    }),
    [c, u] = i.useState(void 0),
    h = l.find(e => e.key === c),
    {
      TabBar: m,
      renderSelectedTab: g
    } = (0, k.Z)({
      tabs: T
    }, []);
  return (0, a.jsxs)("div", {
    ref: e,
    className: o()(w.panel, j.panel),
    children: [(0, a.jsxs)("div", {
      className: j.toolbar,
      children: [(0, a.jsx)(d.Button, {
        className: j.toolbarButton,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.ICON,
        onClick: b.Zw,
        children: (0, a.jsx)("span", {
          title: v.Z.Messages.CLEAR,
          children: (0, a.jsx)(d.TrashIcon, {
            size: "md",
            color: "currentColor",
            "aria-label": v.Z.Messages.CLEAR
          })
        })
      }), (0, a.jsx)("div", {
        className: j.toolbarDivider
      }), (0, a.jsx)("div", {
        className: j.filters,
        children: Object.entries(Z).map(e => {
          let [r, i] = e;
          return (0, a.jsx)(d.Clickable, {
            className: o()(j.filter, t.includes(r) && j.activeFilter),
            onClick: () => {
              var e;
              return e = r, void n(r => r.includes(e) ? r.filter(r => r !== e) : [...r, e])
            },
            children: i.label
          }, r)
        })
      })]
    }), (0, a.jsx)(d.ScrollerThin, {
      className: j.tableContainer,
      children: (0, a.jsx)(f.Z, {
        columns: N,
        data: l,
        selectedRowKey: c,
        onClickRow: u
      })
    }), null != h && (0, a.jsxs)(x.Z, {
      className: j.subPanel,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(m, {}), g({
        loggedEvent: h
      })]
    })]
  })
}