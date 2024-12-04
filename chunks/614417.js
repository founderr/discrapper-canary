n.d(t, {
    Y: function () {
        return C;
    },
    Z: function () {
        return N;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(100527),
    c = n(906732),
    d = n(271383),
    f = n(699516),
    _ = n(5192),
    p = n(785717),
    h = n(221292),
    m = n(687158),
    g = n(471879),
    E = n(502762),
    v = n(848780),
    I = n(907179),
    T = n(475413),
    b = n(228168),
    S = n(388032),
    y = n(378067),
    A = n(609440);
function N(e) {
    let { user: t, guildId: n, setPopoutRef: a, channelId: s, messageId: f, roleId: _, onViewBlockedProfileClick: v, newAnalyticsLocations: I = [] } = e,
        { analyticsLocations: N } = (0, c.ZP)([...I, u.Z.BLOCKED_PROFILE_POPOUT]),
        C = (0, p.ZB)({
            layout: 'BLOCKED_PROFILE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: s,
            messageId: f,
            roleId: _
        }),
        R = i.useRef(null),
        O = (0, m.ZP)(t.id, n),
        D = (0, o.e7)([d.ZP], () => (null != n ? d.ZP.getMember(n, t.id) : null));
    return (
        i.useEffect(() => {
            null == a || a(null == R ? void 0 : R.current);
        }, [R, a]),
        (0, r.jsx)(c.Gt, {
            value: N,
            children: (0, r.jsx)(p.Mt, {
                value: C,
                shouldTrackViewOnMount: null == D || null != D.fullProfileLoadedTimestamp,
                children: (0, r.jsx)(l.Dialog, {
                    ref: R,
                    'aria-label': t.username,
                    children: (0, r.jsx)(E.Z, {
                        user: t,
                        displayProfile: O,
                        profileType: b.y0.BITE_SIZE,
                        children: (0, r.jsxs)('div', {
                            className: y.container,
                            children: [
                                (0, r.jsx)('img', {
                                    alt: '',
                                    src: A,
                                    className: y.previewForCollected,
                                    'aria-hidden': !0
                                }),
                                (0, r.jsxs)('div', {
                                    className: y.body,
                                    children: [
                                        (0, r.jsx)(g.Z, {
                                            user: t,
                                            guildId: n
                                        }),
                                        (0, r.jsx)(l.Heading, {
                                            variant: 'heading-lg/bold',
                                            className: y.header,
                                            children: S.intl.string(S.t.VNJ7UF)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: S.intl.format(S.t.LXbngo, { username: t.username })
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: S.intl.string(S.t['20WzZ2'])
                                        }),
                                        (0, r.jsx)(T.tG, {
                                            className: y.centeredButton,
                                            action: 'VIEW_BLOCKED_PROFILE',
                                            text: S.intl.string(S.t.iXAna2),
                                            autoFocus: !0,
                                            fullWidth: !1,
                                            onClick: () => {
                                                null == v || v(),
                                                    (0, h.pQ)({
                                                        action: 'VIEW_BLOCKED_PROFILE',
                                                        analyticsLocations: N,
                                                        ...C
                                                    });
                                            }
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    );
}
function C(e) {
    let { user: t, guildId: n, setPopoutRef: a, channelId: T, messageId: N, roleId: C, onViewBlockedProfileClick: R, newAnalyticsLocations: O = [] } = e,
        D = (0, o.e7)([f.Z], () => f.Z.isBlocked(t.id)),
        { analyticsLocations: L } = (0, c.ZP)([...O, D ? u.Z.BLOCKED_PROFILE_POPOUT : u.Z.IGNORED_PROFILE_POPOUT]),
        x = (0, p.ZB)({
            layout: D ? 'BLOCKED_PROFILE_POPOUT' : 'IGNORED_PROFILE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: T,
            messageId: N,
            roleId: C
        }),
        w = i.useRef(null),
        P = (0, m.ZP)(t.id, n),
        M = (0, o.e7)([d.ZP], () => (null != n ? d.ZP.getMember(n, t.id) : null));
    i.useEffect(() => {
        null == a || a(null == w ? void 0 : w.current);
    }, [w, a]);
    let k = D ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE';
    return (0, r.jsx)(c.Gt, {
        value: L,
        children: (0, r.jsx)(p.Mt, {
            value: x,
            shouldTrackViewOnMount: null == M || null != M.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(l.Dialog, {
                ref: w,
                'aria-label': t.username,
                children: (0, r.jsx)(E.Z, {
                    user: t,
                    displayProfile: P,
                    profileType: b.y0.BITE_SIZE,
                    children: (0, r.jsxs)('div', {
                        className: y.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: A,
                                className: y.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: s()(y.body, y.bodySpacing),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: y.headerContainer,
                                        children: [
                                            (0, r.jsx)(g.i, {
                                                user: t,
                                                guildId: n
                                            }),
                                            (0, r.jsx)(l.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: S.intl.string(S.t.b33pLC)
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                variant: 'text-sm/medium',
                                                children: S.intl.format(D ? S.t['8F+WNz'] : S.t['/cZp5u'], { username: _.ZP.getName(n, T, t) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsxs)(l.Stack, {
                                        align: 'center',
                                        children: [
                                            (0, r.jsx)(I.Z, {
                                                isBlocked: D,
                                                onClick: () => {
                                                    null == R || R(),
                                                        (0, h.pQ)({
                                                            action: k,
                                                            analyticsLocations: L,
                                                            ...x
                                                        });
                                                }
                                            }),
                                            (0, r.jsx)(v.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    null == R || R(),
                                                        (0, h.pQ)({
                                                            action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                            analyticsLocations: L,
                                                            ...x
                                                        });
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
