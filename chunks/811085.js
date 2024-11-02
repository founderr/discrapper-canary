n.d(e, {
    Z: function () {
        return g;
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
    S = n(388032),
    f = n(596175);
function g() {
    let t = (0, d.P)(),
        e = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        [n, g] = a.useState(36),
        m = a.useRef({
            [u.Sn.ALL_GOOD]: null,
            [u.Sn.LIMITED]: null,
            [u.Sn.VERY_LIMITED]: null,
            [u.Sn.AT_RISK]: null,
            [u.Sn.SUSPENDED]: null
        }),
        p = a.useCallback(() => {
            g(
                Math.max(
                    Math.max(
                        ...Object.values(m.current).map((t) => {
                            var e;
                            return null !== (e = null == t ? void 0 : t.getBoundingClientRect().height) && void 0 !== e ? e : 36;
                        })
                    ),
                    36
                )
            );
        }, []);
    a.useEffect(() => {
        p();
        let t = (0, l.debounce)(p, 100);
        window.addEventListener('resize', t);
    }, [p]);
    let T = {
            [u.Sn.ALL_GOOD]: {
                title: S.t.uaKrRk,
                description: S.intl.format(S.t.pEdBDw, {
                    termsOfService: E.sQ.TOS_LINK,
                    communityGuidelines: E.sQ.COMMUNITY_GUIDELINES
                }),
                status: S.t['/Idfam'],
                Icon: o.CircleCheckIcon,
                color: r.Z.colors.STATUS_POSITIVE
            },
            [u.Sn.LIMITED]: {
                title: S.t.epkcmZ,
                description: S.intl.string(S.t['774jub']),
                status: S.t.umleq6,
                Icon: o.CircleWarningIcon,
                color: r.Z.colors.STATUS_WARNING
            },
            [u.Sn.VERY_LIMITED]: {
                title: S.t.crzE2d,
                description: S.intl.string(S.t['T/Ufh4']),
                status: S.t.WBtMHR,
                Icon: o.CircleWarningIcon,
                color: r.Z.unsafe_rawColors.ORANGE_345
            },
            [u.Sn.AT_RISK]: {
                title: S.t.XRNVzM,
                description: S.intl.string(S.t['hbH+9f']),
                status: S.t['7f+4Li'],
                Icon: o.CircleWarningIcon,
                color: r.Z.colors.STATUS_DANGER
            },
            [u.Sn.SUSPENDED]: {
                title: S.t.MExFk5,
                description: S.intl.string(S.t['2liUvr']),
                status: S.t['0OONGB'],
                Icon: o.CircleXIcon,
                color: r.Z.colors.ICON_MUTED
            }
        },
        { title: h, description: A, color: x, Icon: I } = T[t.state],
        v = Object.keys(T).length;
    return (0, i.jsxs)(o.Card, {
        className: f.container,
        outline: !1,
        children: [
            (0, i.jsx)('div', {
                className: f.profile,
                children: (0, i.jsx)(_.Z, {
                    user: e,
                    size: o.AvatarSizes.SIZE_80
                })
            }),
            (0, i.jsxs)('div', {
                className: f.status,
                children: [
                    (0, i.jsxs)('div', {
                        className: f.title,
                        children: [
                            (0, i.jsx)(o.Heading, {
                                color: 'header-primary',
                                variant: 'heading-lg/normal',
                                children: S.intl.format(h, {
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
                        className: f.health,
                        style: { height: n },
                        children: [
                            (0, i.jsx)('div', { className: f.line }),
                            Object.entries(T).map((e, n) => {
                                let [a, l] = e,
                                    s = parseInt(a) === t.state;
                                return (0, i.jsxs)(
                                    'div',
                                    {
                                        className: f.statusOption,
                                        ref: (t) => (m.current[parseInt(a)] = t),
                                        children: [
                                            s
                                                ? (0, i.jsx)(I, {
                                                      className: f.marker,
                                                      color: l.color
                                                  })
                                                : (0, i.jsx)('div', {
                                                      className: f.marker,
                                                      style: {
                                                          marginLeft: 0 === n ? -6 : 0,
                                                          marginRight: n === v - 1 ? -6 : 0
                                                      },
                                                      children: (0, i.jsx)('div', { className: f.empty })
                                                  }),
                                            S.intl.format(l.status, {
                                                hook: (t) =>
                                                    (0, i.jsx)(o.Text, {
                                                        color: 'text-normal',
                                                        variant: 'text-sm/normal',
                                                        className: f.statusLabel,
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
