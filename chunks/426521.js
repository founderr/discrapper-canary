n.d(t, {
    U: function () {
        return w;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(481060),
    o = n(99690),
    s = n(906732),
    l = n(336197),
    u = n(454585),
    c = n(171368),
    d = n(695346),
    _ = n(598077),
    E = n(594174),
    f = n(626135),
    h = n(709054),
    p = n(591759),
    m = n(833592),
    I = n(497089),
    T = n(178480),
    g = n(418316),
    S = n(526146),
    A = n(400565),
    v = n(148789),
    N = n(11825),
    O = n(981631),
    R = n(689938),
    C = n(56599),
    y = n(756688),
    L = n(886765);
let b = '^/users/(\\d+)';
function D(e) {
    var t, n, i;
    let { item: s } = e,
        l = null === (t = s.message) || void 0 === t ? void 0 : t.content;
    if (null == l) return (0, r.jsx)('div', {});
    let c = null !== (i = E.default.getUser(null === (n = s.other_user) || void 0 === n ? void 0 : n.id)) && void 0 !== i ? i : new _.Z(s.other_user),
        d = u.Z.parse(l);
    return (0, r.jsxs)('div', {
        className: C.messagePreviewContainer,
        children: [
            (0, r.jsx)(o.Z, {
                user: c,
                size: a.AvatarSizes.SIZE_24
            }),
            (0, r.jsx)(a.Text, {
                className: C.messagePreviewText,
                variant: 'text-sm/normal',
                lineClamp: 2,
                children: d
            })
        ]
    });
}
function M(e) {
    let {
        item: { callout: t }
    } = e;
    if (null == t) return null;
    let n = u.Z.parse(t);
    return (0, r.jsx)('div', {
        className: C.calloutContainer,
        children: (0, r.jsx)(a.Text, {
            variant: 'text-sm/normal',
            lineClamp: 2,
            children: n
        })
    });
}
function P(e) {
    let { item: t } = e,
        n = L,
        i = R.Z.Messages.NOTIFICATION_CENTER_TODO;
    return (
        t.completed && ((n = y), (i = R.Z.Messages.NOTIFICATION_CENTER_DONE)),
        (0, r.jsxs)('div', {
            className: C.lifecycleContainer,
            children: [
                (0, r.jsx)('img', {
                    className: C.checkbox,
                    alt: '',
                    src: n
                }),
                (0, r.jsx)(a.Text, {
                    className: C.lifecycleText,
                    variant: 'text-xs/bold',
                    color: 'header-secondary',
                    children: i
                })
            ]
        })
    );
}
let U = i.memo(function (e) {
        var t;
        let { item: o, ackedBeforeId: d } = e,
            { analyticsLocations: _ } = (0, s.ZP)(),
            E = (0, S.I)(o, d),
            R = i.useCallback(async () => {
                if ((!E && (0, m.wt)(o), null != o.item_enum && o.item_enum === I.AM.FIND_FRIENDS)) {
                    (0, a.openModalLazy)(async () => {
                        let { default: e } = await n.e('6074').then(n.bind(n, 443189));
                        return (t) =>
                            (0, r.jsx)(e, {
                                source: 'Notification Center',
                                ...t
                            });
                    });
                    return;
                }
                if (null != o.deeplink) {
                    let t = p.Z.safeParseWithQuery(o.deeplink);
                    if (null == t) return;
                    let n = t.hostname,
                        r = t.path;
                    if (null == n || null == r) return;
                    if (p.Z.isDiscordHostname(n)) {
                        let t = r.match(b);
                        if (null != t && 2 === t.length) {
                            var e;
                            (0, c.openUserProfileModal)({
                                userId: t[1],
                                messageId: null === (e = o.message) || void 0 === e ? void 0 : e.id,
                                sourceAnalyticsLocations: _,
                                analyticsLocation: { section: O.jXE.NOTIFICATION_CENTER }
                            });
                        } else await (0, l.Z)(r);
                    }
                    f.default.track(O.rMx.NOTIFICATION_CENTER_ACTION, {
                        action_type: I.ud.CLICKED,
                        notification_center_id: o.id,
                        item_type: o.type,
                        acked: E
                    });
                }
            }, [o, E, _]),
            y = null;
        o.type === I.O7.INCOMING_FRIEND_REQUESTS && null != o.other_user && (y = (0, r.jsx)(v.Z, { userId: o.other_user.id }));
        let L = null != o.local_id,
            U = (0, g.Z)(o);
        return (0, r.jsxs)('div', {
            className: C.row,
            children: [
                (0, r.jsxs)(a.ClickableContainer, {
                    className: C.rowContent,
                    focusProps: { offset: 4 },
                    'aria-label': U,
                    onClick: R,
                    children: [
                        E ? null : (0, r.jsx)('div', { className: C.unread }),
                        (0, r.jsx)(A.U, { item: o }),
                        (0, r.jsxs)('div', {
                            className: C.body,
                            children: [
                                'lifecycle_item' === o.type && null != o.item_enum && (0, r.jsx)(P, { item: o }),
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: E ? 'text-muted' : 'text-normal',
                                    children: 'string' != typeof U ? U : u.Z.parse(U)
                                }),
                                (null === (t = o.message) || void 0 === t ? void 0 : t.content) != null ? (0, r.jsx)(D, { item: o }) : null,
                                null != o.callout ? (0, r.jsx)(M, { item: o }) : null,
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-xs/medium',
                                    color: E ? 'text-muted' : 'header-secondary',
                                    children: (0, T.a3)(h.default.extractTimestamp(o.id))
                                }),
                                y
                            ]
                        })
                    ]
                }),
                L ? null : (0, r.jsx)(N.z, { item: o })
            ]
        });
    }),
    w = i.memo(function (e) {
        let { items: t } = e,
            n = d.d$.useSetting();
        return (0, r.jsx)(r.Fragment, {
            children: t.map((e) =>
                (0, r.jsx)(
                    U,
                    {
                        item: e,
                        ackedBeforeId: n
                    },
                    e.id
                )
            )
        });
    });
