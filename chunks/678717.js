t.r(r),
    t.d(r, {
        default: function () {
            return Y;
        }
    }),
    t(653041),
    t(47120);
var a = t(735250),
    n = t(470079),
    i = t(120356),
    o = t.n(i),
    l = t(990547),
    c = t(442837),
    s = t(481060),
    d = t(347469),
    u = t(213609),
    h = t(213713),
    m = t(665149),
    g = t(906467),
    p = t(259580),
    b = t(31336),
    f = t(19759),
    y = t(432877);
t(381996);
var x = t(392750),
    k = t(926976),
    v = t(592197),
    _ = t(860337),
    j = t(789654),
    w = t(691867),
    C = t(916790),
    N = t(645973),
    S = t(912072),
    T = t(246992),
    E = t(442954),
    I = t(702904),
    Z = t(178821),
    R = t(248526),
    O = t(958328),
    A = t(514866),
    L = t(678639),
    B = t(351930),
    P = t(771751),
    D = t(596768),
    M = t(621060),
    U = t(689938),
    G = t(941735),
    H = t(535271);
function F(e) {
    let { resizableNode: r, onResize: t, onResizeEnd: n } = e,
        i = (0, d.Z)({
            minDimension: f.h,
            resizableDomNodeRef: r,
            onElementResize: t,
            onElementResizeEnd: n,
            orientation: d.y.HORIZONTAL_LEFT
        });
    return (0, a.jsx)('div', {
        onMouseDown: i,
        className: G.resizeHandle
    });
}
function z() {
    var e;
    let r = n.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    render: () => (0, a.jsx)(k.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    render: () => (0, a.jsx)(D.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    render: () => (0, a.jsx)(L.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    render: () => (0, a.jsx)(C.Z, {})
                }
            ];
            return (
                g.Z.isDeveloper &&
                    (e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        render: () => (0, a.jsx)(A.Z, {})
                    }),
                    e.push({
                        id: 'perks_demos',
                        name: 'Perks Demos',
                        render: () => (0, a.jsx)(R.Z, {})
                    })),
                g.Z.isDeveloper &&
                    (e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        render: () => (0, a.jsx)(N.Z, {})
                    }),
                    e.push({
                        id: 'clans',
                        name: 'Clans',
                        render: () => (0, a.jsx)(_.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        render: () => (0, a.jsx)(Z.Z, {})
                    })),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    render: () => (0, a.jsx)(j.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    render: () => (0, a.jsx)(w.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    render: () => (0, a.jsx)(S.Z, { devSettingsCategory: y.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    render: () => (0, a.jsx)(S.Z, { devSettingsCategory: y.zU.MESSAGING })
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    render: () => (0, a.jsx)(S.Z, { devSettingsCategory: y.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    render: () => (0, a.jsx)(O.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    render: () => (0, a.jsx)(E.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    render: () => (0, a.jsx)(x.Z, {})
                }),
                g.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        render: () => (0, a.jsx)(h.Z, {})
                    }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        render: () => (0, a.jsx)(P.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        render: () => (0, a.jsx)(I.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        render: () => (0, a.jsx)(B.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        render: () => (0, a.jsx)(v.Z, {})
                    })),
                e
            );
        }, []),
        {
            TabBar: t,
            renderSelectedTab: i,
            selectedTabId: o
        } = (0, M.Z)(
            {
                tabs: r,
                initialSelectedTabId: null !== (e = f.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
                onChangeTab: (e) => {
                    (0, b.Qh)({ lastOpenTabId: e });
                }
            },
            [r]
        );
    return (
        (0, u.Z)({
            type: l.ImpressionTypes.PANE,
            name: l.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: o }
        }),
        (0, a.jsxs)(T.Gk, {
            children: [
                (0, a.jsxs)(m.ZP, {
                    className: H.headerBar,
                    toolbar: (0, a.jsx)(m.ZP.Icon, {
                        icon: s.XSmallIcon,
                        tooltip: U.Z.Messages.CLOSE,
                        onClick: b.SO
                    }),
                    children: [
                        (0, a.jsx)(m.ZP.Icon, {
                            icon: s.StaffBadgeIcon,
                            tooltip: 'DevTools'
                        }),
                        (0, a.jsx)(m.ZP.Title, { children: 'DevTools' })
                    ]
                }),
                (0, a.jsx)(t, {}),
                i(),
                (0, a.jsx)(T.Br, { className: G.layerContainer })
            ]
        })
    );
}
function V() {
    let e = n.useRef(null),
        r = (0, c.e7)([f.Z], () => f.Z.sidebarWidth),
        [t, i] = n.useState(null),
        l = n.useCallback((e) => (0, b.Qh)({ sidebarWidth: e }), []);
    return (n.useEffect(() => {
        null === t && null !== r && i(r);
    }, [r, t]),
    null === t)
        ? null
        : (0, a.jsxs)('div', {
              ref: e,
              className: o()(G.container),
              style: {
                  minWidth: f.h,
                  width: t
              },
              children: [
                  (0, a.jsx)(F, {
                      resizableNode: e,
                      onResize: i,
                      onResizeEnd: l
                  }),
                  (0, a.jsx)('div', {
                      className: G.sidebarContent,
                      children: (0, a.jsx)(z, {})
                  })
              ]
          });
}
function W() {
    let e = (0, c.e7)([f.Z], () => f.Z.displayTools);
    return e
        ? (0, a.jsx)('div', {
              className: o()(G.container, G.mobileContainerExpanded),
              children: (0, a.jsx)('div', {
                  className: G.sidebarContent,
                  children: (0, a.jsx)(z, {})
              })
          })
        : (0, a.jsx)('div', {
              className: G.container,
              children: (0, a.jsx)(s.Clickable, {
                  onClick: b.SO,
                  children: (0, a.jsxs)(m.ZP, {
                      className: o()(H.headerBar, G.mobileHeaderCollapsed),
                      toolbar: (0, a.jsx)(p.Z, { direction: p.Z.Directions.UP }),
                      children: [
                          (0, a.jsx)(m.ZP.Icon, {
                              icon: s.StaffBadgeIcon,
                              tooltip: 'DevTools'
                          }),
                          (0, a.jsx)(m.ZP.Title, { children: 'DevTools' })
                      ]
                  })
              })
          });
}
function Y(e) {
    let { mobile: r } = e;
    return r ? (0, a.jsx)(W, {}) : (0, a.jsx)(V, {});
}
