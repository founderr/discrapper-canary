"use strict";
r.r(t), r.d(t, {
  default: function() {
    return I
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  n = r("120356"),
  l = r.n(n),
  o = r("658722"),
  c = r.n(o),
  s = r("913527"),
  d = r.n(s),
  u = r("442837"),
  h = r("481060"),
  p = r("570140"),
  g = r("6048"),
  m = r("825185"),
  f = r("740727"),
  y = r("502568"),
  b = r("55935"),
  x = r("120816"),
  k = r("31336"),
  v = r("257785"),
  T = r("484036"),
  S = r("681619"),
  j = r("621060"),
  w = r("689938"),
  E = r("457501"),
  C = r("277513");
let N = [{
    key: "id",
    cellClassName: E.eventColumn,
    render(e) {
      let {
        experimentId: t
      } = e;
      return t
    }
  }, {
    key: "bucket",
    cellClassName: E.locationColumn,
    render(e) {
      let {
        descriptor: t
      } = e;
      return t.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: E.locationColumn,
    render(e) {
      let {
        timestamp: t
      } = e;
      return t.toLocaleString()
    }
  }],
  _ = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedTrigger: {
          experimentId: t,
          descriptor: r,
          exposureType: i,
          excluded: n,
          timestamp: o,
          location: c,
          previouslyTracked: s
        }
      } = e, u = d()(o);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(y.default, {
          className: l()(C.headerBar, E.subPanelHeaderBar),
          children: [(0, a.jsx)(y.default.Icon, {
            icon: m.default,
            tooltip: t
          }), (0, a.jsx)(y.default.Title, {
            children: t
          })]
        }), (0, a.jsxs)(v.Properties, {
          className: E.commonProperties,
          children: [(0, a.jsx)(v.Property, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: o.toISOString(),
              title: (0, b.dateFormat)(u, "LLLL"),
              children: (0, b.calendarFormat)(u)
            })
          }), "guild" === r.type && (0, a.jsx)(v.Property, {
            name: "Guild ID",
            children: (0, a.jsx)("code", {
              children: r.guildId
            })
          }), (0, a.jsx)(v.Property, {
            name: "Bucket",
            children: (0, a.jsx)("code", {
              children: r.bucket
            })
          }), (0, a.jsx)(v.Property, {
            name: "Revision",
            children: (0, a.jsx)("code", {
              children: r.revision
            })
          }), (0, a.jsx)(v.Property, {
            name: "Override",
            children: (0, a.jsx)(v.BooleanPropertyValue, {
              value: r.override
            })
          }), (0, a.jsx)(v.Property, {
            name: "Exposure type",
            children: (0, a.jsx)("code", {
              children: i
            })
          }), (0, a.jsx)(v.Property, {
            name: "Excluded",
            children: (0, a.jsx)(v.BooleanPropertyValue, {
              value: n
            })
          }), (0, a.jsx)(v.Property, {
            name: "Previously tracked",
            children: (0, a.jsx)(v.BooleanPropertyValue, {
              value: s
            })
          }), (0, a.jsx)(v.Property, {
            name: "Location",
            children: (0, a.jsx)("code", {
              children: c
            })
          })]
        })]
      })
    }
  }];

function I() {
  let [e, t] = i.useState(""), r = i.useRef(null), n = (0, u.useStateFromStoresArray)([x.default], () => x.default.loggedTriggers), o = i.useMemo(() => n.filter(t => 0 === e.length || c()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [n, e]), [s, d] = i.useState(void 0), m = o.find(e => e.key === s), {
    TabBar: y,
    renderSelectedTab: b
  } = (0, j.default)({
    tabs: _
  }, []), v = (0, u.useStateFromStores)([x.default], () => x.default.trackTriggers), I = i.useCallback(e => {
    p.default.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []);
  return (0, a.jsxs)("div", {
    ref: r,
    className: l()(C.panel, E.panel),
    children: [(0, a.jsxs)("div", {
      className: E.toolbar,
      children: [(0, a.jsx)("div", {
        title: "Enables tracking of all triggers",
        className: E.triggersEnable,
        children: (0, a.jsx)(h.Switch, {
          checked: v,
          onChange: I,
          className: E.__invalid_toolbarSwitch
        })
      }), (0, a.jsx)(h.Button, {
        className: E.toolbarButton,
        look: h.Button.Looks.BLANK,
        size: h.Button.Sizes.ICON,
        onClick: k.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: w.default.Messages.CLEAR,
          children: (0, a.jsx)(f.default, {
            "aria-label": w.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)(g.default, {
        className: E.searchBar,
        query: e,
        onChange: t,
        onClear: () => t(""),
        placeholder: "Search by experiment id"
      })]
    }), (0, a.jsx)(h.ScrollerThin, {
      className: E.tableContainer,
      children: (0, a.jsx)(S.default, {
        columns: N,
        data: o,
        selectedRowKey: s,
        onClickRow: d
      })
    }), null != m && (0, a.jsxs)(T.default, {
      className: E.subPanel,
      minHeight: 100,
      initialHeight: null != r.current ? r.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(y, {}), b({
        loggedTrigger: m
      })]
    })]
  })
}