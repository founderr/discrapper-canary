"use strict";
t.r(r), t.d(r, {
  default: function() {
    return W
  }
}), t("653041"), t("47120");
var a = t("735250"),
  i = t("470079"),
  l = t("120356"),
  n = t.n(l),
  o = t("990547"),
  c = t("442837"),
  s = t("481060"),
  d = t("347469"),
  u = t("213609"),
  h = t("906467"),
  m = t("259580"),
  p = t("465670"),
  g = t("54017"),
  f = t("502568"),
  b = t("31336"),
  y = t("19759"),
  x = t("432877");
t("381996");
var k = t("392750"),
  v = t("926976"),
  j = t("592197"),
  C = t("789654"),
  w = t("691867"),
  S = t("916790"),
  N = t("912072"),
  T = t("246992"),
  L = t("442954"),
  E = t("702904"),
  _ = t("248526"),
  R = t("958328"),
  D = t("514866"),
  I = t("678639"),
  O = t("351930"),
  P = t("771751"),
  A = t("596768"),
  B = t("621060"),
  M = t("689938"),
  F = t("284439"),
  H = t("779869");

function U(e) {
  let {
    resizableNode: r,
    onResize: t,
    onResizeEnd: i
  } = e, l = (0, d.default)({
    minDimension: y.DEVTOOLS_SIDEBAR_MIN_WIDTH,
    resizableDomNodeRef: r,
    onElementResize: t,
    onElementResizeEnd: i,
    orientation: d.ResizeOrientation.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: l,
    className: F.resizeHandle
  })
}

function z() {
  var e;
  let r = i.useMemo(() => {
      let e = [{
        id: "analytics",
        name: "Analytics",
        render: () => (0, a.jsx)(v.default, {})
      }, {
        id: "triggers",
        name: "Triggers",
        render: () => (0, a.jsx)(A.default, {})
      }, {
        id: "stores",
        name: "Stores",
        render: () => (0, a.jsx)(I.default, {})
      }, {
        id: "dispatcher",
        name: "Dispatcher",
        render: () => (0, a.jsx)(S.default, {})
      }];
      return h.default.isDeveloper && (e.push({
        id: "quick_actions",
        name: "Quick Actions",
        render: () => (0, a.jsx)(D.default, {})
      }), e.push({
        id: "perks_demos",
        name: "Perks Demos",
        render: () => (0, a.jsx)(_.default, {})
      })), e.push({
        id: "colors",
        name: "Colors",
        render: () => (0, a.jsx)(C.default, {})
      }), e.push({
        id: "design_toggles",
        name: "Design Toggles",
        render: () => (0, a.jsx)(w.default, {})
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
        render: () => (0, a.jsx)(R.default, {})
      }), e.push({
        id: "modals",
        name: "Modals",
        render: () => (0, a.jsx)(L.default, {})
      }), e.push({
        id: "affinity",
        name: "Affinity",
        render: () => (0, a.jsx)(k.default, {})
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
        render: () => (0, a.jsx)(O.default, {})
      }), e.push({
        id: "billing",
        name: "Billing",
        render: () => (0, a.jsx)(j.default, {})
      })), e
    }, []),
    {
      TabBar: t,
      renderSelectedTab: l,
      selectedTabId: n
    } = (0, B.default)({
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
      panel: n
    }
  }), (0, a.jsxs)(T.DevToolsLayerProvider, {
    children: [(0, a.jsxs)(f.default, {
      className: H.headerBar,
      toolbar: (0, a.jsx)(f.default.Icon, {
        icon: p.default,
        tooltip: M.default.Messages.CLOSE,
        onClick: b.toggleDisplayDevTools
      }),
      children: [(0, a.jsx)(f.default.Icon, {
        icon: g.default,
        tooltip: "DevTools"
      }), (0, a.jsx)(f.default.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(t, {}), l(), (0, a.jsx)(T.DevToolsLayerContainer, {
      className: F.layerContainer
    })]
  })
}

function G() {
  let e = i.useRef(null),
    r = (0, c.useStateFromStores)([y.default], () => y.default.sidebarWidth),
    [t, l] = i.useState(null),
    o = i.useCallback(e => (0, b.updateDevToolsSettings)({
      sidebarWidth: e
    }), []);
  return (i.useEffect(() => {
    null === t && null !== r && l(r)
  }, [r, t]), null === t) ? null : (0, a.jsxs)("div", {
    ref: e,
    className: n()(F.container),
    style: {
      minWidth: y.DEVTOOLS_SIDEBAR_MIN_WIDTH,
      width: t
    },
    children: [(0, a.jsx)(U, {
      resizableNode: e,
      onResize: l,
      onResizeEnd: o
    }), (0, a.jsx)("div", {
      className: F.sidebarContent,
      children: (0, a.jsx)(z, {})
    })]
  })
}

function V() {
  let e = (0, c.useStateFromStores)([y.default], () => y.default.displayTools);
  return e ? (0, a.jsx)("div", {
    className: n()(F.container, F.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: F.sidebarContent,
      children: (0, a.jsx)(z, {})
    })
  }) : (0, a.jsx)("div", {
    className: F.container,
    children: (0, a.jsx)(s.Clickable, {
      onClick: b.toggleDisplayDevTools,
      children: (0, a.jsxs)(f.default, {
        className: n()(H.headerBar, F.mobileHeaderCollapsed),
        toolbar: (0, a.jsx)(m.default, {
          direction: m.default.Directions.UP
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

function W(e) {
  let {
    mobile: r
  } = e;
  return r ? (0, a.jsx)(V, {}) : (0, a.jsx)(G, {})
}