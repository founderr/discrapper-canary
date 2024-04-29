"use strict";
t.r(r), t.d(r, {
  default: function() {
    return R
  }
}), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  o = t("913527"),
  c = t.n(o),
  s = t("442837"),
  d = t("481060"),
  u = t("129861"),
  h = t("594174"),
  m = t("825185"),
  p = t("740727"),
  g = t("502568"),
  f = t("55935"),
  b = t("120816"),
  y = t("31336"),
  x = t("257785"),
  k = t("484036"),
  v = t("681619"),
  j = t("621060"),
  C = t("689938"),
  w = t("457501"),
  S = t("277513");
let N = [{
  key: "event",
  cellClassName: w.eventColumn,
  render(e) {
    let {
      event: r
    } = e;
    return r
  }
}, {
  key: "location",
  cellClassName: w.locationColumn,
  render(e) {
    let {
      properties: r
    } = e;
    return r.location
  }
}];

function T(e) {
  let {
    children: r
  } = e;
  return (0, a.jsx)(d.ScrollerThin, {
    className: w.customPropertiesContainer,
    children: (0, a.jsx)("dl", {
      children: r
    })
  })
}

function L(e) {
  let {
    name: r,
    children: t
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("dt", {
      className: w.customPropertiesName,
      children: r
    }), (0, a.jsx)("dd", {
      className: w.customPropertiesValue,
      children: t
    })]
  })
}
let E = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedEvent: {
          event: r,
          properties: t,
          timestamp: i,
          fingerprint: l
        }
      } = e, o = h.default.getUser(l), s = c()(i);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(g.default, {
          className: n()(S.headerBar, w.subPanelHeaderBar),
          children: [(0, a.jsx)(g.default.Icon, {
            icon: m.default,
            tooltip: r
          }), (0, a.jsx)(g.default.Title, {
            children: r
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
        }), (0, a.jsx)(T, {
          children: Object.entries(t).map(e => {
            let [r, t] = e;
            return (0, a.jsx)(L, {
              name: "".concat(r, ":"),
              children: null != t ? (0, a.jsx)("code", {
                children: JSON.stringify(t)
              }) : (0, a.jsx)("code", {
                className: w.emptyProperty,
                children: "null"
              })
            }, r)
          })
        })]
      })
    }
  }],
  _ = {
    events: {
      label: "Events",
      filter: e => Object.entries(_).filter(e => {
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

function R() {
  let e = i.useRef(null),
    r = (0, s.useStateFromStores)([b.default], () => b.default.loggedEvents),
    [t, l] = i.useState(Object.keys(_)),
    o = r.filter(e => {
      for (let r of t)
        if (_[r].filter(e)) return !0;
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
          let [r, i] = e;
          return (0, a.jsx)(d.Clickable, {
            className: n()(w.filter, t.includes(r) && w.activeFilter),
            onClick: () => {
              var e;
              return e = r, void l(r => r.includes(e) ? r.filter(r => r !== e) : [...r, e])
            },
            children: i.label
          }, r)
        })
      })]
    }), (0, a.jsx)(d.ScrollerThin, {
      className: w.tableContainer,
      children: (0, a.jsx)(v.default, {
        columns: N,
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