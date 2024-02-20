"use strict";
t.r(r), t.d(r, {
  default: function() {
    return z
  }
}), t("424973"), t("222007");
var a = t("37983"),
  n = t("884691"),
  i = t("414456"),
  l = t.n(i),
  o = t("759843"),
  s = t("446674"),
  c = t("77078"),
  d = t("594203"),
  u = t("428958"),
  h = t("368694"),
  p = t("461380"),
  m = t("945330"),
  g = t("496657"),
  f = t("664336"),
  b = t("370492"),
  y = t("584369"),
  x = t("676574");
t("444489");
var k = t("224249"),
  v = t("706098"),
  C = t("383925"),
  S = t("21573"),
  j = t("245515"),
  T = t("172248"),
  w = t("811199"),
  N = t("175768"),
  E = t("358344"),
  L = t("34971"),
  _ = t("134034"),
  A = t("79953"),
  R = t("388557"),
  P = t("238161"),
  M = t("20950"),
  O = t("724209"),
  I = t("782340"),
  D = t("34693"),
  B = t("699412");

function G(e) {
  let {
    resizableNode: r,
    onResize: t,
    onResizeEnd: n
  } = e, i = (0, d.default)({
    minDimension: y.DEVTOOLS_SIDEBAR_MIN_WIDTH,
    resizableDomNodeRef: r,
    onElementResize: t,
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
  let r = n.useMemo(() => {
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
      TabBar: t,
      renderSelectedTab: i,
      selectedTabId: l
    } = (0, O.default)({
      tabs: r,
      initialSelectedTabId: null !== (e = y.default.lastOpenTabId) && void 0 !== e ? e : void 0,
      onChangeTab: e => {
        (0, b.updateDevToolsSettings)({
          lastOpenTabId: e
        })
      }
    }, [r]);
  return (0, u.default)({
    type: o.ImpressionTypes.PANE,
    name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: l
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
    }), (0, a.jsx)(t, {}), i(), (0, a.jsx)(w.DevToolsLayerContainer, {
      className: D.layerContainer
    })]
  })
}

function U() {
  let e = n.useRef(null),
    r = (0, s.useStateFromStores)([y.default], () => y.default.sidebarWidth),
    [t, i] = n.useState(null),
    o = n.useCallback(e => (0, b.updateDevToolsSettings)({
      sidebarWidth: e
    }), []);
  return (n.useEffect(() => {
    null === t && null !== r && i(r)
  }, [r, t]), null === t) ? null : (0, a.jsxs)("div", {
    ref: e,
    className: l(D.container),
    style: {
      minWidth: y.DEVTOOLS_SIDEBAR_MIN_WIDTH,
      width: t
    },
    children: [(0, a.jsx)(G, {
      resizableNode: e,
      onResize: i,
      onResizeEnd: o
    }), (0, a.jsx)("div", {
      className: D.sidebarContent,
      children: (0, a.jsx)(F, {})
    })]
  })
}

function H() {
  let e = (0, s.useStateFromStores)([y.default], () => y.default.displayTools);
  return e ? (0, a.jsx)("div", {
    className: l(D.container, D.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: D.sidebarContent,
      children: (0, a.jsx)(F, {})
    })
  }) : (0, a.jsx)("div", {
    className: D.container,
    children: (0, a.jsx)(c.Clickable, {
      onClick: b.toggleDisplayDevTools,
      children: (0, a.jsxs)(f.default, {
        className: l(B.headerBar, D.mobileHeaderCollapsed),
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
    mobile: r
  } = e;
  return r ? (0, a.jsx)(H, {}) : (0, a.jsx)(U, {})
}