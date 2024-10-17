n.d(t, {
    X: function () {
        return E;
    },
    Z: function () {
        return g;
    }
});
var s = n(735250);
n(470079);
var r = n(481060),
    i = n(565138),
    a = n(372769),
    l = n(742593),
    o = n(390072),
    c = n(601964),
    u = n(230224),
    d = n(689938),
    h = n(262854);
function _(e) {
    var t;
    let { guildScheduledEvent: n, channel: i, onAcceptInvite: a, isSubmitting: c } = e;
    return (0, s.jsxs)('div', {
        className: h.guildEventCard,
        children: [
            (0, s.jsx)(l.ZP, {
                name: n.name,
                description: null !== (t = n.description) && void 0 !== t ? t : void 0,
                headerVariant: 'heading-md/medium',
                descriptionClassName: h.__invalid_channelDescription,
                guildId: n.guild_id,
                guildEvent: n,
                eventPreview: n
            }),
            null != i &&
                (0, s.jsx)('div', {
                    className: h.channelInfo,
                    children: (0, s.jsx)(o.Z, {
                        guildScheduledEvent: n,
                        channel: i
                    })
                }),
            (0, s.jsx)(r.Button, {
                className: h.acceptButton,
                color: r.Button.Colors.GREEN,
                onClick: a,
                submitting: c,
                children: d.Z.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON
            })
        ]
    });
}
function E(e) {
    var t;
    let { invite: n } = e,
        l = null != n.guild ? new c.ZP(n.guild) : null;
    if (null == l) return null;
    let o = null !== (t = l.description) && void 0 !== t ? t : '';
    return (0, s.jsxs)('div', {
        className: h.guildInfoCard,
        children: [
            (0, s.jsx)(r.Heading, {
                className: h.presentedBy,
                variant: 'text-sm/medium',
                children: d.Z.Messages.STAGE_INVITE_GUILD_HEADER
            }),
            (0, s.jsxs)('div', {
                className: h.guildContainer,
                children: [
                    (0, s.jsx)(i.Z, {
                        guild: l,
                        active: !0,
                        size: i.Z.Sizes.MEDIUM
                    }),
                    (0, s.jsxs)('div', {
                        className: h.guildDetailsContanier,
                        children: [
                            (0, s.jsxs)(r.Text, {
                                className: h.guildName,
                                color: 'header-primary',
                                variant: 'text-sm/medium',
                                tag: 'span',
                                children: [
                                    l.name,
                                    (0, s.jsx)(a.Z, {
                                        guild: l,
                                        className: h.guildBadge,
                                        tooltipPosition: 'left'
                                    })
                                ]
                            }),
                            (0, s.jsx)(u.V6, {
                                invite: n,
                                textClassName: h.guildInfoMemberCountText,
                                className: h.guildInfoMemberCount
                            })
                        ]
                    })
                ]
            }),
            o.length > 0 &&
                (0, s.jsx)('details', {
                    className: h.guildDescriptionContainer,
                    children: (0, s.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: o
                    })
                })
        ]
    });
}
function g(e) {
    let { invite: t, channel: n, isSubmitting: r, onAcceptInvite: i } = e,
        { guild_scheduled_event: a } = t;
    return null != a
        ? (0, s.jsx)(_, {
              guildScheduledEvent: a,
              channel: n,
              isSubmitting: r,
              onAcceptInvite: i
          })
        : null;
}
