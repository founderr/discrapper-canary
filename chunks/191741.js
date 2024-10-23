n.r(t),
    n.d(t, {
        default: function () {
            return v;
        },
        useAppSidebarState: function () {
            return N;
        }
    });
var i = n(200651),
    a = n(192379),
    s = n(903797),
    r = n(442837),
    l = n(481060),
    o = n(230711),
    c = n(174556),
    d = n(565138),
    u = n(300986),
    _ = n(314451),
    E = n(35583),
    h = n(141321),
    m = n(592125),
    I = n(430824),
    p = n(944486),
    g = n(358085),
    T = n(998502),
    C = n(981631),
    f = n(741764),
    S = n(350133);
let N = (0, s.Z)(() => ({ isOpen: !0 }));
function A(e) {
    e.stopPropagation();
}
function v() {
    let e = (0, r.e7)([p.Z], () => p.Z.getChannelId()),
        t = (0, r.e7)([m.Z], () => m.Z.getChannel(e), [e]),
        n = I.Z.getGuild(null == t ? void 0 : t.guild_id),
        s = N((e) => e.isOpen),
        { hasBugReporterAccess: v } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    a.useLayoutEffect(() => {
        T.ZP.setMinimumSize(f.J, f.N);
    }, []);
    let L = a.useCallback(() => {
        (0, g.isMac)() && T.ZP.maximize();
    }, []);
    return (0, i.jsxs)('div', {
        className: S.bar,
        onDoubleClick: L,
        children: [
            (0, i.jsx)('div', {
                className: S.left,
                'data-sidebar-collapsed': !s,
                onDoubleClick: A,
                children:
                    !s &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.Clickable, {
                                onClick: () => {
                                    N.setState({ isOpen: !N.getState().isOpen });
                                },
                                children: (0, i.jsx)(Z, {})
                            }),
                            (0, i.jsx)(l.Clickable, {
                                onClick: () => {
                                    o.Z.open(C.oAB.ACCOUNT);
                                },
                                children: (0, i.jsx)(l.SettingsIcon, { size: 'xs' })
                            })
                        ]
                    })
            }),
            (0, i.jsx)('div', {
                className: S.center,
                children:
                    null != n &&
                    (0, i.jsxs)('div', {
                        className: S.guild,
                        children: [
                            (0, i.jsx)(d.Z, {
                                guild: n,
                                size: d.Z.Sizes.SMALLER,
                                active: !0,
                                className: S.icon
                            }),
                            (0, i.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                children: n.name
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: S.right,
                onDoubleClick: A,
                children: [(0, i.jsx)(h.Z, {}), v ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(u.Z, {}), (0, i.jsx)(E.Z, {})]
            })
        ]
    });
}
function Z() {
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
