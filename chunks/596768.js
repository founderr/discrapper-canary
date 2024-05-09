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
  c = r.n(o),
  s = r("913527"),
  d = r.n(s),
  u = r("442837"),
  h = r("481060"),
  m = r("570140"),
  p = r("6048"),
  g = r("825185"),
  f = r("740727"),
  b = r("502568"),
  y = r("55935"),
  x = r("120816"),
  k = r("31336"),
  v = r("257785"),
  j = r("484036"),
  C = r("681619"),
  w = r("621060"),
  S = r("689938"),
  T = r("457501"),
  N = r("277513");
let L = [{
    key: "id",
    cellClassName: T.eventColumn,
    render(e) {
      let {
        experimentId: t
      } = e;
      return t
    }
  }, {
    key: "bucket",
    cellClassName: T.locationColumn,
    render(e) {
      let {
        descriptor: t
      } = e;
      return t.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: T.locationColumn,
    render(e) {
      let {
        timestamp: t
      } = e;
      return t.toLocaleString()
    }
  }],
  E = [{
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
          location: c,
          previouslyTracked: s
        }
      } = e, u = d()(o);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(b.default, {
          className: n()(N.headerBar, T.subPanelHeaderBar),
          children: [(0, a.jsx)(b.default.Icon, {
            icon: g.default,
            tooltip: t
          }), (0, a.jsx)(b.default.Title, {
            children: t
          })]
        }), (0, a.jsxs)(v.Properties, {
          className: T.commonProperties,
          children: [(0, a.jsx)(v.Property, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: o.toISOString(),
              title: (0, y.dateFormat)(u, "LLLL"),
              children: (0, y.calendarFormat)(u)
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

function _() {
  let [e, t] = i.useState(""), r = i.useRef(null), l = (0, u.useStateFromStoresArray)([x.default], () => x.default.loggedTriggers), o = i.useMemo(() => l.filter(t => 0 === e.length || c()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [l, e]), [s, d] = i.useState(void 0), g = o.find(e => e.key === s), {
    TabBar: b,
    renderSelectedTab: y
  } = (0, w.default)({
    tabs: E
  }, []), v = (0, u.useStateFromStores)([x.default], () => x.default.trackTriggers), _ = i.useCallback(e => {
    m.default.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []);
  return (0, a.jsxs)("div", {
    ref: r,
    className: n()(N.panel, T.panel),
    children: [(0, a.jsxs)("div", {
      className: T.toolbar,
      children: [(0, a.jsx)("div", {
        title: "Enables tracking of all triggers",
        className: T.triggersEnable,
        children: (0, a.jsx)(h.Switch, {
          checked: v,
          onChange: _,
          className: T.__invalid_toolbarSwitch
        })
      }), (0, a.jsx)(h.Button, {
        className: T.toolbarButton,
        look: h.Button.Looks.BLANK,
        size: h.Button.Sizes.ICON,
        onClick: k.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: S.default.Messages.CLEAR,
          children: (0, a.jsx)(f.default, {
            "aria-label": S.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)(p.default, {
        className: T.searchBar,
        query: e,
        onChange: t,
        onClear: () => t(""),
        placeholder: "Search by experiment id"
      })]
    }), (0, a.jsx)(h.ScrollerThin, {
      className: T.tableContainer,
      children: (0, a.jsx)(C.default, {
        columns: L,
        data: o,
        selectedRowKey: s,
        onClickRow: d
      })
    }), null != g && (0, a.jsxs)(j.default, {
      className: T.subPanel,
      minHeight: 100,
      initialHeight: null != r.current ? r.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(b, {}), y({
        loggedTrigger: g
      })]
    })]
  })
}