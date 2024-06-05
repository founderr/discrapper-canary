"use strict";
r.r(t), r.d(t, {
  default: function() {
    return A
  }
}), r("47120");
var a = r("735250"),
  n = r("470079"),
  i = r("120356"),
  l = r.n(i),
  o = r("913527"),
  s = r.n(o),
  c = r("442837"),
  d = r("481060"),
  u = r("129861"),
  h = r("594174"),
  p = r("825185"),
  m = r("740727"),
  g = r("502568"),
  f = r("55935"),
  y = r("120816"),
  b = r("31336"),
  x = r("257785"),
  k = r("484036"),
  v = r("681619"),
  S = r("621060"),
  C = r("689938"),
  T = r("457501"),
  j = r("277513");
let N = [{
  key: "event",
  cellClassName: T.eventColumn,
  render(e) {
    let {
      event: t
    } = e;
    return t
  }
}, {
  key: "location",
  cellClassName: T.locationColumn,
  render(e) {
    let {
      properties: t
    } = e;
    return t.location
  }
}];

function w(e) {
  let {
    children: t
  } = e;
  return (0, a.jsx)(d.ScrollerThin, {
    className: T.customPropertiesContainer,
    children: (0, a.jsx)("dl", {
      children: t
    })
  })
}

function E(e) {
  let {
    name: t,
    children: r
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: T.customPropertiesName,
      children: t
    }), (0, a.jsx)("dd", {
      className: T.customPropertiesValue,
      children: r
    })]
  })
}
let _ = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedEvent: {
          event: t,
          properties: r,
          timestamp: n,
          fingerprint: i
        }
      } = e, o = h.default.getUser(i), c = s()(n);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(g.default, {
          className: l()(j.headerBar, T.subPanelHeaderBar),
          children: [(0, a.jsx)(g.default.Icon, {
            icon: p.default,
            tooltip: t
          }), (0, a.jsx)(g.default.Title, {
            children: t
          })]
        }), (0, a.jsxs)(x.Properties, {
          className: T.commonProperties,
          children: [(0, a.jsx)(x.Property, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: n.toISOString(),
              title: (0, f.dateFormat)(c, "LLLL"),
              children: (0, f.calendarFormat)(c)
            })
          }), null != o && (0, a.jsx)(x.Property, {
            name: "User",
            children: (0, a.jsx)(u.default, {
              user: o
            })
          }), (0, a.jsx)(x.Property, {
            name: "Fingerprint",
            children: (0, a.jsx)("code", {
              children: i
            })
          })]
        }), (0, a.jsx)(w, {
          children: Object.entries(r).map(e => {
            let [t, r] = e;
            return (0, a.jsx)(E, {
              name: "".concat(t, ":"),
              children: null != r ? (0, a.jsx)("code", {
                children: JSON.stringify(r)
              }) : (0, a.jsx)("code", {
                className: T.emptyProperty,
                children: "null"
              })
            }, t)
          })
        })]
      })
    }
  }],
  R = {
    events: {
      label: "Events",
      filter: e => Object.entries(R).filter(e => {
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

function A() {
  let e = n.useRef(null),
    t = (0, c.useStateFromStores)([y.default], () => y.default.loggedEvents),
    [r, i] = n.useState(Object.keys(R)),
    o = t.filter(e => {
      for (let t of r)
        if (R[t].filter(e)) return !0;
      return !1
    }),
    [s, u] = n.useState(void 0),
    h = o.find(e => e.key === s),
    {
      TabBar: p,
      renderSelectedTab: g
    } = (0, S.default)({
      tabs: _
    }, []);
  return (0, a.jsxs)("div", {
    ref: e,
    className: l()(j.panel, T.panel),
    children: [(0, a.jsxs)("div", {
      className: T.toolbar,
      children: [(0, a.jsx)(d.Button, {
        className: T.toolbarButton,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.ICON,
        onClick: b.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: C.default.Messages.CLEAR,
          children: (0, a.jsx)(m.default, {
            "aria-label": C.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)("div", {
        className: T.toolbarDivider
      }), (0, a.jsx)("div", {
        className: T.filters,
        children: Object.entries(R).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(d.Clickable, {
            className: l()(T.filter, r.includes(t) && T.activeFilter),
            onClick: () => {
              var e;
              return e = t, void i(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
            },
            children: n.label
          }, t)
        })
      })]
    }), (0, a.jsx)(d.ScrollerThin, {
      className: T.tableContainer,
      children: (0, a.jsx)(v.default, {
        columns: N,
        data: o,
        selectedRowKey: s,
        onClickRow: u
      })
    }), null != h && (0, a.jsxs)(k.default, {
      className: T.subPanel,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(p, {}), g({
        loggedEvent: h
      })]
    })]
  })
}