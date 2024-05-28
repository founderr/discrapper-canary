"use strict";
r.r(t), r.d(t, {
  default: function() {
    return R
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  n = r("120356"),
  l = r.n(n),
  o = r("913527"),
  c = r.n(o),
  s = r("442837"),
  d = r("481060"),
  u = r("129861"),
  h = r("594174"),
  p = r("825185"),
  g = r("740727"),
  m = r("502568"),
  f = r("55935"),
  y = r("120816"),
  b = r("31336"),
  x = r("257785"),
  k = r("484036"),
  v = r("681619"),
  T = r("621060"),
  S = r("689938"),
  j = r("457501"),
  w = r("277513");
let E = [{
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

function C(e) {
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

function N(e) {
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
          timestamp: i,
          fingerprint: n
        }
      } = e, o = h.default.getUser(n), s = c()(i);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(m.default, {
          className: l()(w.headerBar, j.subPanelHeaderBar),
          children: [(0, a.jsx)(m.default.Icon, {
            icon: p.default,
            tooltip: t
          }), (0, a.jsx)(m.default.Title, {
            children: t
          })]
        }), (0, a.jsxs)(x.Properties, {
          className: j.commonProperties,
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
              children: n
            })
          })]
        }), (0, a.jsx)(C, {
          children: Object.entries(r).map(e => {
            let [t, r] = e;
            return (0, a.jsx)(N, {
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
  I = {
    events: {
      label: "Events",
      filter: e => Object.entries(I).filter(e => {
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
    t = (0, s.useStateFromStores)([y.default], () => y.default.loggedEvents),
    [r, n] = i.useState(Object.keys(I)),
    o = t.filter(e => {
      for (let t of r)
        if (I[t].filter(e)) return !0;
      return !1
    }),
    [c, u] = i.useState(void 0),
    h = o.find(e => e.key === c),
    {
      TabBar: p,
      renderSelectedTab: m
    } = (0, T.default)({
      tabs: _
    }, []);
  return (0, a.jsxs)("div", {
    ref: e,
    className: l()(w.panel, j.panel),
    children: [(0, a.jsxs)("div", {
      className: j.toolbar,
      children: [(0, a.jsx)(d.Button, {
        className: j.toolbarButton,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.ICON,
        onClick: b.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: S.default.Messages.CLEAR,
          children: (0, a.jsx)(g.default, {
            "aria-label": S.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)("div", {
        className: j.toolbarDivider
      }), (0, a.jsx)("div", {
        className: j.filters,
        children: Object.entries(I).map(e => {
          let [t, i] = e;
          return (0, a.jsx)(d.Clickable, {
            className: l()(j.filter, r.includes(t) && j.activeFilter),
            onClick: () => {
              var e;
              return e = t, void n(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
            },
            children: i.label
          }, t)
        })
      })]
    }), (0, a.jsx)(d.ScrollerThin, {
      className: j.tableContainer,
      children: (0, a.jsx)(v.default, {
        columns: E,
        data: o,
        selectedRowKey: c,
        onClickRow: u
      })
    }), null != h && (0, a.jsxs)(k.default, {
      className: j.subPanel,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(p, {}), m({
        loggedEvent: h
      })]
    })]
  })
}