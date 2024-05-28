"use strict";
r.r(t), r.d(t, {
  default: function() {
    return Y
  }
}), r("653041"), r("47120");
var a = r("735250"),
  i = r("470079"),
  n = r("120356"),
  l = r.n(n),
  o = r("990547"),
  c = r("442837"),
  s = r("481060"),
  d = r("347469"),
  u = r("213609"),
  h = r("29338"),
  p = r("906467"),
  g = r("259580"),
  m = r("465670"),
  f = r("54017"),
  y = r("502568"),
  b = r("31336"),
  x = r("19759"),
  k = r("432877");
r("381996");
var v = r("392750"),
  T = r("926976"),
  S = r("592197"),
  j = r("860337"),
  w = r("789654"),
  E = r("691867"),
  C = r("916790"),
  N = r("912072"),
  _ = r("246992"),
  I = r("442954"),
  R = r("702904"),
  P = r("248526"),
  O = r("958328"),
  A = r("514866"),
  L = r("678639"),
  D = r("351930"),
  M = r("771751"),
  B = r("596768"),
  F = r("621060"),
  H = r("689938"),
  U = r("770131"),
  z = r("277513");

function G(e) {
  let {
    resizableNode: t,
    onResize: r,
    onResizeEnd: i
  } = e, n = (0, d.default)({
    minDimension: x.DEVTOOLS_SIDEBAR_MIN_WIDTH,
    resizableDomNodeRef: t,
    onElementResize: r,
    onElementResizeEnd: i,
    orientation: d.ResizeOrientation.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: n,
    className: U.resizeHandle
  })
}

function V() {
  var e;
  let t = i.useMemo(() => {
      let e = [{
        id: "analytics",
        name: "Analytics",
        render: () => (0, a.jsx)(T.default, {})
      }, {
        id: "triggers",
        name: "Triggers",
        render: () => (0, a.jsx)(B.default, {})
      }, {
        id: "stores",
        name: "Stores",
        render: () => (0, a.jsx)(L.default, {})
      }, {
        id: "dispatcher",
        name: "Dispatcher",
        render: () => (0, a.jsx)(C.default, {})
      }];
      return p.default.isDeveloper && (e.push({
        id: "quick_actions",
        name: "Quick Actions",
        render: () => (0, a.jsx)(A.default, {})
      }), e.push({
        id: "perks_demos",
        name: "Perks Demos",
        render: () => (0, a.jsx)(P.default, {})
      })), p.default.isDeveloper && e.push({
        id: "clans",
        name: "Clans",
        render: () => (0, a.jsx)(j.default, {})
      }), e.push({
        id: "colors",
        name: "Colors",
        render: () => (0, a.jsx)(w.default, {})
      }), e.push({
        id: "design_toggles",
        name: "Design Toggles",
        render: () => (0, a.jsx)(E.default, {})
      }), e.push({
        id: "overlays",
        name: "Dev Overlays",
        render: () => (0, a.jsx)(N.default, {
          devSettingsCategory: k.DevSettingsCategory.OVERLAYS
        })
      }), e.push({
        id: "messaging",
        name: "Messaging",
        render: () => (0, a.jsx)(N.default, {
          devSettingsCategory: k.DevSettingsCategory.MESSAGING
        })
      }), e.push({
        id: "permissions",
        name: "Permissions",
        render: () => (0, a.jsx)(O.default, {})
      }), e.push({
        id: "modals",
        name: "Modals",
        render: () => (0, a.jsx)(I.default, {})
      }), e.push({
        id: "affinity",
        name: "Affinity",
        render: () => (0, a.jsx)(v.default, {})
      }), p.default.isDeveloper && e.push({
        id: "content_inventory",
        name: "Content Inventory",
        render: () => (0, a.jsx)(h.default, {})
      }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") && (e.push({
        id: "trials",
        name: "Trials",
        render: () => (0, a.jsx)(M.default, {})
      }), e.push({
        id: "payments",
        name: "Payments",
        render: () => (0, a.jsx)(R.default, {})
      }), e.push({
        id: "subscriptions",
        name: "Subscriptions",
        render: () => (0, a.jsx)(D.default, {})
      }), e.push({
        id: "billing",
        name: "Billing",
        render: () => (0, a.jsx)(S.default, {})
      })), e
    }, []),
    {
      TabBar: r,
      renderSelectedTab: n,
      selectedTabId: l
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
      panel: l
    }
  }), (0, a.jsxs)(_.DevToolsLayerProvider, {
    children: [(0, a.jsxs)(y.default, {
      className: z.headerBar,
      toolbar: (0, a.jsx)(y.default.Icon, {
        icon: m.default,
        tooltip: H.default.Messages.CLOSE,
        onClick: b.toggleDisplayDevTools
      }),
      children: [(0, a.jsx)(y.default.Icon, {
        icon: f.default,
        tooltip: "DevTools"
      }), (0, a.jsx)(y.default.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(r, {}), n(), (0, a.jsx)(_.DevToolsLayerContainer, {
      className: U.layerContainer
    })]
  })
}

function K() {
  let e = i.useRef(null),
    t = (0, c.useStateFromStores)([x.default], () => x.default.sidebarWidth),
    [r, n] = i.useState(null),
    o = i.useCallback(e => (0, b.updateDevToolsSettings)({
      sidebarWidth: e
    }), []);
  return (i.useEffect(() => {
    null === r && null !== t && n(t)
  }, [t, r]), null === r) ? null : (0, a.jsxs)("div", {
    ref: e,
    className: l()(U.container),
    style: {
      minWidth: x.DEVTOOLS_SIDEBAR_MIN_WIDTH,
      width: r
    },
    children: [(0, a.jsx)(G, {
      resizableNode: e,
      onResize: n,
      onResizeEnd: o
    }), (0, a.jsx)("div", {
      className: U.sidebarContent,
      children: (0, a.jsx)(V, {})
    })]
  })
}

function W() {
  let e = (0, c.useStateFromStores)([x.default], () => x.default.displayTools);
  return e ? (0, a.jsx)("div", {
    className: l()(U.container, U.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: U.sidebarContent,
      children: (0, a.jsx)(V, {})
    })
  }) : (0, a.jsx)("div", {
    className: U.container,
    children: (0, a.jsx)(s.Clickable, {
      onClick: b.toggleDisplayDevTools,
      children: (0, a.jsxs)(y.default, {
        className: l()(z.headerBar, U.mobileHeaderCollapsed),
        toolbar: (0, a.jsx)(g.default, {
          direction: g.default.Directions.UP
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

function Y(e) {
  let {
    mobile: t
  } = e;
  return t ? (0, a.jsx)(W, {}) : (0, a.jsx)(K, {})
}