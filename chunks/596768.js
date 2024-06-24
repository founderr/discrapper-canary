t.d(r, {
  Z: function() {
    return T
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  i = t(120356),
  l = t.n(i),
  o = t(658722),
  c = t.n(o),
  s = t(913527),
  d = t.n(s),
  u = t(442837),
  h = t(481060),
  m = t(570140),
  g = t(502568),
  p = t(55935),
  b = t(120816),
  y = t(31336),
  f = t(257785),
  x = t(484036),
  k = t(681619),
  v = t(621060),
  j = t(689938),
  N = t(206884),
  w = t(719556);
let C = [{
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
  S = [{
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
          location: c,
          previouslyTracked: s
        }
      } = e, u = d()(o);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(g.ZP, {
          className: l()(w.headerBar, N.subPanelHeaderBar),
          children: [(0, a.jsx)(g.ZP.Icon, {
            icon: h.AnalyticsIcon,
            tooltip: r
          }), (0, a.jsx)(g.ZP.Title, {
            children: r
          })]
        }), (0, a.jsxs)(f.E, {
          className: N.commonProperties,
          children: [(0, a.jsx)(f.Z9, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: o.toISOString(),
              title: (0, p.vc)(u, "LLLL"),
              children: (0, p.Y4)(u)
            })
          }), "guild" === t.type && (0, a.jsx)(f.Z9, {
            name: "Guild ID",
            children: (0, a.jsx)("code", {
              children: t.guildId
            })
          }), (0, a.jsx)(f.Z9, {
            name: "Bucket",
            children: (0, a.jsx)("code", {
              children: t.bucket
            })
          }), (0, a.jsx)(f.Z9, {
            name: "Revision",
            children: (0, a.jsx)("code", {
              children: t.revision
            })
          }), (0, a.jsx)(f.Z9, {
            name: "Override",
            children: (0, a.jsx)(f.wl, {
              value: t.override
            })
          }), (0, a.jsx)(f.Z9, {
            name: "Exposure type",
            children: (0, a.jsx)("code", {
              children: n
            })
          }), (0, a.jsx)(f.Z9, {
            name: "Excluded",
            children: (0, a.jsx)(f.wl, {
              value: i
            })
          }), (0, a.jsx)(f.Z9, {
            name: "Previously tracked",
            children: (0, a.jsx)(f.wl, {
              value: s
            })
          }), (0, a.jsx)(f.Z9, {
            name: "Location",
            children: (0, a.jsx)("code", {
              children: c
            })
          })]
        })]
      })
    }
  }];

function T() {
  let [e, r] = n.useState(""), t = n.useRef(null), i = (0, u.Wu)([b.Z], () => b.Z.loggedTriggers), o = n.useMemo(() => i.filter(r => 0 === e.length || c()(e, r.experimentId)).sort((e, r) => r.timestamp.getTime() - e.timestamp.getTime()), [i, e]), [s, d] = n.useState(void 0), g = o.find(e => e.key === s), {
    TabBar: p,
    renderSelectedTab: f
  } = (0, v.Z)({
    tabs: S
  }, []), T = (0, u.e7)([b.Z], () => b.Z.trackTriggers), E = n.useCallback(e => {
    m.Z.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []);
  return (0, a.jsxs)("div", {
    ref: t,
    className: l()(w.panel, N.panel),
    children: [(0, a.jsxs)("div", {
      className: N.toolbar,
      children: [(0, a.jsx)("div", {
        title: "Enables tracking of all triggers",
        className: N.triggersEnable,
        children: (0, a.jsx)(h.Switch, {
          checked: T,
          onChange: E,
          className: N.__invalid_toolbarSwitch
        })
      }), (0, a.jsx)(h.Button, {
        className: N.toolbarButton,
        look: h.Button.Looks.BLANK,
        size: h.Button.Sizes.ICON,
        onClick: y.Zw,
        children: (0, a.jsx)("span", {
          title: j.Z.Messages.CLEAR,
          children: (0, a.jsx)(h.TrashIcon, {
            size: "md",
            color: "currentColor",
            "aria-label": j.Z.Messages.CLEAR
          })
        })
      }), (0, a.jsx)(h.SearchBar, {
        className: N.searchBar,
        query: e,
        onChange: r,
        onClear: () => r(""),
        placeholder: "Search by experiment id"
      })]
    }), (0, a.jsx)(h.ScrollerThin, {
      className: N.tableContainer,
      children: (0, a.jsx)(k.Z, {
        columns: C,
        data: o,
        selectedRowKey: s,
        onClickRow: d
      })
    }), null != g && (0, a.jsxs)(x.Z, {
      className: N.subPanel,
      minHeight: 100,
      initialHeight: null != t.current ? t.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(p, {}), f({
        loggedTrigger: g
      })]
    })]
  })
}