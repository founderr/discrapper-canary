"use strict";
r.r(t), r.d(t, {
  default: function() {
    return Y
  }
}), r("424973"), r("222007");
var a = r("37983"),
  n = r("884691"),
  i = r("414456"),
  l = r.n(i),
  o = r("759843"),
  s = r("446674"),
  c = r("77078"),
  d = r("594203"),
  u = r("428958"),
  h = r("368694"),
  p = r("461380"),
  f = r("945330"),
  m = r("496657"),
  g = r("664336"),
  y = r("370492"),
  b = r("584369"),
  x = r("676574");
r("444489");
var k = r("556857"),
  v = r("224249"),
  C = r("706098"),
  S = r("383925"),
  j = r("21573"),
  w = r("245515"),
  T = r("172248"),
  N = r("811199"),
  E = r("175768"),
  L = r("358344"),
  _ = r("34971"),
  A = r("134034"),
  R = r("79953"),
  P = r("388557"),
  I = r("238161"),
  M = r("20950"),
  O = r("724209"),
  D = r("782340"),
  B = r("34693"),
  F = r("699412");

function U(e) {
  let {
    resizableNode: t,
    onResize: r,
    onResizeEnd: n
  } = e, i = (0, d.default)({
    minDimension: b.DEVTOOLS_SIDEBAR_MIN_WIDTH,
    resizableDomNodeRef: t,
    onElementResize: r,
    onElementResizeEnd: n,
    orientation: d.ResizeOrientation.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: i,
    className: B.resizeHandle
  })
}

function G() {
  var e;
  let t = n.useMemo(() => {
      let e = [{
        id: "analytics",
        name: "Analytics",
        render: () => (0, a.jsx)(v.default, {})
      }, {
        id: "triggers",
        name: "Triggers",
        render: () => (0, a.jsx)(M.default, {})
      }, {
        id: "stores",
        name: "Stores",
        render: () => (0, a.jsx)(R.default, {})
      }, {
        id: "dispatcher",
        name: "Dispatcher",
        render: () => (0, a.jsx)(w.default, {})
      }];
      return h.default.isDeveloper && e.push({
        id: "quick_actions",
        name: "Quick Actions",
        render: () => (0, a.jsx)(A.default, {})
      }), e.push({
        id: "colors",
        name: "Colors",
        render: () => (0, a.jsx)(S.default, {})
      }), e.push({
        id: "design_toggles",
        name: "Design Toggles",
        render: () => (0, a.jsx)(j.default, {})
      }), e.push({
        id: "overlays",
        name: "Dev Overlays",
        render: () => (0, a.jsx)(T.default, {
          devSettingsCategory: x.DevSettingsCategory.OVERLAYS
        })
      }), e.push({
        id: "messaging",
        name: "Messaging",
        render: () => (0, a.jsx)(T.default, {
          devSettingsCategory: x.DevSettingsCategory.MESSAGING
        })
      }), e.push({
        id: "permissions",
        name: "Permissions",
        render: () => (0, a.jsx)(_.default, {})
      }), e.push({
        id: "modals",
        name: "Modals",
        render: () => (0, a.jsx)(E.default, {})
      }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") && (e.push({
        id: "trials",
        name: "Trials",
        render: () => (0, a.jsx)(I.default, {})
      }), e.push({
        id: "payments",
        name: "Payments",
        render: () => (0, a.jsx)(L.default, {})
      }), e.push({
        id: "subscriptions",
        name: "Subscriptions",
        render: () => (0, a.jsx)(P.default, {})
      }), e.push({
        id: "billing",
        name: "Billing",
        render: () => (0, a.jsx)(C.default, {})
      }), e.push({
        id: "affinity",
        name: "Affinity",
        render: () => (0, a.jsx)(k.default, {})
      })), e
    }, []),
    {
      TabBar: r,
      renderSelectedTab: i,
      selectedTabId: l
    } = (0, O.default)({
      tabs: t,
      initialSelectedTabId: null !== (e = b.default.lastOpenTabId) && void 0 !== e ? e : void 0,
      onChangeTab: e => {
        (0, y.updateDevToolsSettings)({
          lastOpenTabId: e
        })
      }
    }, [t]);
  return (0, u.default)({
    type: o.ImpressionTypes.PANE,
    name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: l
    }
  }), (0, a.jsxs)(N.DevToolsLayerProvider, {
    children: [(0, a.jsxs)(g.default, {
      className: F.headerBar,
      toolbar: (0, a.jsx)(g.default.Icon, {
        icon: f.default,
        tooltip: D.default.Messages.CLOSE,
        onClick: y.toggleDisplayDevTools
      }),
      children: [(0, a.jsx)(g.default.Icon, {
        icon: m.default,
        tooltip: "DevTools"
      }), (0, a.jsx)(g.default.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(r, {}), i(), (0, a.jsx)(N.DevToolsLayerContainer, {
      className: B.layerContainer
    })]
  })
}

function H() {
  let e = n.useRef(null),
    t = (0, s.useStateFromStores)([b.default], () => b.default.sidebarWidth),
    [r, i] = n.useState(null),
    o = n.useCallback(e => (0, y.updateDevToolsSettings)({
      sidebarWidth: e
    }), []);
  return (n.useEffect(() => {
    null === r && null !== t && i(t)
  }, [t, r]), null === r) ? null : (0, a.jsxs)("div", {
    ref: e,
    className: l(B.container),
    style: {
      minWidth: b.DEVTOOLS_SIDEBAR_MIN_WIDTH,
      width: r
    },
    children: [(0, a.jsx)(U, {
      resizableNode: e,
      onResize: i,
      onResizeEnd: o
    }), (0, a.jsx)("div", {
      className: B.sidebarContent,
      children: (0, a.jsx)(G, {})
    })]
  })
}

function z() {
  let e = (0, s.useStateFromStores)([b.default], () => b.default.displayTools);
  return e ? (0, a.jsx)("div", {
    className: l(B.container, B.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: B.sidebarContent,
      children: (0, a.jsx)(G, {})
    })
  }) : (0, a.jsx)("div", {
    className: B.container,
    children: (0, a.jsx)(c.Clickable, {
      onClick: y.toggleDisplayDevTools,
      children: (0, a.jsxs)(g.default, {
        className: l(F.headerBar, B.mobileHeaderCollapsed),
        toolbar: (0, a.jsx)(p.default, {
          direction: p.default.Directions.UP
        }),
        children: [(0, a.jsx)(g.default.Icon, {
          icon: m.default,
          tooltip: "DevTools"
        }), (0, a.jsx)(g.default.Title, {
          children: "DevTools"
        })]
      })
    })
  })
}

function Y(e) {
  let {
    mobile: t
  } = e;
  return t ? (0, a.jsx)(z, {}) : (0, a.jsx)(H, {})
}