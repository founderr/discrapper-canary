t.r(r), t.d(r, {
  default: function() {
    return Y
  }
}), t(653041), t(47120);
var a = t(735250),
  i = t(470079),
  n = t(120356),
  o = t.n(n),
  l = t(990547),
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
  x = t(432877);
t(381996);
var f = t(392750),
  k = t(926976),
  v = t(592197),
  j = t(860337),
  w = t(789654),
  N = t(691867),
  C = t(916790),
  S = t(912072),
  T = t(246992),
  Z = t(442954),
  E = t(702904),
  _ = t(178821),
  O = t(248526),
  I = t(958328),
  R = t(514866),
  L = t(678639),
  A = t(351930),
  P = t(771751),
  B = t(596768),
  D = t(621060),
  M = t(689938),
  F = t(999707),
  z = t(719556);

function G(e) {
  let {
    resizableNode: r,
    onResize: t,
    onResizeEnd: i
  } = e, n = (0, d.Z)({
    minDimension: y.h,
    resizableDomNodeRef: r,
    onElementResize: t,
    onElementResizeEnd: i,
    orientation: d.y.HORIZONTAL_LEFT
  });
  return (0, a.jsx)("div", {
    onMouseDown: n,
    className: F.resizeHandle
  })
}

function H() {
  var e;
  let r = i.useMemo(() => {
      let e = [{
        id: "analytics",
        name: "Analytics",
        render: () => (0, a.jsx)(k.Z, {})
      }, {
        id: "triggers",
        name: "Triggers",
        render: () => (0, a.jsx)(B.Z, {})
      }, {
        id: "stores",
        name: "Stores",
        render: () => (0, a.jsx)(L.Z, {})
      }, {
        id: "dispatcher",
        name: "Dispatcher",
        render: () => (0, a.jsx)(C.Z, {})
      }];
      return m.Z.isDeveloper && (e.push({
        id: "quick_actions",
        name: "Quick Actions",
        render: () => (0, a.jsx)(R.Z, {})
      }), e.push({
        id: "perks_demos",
        name: "Perks Demos",
        render: () => (0, a.jsx)(O.Z, {})
      })), m.Z.isDeveloper && (e.push({
        id: "clans",
        name: "Clans",
        render: () => (0, a.jsx)(j.Z, {})
      }), e.push({
        id: "performance",
        name: "Performance",
        render: () => (0, a.jsx)(_.Z, {})
      })), e.push({
        id: "colors",
        name: "Colors",
        render: () => (0, a.jsx)(w.Z, {})
      }), e.push({
        id: "design_toggles",
        name: "Design Toggles",
        render: () => (0, a.jsx)(N.Z, {})
      }), e.push({
        id: "overlays",
        name: "Dev Overlays",
        render: () => (0, a.jsx)(S.Z, {
          devSettingsCategory: x.zU.OVERLAYS
        })
      }), e.push({
        id: "messaging",
        name: "Messaging",
        render: () => (0, a.jsx)(S.Z, {
          devSettingsCategory: x.zU.MESSAGING
        })
      }), e.push({
        id: "permissions",
        name: "Permissions",
        render: () => (0, a.jsx)(I.Z, {})
      }), e.push({
        id: "modals",
        name: "Modals",
        render: () => (0, a.jsx)(Z.Z, {})
      }), e.push({
        id: "affinity",
        name: "Affinity",
        render: () => (0, a.jsx)(f.Z, {})
      }), m.Z.isDeveloper && e.push({
        id: "content_inventory",
        name: "Content Inventory",
        render: () => (0, a.jsx)(h.Z, {})
      }), window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") && (e.push({
        id: "trials",
        name: "Trials",
        render: () => (0, a.jsx)(P.Z, {})
      }), e.push({
        id: "payments",
        name: "Payments",
        render: () => (0, a.jsx)(E.Z, {})
      }), e.push({
        id: "subscriptions",
        name: "Subscriptions",
        render: () => (0, a.jsx)(A.Z, {})
      }), e.push({
        id: "billing",
        name: "Billing",
        render: () => (0, a.jsx)(v.Z, {})
      })), e
    }, []),
    {
      TabBar: t,
      renderSelectedTab: n,
      selectedTabId: o
    } = (0, D.Z)({
      tabs: r,
      initialSelectedTabId: null !== (e = y.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
      onChangeTab: e => {
        (0, b.Qh)({
          lastOpenTabId: e
        })
      }
    }, [r]);
  return (0, u.Z)({
    type: l.ImpressionTypes.PANE,
    name: l.ImpressionNames.VIEW_PANEL_DEVTOOLS,
    properties: {
      panel: o
    }
  }), (0, a.jsxs)(T.Gk, {
    children: [(0, a.jsxs)(p.ZP, {
      className: z.headerBar,
      toolbar: (0, a.jsx)(p.ZP.Icon, {
        icon: s.CloseSmallIcon,
        tooltip: M.Z.Messages.CLOSE,
        onClick: b.SO
      }),
      children: [(0, a.jsx)(p.ZP.Icon, {
        icon: s.StaffBadgeIcon,
        tooltip: "DevTools"
      }), (0, a.jsx)(p.ZP.Title, {
        children: "DevTools"
      })]
    }), (0, a.jsx)(t, {}), n(), (0, a.jsx)(T.Br, {
      className: F.layerContainer
    })]
  })
}

function U() {
  let e = i.useRef(null),
    r = (0, c.e7)([y.Z], () => y.Z.sidebarWidth),
    [t, n] = i.useState(null),
    l = i.useCallback(e => (0, b.Qh)({
      sidebarWidth: e
    }), []);
  return (i.useEffect(() => {
    null === t && null !== r && n(r)
  }, [r, t]), null === t) ? null : (0, a.jsxs)("div", {
    ref: e,
    className: o()(F.container),
    style: {
      minWidth: y.h,
      width: t
    },
    children: [(0, a.jsx)(G, {
      resizableNode: e,
      onResize: n,
      onResizeEnd: l
    }), (0, a.jsx)("div", {
      className: F.sidebarContent,
      children: (0, a.jsx)(H, {})
    })]
  })
}

function V() {
  let e = (0, c.e7)([y.Z], () => y.Z.displayTools);
  return e ? (0, a.jsx)("div", {
    className: o()(F.container, F.mobileContainerExpanded),
    children: (0, a.jsx)("div", {
      className: F.sidebarContent,
      children: (0, a.jsx)(H, {})
    })
  }) : (0, a.jsx)("div", {
    className: F.container,
    children: (0, a.jsx)(s.Clickable, {
      onClick: b.SO,
      children: (0, a.jsxs)(p.ZP, {
        className: o()(z.headerBar, F.mobileHeaderCollapsed),
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