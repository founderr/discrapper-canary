n.d(t, {
    Z: function () {
        return I;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(100527),
    l = n(906732),
    u = n(271383),
    c = n(785717),
    d = n(221292),
    f = n(687158),
    _ = n(471879),
    h = n(502762),
    p = n(475413),
    m = n(228168),
    g = n(388032),
    E = n(572046),
    v = n(609440);
function I(e) {
    let { user: t, guildId: n, setPopoutRef: I, channelId: S, messageId: T, roleId: b, onViewBlockedProfileClick: y, newAnalyticsLocations: A = [] } = e,
        { analyticsLocations: N } = (0, l.ZP)([...A, o.Z.BLOCKED_PROFILE_POPOUT]),
        C = (0, c.ZB)({
            layout: 'BLOCKED_PROFILE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: S,
            messageId: T,
            roleId: b
        }),
        R = i.useRef(null),
        O = (0, f.ZP)(t.id, n),
        D = (0, a.e7)([u.ZP], () => (null != n ? u.ZP.getMember(n, t.id) : null));
    return (
        i.useEffect(() => {
            null == I || I(null == R ? void 0 : R.current);
        }, [R, I]),
        (0, r.jsx)(l.Gt, {
            value: N,
            children: (0, r.jsx)(c.Mt, {
                value: C,
                shouldTrackViewOnMount: null == D || null != D.fullProfileLoadedTimestamp,
                children: (0, r.jsx)(s.Dialog, {
                    ref: R,
                    'aria-label': t.username,
                    children: (0, r.jsx)(h.Z, {
                        user: t,
                        displayProfile: O,
                        profileType: m.y0.BITE_SIZE,
                        children: (0, r.jsxs)('div', {
                            className: E.container,
                            children: [
                                (0, r.jsx)('img', {
                                    alt: '',
                                    src: v,
                                    className: E.previewForCollected,
                                    'aria-hidden': !0
                                }),
                                (0, r.jsxs)('div', {
                                    className: E.body,
                                    children: [
                                        (0, r.jsx)(_.Z, {
                                            user: t,
                                            guildId: n
                                        }),
                                        (0, r.jsx)(s.Heading, {
                                            variant: 'heading-lg/bold',
                                            className: E.header,
                                            children: g.intl.string(g.t.VNJ7UF)
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            children: g.intl.format(g.t.LXbngo, { username: t.username })
                                        }),
                                        (0, r.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            children: g.intl.string(g.t['20WzZ2'])
                                        }),
                                        (0, r.jsx)(p.tG, {
                                            className: E.centeredButton,
                                            action: 'VIEW_BLOCKED_PROFILE',
                                            text: g.intl.string(g.t.iXAna2),
                                            autoFocus: !0,
                                            fullWidth: !1,
                                            onClick: () => {
                                                null == y || y(),
                                                    (0, d.pQ)({
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
