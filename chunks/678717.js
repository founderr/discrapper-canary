"use strict";
t.r(r), t.d(r, {
  default: function() {
    return V
  }
}), t("653041"), t("47120");
var a = t("735250"),
  n = t("470079"),
  i = t("120356"),
  l = t.n(i),
  o = t("990547"),
  s = t("442837"),
  c = t("481060"),
  d = t("347469"),
  u = t("213609"),
  h = t("906467"),
  p = t("259580"),
  m = t("465670"),
  g = t("54017"),
  f = t("502568"),
  b = t("31336"),
  y = t("19759"),
  x = t("432877");
t("381996");
var k = t("392750"),
  v = t("926976"),
  C = t("592197"),
  S = t("789654"),
  j = t("691867"),
  T = t("916790"),
  N = t("912072"),
  w = t("246992"),
  E = t("442954"),
  _ = t("702904"),
  L = t("248526"),
  P = t("958328"),
  A = t("514866"),
  R = t("678639"),
  O = t("351930"),
  M = t("771751"),
  D = t("596768"),
  I = t("621060"),
  B = t("689938"),
  F = t("284439"),
  U = t("779869");

function H(e) {
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
    className: F.resizeHandle
  })
}

function G() {
  var e;
  let r = n.useMemo(() => {
      let e = [{
        id: "analytics",
        name: "Analytics",
        render: () => (0, a.jsx)(v.default, {})
      }, {
        id: "triggers",
        name: "Triggers",
        render: () => (0, a.jsx)(D.default, {})
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
        render: () => (0, a.jsx)(A.default, {})
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
        render: () => (0, a.jsx)(N.default, {
          devSettingsCategory: x.DevSettingsCategory.OVERLAYS
        })
      }), e.push({
        id: "messaging",
        name: "Messaging",
        render: () => (0, a.jsx)(N.default, {
          devSettingsCategory: x.DevSettingsCategory.MESSAGING
        })
      }), e.push({
        id: "permissions",
        name: "Permissions",
        render: () => (0, a.jsx)(P.default, {})
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
      TabBar: t,
      renderSelectedTab: i,
      selectedTabId: l
    } = (0, I.default)({
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
      className: U.headerBar,
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
    }), (0, a.jsx)(t, {}), i(), (0, a.jsx)(w.DevToolsLayerContainer, {
      className: F.layerContainer
    })]
  })
}

function z() {
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
    className: l()(F.container),
    style: {
      minWidth: y.DEVTOOLS_SIDEBAR_MIN_WIDTH,
      width: t
    },
    children: [(0, a.jsx)(H, {
      resizableNode: e,
      onResize: i,
      onResizeEnd: o
    }), (0, a.jsx)("div", {
      className: F.sidebarContent,
      children: (0, a.jsx)(G, {})
    })]
  })
}

function Y() {
  let e = (0, s.useStateFromStores)([y.default], () => y.default.displayTools);
  return e ? (0, a.jsx)("div", {
    className: l()(F.container, F.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: F.sidebarContent,
      children: (0, a.jsx)(G, {})
    })
  }) : (0, a.jsx)("div", {
    className: F.container,
    children: (0, a.jsx)(c.Clickable, {
      onClick: b.toggleDisplayDevTools,
      children: (0, a.jsxs)(f.default, {
        className: l()(U.headerBar, F.mobileHeaderCollapsed),
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
    mobile: r
  } = e;
  return r ? (0, a.jsx)(Y, {}) : (0, a.jsx)(z, {})
}