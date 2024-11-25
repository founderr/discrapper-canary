e.d(n, {
    Z: function () {
        return k;
    }
});
var l = e(200651);
e(192379);
var i = e(120356),
    o = e.n(i),
    s = e(442837),
    r = e(481060),
    u = e(239091),
    c = e(592125),
    a = e(430824),
    d = e(924301),
    h = e(894017),
    m = e(854698),
    C = e(390966),
    g = e(765305),
    x = e(388032),
    v = e(37232);
function k(t) {
    let { recurrenceId: n, originalScheduledStartTime: i, guildEventId: k, onClick: p, isActive: f } = t,
        B = (0, s.e7)([d.ZP], () => d.ZP.getGuildScheduledEvent(k)),
        N = (0, h.Z)(n, null == B ? void 0 : B.id),
        j = (0, s.e7)([a.Z], () => a.Z.getGuild(null == B ? void 0 : B.guild_id)),
        L = (0, s.e7)([c.Z], () => c.Z.getChannel(null == B ? void 0 : B.channel_id));
    if (null == B) return null;
    let { is_canceled: _ = !1 } = null != N ? N : {},
        E = (null == N ? void 0 : N.scheduled_start_time) != null ? new Date(null == N ? void 0 : N.scheduled_start_time) : i,
        S = (0, m.DK)(B),
        z = _ ? g.p1.CANCELED : g.p1.SCHEDULED;
    S === n && (z = B.status);
    let I = (null == B ? void 0 : B.scheduled_start_time) != null ? (0, m.lh)(N, E, new Date(null == B ? void 0 : B.scheduled_start_time)) : null,
        b = (t) => {
            t.stopPropagation(),
                null != j &&
                    (0, u.jW)(t, async () => {
                        let { default: t } = await Promise.all([e.e('15450'), e.e('37133'), e.e('62318')]).then(e.bind(e, 215269));
                        return (e) =>
                            (0, l.jsx)(t, {
                                guildEventId: B.id,
                                recurrenceId: n,
                                channel: L,
                                guild: j,
                                isRecurrenceItem: !0,
                                ...e
                            });
                    });
        };
    return (0, l.jsxs)(r.ClickableContainer, {
        className: o()(v.container, {
            [v.canceled]: _,
            [v.clickable]: null != p,
            [v.active]: f
        }),
        onClick: (t) => {
            t.stopPropagation(), !_ && (null == p || p(n));
        },
        onContextMenu: b,
        'aria-label': '',
        children: [
            (0, l.jsx)(C.z, {
                startTime: E.toISOString(),
                status: null != I ? I : z,
                eventType: B.entity_type,
                guildEventId: B.id,
                recurrenceId: n,
                className: v.timeStatus
            }),
            _ &&
                (0, l.jsx)(r.Text, {
                    variant: 'text-sm/semibold',
                    color: 'text-danger',
                    className: v.canceledStatus,
                    children: x.intl.string(x.t.fyBVRk)
                }),
            (0, l.jsx)(r.Tooltip, {
                text: x.intl.string(x.t.UKOtz8),
                position: 'top',
                'aria-label': x.intl.string(x.t.bt75u7),
                children: (t) =>
                    (0, l.jsx)(r.Clickable, {
                        ...t,
                        onClick: b,
                        className: v.iconButton,
                        children: (0, l.jsx)(r.MoreHorizontalIcon, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 20,
                            height: 20,
                            className: v.icon
                        })
                    })
            })
        ]
    });
}
