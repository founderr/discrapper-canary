n.d(t, {
    U: function () {
        return D;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(99690),
    l = n(906732),
    o = n(336197),
    c = n(454585),
    u = n(171368),
    d = n(695346),
    _ = n(598077),
    E = n(594174),
    I = n(626135),
    m = n(709054),
    T = n(591759),
    f = n(833592),
    h = n(497089),
    N = n(178480),
    p = n(418316),
    C = n(526146),
    g = n(400565),
    S = n(148789),
    A = n(11825),
    x = n(981631),
    R = n(689938),
    v = n(56599),
    O = n(756688),
    M = n(886765);
function L(e) {
    var t, n, a;
    let { item: l } = e,
        o = null === (t = l.message) || void 0 === t ? void 0 : t.content;
    if (null == o) return (0, i.jsx)('div', {});
    let u = null !== (a = E.default.getUser(null === (n = l.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== a ? a : new _.Z(l.other_user),
        d = c.Z.parse(o);
    return (0, i.jsxs)('div', {
        className: v.messagePreviewContainer,
        children: [
            (0, i.jsx)(r.Z, {
                user: u,
                size: s.AvatarSizes.SIZE_24
            }),
            (0, i.jsx)(s.Text, {
                className: v.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: d
            })
        ]
    });
}
function Z(e) {
    let {
        item: { callout: t }
    } = e;
    if (null == t) return null;
    let n = c.Z.parse(t);
    return (0, i.jsx)('div', {
        className: v.calloutContainer,
        children: (0, i.jsx)(s.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function b(e) {
    let { item: t } = e,
        n = M,
        a = R.Z.Messages.NOTIFICATION_CENTER_TODO;
    return (
        t.completed && ((n = O), (a = R.Z.Messages.NOTIFICATION_CENTER_DONE)),
        (0, i.jsxs)('div', {
            className: v.lifecycleContainer,
            children: [
                (0, i.jsx)('img', {
                    className: v.checkbox,
                    alt: '',
                    src: n
                }),
                (0, i.jsx)(s.Text, {
                    className: v.lifecycleText,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: a
                })
            ]
        })
    );
}
let P = a.memo(function (e) {
        var t;
        let { item: r, ackedBeforeId: d } = e,
            { analyticsLocations: _ } = (0, l.ZP)(),
            E = (0, C.I)(r, d),
            R = a.useCallback(async () => {
                if ((!E && (0, f.wt)(r), null != r.item_enum && r.item_enum === h.AM.FIND_FRIENDS)) {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e('6074').then(n.bind(n, 443189));
                        return (t) =>
                            (0, i.jsx)(e, {
                                source: 'Notification Center',
                                ...t
                            });
                    });
                    return;
                }
                if (null != r.deeplink) {
                    let t = T.Z.safeParseWithQuery(r.deeplink);
                    if (null == t) return;
                    let n = t.hostname,
                        i = t.path;
                    if (null == n || null == i) return;
                    if (T.Z.isDiscordHostname(n)) {
                        let t = i.match('^/users/(\\d+)');
                        if (null != t && 2 === t.length) {
                            var e;
                            (0, u.openUserProfileModal)({
                                userId: t[1],
                                messageId: null === (e = r.message) || void 0 === e ? void 0 : e.id,
                                sourceAnalyticsLocations: _,
                                analyticsLocation: { section: x.jXE.NOTIFICATION_CENTER }
                            });
                        } else await (0, o.Z)(i);
                    }
                    I.default.track(x.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: h.ud.CLICKED,
                        notification_center_id: r.id,
                        item_type: r.type,
                        acked: E
                    });
                }
            }, [r, E, _]),
            O = null;
        r.type === h.O7.INCOMING_FRIEND_REQUESTS && null != r.other_user && (O = (0, i.jsx)(S.Z, { userId: r.other_user.id }));
        let M = null != r.local_id,
            P = (0, p.Z)(r);
        return (0, i.jsxs)('div', {
            className: v.row,
            children: [
                (0, i.jsxs)(s.ClickableContainer, {
                    className: v.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': P,
                    onClick: R,
                    children: [
                        E ? null : (0, i.jsx)('div', { className: v.unread }),
                        (0, i.jsx)(g.U, { item: r }),
                        (0, i.jsxs)('div', {
                            className: v.body,
                            children: [
                                'lifecycle_item' === r.type && null != r.item_enum && (0, i.jsx)(b, { item: r }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-md/normal',
                                    color: E ? 'text-muted' : 'text-normal',
                                    children: 'string' != typeof P ? P : c.Z.parse(P)
                                }),
                                (null === (t = r.message) || void 0 === t ? void 0 : t.content) != null ? (0, i.jsx)(L, { item: r }) : null,
                                null != r.callout ? (0, i.jsx)(Z, { item: r }) : null,
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-xs/medium',
                                    color: E ? 'text-muted' : 'header-secondary',
                                    children: (0, N.a3)(m.default.extractTimestamp(r.id))
                                }),
                                O
                            ]
                        })
                    ]
                }),
                M ? null : (0, i.jsx)(A.z, { item: r })
            ]
        });
    }),
    D = a.memo(function (e) {
        let { items: t } = e,
            n = d.d$.useSetting();
        return (0, i.jsx)(i.Fragment, {
            children: t.map((e) =>
                (0, i.jsx)(
                    P,
                    {
                        item: e,
                        ackedBeforeId: n
                    },
                    e.id
                )
            )
        });
    });
