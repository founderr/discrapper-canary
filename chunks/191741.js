n.d(t, {
    A: function () {
        return S;
    },
    U: function () {
        return A;
    }
});
var r = n(735250);
n(470079);
var i = n(652874),
    a = n(442837),
    o = n(481060),
    s = n(230711),
    l = n(174556),
    u = n(565138),
    c = n(300986),
    d = n(314451),
    _ = n(35583),
    E = n(51596),
    f = n(141321),
    h = n(703656),
    p = n(592125),
    m = n(430824),
    I = n(944486),
    T = n(981631),
    g = n(350133);
let S = (0, i.Z)(() => ({ isOpen: !0 }));
function A() {
    let e = (0, a.e7)([I.Z], () => I.Z.getChannelId()),
        t = (0, a.e7)([p.Z], () => p.Z.getChannel(e), [e]),
        n = m.Z.getGuild(null == t ? void 0 : t.guild_id),
        i = S((e) => e.isOpen),
        { hasBugReporterAccess: A } = l.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    return (0, r.jsxs)('div', {
        className: g.bar,
        children: [
            (0, r.jsxs)('div', {
                className: g.sidebar,
                'data-sidebar-collapsed': !i,
                children: [
                    !i &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(o.Clickable, {
                                    onClick: () => {
                                        S.setState({ isOpen: !S.getState().isOpen });
                                    },
                                    children: (0, r.jsx)(v, {})
                                }),
                                (0, r.jsx)(o.Clickable, {
                                    onClick: () => {
                                        s.Z.open(T.oAB.ACCOUNT);
                                    },
                                    children: (0, r.jsx)(o.SettingsIcon, { size: 'xs' })
                                })
                            ]
                        }),
                    (0, r.jsx)(o.Clickable, {
                        onClick: () => (0, E.$Z)('APP_BAR'),
                        children: (0, r.jsx)(o.MagnifyingGlassIcon, { size: 'xs' })
                    }),
                    (0, r.jsx)(o.Clickable, {
                        onClick: h.op,
                        children: (0, r.jsx)(o.ArrowSmallLeftIcon, { size: 'sm' })
                    }),
                    (0, r.jsx)(o.Clickable, {
                        onClick: h.eH,
                        children: (0, r.jsx)(o.ArrowSmallRightIcon, { size: 'sm' })
                    })
                ]
            }),
            (0, r.jsx)('div', {
                className: g.center,
                children:
                    null != n &&
                    (0, r.jsxs)('div', {
                        className: g.guild,
                        children: [
                            (0, r.jsx)(u.Z, {
                                guild: n,
                                size: u.Z.Sizes.SMALLER,
                                active: !0,
                                className: g.icon
                            }),
                            (0, r.jsx)(o.Text, {
                                variant: 'text-sm/medium',
                                children: n.name
                            })
                        ]
                    })
            }),
            (0, r.jsxs)('div', {
                className: g.right,
                children: [(0, r.jsx)(f.Z, {}), A ? (0, r.jsx)(d.Z, {}) : (0, r.jsx)(c.Z, {}), (0, r.jsx)(_.Z, {})]
            })
        ]
    });
}
function v() {
    return (0, r.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: g.icon,
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
