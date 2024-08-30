n.r(t),
    n.d(t, {
        default: function () {
            return Y;
        }
    }),
    n(653041),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(990547),
    c = n(442837),
    s = n(481060),
    u = n(347469),
    d = n(213609),
    h = n(213713),
    m = n(665149),
    x = n(906467),
    f = n(259580),
    g = n(31336),
    p = n(19759),
    b = n(432877);
n(381996);
var v = n(392750),
    _ = n(926976),
    j = n(592197),
    C = n(860337),
    T = n(789654),
    N = n(691867),
    S = n(916790),
    y = n(645973),
    w = n(912072),
    I = n(246992),
    E = n(442954),
    k = n(702904),
    R = n(178821),
    Z = n(248526),
    O = n(958328),
    A = n(514866),
    L = n(678639),
    B = n(351930),
    P = n(771751),
    M = n(596768),
    D = n(621060),
    U = n(689938),
    F = n(941735),
    G = n(535271);
function H(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: a } = e,
        l = (0, u.Z)({
            minDimension: p.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: u.y.HORIZONTAL_LEFT
        });
    return (0, r.jsx)('div', {
        onMouseDown: l,
        className: F.resizeHandle
    });
}
function z() {
    var e;
    let t = a.useMemo(() => {
            let e = [
                {
                    id: 'analytics',
                    name: 'Analytics',
                    render: () => (0, r.jsx)(_.Z, {})
                },
                {
                    id: 'triggers',
                    name: 'Triggers',
                    render: () => (0, r.jsx)(M.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    render: () => (0, r.jsx)(L.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    render: () => (0, r.jsx)(S.Z, {})
                }
            ];
            return (
                x.Z.isDeveloper &&
                    (e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        render: () => (0, r.jsx)(A.Z, {})
                    }),
                    e.push({
                        id: 'perks_demos',
                        name: 'Perks Demos',
                        render: () => (0, r.jsx)(Z.Z, {})
                    })),
                x.Z.isDeveloper &&
                    (e.push({
                        id: 'end_to_end_encryption',
                        name: 'E2EE',
                        render: () => (0, r.jsx)(y.Z, {})
                    }),
                    e.push({
                        id: 'clans',
                        name: 'Clans',
                        render: () => (0, r.jsx)(C.Z, {})
                    }),
                    e.push({
                        id: 'performance',
                        name: 'Performance',
                        render: () => (0, r.jsx)(R.Z, {})
                    })),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    render: () => (0, r.jsx)(T.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    render: () => (0, r.jsx)(N.Z, {})
                }),
                e.push({
                    id: 'overlays',
                    name: 'Dev Overlays',
                    render: () => (0, r.jsx)(w.Z, { devSettingsCategory: b.zU.OVERLAYS })
                }),
                e.push({
                    id: 'messaging',
                    name: 'Messaging',
                    render: () => (0, r.jsx)(w.Z, { devSettingsCategory: b.zU.MESSAGING })
                }),
                e.push({
                    id: 'reporting',
                    name: 'Reporting',
                    render: () => (0, r.jsx)(w.Z, { devSettingsCategory: b.zU.REPORTING })
                }),
                e.push({
                    id: 'permissions',
                    name: 'Permissions',
                    render: () => (0, r.jsx)(O.Z, {})
                }),
                e.push({
                    id: 'modals',
                    name: 'Modals',
                    render: () => (0, r.jsx)(E.Z, {})
                }),
                e.push({
                    id: 'affinity',
                    name: 'Affinity',
                    render: () => (0, r.jsx)(v.Z, {})
                }),
                x.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        render: () => (0, r.jsx)(h.Z, {})
                    }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        render: () => (0, r.jsx)(P.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        render: () => (0, r.jsx)(k.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        render: () => (0, r.jsx)(B.Z, {})
                    }),
                    e.push({
                        id: 'billing',
                        name: 'Billing',
                        render: () => (0, r.jsx)(j.Z, {})
                    })),
                e
            );
        }, []),
        {
            TabBar: n,
            renderSelectedTab: l,
            selectedTabId: i
        } = (0, D.Z)(
            {
                tabs: t,
                initialSelectedTabId: null !== (e = p.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
                onChangeTab: (e) => {
                    (0, g.Qh)({ lastOpenTabId: e });
                }
            },
            [t]
        );
    return (
        (0, d.Z)({
            type: o.ImpressionTypes.PANE,
            name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: i }
        }),
        (0, r.jsxs)(I.Gk, {
            children: [
                (0, r.jsxs)(m.ZP, {
                    className: G.headerBar,
                    toolbar: (0, r.jsx)(m.ZP.Icon, {
                        icon: s.XSmallIcon,
                        tooltip: U.Z.Messages.CLOSE,
                        onClick: g.SO
                    }),
                    children: [
                        (0, r.jsx)(m.ZP.Icon, {
                            icon: s.StaffBadgeIcon,
                            tooltip: 'DevTools'
                        }),
                        (0, r.jsx)(m.ZP.Title, { children: 'DevTools' })
                    ]
                }),
                (0, r.jsx)(n, {}),
                l(),
                (0, r.jsx)(I.Br, { className: F.layerContainer })
            ]
        })
    );
}
function V() {
    let e = a.useRef(null),
        t = (0, c.e7)([p.Z], () => p.Z.sidebarWidth),
        [n, l] = a.useState(null),
        o = a.useCallback((e) => (0, g.Qh)({ sidebarWidth: e }), []);
    return (a.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, r.jsxs)('div', {
              ref: e,
              className: i()(F.container),
              style: {
                  minWidth: p.h,
                  width: n
              },
              children: [
                  (0, r.jsx)(H, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: o
                  }),
                  (0, r.jsx)('div', {
                      className: F.sidebarContent,
                      children: (0, r.jsx)(z, {})
                  })
              ]
          });
}
function W() {
    let e = (0, c.e7)([p.Z], () => p.Z.displayTools);
    return e
        ? (0, r.jsx)('div', {
              className: i()(F.container, F.mobileContainerExpanded),
              children: (0, r.jsx)('div', {
                  className: F.sidebarContent,
                  children: (0, r.jsx)(z, {})
              })
          })
        : (0, r.jsx)('div', {
              className: F.container,
              children: (0, r.jsx)(s.Clickable, {
                  onClick: g.SO,
                  children: (0, r.jsxs)(m.ZP, {
                      className: i()(G.headerBar, F.mobileHeaderCollapsed),
                      toolbar: (0, r.jsx)(f.Z, { direction: f.Z.Directions.UP }),
                      children: [
                          (0, r.jsx)(m.ZP.Icon, {
                              icon: s.StaffBadgeIcon,
                              tooltip: 'DevTools'
                          }),
                          (0, r.jsx)(m.ZP.Title, { children: 'DevTools' })
                      ]
                  })
              })
          });
}
function Y(e) {
    let { mobile: t } = e;
    return t ? (0, r.jsx)(W, {}) : (0, r.jsx)(V, {});
}
