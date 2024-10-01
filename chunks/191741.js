n.d(t, {
    A: function () {
        return N;
    },
    U: function () {
        return O;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(652874),
    o = n(442837),
    s = n(481060),
    l = n(230711),
    u = n(174556),
    c = n(565138),
    d = n(300986),
    _ = n(314451),
    E = n(35583),
    f = n(51596),
    h = n(141321),
    p = n(703656),
    m = n(592125),
    I = n(430824),
    T = n(944486),
    g = n(998502),
    S = n(981631),
    A = n(741764),
    v = n(350133);
let N = (0, a.Z)(() => ({ isOpen: !0 }));
function O() {
    let e = (0, o.e7)([T.Z], () => T.Z.getChannelId()),
        t = (0, o.e7)([m.Z], () => m.Z.getChannel(e), [e]),
        n = I.Z.getGuild(null == t ? void 0 : t.guild_id),
        a = N((e) => e.isOpen),
        { hasBugReporterAccess: O } = u.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    return (
        i.useLayoutEffect(() => {
            g.ZP.setMinimumSize(A.J, A.N);
        }, []),
        (0, r.jsxs)('div', {
            className: v.bar,
            children: [
                (0, r.jsxs)('div', {
                    className: v.sidebar,
                    'data-sidebar-collapsed': !a,
                    children: [
                        !a &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(s.Clickable, {
                                        onClick: () => {
                                            N.setState({ isOpen: !N.getState().isOpen });
                                        },
                                        children: (0, r.jsx)(R, {})
                                    }),
                                    (0, r.jsx)(s.Clickable, {
                                        onClick: () => {
                                            l.Z.open(S.oAB.ACCOUNT);
                                        },
                                        children: (0, r.jsx)(s.SettingsIcon, { size: 'xs' })
                                    })
                                ]
                            }),
                        (0, r.jsx)(s.Clickable, {
                            onClick: () => (0, f.$Z)('APP_BAR'),
                            children: (0, r.jsx)(s.MagnifyingGlassIcon, { size: 'xs' })
                        }),
                        (0, r.jsx)(s.Clickable, {
                            onClick: p.op,
                            children: (0, r.jsx)(s.ArrowSmallLeftIcon, { size: 'sm' })
                        }),
                        (0, r.jsx)(s.Clickable, {
                            onClick: p.eH,
                            children: (0, r.jsx)(s.ArrowSmallRightIcon, { size: 'sm' })
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: v.center,
                    children:
                        null != n &&
                        (0, r.jsxs)('div', {
                            className: v.guild,
                            children: [
                                (0, r.jsx)(c.Z, {
                                    guild: n,
                                    size: c.Z.Sizes.SMALLER,
                                    active: !0,
                                    className: v.icon
                                }),
                                (0, r.jsx)(s.Text, {
                                    variant: 'text-sm/medium',
                                    children: n.name
                                })
                            ]
                        })
                }),
                (0, r.jsxs)('div', {
                    className: v.right,
                    children: [(0, r.jsx)(h.Z, {}), O ? (0, r.jsx)(_.Z, {}) : (0, r.jsx)(d.Z, {}), (0, r.jsx)(E.Z, {})]
                })
            ]
        })
    );
}
function R() {
    return (0, r.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: v.icon,
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'var(--interactive-normal)',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        children: [
            (0, r.jsx)('rect', {
                width: '18',
                height: '18',
                x: '3',
                y: '3',
                rx: '2'
            }),
            (0, r.jsx)('path', { d: 'M9 3v18' })
        ]
    });
}
