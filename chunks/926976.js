"use strict";
r.r(t), r.d(t, {
  default: function() {
    return A
  }
}), r("47120");
var a = r("735250"),
  n = r("470079"),
  i = r("803997"),
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
  b = r("120816"),
  y = r("31336"),
  x = r("257785"),
  k = r("484036"),
  v = r("681619"),
  C = r("621060"),
  S = r("689938"),
  j = r("403434"),
  T = r("779869");
let w = [{
  key: "event",
  cellClassName: j.eventColumn,
  render(e) {
    let {
      event: t
    } = e;
    return t
  }
}, {
  key: "location",
  cellClassName: j.locationColumn,
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
    className: j.customPropertiesContainer,
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
      className: j.customPropertiesName,
      children: t
    }), (0, a.jsx)("dd", {
      className: j.customPropertiesValue,
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
          className: l()(T.headerBar, j.subPanelHeaderBar),
          children: [(0, a.jsx)(g.default.Icon, {
            icon: p.default,
            tooltip: t
          }), (0, a.jsx)(g.default.Title, {
            children: t
          })]
        }), (0, a.jsxs)(x.Properties, {
          className: j.commonProperties,
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
        }), (0, a.jsx)(N, {
          children: Object.entries(r).map(e => {
            let [t, r] = e;
            return (0, a.jsx)(E, {
              name: "".concat(t, ":"),
              children: null != r ? (0, a.jsx)("code", {
                children: JSON.stringify(r)
              }) : (0, a.jsx)("code", {
                className: j.emptyProperty,
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

function A() {
  let e = n.useRef(null),
    t = (0, c.useStateFromStores)([b.default], () => b.default.loggedEvents),
    [r, i] = n.useState(Object.keys(L)),
    o = t.filter(e => {
      for (let t of r)
        if (L[t].filter(e)) return !0;
      return !1
    }),
    [s, u] = n.useState(void 0),
    h = o.find(e => e.key === s),
    {
      TabBar: p,
      renderSelectedTab: g
    } = (0, C.default)({
      tabs: _
    }, []);
  return (0, a.jsxs)("div", {
    ref: e,
    className: l()(T.panel, j.panel),
    children: [(0, a.jsxs)("div", {
      className: j.toolbar,
      children: [(0, a.jsx)(d.Button, {
        className: j.toolbarButton,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.ICON,
        onClick: y.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: S.default.Messages.CLEAR,
          children: (0, a.jsx)(m.default, {
            "aria-label": S.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)("div", {
        className: j.toolbarDivider
      }), (0, a.jsx)("div", {
        className: j.filters,
        children: Object.entries(L).map(e => {
          let [t, n] = e;
          return (0, a.jsx)(d.Clickable, {
            className: l()(j.filter, r.includes(t) && j.activeFilter),
            onClick: () => {
              var e;
              return e = t, void i(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
            },
            children: n.label
          }, t)
        })
      })]
    }), (0, a.jsx)(d.ScrollerThin, {
      className: j.tableContainer,
      children: (0, a.jsx)(v.default, {
        columns: w,
        data: o,
        selectedRowKey: s,
        onClickRow: u
      })
    }), null != h && (0, a.jsxs)(k.default, {
      className: j.subPanel,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(p, {}), g({
        loggedEvent: h
      })]
    })]
  })
}