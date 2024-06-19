t.d(r, {
  Z: function() {
    return T
  }
}), t(47120);
var a = t(735250),
  i = t(470079),
  n = t(120356),
  o = t.n(n),
  l = t(658722),
  c = t.n(l),
  s = t(913527),
  d = t.n(s),
  u = t(442837),
  h = t(481060),
  m = t(570140),
  g = t(502568),
  p = t(55935),
  b = t(120816),
  y = t(31336),
  x = t(257785),
  f = t(484036),
  k = t(681619),
  v = t(621060),
  j = t(689938),
  w = t(206884),
  N = t(719556);
let C = [{
    key: "id",
    cellClassName: w.eventColumn,
    render(e) {
      let {
        experimentId: r
      } = e;
      return r
    }
  }, {
    key: "bucket",
    cellClassName: w.locationColumn,
    render(e) {
      let {
        descriptor: r
      } = e;
      return r.bucket
    }
  }, {
    key: "timestamp",
    cellClassName: w.locationColumn,
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
          exposureType: i,
          excluded: n,
          timestamp: l,
          location: c,
          previouslyTracked: s
        }
      } = e, u = d()(l);
      return (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsxs)(g.ZP, {
          className: o()(N.headerBar, w.subPanelHeaderBar),
          children: [(0, a.jsx)(g.ZP.Icon, {
            icon: h.AnalyticsIcon,
            tooltip: r
          }), (0, a.jsx)(g.ZP.Title, {
            children: r
          })]
        }), (0, a.jsxs)(x.E, {
          className: w.commonProperties,
          children: [(0, a.jsx)(x.Z9, {
            name: "Timestamp (local)",
            children: (0, a.jsx)("time", {
              dateTime: l.toISOString(),
              title: (0, p.vc)(u, "LLLL"),
              children: (0, p.Y4)(u)
            })
          }), "guild" === t.type && (0, a.jsx)(x.Z9, {
            name: "Guild ID",
            children: (0, a.jsx)("code", {
              children: t.guildId
            })
          }), (0, a.jsx)(x.Z9, {
            name: "Bucket",
            children: (0, a.jsx)("code", {
              children: t.bucket
            })
          }), (0, a.jsx)(x.Z9, {
            name: "Revision",
            children: (0, a.jsx)("code", {
              children: t.revision
            })
          }), (0, a.jsx)(x.Z9, {
            name: "Override",
            children: (0, a.jsx)(x.wl, {
              value: t.override
            })
          }), (0, a.jsx)(x.Z9, {
            name: "Exposure type",
            children: (0, a.jsx)("code", {
              children: i
            })
          }), (0, a.jsx)(x.Z9, {
            name: "Excluded",
            children: (0, a.jsx)(x.wl, {
              value: n
            })
          }), (0, a.jsx)(x.Z9, {
            name: "Previously tracked",
            children: (0, a.jsx)(x.wl, {
              value: s
            })
          }), (0, a.jsx)(x.Z9, {
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
  let [e, r] = i.useState(""), t = i.useRef(null), n = (0, u.Wu)([b.Z], () => b.Z.loggedTriggers), l = i.useMemo(() => n.filter(r => 0 === e.length || c()(e, r.experimentId)).sort((e, r) => r.timestamp.getTime() - e.timestamp.getTime()), [n, e]), [s, d] = i.useState(void 0), g = l.find(e => e.key === s), {
    TabBar: p,
    renderSelectedTab: x
  } = (0, v.Z)({
    tabs: S
  }, []), T = (0, u.e7)([b.Z], () => b.Z.trackTriggers), Z = i.useCallback(e => {
    m.Z.dispatch({
      type: "SET_TRACK_TRIGGERS",
      enabled: e
    })
  }, []);
  return (0, a.jsxs)("div", {
    ref: t,
    className: o()(N.panel, w.panel),
    children: [(0, a.jsxs)("div", {
      className: w.toolbar,
      children: [(0, a.jsx)("div", {
        title: "Enables tracking of all triggers",
        className: w.triggersEnable,
        children: (0, a.jsx)(h.Switch, {
          checked: T,
          onChange: Z,
          className: w.__invalid_toolbarSwitch
        })
      }), (0, a.jsx)(h.Button, {
        className: w.toolbarButton,
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
        className: w.searchBar,
        query: e,
        onChange: r,
        onClear: () => r(""),
        placeholder: "Search by experiment id"
      })]
    }), (0, a.jsx)(h.ScrollerThin, {
      className: w.tableContainer,
      children: (0, a.jsx)(k.Z, {
        columns: C,
        data: l,
        selectedRowKey: s,
        onClickRow: d
      })
    }), null != g && (0, a.jsxs)(f.Z, {
      className: w.subPanel,
      minHeight: 100,
      initialHeight: null != t.current ? t.current.clientHeight / 2 : 300,
      children: [(0, a.jsx)(p, {}), x({
        loggedTrigger: g
      })]
    })]
  })
}