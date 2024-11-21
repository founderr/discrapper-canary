n.d(t, {
    Y: function () {
        return y;
    },
    Z: function () {
        return S;
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
    _ = n(785717),
    p = n(221292),
    h = n(687158),
    m = n(471879),
    g = n(502762),
    E = n(475413),
    v = n(228168),
    b = n(388032),
    I = n(572046),
    T = n(609440);
function S(e) {
    let { user: t, guildId: n, setPopoutRef: a, channelId: s, messageId: f, roleId: S, onViewBlockedProfileClick: y, newAnalyticsLocations: A = [] } = e,
        { analyticsLocations: N } = (0, c.ZP)([...A, u.Z.BLOCKED_PROFILE_POPOUT]),
        C = (0, _.ZB)({
            layout: 'BLOCKED_PROFILE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: s,
            messageId: f,
            roleId: S
        }),
        R = i.useRef(null),
        O = (0, h.ZP)(t.id, n),
        D = (0, o.e7)([d.ZP], () => (null != n ? d.ZP.getMember(n, t.id) : null));
    return (
        i.useEffect(() => {
            null == a || a(null == R ? void 0 : R.current);
        }, [R, a]),
        (0, r.jsx)(c.Gt, {
            value: N,
            children: (0, r.jsx)(_.Mt, {
                value: C,
                shouldTrackViewOnMount: null == D || null != D.fullProfileLoadedTimestamp,
                children: (0, r.jsx)(l.Dialog, {
                    ref: R,
                    'aria-label': t.username,
                    children: (0, r.jsx)(g.Z, {
                        user: t,
                        displayProfile: O,
                        profileType: v.y0.BITE_SIZE,
                        children: (0, r.jsxs)('div', {
                            className: I.container,
                            children: [
                                (0, r.jsx)('img', {
                                    alt: '',
                                    src: T,
                                    className: I.previewForCollected,
                                    'aria-hidden': !0
                                }),
                                (0, r.jsxs)('div', {
                                    className: I.body,
                                    children: [
                                        (0, r.jsx)(m.Z, {
                                            user: t,
                                            guildId: n
                                        }),
                                        (0, r.jsx)(l.Heading, {
                                            variant: 'heading-lg/bold',
                                            className: I.header,
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
                                        (0, r.jsx)(E.tG, {
                                            className: I.centeredButton,
                                            action: 'VIEW_BLOCKED_PROFILE',
                                            text: b.intl.string(b.t.iXAna2),
                                            autoFocus: !0,
                                            fullWidth: !1,
                                            onClick: () => {
                                                null == y || y(),
                                                    (0, p.pQ)({
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
function y(e) {
    let { user: t, guildId: n, setPopoutRef: a, channelId: S, messageId: y, roleId: A, onViewBlockedProfileClick: N, newAnalyticsLocations: C = [] } = e,
        R = (0, o.e7)([f.Z], () => f.Z.isBlocked(t.id)),
        { analyticsLocations: O } = (0, c.ZP)([...C, R ? u.Z.BLOCKED_PROFILE_POPOUT : u.Z.IGNORED_PROFILE_POPOUT]),
        D = (0, _.ZB)({
            layout: R ? 'BLOCKED_PROFILE_POPOUT' : 'IGNORED_PROFILE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: S,
            messageId: y,
            roleId: A
        }),
        L = i.useRef(null),
        x = (0, h.ZP)(t.id, n),
        w = (0, o.e7)([d.ZP], () => (null != n ? d.ZP.getMember(n, t.id) : null));
    i.useEffect(() => {
        null == a || a(null == L ? void 0 : L.current);
    }, [L, a]);
    let M = R ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE';
    return (0, r.jsx)(c.Gt, {
        value: O,
        children: (0, r.jsx)(_.Mt, {
            value: D,
            shouldTrackViewOnMount: null == w || null != w.fullProfileLoadedTimestamp,
            children: (0, r.jsx)(l.Dialog, {
                ref: L,
                'aria-label': t.username,
                children: (0, r.jsx)(g.Z, {
                    user: t,
                    displayProfile: x,
                    profileType: v.y0.BITE_SIZE,
                    children: (0, r.jsxs)('div', {
                        className: I.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: T,
                                className: I.previewForCollected,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: s()(I.body, I.bodySpacing),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: I.headerContainer,
                                        children: [
                                            (0, r.jsx)(m.i, {
                                                user: t,
                                                guildId: n
                                            }),
                                            (0, r.jsx)(l.Heading, {
                                                variant: 'heading-lg/bold',
                                                children: b.intl.string(b.t.CCnxtr)
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                variant: 'text-sm/medium',
                                                children: b.intl.format(R ? b.t['4d+1oK'] : b.t['17zhY2'], { username: t.username })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(E.tG, {
                                        action: M,
                                        text: b.intl.string(b.t.HO0AxM),
                                        autoFocus: !0,
                                        grow: !0,
                                        fullWidth: !1,
                                        onClick: () => {
                                            null == N || N(),
                                                (0, p.pQ)({
                                                    action: M,
                                                    analyticsLocations: O,
                                                    ...D
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
