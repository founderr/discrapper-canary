n.d(t, {
    Z: function () {
        return S;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(442837),
    s = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(271383),
    d = n(785717),
    _ = n(221292),
    E = n(687158),
    f = n(471879),
    h = n(502762),
    p = n(475413),
    m = n(228168),
    I = n(689938),
    T = n(572046),
    g = n(609440);
function S(e) {
    let { user: t, guildId: n, setPopoutRef: r, channelId: S, messageId: A, roleId: v, onViewBlockedProfileClick: N, newAnalyticsLocations: O = [] } = e,
        { analyticsLocations: R } = (0, u.ZP)([...O, l.Z.BLOCKED_PROFILE_POPOUT]),
        C = (0, d.ZB)({
            layout: 'BLOCKED_PROFILE_POPOUT',
            userId: t.id,
            guildId: n,
            channelId: S,
            messageId: A,
            roleId: v
        }),
        y = a.useRef(null),
        L = (0, E.ZP)(t.id, n),
        b = (0, o.e7)([c.ZP], () => (null != n ? c.ZP.getMember(n, t.id) : null));
    return (
        a.useEffect(() => {
            null == r || r(null == y ? void 0 : y.current);
        }, [y, r]),
        (0, i.jsx)(u.Gt, {
            value: R,
            children: (0, i.jsx)(d.Mt, {
                value: C,
                shouldTrackViewOnMount: null == b || null != b.fullProfileLoadedTimestamp,
                children: (0, i.jsx)(s.Dialog, {
                    ref: y,
                    'aria-label': t.username,
                    children: (0, i.jsx)(h.Z, {
                        user: t,
                        displayProfile: L,
                        profileType: m.y0.BITE_SIZE,
                        children: (0, i.jsxs)('div', {
                            className: T.container,
                            children: [
                                (0, i.jsx)('img', {
                                    alt: '',
                                    src: g,
                                    className: T.previewForCollected,
                                    'aria-hidden': !0
                                }),
                                (0, i.jsxs)('div', {
                                    className: T.body,
                                    children: [
                                        (0, i.jsx)(f.Z, {
                                            user: t,
                                            guildId: n
                                        }),
                                        (0, i.jsx)(s.Heading, {
                                            variant: 'heading-lg/bold',
                                            className: T.header,
                                            children: I.Z.Messages.USER_PROFILE_BLOCKED_SPEED_BUMP_ACTION_SHEET_TITLE
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            children: I.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_USERNAME.format({ username: t.username })
                                        }),
                                        (0, i.jsx)(s.Text, {
                                            variant: 'text-sm/medium',
                                            children: I.Z.Messages.USER_PROFILE_BLOCKED_PANEL_BODY_CONFIRMATION
                                        }),
                                        (0, i.jsx)(p.tG, {
                                            className: T.centeredButton,
                                            action: 'VIEW_BLOCKED_PROFILE',
                                            text: I.Z.Messages.VIEW_PROFILE,
                                            autoFocus: !0,
                                            fullWidth: !1,
                                            onClick: () => {
                                                null == N || N(),
                                                    (0, _.pQ)({
                                                        action: 'VIEW_BLOCKED_PROFILE',
                                                        analyticsLocations: R,
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
