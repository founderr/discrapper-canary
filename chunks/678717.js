"use strict";
r.r(t), r.d(t, {
  default: function() {
    return q
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
  S = r("926976"),
  T = r("592197"),
  j = r("860337"),
  w = r("789654"),
  E = r("691867"),
  N = r("916790"),
  C = r("912072"),
  _ = r("246992"),
  I = r("442954"),
  R = r("702904"),
  O = r("178821"),
  P = r("248526"),
  A = r("958328"),
  L = r("514866"),
  D = r("678639"),
  M = r("351930"),
  F = r("771751"),
  B = r("596768"),
  H = r("621060"),
  U = r("689938"),
  z = r("770131"),
  G = r("277513");

function V(e) {
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
    className: z.resizeHandle
  })
}

function K() {
  var e;
  let t = i.useMemo(() => {
      let e = [{
        id: "analytics",
        name: "Analytics",
        render: () => (0, a.jsx)(S.default, {})
      }, {
        id: "triggers",
        name: "Triggers",
        render: () => (0, a.jsx)(B.default, {})
      }, {
        id: "stores",
        name: "Stores",
        render: () => (0, a.jsx)(D.default, {})
      }, {
        id: "dispatcher",
        name: "Dispatcher",
        render: () => (0, a.jsx)(N.default, {})
      }];
      return p.default.isDeveloper && (e.push({
        id: "quick_actions",
        name: "Quick Actions",
        render: () => (0, a.jsx)(L.default, {})
      }), e.push({
        id: "perks_demos",
        name: "Perks Demos",
        render: () => (0, a.jsx)(P.default, {})
      })), p.default.isDeveloper && (e.push({
        id: "clans",
        name: "Clans",
        render: () => (0, a.jsx)(j.default, {})
      }), e.push({
        id: "performance",
        name: "Performance",
        render: () => (0, a.jsx)(O.default, {})
      })), e.push({
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
        render: () => (0, a.jsx)(C.default, {
          devSettingsCategory: k.DevSettingsCategory.OVERLAYS
        })
      }), e.push({
        id: "messaging",
        name: "Messaging",
        render: () => (0, a.jsx)(C.default, {
          devSettingsCategory: k.DevSettingsCategory.MESSAGING
        })
      }), e.push({
        id: "permissions",
        name: "Permissions",
        render: () => (0, a.jsx)(A.default, {})
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
        render: () => (0, a.jsx)(F.default, {})
      }), e.push({
        id: "payments",
        name: "Payments",
        render: () => (0, a.jsx)(R.default, {})
      }), e.push({
        id: "subscriptions",
        name: "Subscriptions",
        render: () => (0, a.jsx)(M.default, {})
      }), e.push({
        id: "billing",
        name: "Billing",
        render: () => (0, a.jsx)(T.default, {})
      })), e
    }, []),
    {
      TabBar: r,
      renderSelectedTab: n,
      selectedTabId: l
    } = (0, H.default)({
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
      className: G.headerBar,
      toolbar: (0, a.jsx)(y.default.Icon, {
        icon: m.default,
        tooltip: U.default.Messages.CLOSE,
        onClick: b.toggleDisplayDevTools
      }),
      children: [(0, a.jsx)(y.default.Icon, {
        icon: f.default,
        tooltip: "DevTools"
      }), (0, a.jsx)(y.default.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(r, {}), n(), (0, a.jsx)(_.DevToolsLayerContainer, {
      className: z.layerContainer
    })]
  })
}

function W() {
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
    className: l()(z.container),
    style: {
      minWidth: x.DEVTOOLS_SIDEBAR_MIN_WIDTH,
      width: r
    },
    children: [(0, a.jsx)(V, {
      resizableNode: e,
      onResize: n,
      onResizeEnd: o
    }), (0, a.jsx)("div", {
      className: z.sidebarContent,
      children: (0, a.jsx)(K, {})
    })]
  })
}

function Y() {
  let e = (0, c.useStateFromStores)([x.default], () => x.default.displayTools);
  return e ? (0, a.jsx)("div", {
    className: l()(z.container, z.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: z.sidebarContent,
      children: (0, a.jsx)(K, {})
    })
  }) : (0, a.jsx)("div", {
    className: z.container,
    children: (0, a.jsx)(s.Clickable, {
      onClick: b.toggleDisplayDevTools,
      children: (0, a.jsxs)(y.default, {
        className: l()(G.headerBar, z.mobileHeaderCollapsed),
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

function q(e) {
  let {
    mobile: t
  } = e;
  return t ? (0, a.jsx)(Y, {}) : (0, a.jsx)(W, {})
}