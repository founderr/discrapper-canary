n.r(t),
    n.d(t, {
        default: function () {
            return K;
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
    d = n(347469),
    u = n(213609),
    h = n(213713),
    m = n(665149),
    f = n(906467),
    x = n(259580),
    p = n(31336),
    g = n(19759),
    b = n(432877);
n(381996);
var v = n(392750),
    _ = n(926976),
    j = n(592197),
    C = n(860337),
    T = n(789654),
    S = n(691867),
    N = n(916790),
    y = n(645973),
    I = n(903502),
    w = n(912072),
    k = n(246992),
    E = n(442954),
    R = n(702904),
    O = n(178821),
    Z = n(248526),
    A = n(958328),
    B = n(514866),
    L = n(678639),
    P = n(351930),
    M = n(771751),
    D = n(596768),
    F = n(621060),
    U = n(689938),
    H = n(622331),
    G = n(219299);
function z(e) {
    let { resizableNode: t, onResize: n, onResizeEnd: a } = e,
        l = (0, d.Z)({
            minDimension: g.h,
            resizableDomNodeRef: t,
            onElementResize: n,
            onElementResizeEnd: a,
            orientation: d.y.HORIZONTAL_LEFT
        });
    return (0, r.jsx)('div', {
        onMouseDown: l,
        className: H.resizeHandle
    });
}
function V() {
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
                    render: () => (0, r.jsx)(D.Z, {})
                },
                {
                    id: 'stores',
                    name: 'Stores',
                    render: () => (0, r.jsx)(L.Z, {})
                },
                {
                    id: 'dispatcher',
                    name: 'Dispatcher',
                    render: () => (0, r.jsx)(N.Z, {})
                }
            ];
            return (
                f.Z.isDeveloper &&
                    (e.push({
                        id: 'quick_actions',
                        name: 'Quick Actions',
                        render: () => (0, r.jsx)(B.Z, {})
                    }),
                    e.push({
                        id: 'perks_demos',
                        name: 'Perks Demos',
                        render: () => (0, r.jsx)(Z.Z, {})
                    })),
                f.Z.isDeveloper &&
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
                        render: () => (0, r.jsx)(O.Z, {})
                    }),
                    e.push({
                        id: 'feedback',
                        name: 'Feedback',
                        render: () => (0, r.jsx)(I.Z, {})
                    })),
                e.push({
                    id: 'colors',
                    name: 'Colors',
                    render: () => (0, r.jsx)(T.Z, {})
                }),
                e.push({
                    id: 'design_toggles',
                    name: 'Design Toggles',
                    render: () => (0, r.jsx)(S.Z, {})
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
                    render: () => (0, r.jsx)(A.Z, {})
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
                f.Z.isDeveloper &&
                    e.push({
                        id: 'content_inventory',
                        name: 'Content Inventory',
                        render: () => (0, r.jsx)(h.Z, {})
                    }),
                window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith('staging') &&
                    (e.push({
                        id: 'trials',
                        name: 'Trials',
                        render: () => (0, r.jsx)(M.Z, {})
                    }),
                    e.push({
                        id: 'payments',
                        name: 'Payments',
                        render: () => (0, r.jsx)(R.Z, {})
                    }),
                    e.push({
                        id: 'subscriptions',
                        name: 'Subscriptions',
                        render: () => (0, r.jsx)(P.Z, {})
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
        } = (0, F.Z)(
            {
                tabs: t,
                initialSelectedTabId: null !== (e = g.Z.lastOpenTabId) && void 0 !== e ? e : void 0,
                onChangeTab: (e) => {
                    (0, p.Qh)({ lastOpenTabId: e });
                }
            },
            [t]
        );
    return (
        (0, u.Z)({
            type: o.ImpressionTypes.PANE,
            name: o.ImpressionNames.VIEW_PANEL_DEVTOOLS,
            properties: { panel: i }
        }),
        (0, r.jsxs)(k.Gk, {
            children: [
                (0, r.jsxs)(m.ZP, {
                    className: G.headerBar,
                    toolbar: (0, r.jsx)(m.ZP.Icon, {
                        icon: s.XSmallIcon,
                        tooltip: U.Z.Messages.CLOSE,
                        onClick: p.SO
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
                (0, r.jsx)(k.Br, { className: H.layerContainer })
            ]
        })
    );
}
function W() {
    let e = a.useRef(null),
        t = (0, c.e7)([g.Z], () => g.Z.sidebarWidth),
        [n, l] = a.useState(null),
        o = a.useCallback((e) => (0, p.Qh)({ sidebarWidth: e }), []);
    return (a.useEffect(() => {
        null === n && null !== t && l(t);
    }, [t, n]),
    null === n)
        ? null
        : (0, r.jsxs)('div', {
              ref: e,
              className: i()(H.container),
              style: {
                  minWidth: g.h,
                  width: n
              },
              children: [
                  (0, r.jsx)(z, {
                      resizableNode: e,
                      onResize: l,
                      onResizeEnd: o
                  }),
                  (0, r.jsx)('div', {
                      className: H.sidebarContent,
                      children: (0, r.jsx)(V, {})
                  })
              ]
          });
}
function Y() {
    let e = (0, c.e7)([g.Z], () => g.Z.displayTools);
    return e
        ? (0, r.jsx)('div', {
              className: i()(H.container, H.mobileContainerExpanded),
              children: (0, r.jsx)('div', {
                  className: H.sidebarContent,
                  children: (0, r.jsx)(V, {})
              })
          })
        : (0, r.jsx)('div', {
              className: H.container,
              children: (0, r.jsx)(s.Clickable, {
                  onClick: p.SO,
                  children: (0, r.jsxs)(m.ZP, {
                      className: i()(G.headerBar, H.mobileHeaderCollapsed),
                      toolbar: (0, r.jsx)(x.Z, { direction: x.Z.Directions.UP }),
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
function K(e) {
    let { mobile: t } = e;
    return t ? (0, r.jsx)(Y, {}) : (0, r.jsx)(W, {});
}
