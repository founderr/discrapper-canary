"use strict";
r.r(t), r.d(t, {
  default: function() {
    return z
  }
}), r("424973"), r("222007");
var a = r("37983"),
  n = r("884691"),
  i = r("414456"),
  o = r.n(i),
  l = r("759843"),
  s = r("446674"),
  c = r("77078"),
  d = r("594203"),
  u = r("428958"),
  h = r("368694"),
  p = r("461380"),
  m = r("945330"),
  g = r("496657"),
  f = r("664336"),
  b = r("370492"),
  y = r("584369"),
  x = r("676574");
r("444489");
var k = r("224249"),
  v = r("706098"),
  C = r("383925"),
  S = r("21573"),
  j = r("245515"),
  T = r("172248"),
  w = r("811199"),
  N = r("175768"),
  E = r("358344"),
  L = r("34971"),
  _ = r("134034"),
  A = r("79953"),
  R = r("388557"),
  P = r("238161"),
  M = r("20950"),
  O = r("724209"),
  I = r("782340"),
  D = r("34693"),
  B = r("699412");

function G(e) {
  let {
    resizableNode: t,
    onResize: r,
    onResizeEnd: n
  } = e, i = (0, d.default)({
    minDimension: y.DEVTOOLS_SIDEBAR_MIN_WIDTH,
    resizableDomNodeRef: t,
    onElementResize: r,
    onElementResizeEnd: n,
    orientation: d.ResizeOrientation.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: i,
    className: D.resizeHandle
  })
}

function F() {
  var e;
  let t = n.useMemo(() => {
      let e = [{
        id: "analytics",
        name: "Analytics",
        render: () => (0, a.jsx)(k.default, {})
      }, {
        id: "triggers",
        name: "Triggers",
        render: () => (0, a.jsx)(M.default, {})
      }, {
        id: "stores",
        name: "Stores",
        render: () => (0, a.jsx)(A.default, {})
      }, {
        id: "dispatcher",
        name: "Dispatcher",
        render: () => (0, a.jsx)(j.default, {})
      }];
      return h.default.isDeveloper && e.push({
        id: "quick_actions",
        name: "Quick Actions",
        render: () => (0, a.jsx)(_.default, {})
      }), e.push({
        id: "colors",
        name: "Colors",
        render: () => (0, a.jsx)(C.default, {})
      }), e.push({
        id: "design_toggles",
        name: "Design Toggles",
        render: () => (0, a.jsx)(S.default, {})
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
        render: () => (0, a.jsx)(L.default, {})
      }), e.push({
        id: "modals",
        name: "Modals",
        render: () => (0, a.jsx)(N.default, {})
      }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") && (e.push({
        id: "trials",
        name: "Trials",
        render: () => (0, a.jsx)(P.default, {})
      }), e.push({
        id: "payments",
        name: "Payments",
        render: () => (0, a.jsx)(E.default, {})
      }), e.push({
        id: "subscriptions",
        name: "Subscriptions",
        render: () => (0, a.jsx)(R.default, {})
      }), e.push({
        id: "billing",
        name: "Billing",
        render: () => (0, a.jsx)(v.default, {})
      })), e
    }, []),
    {
      TabBar: r,
      renderSelectedTab: i,
      selectedTabId: o
    } = (0, O.default)({
      tabs: t,
      initialSelectedTabId: null !== (e = y.default.lastOpenTabId) && void 0 !== e ? e : void 0,
      onChangeTab: e => {
        (0, b.updateDevToolsSettings)({
          lastOpenTabId: e
        })
      }
    }, [t]);
  return (0, u.default)({
    type: l.ImpressionTypes.PANE,
    name: l.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: o
    }
  }), (0, a.jsxs)(w.DevToolsLayerProvider, {
    children: [(0, a.jsxs)(f.default, {
      className: B.headerBar,
      toolbar: (0, a.jsx)(f.default.Icon, {
        icon: m.default,
        tooltip: I.default.Messages.CLOSE,
        onClick: b.toggleDisplayDevTools
      }),
      children: [(0, a.jsx)(f.default.Icon, {
        icon: g.default,
        tooltip: "DevTools"
      }), (0, a.jsx)(f.default.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(r, {}), i(), (0, a.jsx)(w.DevToolsLayerContainer, {
      className: D.layerContainer
    })]
  })
}

function U() {
  let e = n.useRef(null),
    t = (0, s.useStateFromStores)([y.default], () => y.default.sidebarWidth),
    [r, i] = n.useState(null),
    l = n.useCallback(e => (0, b.updateDevToolsSettings)({
      sidebarWidth: e
    }), []);
  return (n.useEffect(() => {
    null === r && null !== t && i(t)
  }, [t, r]), null === r) ? null : (0, a.jsxs)("div", {
    ref: e,
    className: o(D.container),
    style: {
      minWidth: y.DEVTOOLS_SIDEBAR_MIN_WIDTH,
      width: r
    },
    children: [(0, a.jsx)(G, {
      resizableNode: e,
      onResize: i,
      onResizeEnd: l
    }), (0, a.jsx)("div", {
      className: D.sidebarContent,
      children: (0, a.jsx)(F, {})
    })]
  })
}

function H() {
  let e = (0, s.useStateFromStores)([y.default], () => y.default.displayTools);
  return e ? (0, a.jsx)("div", {
    className: o(D.container, D.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: D.sidebarContent,
      children: (0, a.jsx)(F, {})
    })
  }) : (0, a.jsx)("div", {
    className: D.container,
    children: (0, a.jsx)(c.Clickable, {
      onClick: b.toggleDisplayDevTools,
      children: (0, a.jsxs)(f.default, {
        className: o(B.headerBar, D.mobileHeaderCollapsed),
        toolbar: (0, a.jsx)(p.default, {
          direction: p.default.Directions.UP
        }),
        children: [(0, a.jsx)(f.default.Icon, {
          icon: g.default,
          tooltip: "DevTools"
        }), (0, a.jsx)(f.default.Title, {
          children: "DevTools"
        })]
      })
    })
  })
}

function z(e) {
  let {
    mobile: t
  } = e;
  return t ? (0, a.jsx)(H, {}) : (0, a.jsx)(U, {})
}