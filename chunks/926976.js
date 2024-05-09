"use strict";
r.r(t), r.d(t, {
  default: function() {
    return R
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("913527"),
  c = r.n(o),
  s = r("442837"),
  d = r("481060"),
  u = r("129861"),
  h = r("594174"),
  m = r("825185"),
  p = r("740727"),
  g = r("502568"),
  f = r("55935"),
  b = r("120816"),
  y = r("31336"),
  x = r("257785"),
  k = r("484036"),
  v = r("681619"),
  j = r("621060"),
  C = r("689938"),
  w = r("457501"),
  S = r("277513");
let T = [{
  key: "event",
  cellClassName: w.eventColumn,
  render(e) {
    let {
      event: t
    } = e;
    return t
  }
}, {
  key: "location",
  cellClassName: w.locationColumn,
  render(e) {
    let {
      properties: t
    } = e;
    return t.location
  }
}];

function N(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(d.ScrollerThin, {
    className: w.customPropertiesContainer,
    children: (0, a.jsx)("dl", {
      children: t
    })
  })
}

function L(e) {
  let {
    name: t,
    children: r
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: w.customPropertiesName,
      children: t
    }), (0, a.jsx)("dd", {
      className: w.customPropertiesValue,
      children: r
    })]
  })
}
let E = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedEvent: {
          event: t,
          properties: r,
          timestamp: i,
          fingerprint: l
        }
      } = e, o = h.default.getUser(l), s = c()(i);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(g.default, {
          className: n()(S.headerBar, w.subPanelHeaderBar),
          children: [(0, a.jsx)(g.default.Icon, {
            icon: m.default,
            tooltip: t
          }), (0, a.jsx)(g.default.Title, {
            children: t
          })]
        }), (0, a.jsxs)(x.Properties, {
          className: w.commonProperties,
          children: [(0, a.jsx)(x.Property, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: i.toISOString(),
              title: (0, f.dateFormat)(s, "LLLL"),
              children: (0, f.calendarFormat)(s)
            })
          }), null != o && (0, a.jsx)(x.Property, {
            name: "User",
            children: (0, a.jsx)(u.default, {
              user: o
            })
          }), (0, a.jsx)(x.Property, {
            name: "Fingerprint",
            children: (0, a.jsx)("code", {
              children: l
            })
          })]
        }), (0, a.jsx)(N, {
          children: Object.entries(r).map(e => {
            let [t, r] = e;
            return (0, a.jsx)(L, {
              name: "".concat(t, ":"),
              children: null != r ? (0, a.jsx)("code", {
                children: JSON.stringify(r)
              }) : (0, a.jsx)("code", {
                className: w.emptyProperty,
                children: "null"
              })
            }, t)
          })
        })]
      })
    }
  }],
  _ = {
    events: {
      label: "Events",
      filter: e => Object.entries(_).filter(e => {
        let [t] = e;
        return "events" !== t
      }).map(t => {
        let [r, {
          filter: a
        }] = t;
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

function R() {
  let e = i.useRef(null),
    t = (0, s.useStateFromStores)([b.default], () => b.default.loggedEvents),
    [r, l] = i.useState(Object.keys(_)),
    o = t.filter(e => {
      for (let t of r)
        if (_[t].filter(e)) return !0;
      return !1
    }),
    [c, u] = i.useState(void 0),
    h = o.find(e => e.key === c),
    {
      TabBar: m,
      renderSelectedTab: g
    } = (0, j.default)({
      tabs: E
    }, []);
  return (0, a.jsxs)("div", {
    ref: e,
    className: n()(S.panel, w.panel),
    children: [(0, a.jsxs)("div", {
      className: w.toolbar,
      children: [(0, a.jsx)(d.Button, {
        className: w.toolbarButton,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.ICON,
        onClick: y.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: C.default.Messages.CLEAR,
          children: (0, a.jsx)(p.default, {
            "aria-label": C.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)("div", {
        className: w.toolbarDivider
      }), (0, a.jsx)("div", {
        className: w.filters,
        children: Object.entries(_).map(e => {
          let [t, i] = e;
          return (0, a.jsx)(d.Clickable, {
            className: n()(w.filter, r.includes(t) && w.activeFilter),
            onClick: () => {
              var e;
              return e = t, void l(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
            },
            children: i.label
          }, t)
        })
      })]
    }), (0, a.jsx)(d.ScrollerThin, {
      className: w.tableContainer,
      children: (0, a.jsx)(v.default, {
        columns: T,
        data: o,
        selectedRowKey: c,
        onClickRow: u
      })
    }), null != h && (0, a.jsxs)(k.default, {
      className: w.subPanel,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(m, {}), g({
        loggedEvent: h
      })]
    })]
  })
}