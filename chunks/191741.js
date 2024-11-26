n.r(t),
    n.d(t, {
        default: function () {
            return x;
        },
        useAppSidebarState: function () {
            return S;
        }
    });
var i = n(200651),
    r = n(192379),
    l = n(15729),
    a = n(442837),
    s = n(481060),
    o = n(230711),
    c = n(174556),
    d = n(565138),
    u = n(300986),
    h = n(314451),
    m = n(35583),
    p = n(141321),
    g = n(592125),
    f = n(430824),
    _ = n(944486),
    E = n(358085),
    I = n(998502),
    C = n(981631),
    v = n(741764),
    N = n(414104);
let S = (0, l.U)(() => ({ isOpen: !0 }));
function T(e) {
    e.stopPropagation();
}
function x() {
    let e = (0, a.e7)([_.Z], () => _.Z.getChannelId()),
        t = (0, a.e7)([g.Z], () => g.Z.getChannel(e), [e]),
        n = f.Z.getGuild(null == t ? void 0 : t.guild_id),
        l = S((e) => e.isOpen),
        { hasBugReporterAccess: x } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    r.useLayoutEffect(() => {
        I.ZP.setMinimumSize(v.J, v.N);
    }, []);
    let A = r.useCallback(() => {
        (0, E.isMac)() && I.ZP.maximize();
    }, []);
    return (0, i.jsxs)('div', {
        className: N.bar,
        onDoubleClick: A,
        children: [
            (0, i.jsx)('div', {
                className: N.left,
                'data-sidebar-collapsed': !l,
                onDoubleClick: T,
                children:
                    !l &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(s.Clickable, {
                                onClick: () => {
                                    S.setState({ isOpen: !S.getState().isOpen });
                                },
                                children: (0, i.jsx)(b, {})
                            }),
                            (0, i.jsx)(s.Clickable, {
                                onClick: () => {
                                    o.Z.open(C.oAB.ACCOUNT);
                                },
                                children: (0, i.jsx)(s.SettingsIcon, { size: 'xs' })
                            })
                        ]
                    })
            }),
            (0, i.jsx)('div', {
                className: N.center,
                children:
                    null != n &&
                    (0, i.jsxs)('div', {
                        className: N.guild,
                        children: [
                            (0, i.jsx)(d.Z, {
                                guild: n,
                                size: d.Z.Sizes.SMALLER,
                                active: !0,
                                className: N.icon
                            }),
                            (0, i.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                children: n.name
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: N.right,
                onDoubleClick: T,
                children: [(0, i.jsx)(p.Z, {}), x ? (0, i.jsx)(h.Z, {}) : (0, i.jsx)(u.Z, {}), (0, i.jsx)(m.Z, {})]
            })
        ]
    });
}
function b() {
    return (0, i.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: N.icon,
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
