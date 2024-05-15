"use strict";
r.r(t), r.d(t, {
  default: function() {
    return _
  }
}), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("658722"),
  s = r.n(o),
  c = r("913527"),
  d = r.n(c),
  u = r("442837"),
  h = r("481060"),
  m = r("570140"),
  p = r("6048"),
  g = r("825185"),
  f = r("740727"),
  y = r("502568"),
  b = r("55935"),
  x = r("120816"),
  k = r("31336"),
  v = r("257785"),
  C = r("484036"),
  j = r("681619"),
  S = r("621060"),
  T = r("689938"),
  N = r("457501"),
  w = r("277513");
let E = [{
    key: "id",
    cellClassName: N.eventColumn,
    render(e) {
      let {
        experimentId: t
      } = e;
      return t
    }
  }, {
    key: "bucket",
    cellClassName: N.locationColumn,
    render(e) {
      let {
        descriptor: t
      } = e;
      return t.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: N.locationColumn,
    render(e) {
      let {
        timestamp: t
      } = e;
      return t.toLocaleString()
    }
  }],
  L = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedTrigger: {
          experimentId: t,
          descriptor: r,
          exposureType: i,
          excluded: l,
          timestamp: o,
          location: s,
          previouslyTracked: c
        }
      } = e, u = d()(o);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(y.default, {
          className: n()(w.headerBar, N.subPanelHeaderBar),
          children: [(0, a.jsx)(y.default.Icon, {
            icon: g.default,
            tooltip: t
          }), (0, a.jsx)(y.default.Title, {
            children: t
          })]
        }), (0, a.jsxs)(v.Properties, {
          className: N.commonProperties,
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
              value: l
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
  let [e, t] = i.useState(""), r = i.useRef(null), l = (0, u.useStateFromStoresArray)([x.default], () => x.default.loggedTriggers), o = i.useMemo(() => l.filter(t => 0 === e.length || s()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [l, e]), [c, d] = i.useState(void 0), g = o.find(e => e.key === c), {
    TabBar: y,
    renderSelectedTab: b
  } = (0, S.default)({
    tabs: L
  }, []), v = (0, u.useStateFromStores)([x.default], () => x.default.trackTriggers), _ = i.useCallback(e => {
    m.default.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []);
  return (0, a.jsxs)("div", {
    ref: r,
    className: n()(w.panel, N.panel),
    children: [(0, a.jsxs)("div", {
      className: N.toolbar,
      children: [(0, a.jsx)("div", {
        title: "Enables tracking of all triggers",
        className: N.triggersEnable,
        children: (0, a.jsx)(h.Switch, {
          checked: v,
          onChange: _,
          className: N.__invalid_toolbarSwitch
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
      }), (0, a.jsx)(p.default, {
        className: N.searchBar,
        query: e,
        onChange: t,
        onClear: () => t(""),
        placeholder: "Search by experiment id"
      })]
    }), (0, a.jsx)(h.ScrollerThin, {
      className: N.tableContainer,
      children: (0, a.jsx)(j.default, {
        columns: E,
        data: o,
        selectedRowKey: c,
        onClickRow: d
      })
    }), null != g && (0, a.jsxs)(C.default, {
      className: N.subPanel,
      minHeight: 100,
      initialHeight: null != r.current ? r.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(y, {}), b({
        loggedTrigger: g
      })]
    })]
  })
}