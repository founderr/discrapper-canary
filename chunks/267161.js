n.r(t),
    n.d(t, {
        default: function () {
            return b;
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
    E = n(998502),
    I = n(950796),
    C = n(981631),
    v = n(741764),
    N = n(553512);
let S = (0, l.U)(() => ({ isOpen: !0 }));
function T() {
    let e = (0, a.e7)([_.Z], () => _.Z.getChannelId()),
        t = (0, a.e7)([g.Z], () => g.Z.getChannel(e), [e]),
        n = f.Z.getGuild(null == t ? void 0 : t.guild_id);
    return (
        null != n &&
        (0, i.jsxs)('div', {
            className: N.guild,
            children: [
                (0, i.jsx)(d.Z, {
                    guild: n,
                    size: d.Z.Sizes.SMALLER,
                    active: !0,
                    className: N.guildIcon
                }),
                (0, i.jsx)(s.Text, {
                    variant: 'text-sm/medium',
                    children: n.name
                })
            ]
        })
    );
}
function b(e) {
    let { hasNotice: t } = e;
    r.useLayoutEffect(() => {
        E.ZP.setMinimumSize(v.J, v.N);
    }, []);
    let n = S((e) => e.isOpen),
        { hasBugReporterAccess: l } = c.Z.useExperiment({ location: 'HeaderBar' }, { autoTrackExposure: !1 });
    return (
        r.useLayoutEffect(() => {
            E.ZP.setMinimumSize(v.J, v.N);
        }, []),
        (0, i.jsx)(I.T, {
            hasNotice: t,
            leading:
                !n &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(s.Clickable, {
                            className: N.button,
                            onClick: () => {
                                S.setState({ isOpen: !S.getState().isOpen });
                            },
                            children: (0, i.jsx)(x, {})
                        }),
                        (0, i.jsx)(s.Clickable, {
                            className: N.button,
                            onClick: () => {
                                o.Z.open(C.oAB.ACCOUNT);
                            },
                            children: (0, i.jsx)(s.SettingsIcon, {
                                size: 'xs',
                                color: 'currentColor'
                            })
                        })
                    ]
                }),
            title: !1,
            trailing: (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(p.Z, { className: N.button }), l ? (0, i.jsx)(h.Z, { className: N.button }) : (0, i.jsx)(u.Z, { className: N.button }), (0, i.jsx)(m.Z, { className: N.button })]
            })
        })
    );
}
function x() {
    return (0, i.jsxs)('svg', {
        xmlns: 'http://www.w3.org/2000/svg',
        className: N.icon,
        width: '24',
        height: '24',
        viewBox: '0 0 24 24',
        fill: 'none',
        stroke: 'currentColor',
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
