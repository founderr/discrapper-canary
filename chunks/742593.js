n.d(t, {
    HZ: function () {
        return g;
    },
    Rf: function () {
        return S;
    },
    ZP: function () {
        return A;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(271383),
    u = n(51144),
    c = n(894017),
    d = n(79874),
    _ = n(315416),
    E = n(236373),
    f = n(854698),
    h = n(391174),
    p = n(95291),
    m = n(390966),
    I = n(689938),
    T = n(247912);
function g(e) {
    let { className: t, creator: n, guildId: i, isNew: h, isHub: p = !1, guildEvent: g, eventPreview: S, recurrenceId: A } = e,
        v = (0, _.Z)(i, g.id, A),
        N = null != g ? g : S,
        O = (0, o.e7)([l.ZP], () => l.ZP.getNick(i, null == n ? void 0 : n.id), [i, n]);
    A = null == N || null != A ? A : (0, f.DK)(N);
    let { startTime: R } = (0, d.ZP)(null != g ? g : S, A),
        C = (0, c.Z)(A, g.id),
        y = (null == N ? void 0 : N.scheduled_start_time) != null ? (0, f.lh)(C, R, new Date(N.scheduled_start_time)) : null;
    if (null == N) return null;
    let { entity_type: b, status: L, recurrence_rule: D } = N;
    return (0, r.jsxs)('div', {
        className: a()(T.statusContainer, t),
        children: [
            (0, r.jsx)(m.z, {
                startTime: R.toISOString(),
                status: null != y ? y : L,
                eventType: b,
                isNew: h,
                recurrenceRule: (0, E.KV)(D),
                guildEventId: g.id,
                recurrenceId: A
            }),
            (0, r.jsx)('div', { className: T.spacer }),
            !p &&
                null != n &&
                (0, r.jsx)(s.Tooltip, {
                    text: I.Z.Messages.GUILD_EVENT_CREATED_BY.format({ username: null != O ? O : u.ZP.getName(n) }),
                    children: (e) =>
                        (0, r.jsx)(s.Avatar, {
                            ...e,
                            src: n.getAvatarURL(i, 20),
                            size: s.AvatarSizes.SIZE_20,
                            'aria-label': null != O ? O : n.username,
                            className: T.creator
                        })
                }),
            (0, r.jsx)(s.Tooltip, {
                text: I.Z.Messages.GUILD_EVENT_INTERESTED_COUNT.format({ count: v }),
                children: (e) =>
                    (0, r.jsxs)('div', {
                        className: T.rsvpCount,
                        ...e,
                        children: [
                            (0, r.jsx)(s.GroupIcon, {
                                size: 'xxs',
                                color: 'currentColor',
                                className: T.rsvpIcon
                            }),
                            (0, r.jsx)(s.Text, {
                                color: 'header-secondary',
                                variant: 'text-sm/normal',
                                children: v
                            })
                        ]
                    })
            })
        ]
    });
}
function S(e) {
    let { headerVariant: t = 'heading-lg/medium', descriptionClassName: n, name: i, description: o, truncate: l, guildId: u, imageSource: c } = e;
    return (0, r.jsxs)('div', {
        className: a()({ [T.withThumbnail]: null != c }),
        children: [
            (0, r.jsxs)('div', {
                className: a()({ [T.descriptionWithThumbnail]: null != c }),
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: t,
                        selectable: !0,
                        className: T.eventName,
                        children: i
                    }),
                    null != o &&
                        (0, r.jsx)(h.Z, {
                            description: o,
                            className: a()(n, T.description),
                            truncate: l,
                            guildId: u
                        })
                ]
            }),
            null != c &&
                (0, r.jsx)('div', {
                    className: T.thumbnailContainer,
                    children: (0, r.jsx)(p.Z, {
                        source: c,
                        className: T.thumbnail
                    })
                })
        ]
    });
}
function A(e) {
    let { headerVariant: t, descriptionClassName: n, creator: i, name: a, description: o, imageSource: s, isHub: l = !1, truncate: u, guildId: c, isNew: d, guildEvent: _, eventPreview: E, recurrenceId: f } = e;
    return (0, r.jsxs)('div', {
        className: T.container,
        children: [
            (0, r.jsx)(g, {
                className: T.eventInfoStatusContainer,
                creator: i,
                guildId: c,
                isHub: l,
                isNew: d,
                guildEvent: _,
                eventPreview: E,
                recurrenceId: f
            }),
            (0, r.jsx)(S, {
                name: a,
                description: o,
                headerVariant: t,
                descriptionClassName: n,
                truncate: u,
                guildId: c,
                imageSource: s
            })
        ]
    });
}
