"use strict";
t.r(r), t.d(r, {
  default: function() {
    return _
  }
}), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  o = t("658722"),
  c = t.n(o),
  s = t("913527"),
  d = t.n(s),
  u = t("442837"),
  h = t("481060"),
  m = t("570140"),
  p = t("6048"),
  g = t("825185"),
  f = t("740727"),
  b = t("502568"),
  y = t("55935"),
  x = t("120816"),
  k = t("31336"),
  v = t("257785"),
  j = t("484036"),
  C = t("681619"),
  w = t("621060"),
  S = t("689938"),
  N = t("457501"),
  T = t("277513");
let L = [{
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
  E = [{
    id: "details",
    name: "Details",
    render: e => {
      let {
        loggedTrigger: {
          experimentId: r,
          descriptor: t,
          exposureType: i,
          excluded: l,
          timestamp: o,
          location: c,
          previouslyTracked: s
        }
      } = e, u = d()(o);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(b.default, {
          className: n()(T.headerBar, N.subPanelHeaderBar),
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
  let [e, r] = i.useState(""), t = i.useRef(null), l = (0, u.useStateFromStoresArray)([x.default], () => x.default.loggedTriggers), o = i.useMemo(() => l.filter(r => 0 === e.length || c()(e, r.experimentId)).sort((e, r) => r.timestamp.getTime() - e.timestamp.getTime()), [l, e]), [s, d] = i.useState(void 0), g = o.find(e => e.key === s), {
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
    ref: t,
    className: n()(T.panel, N.panel),
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
          title: S.default.Messages.CLEAR,
          children: (0, a.jsx)(f.default, {
            "aria-label": S.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)(p.default, {
        className: N.searchBar,
        query: e,
        onChange: r,
        onClear: () => r(""),
        placeholder: "Search by experiment id"
      })]
    }), (0, a.jsx)(h.ScrollerThin, {
      className: N.tableContainer,
      children: (0, a.jsx)(C.default, {
        columns: L,
        data: o,
        selectedRowKey: s,
        onClickRow: d
      })
    }), null != g && (0, a.jsxs)(j.default, {
      className: N.subPanel,
      minHeight: 100,
      initialHeight: null != t.current ? t.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(b, {}), y({
        loggedTrigger: g
      })]
    })]
  })
}