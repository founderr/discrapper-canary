t.r(r), t.d(r, {
  default: function() {
    return Y
  }
}), t(653041), t(47120);
var a = t(735250),
  n = t(470079),
  i = t(120356),
  l = t.n(i),
  o = t(990547),
  c = t(442837),
  s = t(481060),
  d = t(347469),
  u = t(213609),
  h = t(29338),
  m = t(906467),
  g = t(259580),
  p = t(502568),
  b = t(31336),
  y = t(19759),
  f = t(432877);
t(381996);
var x = t(392750),
  k = t(926976),
  v = t(592197),
  j = t(860337),
  N = t(789654),
  w = t(691867),
  C = t(916790),
  S = t(912072),
  T = t(246992),
  E = t(442954),
  _ = t(702904),
  I = t(178821),
  Z = t(248526),
  R = t(958328),
  O = t(514866),
  A = t(678639),
  P = t(351930),
  L = t(771751),
  D = t(596768),
  M = t(621060),
  B = t(689938),
  G = t(999707),
  F = t(719556);

function H(e) {
  let {
    resizableNode: r,
    onResize: t,
    onResizeEnd: n
  } = e, i = (0, d.Z)({
    minDimension: y.h,
    resizableDomNodeRef: r,
    onElementResize: t,
    onElementResizeEnd: n,
    orientation: d.y.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: i,
    className: G.resizeHandle
  })
}

function z() {
  var e;
  let r = n.useMemo(() => {
      let e = [{
        id: "analytics",
        name: "Analytics",
        render: () => (0, a.jsx)(k.Z, {})
      }, {
        id: "triggers",
        name: "Triggers",
        render: () => (0, a.jsx)(D.Z, {})
      }, {
        id: "stores",
        name: "Stores",
        render: () => (0, a.jsx)(A.Z, {})
      }, {
        id: "dispatcher",
        name: "Dispatcher",
        render: () => (0, a.jsx)(C.Z, {})
      }];
      return m.Z.isDeveloper && (e.push({
        id: "quick_actions",
        name: "Quick Actions",
        render: () => (0, a.jsx)(O.Z, {})
      }), e.push({
        id: "perks_demos",
        name: "Perks Demos",
        render: () => (0, a.jsx)(Z.Z, {})
      })), m.Z.isDeveloper && (e.push({
        id: "clans",
        name: "Clans",
        render: () => (0, a.jsx)(j.Z, {})
      }), e.push({
        id: "performance",
        name: "Performance",
        render: () => (0, a.jsx)(I.Z, {})
      })), e.push({
        id: "colors",
        name: "Colors",
        render: () => (0, a.jsx)(N.Z, {})
      }), e.push({
        id: "design_toggles",
        name: "Design Toggles",
        render: () => (0, a.jsx)(w.Z, {})
      }), e.push({
        id: "overlays",
        name: "Dev Overlays",
        render: () => (0, a.jsx)(S.Z, {
          devSettingsCategory: f.zU.OVERLAYS
        })
      }), e.push({
        id: "messaging",
        name: "Messaging",
        render: () => (0, a.jsx)(S.Z, {
          devSettingsCategory: f.zU.MESSAGING
        })
      }), e.push({
        id: "permissions",
        name: "Permissions",
        render: () => (0, a.jsx)(R.Z, {})
      }), e.push({
        id: "modals",
        name: "Modals",
        render: () => (0, a.jsx)(E.Z, {})
      }), e.push({
        id: "affinity",
        name: "Affinity",
        render: () => (0, a.jsx)(x.Z, {})
      }), m.Z.isDeveloper && e.push({
        id: "content_inventory",
        name: "Content Inventory",
        render: () => (0, a.jsx)(h.Z, {})
      }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") && (e.push({
        id: "trials",
        name: "Trials",
        render: () => (0, a.jsx)(L.Z, {})
      }), e.push({
        id: "payments",
        name: "Payments",
        render: () => (0, a.jsx)(_.Z, {})
      }), e.push({
        id: "subscriptions",
        name: "Subscriptions",
        render: () => (0, a.jsx)(P.Z, {})
      }), e.push({
        id: "billing",
        name: "Billing",
        render: () => (0, a.jsx)(v.Z, {})
      })), e
    }, []),
    {
      TabBar: t,
      renderSelectedTab: i,
      selectedTabId: l
    } = (0, M.Z)({
      tabs: r,
      initialSelectedTabId: null !== (e = y.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
      onChangeTab: e => {
        (0, b.Qh)({
          lastOpenTabId: e
        })
      }
    }, [r]);
  return (0, u.Z)({
    type: o.ImpressionTypes.PANE,
    name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: l
    }
  }), (0, a.jsxs)(T.Gk, {
    children: [(0, a.jsxs)(p.ZP, {
      className: F.headerBar,
      toolbar: (0, a.jsx)(p.ZP.Icon, {
        icon: s.CloseSmallIcon,
        tooltip: B.Z.Messages.CLOSE,
        onClick: b.SO
      }),
      children: [(0, a.jsx)(p.ZP.Icon, {
        icon: s.StaffBadgeIcon,
        tooltip: "DevTools"
      }), (0, a.jsx)(p.ZP.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(t, {}), i(), (0, a.jsx)(T.Br, {
      className: G.layerContainer
    })]
  })
}

function U() {
  let e = n.useRef(null),
    r = (0, c.e7)([y.Z], () => y.Z.sidebarWidth),
    [t, i] = n.useState(null),
    o = n.useCallback(e => (0, b.Qh)({
      sidebarWidth: e
    }), []);
  return (n.useEffect(() => {
    null === t && null !== r && i(r)
  }, [r, t]), null === t) ? null : (0, a.jsxs)("div", {
    ref: e,
    className: l()(G.container),
    style: {
      minWidth: y.h,
      width: t
    },
    children: [(0, a.jsx)(H, {
      resizableNode: e,
      onResize: i,
      onResizeEnd: o
    }), (0, a.jsx)("div", {
      className: G.sidebarContent,
      children: (0, a.jsx)(z, {})
    })]
  })
}

function V() {
  let e = (0, c.e7)([y.Z], () => y.Z.displayTools);
  return e ? (0, a.jsx)("div", {
    className: l()(G.container, G.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: G.sidebarContent,
      children: (0, a.jsx)(z, {})
    })
  }) : (0, a.jsx)("div", {
    className: G.container,
    children: (0, a.jsx)(s.Clickable, {
      onClick: b.SO,
      children: (0, a.jsxs)(p.ZP, {
        className: l()(F.headerBar, G.mobileHeaderCollapsed),
        toolbar: (0, a.jsx)(g.Z, {
          direction: g.Z.Directions.UP
        }),
        children: [(0, a.jsx)(p.ZP.Icon, {
          icon: s.StaffBadgeIcon,
          tooltip: "DevTools"
        }), (0, a.jsx)(p.ZP.Title, {
          children: "DevTools"
        })]
      })
    })
  })
}

function Y(e) {
  let {
    mobile: r
  } = e;
  return r ? (0, a.jsx)(V, {}) : (0, a.jsx)(U, {})
}