n.d(e, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(392711),
    s = n(442837),
    r = n(692547),
    o = n(481060),
    c = n(594174),
    u = n(531441),
    d = n(451284),
    _ = n(959562),
    E = n(800530),
    g = n(388032),
    S = n(370422);
function f() {
    let t = (0, d.P)(),
        e = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        [n, f] = a.useState(36),
        p = a.useRef({
            [u.Sn.ALL_GOOD]: null,
            [u.Sn.LIMITED]: null,
            [u.Sn.VERY_LIMITED]: null,
            [u.Sn.AT_RISK]: null,
            [u.Sn.SUSPENDED]: null
        }),
        m = a.useCallback(() => {
            f(
                Math.max(
                    Math.max(
                        ...Object.values(p.current).map((t) => {
                            var e;
                            return null !== (e = null == t ? void 0 : t.getBoundingClientRect().height) && void 0 !== e ? e : 36;
                        })
                    ),
                    36
                )
            );
        }, []);
    a.useEffect(() => {
        m();
        let t = (0, l.debounce)(m, 100);
        window.addEventListener('resize', t);
    }, [m]);
    let h = {
            [u.Sn.ALL_GOOD]: {
                title: g.t.uaKrRk,
                description: g.intl.format(g.t.pEdBDw, {
                    termsOfService: E.sQ.TOS_LINK,
                    communityGuidelines: E.sQ.COMMUNITY_GUIDELINES
                }),
                status: g.t['/Idfam'],
                Icon: o.CircleCheckIcon,
                color: r.Z.colors.STATUS_POSITIVE
            },
            [u.Sn.LIMITED]: {
                title: g.t.epkcmZ,
                description: g.intl.string(g.t['774jub']),
                status: g.t.umleq6,
                Icon: o.CircleWarningIcon,
                color: r.Z.colors.STATUS_WARNING
            },
            [u.Sn.VERY_LIMITED]: {
                title: g.t.crzE2d,
                description: g.intl.string(g.t['T/Ufh4']),
                status: g.t.WBtMHR,
                Icon: o.CircleWarningIcon,
                color: r.Z.unsafe_rawColors.ORANGE_345
            },
            [u.Sn.AT_RISK]: {
                title: g.t.XRNVzM,
                description: g.intl.string(g.t['hbH+9f']),
                status: g.t['7f+4Li'],
                Icon: o.CircleWarningIcon,
                color: r.Z.colors.STATUS_DANGER
            },
            [u.Sn.SUSPENDED]: {
                title: g.t.MExFk5,
                description: g.intl.string(g.t['2liUvr']),
                status: g.t['0OONGB'],
                Icon: o.CircleXIcon,
                color: r.Z.colors.ICON_MUTED
            }
        },
        { title: T, description: A, color: x, Icon: I } = h[t.state],
        v = Object.keys(h).length;
    return (0, i.jsxs)(o.Card, {
        className: S.container,
        outline: !1,
        children: [
            (0, i.jsx)('div', {
                className: S.profile,
                children: (0, i.jsx)(_.Z, {
                    user: e,
                    size: o.AvatarSizes.SIZE_80
                })
            }),
            (0, i.jsxs)('div', {
                className: S.status,
                children: [
                    (0, i.jsxs)('div', {
                        className: S.title,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                color: 'header-primary',
                                variant: 'heading-lg/normal',
                                children: g.intl.format(T, {
                                    hook: (t) =>
                                        (0, i.jsx)(o.Text, {
                                            style: { color: x.css },
                                            variant: 'heading-lg/bold',
                                            tag: 'span',
                                            children: t
                                        })
                                })
                            }),
                            (0, i.jsx)(o.Text, {
                                color: 'text-normal',
                                variant: 'text-sm/normal',
                                children: A
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: S.health,
                        style: { height: n },
                        children: [
                            (0, i.jsx)('div', { className: S.line }),
                            Object.entries(h).map((e, n) => {
                                let [a, l] = e,
                                    s = parseInt(a) === t.state;
                                return (0, i.jsxs)(
                                    'div',
                                    {
                                        className: S.statusOption,
                                        ref: (t) => (p.current[parseInt(a)] = t),
                                        children: [
                                            s
                                                ? (0, i.jsx)(I, {
                                                      className: S.marker,
                                                      color: l.color
                                                  })
                                                : (0, i.jsx)('div', {
                                                      className: S.marker,
                                                      style: {
                                                          marginLeft: 0 === n ? -6 : 0,
                                                          marginRight: n === v - 1 ? -6 : 0
                                                      },
                                                      children: (0, i.jsx)('div', { className: S.empty })
                                                  }),
                                            g.intl.format(l.status, {
                                                hook: (t) =>
                                                    (0, i.jsx)(o.Text, {
                                                        color: 'text-normal',
                                                        variant: 'text-sm/normal',
                                                        className: S.statusLabel,
                                                        children: t
                                                    })
                                            })
                                        ]
                                    },
                                    n
                                );
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
