"use strict";
r.r(t), r.d(t, {
  default: function() {
    return I
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
  C = r("621060"),
  j = r("689938"),
  S = r("457501"),
  T = r("277513");
let N = [{
  key: "event",
  cellClassName: S.eventColumn,
  render(e) {
    let {
      event: t
    } = e;
    return t
  }
}, {
  key: "location",
  cellClassName: S.locationColumn,
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
    className: S.customPropertiesContainer,
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
      className: S.customPropertiesName,
      children: t
    }), (0, a.jsx)("dd", {
      className: S.customPropertiesValue,
      children: r
    })]
  })
}
let L = [{
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
          className: n()(T.headerBar, S.subPanelHeaderBar),
          children: [(0, a.jsx)(g.default.Icon, {
            icon: m.default,
            tooltip: t
          }), (0, a.jsx)(g.default.Title, {
            children: t
          })]
        }), (0, a.jsxs)(x.Properties, {
          className: S.commonProperties,
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
        }), (0, a.jsx)(w, {
          children: Object.entries(r).map(e => {
            let [t, r] = e;
            return (0, a.jsx)(E, {
              name: "".concat(t, ":"),
              children: null != r ? (0, a.jsx)("code", {
                children: JSON.stringify(r)
              }) : (0, a.jsx)("code", {
                className: S.emptyProperty,
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

function I() {
  let e = i.useRef(null),
    t = (0, c.useStateFromStores)([y.default], () => y.default.loggedEvents),
    [r, l] = i.useState(Object.keys(_)),
    o = t.filter(e => {
      for (let t of r)
        if (_[t].filter(e)) return !0;
      return !1
    }),
    [s, u] = i.useState(void 0),
    h = o.find(e => e.key === s),
    {
      TabBar: m,
      renderSelectedTab: g
    } = (0, C.default)({
      tabs: L
    }, []);
  return (0, a.jsxs)("div", {
    ref: e,
    className: n()(T.panel, S.panel),
    children: [(0, a.jsxs)("div", {
      className: S.toolbar,
      children: [(0, a.jsx)(d.Button, {
        className: S.toolbarButton,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.ICON,
        onClick: b.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: j.default.Messages.CLEAR,
          children: (0, a.jsx)(p.default, {
            "aria-label": j.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)("div", {
        className: S.toolbarDivider
      }), (0, a.jsx)("div", {
        className: S.filters,
        children: Object.entries(_).map(e => {
          let [t, i] = e;
          return (0, a.jsx)(d.Clickable, {
            className: n()(S.filter, r.includes(t) && S.activeFilter),
            onClick: () => {
              var e;
              return e = t, void l(t => t.includes(e) ? t.filter(t => t !== e) : [...t, e])
            },
            children: i.label
          }, t)
        })
      })]
    }), (0, a.jsx)(d.ScrollerThin, {
      className: S.tableContainer,
      children: (0, a.jsx)(v.default, {
        columns: N,
        data: o,
        selectedRowKey: s,
        onClickRow: u
      })
    }), null != h && (0, a.jsxs)(k.default, {
      className: S.subPanel,
      minHeight: 100,
      initialHeight: null != e.current ? e.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(m, {}), g({
        loggedEvent: h
      })]
    })]
  })
}