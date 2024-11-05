n.d(t, {
    U: function () {
        return O;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(99690),
    o = n(906732),
    s = n(336197),
    c = n(454585),
    d = n(171368),
    u = n(695346),
    m = n(598077),
    h = n(594174),
    f = n(626135),
    p = n(709054),
    g = n(591759),
    _ = n(833592),
    C = n(497089),
    E = n(178480),
    I = n(418316),
    x = n(526146),
    v = n(400565),
    N = n(148789),
    T = n(11825),
    S = n(981631),
    b = n(388032),
    A = n(56599),
    j = n(756688),
    Z = n(886765);
function R(e) {
    var t, n, r;
    let { item: o } = e,
        s = null === (t = o.message) || void 0 === t ? void 0 : t.content;
    if (null == s) return (0, i.jsx)('div', {});
    let d = null !== (r = h.default.getUser(null === (n = o.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== r ? r : new m.Z(o.other_user),
        u = c.Z.parse(s);
    return (0, i.jsxs)('div', {
        className: A.messagePreviewContainer,
        children: [
            (0, i.jsx)(a.Z, {
                user: d,
                size: l.AvatarSizes.SIZE_24
            }),
            (0, i.jsx)(l.Text, {
                className: A.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: u
            })
        ]
    });
}
function P(e) {
    let {
        item: { callout: t }
    } = e;
    if (null == t) return null;
    let n = c.Z.parse(t);
    return (0, i.jsx)('div', {
        className: A.calloutContainer,
        children: (0, i.jsx)(l.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function y(e) {
    let { item: t } = e,
        n = Z,
        r = b.intl.string(b.t.SJTHJS);
    return (
        t.completed && ((n = j), (r = b.intl.string(b.t.f6RTAA))),
        (0, i.jsxs)('div', {
            className: A.lifecycleContainer,
            children: [
                (0, i.jsx)('img', {
                    className: A.checkbox,
                    alt: '',
                    src: n
                }),
                (0, i.jsx)(l.Text, {
                    className: A.lifecycleText,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: r
                })
            ]
        })
    );
}
let L = r.memo(function (e) {
        var t;
        let { item: a, ackedBeforeId: u } = e,
            { analyticsLocations: m } = (0, o.ZP)(),
            h = (0, x.I)(a, u),
            b = r.useCallback(async () => {
                if ((!h && (0, _.wt)(a), null != a.item_enum && a.item_enum === C.AM.FIND_FRIENDS)) {
                    (0, l.openModalLazy)(async () => {
                        let { default: e } = await n.e('6074').then(n.bind(n, 443189));
                        return (t) =>
                            (0, i.jsx)(e, {
                                source: 'Notification Center',
                                ...t
                            });
                    });
                    return;
                }
                if (null != a.deeplink) {
                    let t = g.Z.safeParseWithQuery(a.deeplink);
                    if (null == t) return;
                    let n = t.hostname,
                        i = t.path;
                    if (null == n || null == i) return;
                    if (g.Z.isDiscordHostname(n)) {
                        let t = i.match('^/users/(\\d+)');
                        if (null != t && 2 === t.length) {
                            var e;
                            (0, d.openUserProfileModal)({
                                userId: t[1],
                                messageId: null === (e = a.message) || void 0 === e ? void 0 : e.id,
                                sourceAnalyticsLocations: m,
                                analyticsLocation: { section: S.jXE.NOTIFICATION_CENTER }
                            });
                        } else await (0, s.Z)(i);
                    }
                    f.default.track(S.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: C.ud.CLICKED,
                        notification_center_id: a.id,
                        item_type: a.type,
                        acked: h
                    });
                }
            }, [a, h, m]),
            j = null;
        a.type === C.O7.INCOMING_FRIEND_REQUESTS && null != a.other_user && (j = (0, i.jsx)(N.Z, { userId: a.other_user.id }));
        let Z = null != a.local_id,
            L = (0, I.Z)(a);
        return (0, i.jsxs)('div', {
            className: A.row,
            children: [
                (0, i.jsxs)(l.ClickableContainer, {
                    className: A.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': L,
                    onClick: b,
                    children: [
                        h ? null : (0, i.jsx)('div', { className: A.unread }),
                        (0, i.jsx)(v.U, { item: a }),
                        (0, i.jsxs)('div', {
                            className: A.body,
                            children: [
                                'lifecycle_item' === a.type && null != a.item_enum && (0, i.jsx)(y, { item: a }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-md/normal',
                                    color: h ? 'text-muted' : 'text-normal',
                                    children: 'string' != typeof L ? L : c.Z.parse(L)
                                }),
                                (null === (t = a.message) || void 0 === t ? void 0 : t.content) != null ? (0, i.jsx)(R, { item: a }) : null,
                                null != a.callout ? (0, i.jsx)(P, { item: a }) : null,
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-xs/medium',
                                    color: h ? 'text-muted' : 'header-secondary',
                                    children: (0, E.a3)(p.default.extractTimestamp(a.id))
                                }),
                                j
                            ]
                        })
                    ]
                }),
                Z ? null : (0, i.jsx)(T.z, { item: a })
            ]
        });
    }),
    O = r.memo(function (e) {
        let { items: t } = e,
            n = u.d$.useSetting();
        return (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
                (0, i.jsx)(
                    L,
                    {
                        item: e,
                        ackedBeforeId: n
                    },
                    e.id
                )
            )
        });
    });
