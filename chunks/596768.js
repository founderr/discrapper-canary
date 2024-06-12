"use strict";
r.r(t), r.d(t, {
  default: function() {
    return _
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
  g = r("825185"),
  m = r("740727"),
  f = r("502568"),
  y = r("55935"),
  b = r("120816"),
  x = r("31336"),
  k = r("257785"),
  v = r("484036"),
  S = r("681619"),
  T = r("621060"),
  j = r("689938"),
  w = r("457501"),
  N = r("277513");
let C = [{
    key: "id",
    cellClassName: w.eventColumn,
    render(e) {
      let {
        experimentId: t
      } = e;
      return t
    }
  }, {
    key: "bucket",
    cellClassName: w.locationColumn,
    render(e) {
      let {
        descriptor: t
      } = e;
      return t.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: w.locationColumn,
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
          excluded: n,
          timestamp: o,
          location: c,
          previouslyTracked: s
        }
      } = e, u = d()(o);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(f.default, {
          className: l()(N.headerBar, w.subPanelHeaderBar),
          children: [(0, a.jsx)(f.default.Icon, {
            icon: g.default,
            tooltip: t
          }), (0, a.jsx)(f.default.Title, {
            children: t
          })]
        }), (0, a.jsxs)(k.Properties, {
          className: w.commonProperties,
          children: [(0, a.jsx)(k.Property, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: o.toISOString(),
              title: (0, y.dateFormat)(u, "LLLL"),
              children: (0, y.calendarFormat)(u)
            })
          }), "guild" === r.type && (0, a.jsx)(k.Property, {
            name: "Guild ID",
            children: (0, a.jsx)("code", {
              children: r.guildId
            })
          }), (0, a.jsx)(k.Property, {
            name: "Bucket",
            children: (0, a.jsx)("code", {
              children: r.bucket
            })
          }), (0, a.jsx)(k.Property, {
            name: "Revision",
            children: (0, a.jsx)("code", {
              children: r.revision
            })
          }), (0, a.jsx)(k.Property, {
            name: "Override",
            children: (0, a.jsx)(k.BooleanPropertyValue, {
              value: r.override
            })
          }), (0, a.jsx)(k.Property, {
            name: "Exposure type",
            children: (0, a.jsx)("code", {
              children: i
            })
          }), (0, a.jsx)(k.Property, {
            name: "Excluded",
            children: (0, a.jsx)(k.BooleanPropertyValue, {
              value: n
            })
          }), (0, a.jsx)(k.Property, {
            name: "Previously tracked",
            children: (0, a.jsx)(k.BooleanPropertyValue, {
              value: s
            })
          }), (0, a.jsx)(k.Property, {
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
  let [e, t] = i.useState(""), r = i.useRef(null), n = (0, u.useStateFromStoresArray)([b.default], () => b.default.loggedTriggers), o = i.useMemo(() => n.filter(t => 0 === e.length || c()(e, t.experimentId)).sort((e, t) => t.timestamp.getTime() - e.timestamp.getTime()), [n, e]), [s, d] = i.useState(void 0), g = o.find(e => e.key === s), {
    TabBar: f,
    renderSelectedTab: y
  } = (0, T.default)({
    tabs: E
  }, []), k = (0, u.useStateFromStores)([b.default], () => b.default.trackTriggers), _ = i.useCallback(e => {
    p.default.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []);
  return (0, a.jsxs)("div", {
    ref: r,
    className: l()(N.panel, w.panel),
    children: [(0, a.jsxs)("div", {
      className: w.toolbar,
      children: [(0, a.jsx)("div", {
        title: "Enables tracking of all triggers",
        className: w.triggersEnable,
        children: (0, a.jsx)(h.Switch, {
          checked: k,
          onChange: _,
          className: w.__invalid_toolbarSwitch
        })
      }), (0, a.jsx)(h.Button, {
        className: w.toolbarButton,
        look: h.Button.Looks.BLANK,
        size: h.Button.Sizes.ICON,
        onClick: x.clearAnalyticsLog,
        children: (0, a.jsx)("span", {
          title: j.default.Messages.CLEAR,
          children: (0, a.jsx)(m.default, {
            "aria-label": j.default.Messages.CLEAR
          })
        })
      }), (0, a.jsx)(h.SearchBar, {
        className: w.searchBar,
        query: e,
        onChange: t,
        onClear: () => t(""),
        placeholder: "Search by experiment id"
      })]
    }), (0, a.jsx)(h.ScrollerThin, {
      className: w.tableContainer,
      children: (0, a.jsx)(S.default, {
        columns: C,
        data: o,
        selectedRowKey: s,
        onClickRow: d
      })
    }), null != g && (0, a.jsxs)(v.default, {
      className: w.subPanel,
      minHeight: 100,
      initialHeight: null != r.current ? r.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(f, {}), y({
        loggedTrigger: g
      })]
    })]
  })
}