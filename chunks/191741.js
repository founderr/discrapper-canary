n.d(t, {
    A: function () {
        return f;
    },
    U: function () {
        return C;
    }
});
var i = n(735250);
n(470079);
var a = n(652874),
    s = n(442837),
    r = n(481060),
    l = n(230711),
    o = n(174556),
    c = n(565138),
    d = n(300986),
    u = n(314451),
    _ = n(35583),
    E = n(51596),
    h = n(141321),
    m = n(703656),
    I = n(592125),
    g = n(430824),
    p = n(944486),
    T = n(981631),
    S = n(350133);
let f = (0, a.Z)(() => ({ isOpen: !0 }));
function C() {
    let e = (0, s.e7)([p.Z], () => p.Z.getChannelId()),
        t = (0, s.e7)([I.Z], () => I.Z.getChannel(e), [e]),
        n = g.Z.getGuild(null == t ? void 0 : t.guild_id),
        a = f((e) => e.isOpen),
        { hasBugReporterAccess: C } = o.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    return (0, i.jsxs)('div', {
        className: S.bar,
        children: [
            (0, i.jsxs)('div', {
                className: S.sidebar,
                'data-sidebar-collapsed': !a,
                children: [
                    !a &&
                        (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(r.Clickable, {
                                    onClick: () => {
                                        f.setState({ isOpen: !f.getState().isOpen });
                                    },
                                    children: (0, i.jsx)(N, {})
                                }),
                                (0, i.jsx)(r.Clickable, {
                                    onClick: () => {
                                        l.Z.open(T.oAB.ACCOUNT);
                                    },
                                    children: (0, i.jsx)(r.SettingsIcon, { size: 'xs' })
                                })
                            ]
                        }),
                    (0, i.jsx)(r.Clickable, {
                        onClick: () => (0, E.$Z)('APP_BAR'),
                        children: (0, i.jsx)(r.MagnifyingGlassIcon, { size: 'xs' })
                    }),
                    (0, i.jsx)(r.Clickable, {
                        onClick: m.op,
                        children: (0, i.jsx)(r.ArrowSmallLeftIcon, { size: 'sm' })
                    }),
                    (0, i.jsx)(r.Clickable, {
                        onClick: m.eH,
                        children: (0, i.jsx)(r.ArrowSmallRightIcon, { size: 'sm' })
                    })
                ]
            }),
            (0, i.jsx)('div', {
                className: S.center,
                children:
                    null != n &&
                    (0, i.jsxs)('div', {
                        className: S.guild,
                        children: [
                            (0, i.jsx)(c.Z, {
                                guild: n,
                                size: c.Z.Sizes.SMALLER,
                                active: !0,
                                className: S.icon
                            }),
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/medium',
                                children: n.name
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: S.right,
                children: [(0, i.jsx)(h.Z, {}), C ? (0, i.jsx)(u.Z, {}) : (0, i.jsx)(d.Z, {}), (0, i.jsx)(_.Z, {})]
            })
        ]
    });
}
function N() {
    return (0, i.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: S.icon,
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'var(--interactive-normal)',
        'stroke-width': '2',
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round',
        children: [
            (0, i.jsx)('rect', {
                width: '18',
                height: '18',
                x: '3',
                y: '3',
                rx: '2'
            }),
            (0, i.jsx)('path', { d: 'M9 3v18' })
        ]
    });
}
