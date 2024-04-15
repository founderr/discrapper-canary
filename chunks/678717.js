"use strict";
r.r(t), r.d(t, {
  default: function() {
    return V
  }
}), r("653041"), r("47120");
var a = r("735250"),
  n = r("470079"),
  i = r("120356"),
  o = r.n(i),
  l = r("990547"),
  s = r("442837"),
  c = r("481060"),
  d = r("347469"),
  u = r("213609"),
  h = r("906467"),
  p = r("259580"),
  m = r("465670"),
  g = r("54017"),
  f = r("502568"),
  b = r("31336"),
  y = r("19759"),
  x = r("432877");
r("381996");
var k = r("392750"),
  v = r("926976"),
  C = r("592197"),
  S = r("789654"),
  j = r("691867"),
  T = r("916790"),
  w = r("912072"),
  N = r("246992"),
  E = r("442954"),
  _ = r("702904"),
  L = r("248526"),
  A = r("958328"),
  P = r("514866"),
  R = r("678639"),
  O = r("351930"),
  M = r("771751"),
  I = r("596768"),
  D = r("621060"),
  B = r("689938"),
  F = r("284439"),
  H = r("779869");

function U(e) {
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
    className: F.resizeHandle
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
        render: () => (0, a.jsx)(I.default, {})
      }, {
        id: "stores",
        name: "Stores",
        render: () => (0, a.jsx)(R.default, {})
      }, {
        id: "dispatcher",
        name: "Dispatcher",
        render: () => (0, a.jsx)(T.default, {})
      }];
      return h.default.isDeveloper && (e.push({
        id: "quick_actions",
        name: "Quick Actions",
        render: () => (0, a.jsx)(P.default, {})
      }), e.push({
        id: "perks_demos",
        name: "Perks Demos",
        render: () => (0, a.jsx)(L.default, {})
      })), e.push({
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
        render: () => (0, a.jsx)(w.default, {
          devSettingsCategory: x.DevSettingsCategory.OVERLAYS
        })
      }), e.push({
        id: "messaging",
        name: "Messaging",
        render: () => (0, a.jsx)(w.default, {
          devSettingsCategory: x.DevSettingsCategory.MESSAGING
        })
      }), e.push({
        id: "permissions",
        name: "Permissions",
        render: () => (0, a.jsx)(A.default, {})
      }), e.push({
        id: "modals",
        name: "Modals",
        render: () => (0, a.jsx)(E.default, {})
      }), e.push({
        id: "affinity",
        name: "Affinity",
        render: () => (0, a.jsx)(k.default, {})
      }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") && (e.push({
        id: "trials",
        name: "Trials",
        render: () => (0, a.jsx)(M.default, {})
      }), e.push({
        id: "payments",
        name: "Payments",
        render: () => (0, a.jsx)(_.default, {})
      }), e.push({
        id: "subscriptions",
        name: "Subscriptions",
        render: () => (0, a.jsx)(O.default, {})
      }), e.push({
        id: "billing",
        name: "Billing",
        render: () => (0, a.jsx)(C.default, {})
      })), e
    }, []),
    {
      TabBar: r,
      renderSelectedTab: i,
      selectedTabId: o
    } = (0, D.default)({
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
  }), (0, a.jsxs)(N.DevToolsLayerProvider, {
    children: [(0, a.jsxs)(f.default, {
      className: H.headerBar,
      toolbar: (0, a.jsx)(f.default.Icon, {
        icon: m.default,
        tooltip: B.default.Messages.CLOSE,
        onClick: b.toggleDisplayDevTools
      }),
      children: [(0, a.jsx)(f.default.Icon, {
        icon: g.default,
        tooltip: "DevTools"
      }), (0, a.jsx)(f.default.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(r, {}), i(), (0, a.jsx)(N.DevToolsLayerContainer, {
      className: F.layerContainer
    })]
  })
}

function z() {
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
    className: o()(F.container),
    style: {
      minWidth: y.DEVTOOLS_SIDEBAR_MIN_WIDTH,
      width: r
    },
    children: [(0, a.jsx)(U, {
      resizableNode: e,
      onResize: i,
      onResizeEnd: l
    }), (0, a.jsx)("div", {
      className: F.sidebarContent,
      children: (0, a.jsx)(G, {})
    })]
  })
}

function Y() {
  let e = (0, s.useStateFromStores)([y.default], () => y.default.displayTools);
  return e ? (0, a.jsx)("div", {
    className: o()(F.container, F.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: F.sidebarContent,
      children: (0, a.jsx)(G, {})
    })
  }) : (0, a.jsx)("div", {
    className: F.container,
    children: (0, a.jsx)(c.Clickable, {
      onClick: b.toggleDisplayDevTools,
      children: (0, a.jsxs)(f.default, {
        className: o()(H.headerBar, F.mobileHeaderCollapsed),
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

function V(e) {
  let {
    mobile: t
  } = e;
  return t ? (0, a.jsx)(Y, {}) : (0, a.jsx)(z, {})
}