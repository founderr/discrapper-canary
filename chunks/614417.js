n.d(t, {
    Y: function () {
        return A;
    },
    Z: function () {
        return y;
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
    v = n(475413),
    I = n(228168),
    b = n(388032),
    T = n(378067),
    S = n(609440);
function y(e) {
    let { user: t, guildId: n, setPopoutRef: a, channelId: s, messageId: f, roleId: _, onViewBlockedProfileClick: y, newAnalyticsLocations: A = [] } = e,
        { analyticsLocations: N } = (0, c.ZP)([...A, u.Z.BLOCKED_PROFILE_POPOUT]),
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
                        profileType: I.y0.BITE_SIZE,
                        children: (0, r.jsxs)('div', {
                            className: T.container,
                            children: [
                                (0, r.jsx)('img', {
                                    alt: '',
                                    src: S,
                                    className: T.previewForCollected,
                                    'aria-hidden': !0
                                }),
                                (0, r.jsxs)('div', {
                                    className: T.body,
                                    children: [
                                        (0, r.jsx)(g.Z, {
                                            user: t,
                                            guildId: n
                                        }),
                                        (0, r.jsx)(l.Heading, {
                                            variant: 'heading-lg/bold',
                                            className: T.header,
                                            children: b.intl.string(b.t.VNJ7UF)
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: b.intl.format(b.t.LXbngo, { username: t.username })
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: 'text-sm/medium',
                                            children: b.intl.string(b.t['20WzZ2'])
                                        }),
                                        (0, r.jsx)(v.tG, {
                                            className: T.centeredButton,
                                            action: 'VIEW_BLOCKED_PROFILE',
                                            text: b.intl.string(b.t.iXAna2),
                                            autoFocus: !0,
                                            fullWidth: !1,
                                            onClick: () => {
                                                null == y || y(),
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
function A(e) {
    let { user: t, guildId: n, setPopoutRef: a, channelId: y, messageId: A, roleId: N, onViewBlockedProfileClick: C, newAnalyticsLocations: R = [] } = e,
        O = (0, o.e7)([f.Z], () => f.Z.isBlocked(t.id)),
        { analyticsLocations: D } = (0, c.ZP)([...R, O ? u.Z.BLOCKED_PROFILE_POPOUT : u.Z.IGNORED_PROFILE_POPOUT]),
        L = (0, p.ZB)({
            layout: O ? 'BLOCKED_PROFILE_POPOUT' : 'IGNORED_PROFILE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: y,
            messageId: A,
            roleId: N
        }),
        x = i.useRef(null),
        w = (0, m.ZP)(t.id, n),
        M = (0, o.e7)([d.ZP], () => (null != n ? d.ZP.getMember(n, t.id) : null));
    i.useEffect(() => {
        null == a || a(null == x ? void 0 : x.current);
    }, [x, a]);
    let P = O ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE';
    return (0, r.jsx)(c.Gt, {
        value: D,
        children: (0, r.jsx)(p.Mt, {
            value: L,
            shouldTrackViewOnMount: null == M || null != M.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(l.Dialog, {
                ref: x,
                'aria-label': t.username,
                children: (0, r.jsx)(E.Z, {
                    user: t,
                    displayProfile: w,
                    profileType: I.y0.BITE_SIZE,
                    children: (0, r.jsxs)('div', {
                        className: T.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: S,
                                className: T.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: s()(T.body, T.bodySpacing),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: T.headerContainer,
                                        children: [
                                            (0, r.jsx)(g.i, {
                                                user: t,
                                                guildId: n
                                            }),
                                            (0, r.jsx)(l.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: b.intl.string(b.t.b33pLC)
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                variant: 'text-sm/medium',
                                                children: b.intl.format(O ? b.t['8F+WNz'] : b.t['/cZp5u'], { username: _.ZP.getName(n, y, t) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(v.tG, {
                                        action: P,
                                        text: b.intl.string(b.t['UJKH/v']),
                                        autoFocus: !0,
                                        grow: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == C || C(),
                                                (0, h.pQ)({
                                                    action: P,
                                                    analyticsLocations: D,
                                                    ...L
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
    });
}
