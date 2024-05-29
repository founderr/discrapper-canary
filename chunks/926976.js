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
  s = r.n(o),
  c = r("442837"),
  d = r("481060"),
  u = r("129861"),
  h = r("594174"),
  m = r("825185"),
  p = r("740727"),
  g = r("502568"),
  f = r("55935"),
  y = r("120816"),
  b = r("31336"),
  x = r("257785"),
  k = r("484036"),
  v = r("681619"),
  j = r("621060"),
  S = r("689938"),
  C = r("457501"),
  w = r("277513");
let T = [{
  key: "event",
  cellClassName: C.eventColumn,
  render(e) {
    let {
      event: t
    } = e;
    return t
  }
}, {
  key: "location",
  cellClassName: C.locationColumn,
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
    className: C.customPropertiesContainer,
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
      className: C.customPropertiesName,
      children: t
    }), (0, a.jsx)("dd", {
      className: C.customPropertiesValue,
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
          timestamp: i,
          fingerprint: l
        }
      } = e, o = h.default.getUser(l), c = s()(i);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(g.default, {
          className: n()(w.headerBar, C.subPanelHeaderBar),
          children: [(0, a.jsx)(g.default.Icon, {
            icon: m.default,
            tooltip: t
          }), (0, a.jsx)(g.default.Title, {
            children: t
          })]
        }), (0, a.jsxs)(x.Properties, {
          className: C.commonProperties,
          children: [(0, a.jsx)(x.Property, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: i.toISOString(),
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
              children: l
            })
          })]
        }), (0, a.jsx)(N, {
          children: Object.entries(r).map(e => {
            let [t, r] = e;
            return (0, a.jsx)(E, {
              name: "".concat(t, ":"),
              children: null != r ? (0, a.jsx)("code", {
                children: JSON.stringify(r)
              }) : (0, a.jsx)("code", {
                className: C.emptyProperty,
                children: "null"
              })
            }, t)
          })
        })]
      })
    }
  }],
  L = {
    events: {
      label: "Events",
      filter: e => Object.entries(L).filter(e => {
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
    t = (0, c.useStateFromStores)([y.default], () => y.default.loggedEvents),
    [r, l] = i.useState(Object.keys(L)),
    o = t.filter(e => {
      for (let t of r)
        if (L[t].filter(e)) return !0;
      return !1
    }),
    [s, u] = i.useState(void 0),
    h = o.find(e => e.key === s),
    {
      TabBar: m,
      renderSelectedTab: g
    } = (0, j.default)({
      tabs: _
    }, []);
  return (0, a.jsxs)("div", {
    ref: e,
    className: n()(w.panel, C.panel),
    children: [(0, a.jsxs)("div", {
      className: C.toolbar,
      children: [(0, a.jsx)(d.Button, {
        className: C.toolbarButton,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.ICON,
        onClick: b.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: S.default.Messages.CLEAR,
          children: (0, a.jsx)(p.default, {
            "aria-label": S.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)("div", {
        className: C.toolbarDivider
      }), (0, a.jsx)("div", {
        className: C.filters,
        children: Object.entries(L).map(e => {
          let [t, i] = e;
          return (0, a.jsx)(d.Clickable, {
            className: n()(C.filter, r.includes(t) && C.activeFilter),
            onClick: () => {
              var e;
              return e = t, void l(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
            },
            children: i.label
          }, t)
        })
      })]
    }), (0, a.jsx)(d.ScrollerThin, {
      className: C.tableContainer,
      children: (0, a.jsx)(v.default, {
        columns: T,
        data: o,
        selectedRowKey: s,
        onClickRow: u
      })
    }), null != h && (0, a.jsxs)(k.default, {
      className: C.subPanel,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(m, {}), g({
        loggedEvent: h
      })]
    })]
  })
}