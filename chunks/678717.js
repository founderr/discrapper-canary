"use strict";
r.r(t), r.d(t, {
  default: function() {
    return K
  }
}), r("653041"), r("47120");
var a = r("735250"),
  i = r("470079"),
  l = r("120356"),
  n = r.n(l),
  o = r("990547"),
  c = r("442837"),
  s = r("481060"),
  d = r("347469"),
  u = r("213609"),
  h = r("29338"),
  m = r("906467"),
  p = r("259580"),
  g = r("465670"),
  f = r("54017"),
  y = r("502568"),
  b = r("31336"),
  x = r("19759"),
  k = r("432877");
r("381996");
var v = r("392750"),
  j = r("926976"),
  C = r("592197"),
  S = r("860337"),
  w = r("789654"),
  T = r("691867"),
  N = r("916790"),
  L = r("912072"),
  E = r("246992"),
  _ = r("442954"),
  R = r("702904"),
  I = r("248526"),
  D = r("958328"),
  O = r("514866"),
  A = r("678639"),
  P = r("351930"),
  B = r("771751"),
  M = r("596768"),
  F = r("621060"),
  H = r("689938"),
  U = r("770131"),
  G = r("277513");

function z(e) {
  let {
    resizableNode: t,
    onResize: r,
    onResizeEnd: i
  } = e, l = (0, d.default)({
    minDimension: x.DEVTOOLS_SIDEBAR_MIN_WIDTH,
    resizableDomNodeRef: t,
    onElementResize: r,
    onElementResizeEnd: i,
    orientation: d.ResizeOrientation.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: l,
    className: U.resizeHandle
  })
}

function V() {
  var e;
  let t = i.useMemo(() => {
      let e = [{
        id: "analytics",
        name: "Analytics",
        render: () => (0, a.jsx)(j.default, {})
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
        render: () => (0, a.jsx)(N.default, {})
      }];
      return m.default.isDeveloper && (e.push({
        id: "quick_actions",
        name: "Quick Actions",
        render: () => (0, a.jsx)(O.default, {})
      }), e.push({
        id: "perks_demos",
        name: "Perks Demos",
        render: () => (0, a.jsx)(I.default, {})
      })), m.default.isDeveloper && e.push({
        id: "clans",
        name: "Clans",
        render: () => (0, a.jsx)(S.default, {})
      }), e.push({
        id: "colors",
        name: "Colors",
        render: () => (0, a.jsx)(w.default, {})
      }), e.push({
        id: "design_toggles",
        name: "Design Toggles",
        render: () => (0, a.jsx)(T.default, {})
      }), e.push({
        id: "overlays",
        name: "Dev Overlays",
        render: () => (0, a.jsx)(L.default, {
          devSettingsCategory: k.DevSettingsCategory.OVERLAYS
        })
      }), e.push({
        id: "messaging",
        name: "Messaging",
        render: () => (0, a.jsx)(L.default, {
          devSettingsCategory: k.DevSettingsCategory.MESSAGING
        })
      }), e.push({
        id: "permissions",
        name: "Permissions",
        render: () => (0, a.jsx)(D.default, {})
      }), e.push({
        id: "modals",
        name: "Modals",
        render: () => (0, a.jsx)(_.default, {})
      }), e.push({
        id: "affinity",
        name: "Affinity",
        render: () => (0, a.jsx)(v.default, {})
      }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") && (e.push({
        id: "trials",
        name: "Trials",
        render: () => (0, a.jsx)(B.default, {})
      }), e.push({
        id: "payments",
        name: "Payments",
        render: () => (0, a.jsx)(R.default, {})
      }), e.push({
        id: "subscriptions",
        name: "Subscriptions",
        render: () => (0, a.jsx)(P.default, {})
      }), e.push({
        id: "billing",
        name: "Billing",
        render: () => (0, a.jsx)(C.default, {})
      }), e.push({
        id: "content_inventory",
        name: "Content Inventory",
        render: () => (0, a.jsx)(h.default, {})
      })), e
    }, []),
    {
      TabBar: r,
      renderSelectedTab: l,
      selectedTabId: n
    } = (0, F.default)({
      tabs: t,
      initialSelectedTabId: null !== (e = x.default.lastOpenTabId) && void 0 !== e ? e : void 0,
      onChangeTab: e => {
        (0, b.updateDevToolsSettings)({
          lastOpenTabId: e
        })
      }
    }, [t]);
  return (0, u.default)({
    type: o.ImpressionTypes.PANE,
    name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: n
    }
  }), (0, a.jsxs)(E.DevToolsLayerProvider, {
    children: [(0, a.jsxs)(y.default, {
      className: G.headerBar,
      toolbar: (0, a.jsx)(y.default.Icon, {
        icon: g.default,
        tooltip: H.default.Messages.CLOSE,
        onClick: b.toggleDisplayDevTools
      }),
      children: [(0, a.jsx)(y.default.Icon, {
        icon: f.default,
        tooltip: "DevTools"
      }), (0, a.jsx)(y.default.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(r, {}), l(), (0, a.jsx)(E.DevToolsLayerContainer, {
      className: U.layerContainer
    })]
  })
}

function W() {
  let e = i.useRef(null),
    t = (0, c.useStateFromStores)([x.default], () => x.default.sidebarWidth),
    [r, l] = i.useState(null),
    o = i.useCallback(e => (0, b.updateDevToolsSettings)({
      sidebarWidth: e
    }), []);
  return (i.useEffect(() => {
    null === r && null !== t && l(t)
  }, [t, r]), null === r) ? null : (0, a.jsxs)("div", {
    ref: e,
    className: n()(U.container),
    style: {
      minWidth: x.DEVTOOLS_SIDEBAR_MIN_WIDTH,
      width: r
    },
    children: [(0, a.jsx)(z, {
      resizableNode: e,
      onResize: l,
      onResizeEnd: o
    }), (0, a.jsx)("div", {
      className: U.sidebarContent,
      children: (0, a.jsx)(V, {})
    })]
  })
}

function Y() {
  let e = (0, c.useStateFromStores)([x.default], () => x.default.displayTools);
  return e ? (0, a.jsx)("div", {
    className: n()(U.container, U.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: U.sidebarContent,
      children: (0, a.jsx)(V, {})
    })
  }) : (0, a.jsx)("div", {
    className: U.container,
    children: (0, a.jsx)(s.Clickable, {
      onClick: b.toggleDisplayDevTools,
      children: (0, a.jsxs)(y.default, {
        className: n()(G.headerBar, U.mobileHeaderCollapsed),
        toolbar: (0, a.jsx)(p.default, {
          direction: p.default.Directions.UP
        }),
        children: [(0, a.jsx)(y.default.Icon, {
          icon: f.default,
          tooltip: "DevTools"
        }), (0, a.jsx)(y.default.Title, {
          children: "DevTools"
        })]
      })
    })
  })
}

function K(e) {
  let {
    mobile: t
  } = e;
  return t ? (0, a.jsx)(Y, {}) : (0, a.jsx)(W, {})
}