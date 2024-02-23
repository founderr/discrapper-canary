"use strict";
t.r(r), t.d(r, {
  default: function() {
    return _
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  l = t.n(i),
  o = t("448105"),
  s = t.n(o),
  c = t("866227"),
  d = t.n(c),
  u = t("446674"),
  h = t("77078"),
  p = t("913144"),
  m = t("810567"),
  g = t("756609"),
  f = t("228220"),
  b = t("664336"),
  y = t("888400"),
  x = t("398570"),
  k = t("370492"),
  v = t("332814"),
  C = t("928063"),
  S = t("637171"),
  j = t("724209"),
  T = t("782340"),
  N = t("731343"),
  w = t("699412");
let E = [{
    key: "id",
    cellClassName: N.eventColumn,
    render(e) {
      let {
        experimentId: r
      } = e;
      return r
    }
  }, {
    key: "bucket",
    cellClassName: N.locationColumn,
    render(e) {
      let {
        descriptor: r
      } = e;
      return r.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: N.locationColumn,
    render(e) {
      let {
        timestamp: r
      } = e;
      return r.toLocaleString()
    }
  }],
  L = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedTrigger: {
          experimentId: r,
          descriptor: t,
          exposureType: n,
          excluded: i,
          timestamp: o,
          location: s,
          previouslyTracked: c
        }
      } = e, u = d(o);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(b.default, {
          className: l(w.headerBar, N.subPanelHeaderBar),
          children: [(0, a.jsx)(b.default.Icon, {
            icon: g.default,
            tooltip: r
          }), (0, a.jsx)(b.default.Title, {
            children: r
          })]
        }), (0, a.jsxs)(v.Properties, {
          className: N.commonProperties,
          children: [(0, a.jsx)(v.Property, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: o.toISOString(),
              title: (0, y.dateFormat)(u, "LLLL"),
              children: (0, y.calendarFormat)(u)
            })
          }), "guild" === t.type && (0, a.jsx)(v.Property, {
            name: "Guild ID",
            children: (0, a.jsx)("code", {
              children: t.guildId
            })
          }), (0, a.jsx)(v.Property, {
            name: "Bucket",
            children: (0, a.jsx)("code", {
              children: t.bucket
            })
          }), (0, a.jsx)(v.Property, {
            name: "Revision",
            children: (0, a.jsx)("code", {
              children: t.revision
            })
          }), (0, a.jsx)(v.Property, {
            name: "Override",
            children: (0, a.jsx)(v.BooleanPropertyValue, {
              value: t.override
            })
          }), (0, a.jsx)(v.Property, {
            name: "Exposure type",
            children: (0, a.jsx)("code", {
              children: n
            })
          }), (0, a.jsx)(v.Property, {
            name: "Excluded",
            children: (0, a.jsx)(v.BooleanPropertyValue, {
              value: i
            })
          }), (0, a.jsx)(v.Property, {
            name: "Previously tracked",
            children: (0, a.jsx)(v.BooleanPropertyValue, {
              value: c
            })
          }), (0, a.jsx)(v.Property, {
            name: "Location",
            children: (0, a.jsx)("code", {
              children: s
            })
          })]
        })]
      })
    }
  }];

function _() {
  let [e, r] = n.useState(""), t = n.useRef(null), i = (0, u.useStateFromStoresArray)([x.default], () => x.default.loggedTriggers), o = n.useMemo(() => i.filter(r => 0 === e.length || s(e, r.experimentId)).sort((e, r) => r.timestamp.getTime() - e.timestamp.getTime()), [i, e]), [c, d] = n.useState(void 0), g = o.find(e => e.key === c), {
    TabBar: b,
    renderSelectedTab: y
  } = (0, j.default)({
    tabs: L
  }, []), v = (0, u.useStateFromStores)([x.default], () => x.default.trackTriggers), _ = n.useCallback(e => {
    p.default.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []);
  return (0, a.jsxs)("div", {
    ref: t,
    className: l(w.panel, N.panel),
    children: [(0, a.jsxs)("div", {
      className: N.toolbar,
      children: [(0, a.jsx)("div", {
        title: "Enables tracking of all triggers",
        className: N.triggersEnable,
        children: (0, a.jsx)(h.Switch, {
          checked: v,
          onChange: _,
          className: N.toolbarSwitch
        })
      }), (0, a.jsx)(h.Button, {
        className: N.toolbarButton,
        look: h.Button.Looks.BLANK,
        size: h.Button.Sizes.ICON,
        onClick: k.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: T.default.Messages.CLEAR,
          children: (0, a.jsx)(f.default, {
            "aria-label": T.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)(m.default, {
        className: N.searchBar,
        query: e,
        onChange: r,
        onClear: () => r(""),
        placeholder: "Search by experiment id"
      })]
    }), (0, a.jsx)(h.ScrollerThin, {
      className: N.tableContainer,
      children: (0, a.jsx)(S.default, {
        columns: E,
        data: o,
        selectedRowKey: c,
        onClickRow: d
      })
    }), null != g && (0, a.jsxs)(C.default, {
      className: N.subPanel,
      minHeight: 100,
      initialHeight: null != t.current ? t.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(b, {}), y({
        loggedTrigger: g
      })]
    })]
  })
}