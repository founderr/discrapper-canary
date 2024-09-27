n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(735250);
n(470079);
var s = n(442837),
    a = n(692547),
    l = n(481060),
    r = n(884338),
    o = n(688641),
    c = n(596449),
    u = n(459502),
    d = n(856691),
    h = n(357156),
    m = n(496675),
    p = n(146085),
    _ = n(979339),
    f = n(643632),
    E = n(939863),
    g = n(689938),
    C = n(187169);
function I(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(o.Z, {
        iconContainerClassName: C.continueIconContainer,
        icon: (0, i.jsx)(l.StageIcon, {
            size: 'custom',
            color: 'currentColor',
            className: C.continueIcon,
            height: 20,
            width: 20
        }),
        color: a.Z.unsafe_rawColors.PRIMARY_700.css,
        title: g.Z.Messages.STAGE_CONTINUE_PROMPT_TITLE,
        description: g.Z.Messages.STAGE_CONTINUE_PROMPT_SUBTITLE,
        onClick: t
    });
}
function T(e) {
    let { channel: t } = e,
        { participants: n, usersInSummary: s } = (0, _.Z)(t.id);
    return (0, i.jsxs)('div', {
        className: C.audienceSummary,
        children: [
            (0, i.jsx)(r.Z, {
                className: C.summaryItem,
                guildId: t.guild_id,
                users: s,
                size: r.u.SIZE_16
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: (function (e) {
                    if (0 === e.length) return '';
                    if (1 === e.length) return g.Z.Messages.STAGE_AUDIENCE_WAITING_ONE.format({ first: e[0].userNick });
                    if (2 === e.length)
                        return g.Z.Messages.STAGE_AUDIENCE_WAITING_TWO.format({
                            first: e[0].userNick,
                            second: e[1].userNick
                        });
                    let t = e.length - 2;
                    return g.Z.Messages.STAGE_AUDIENCE_WAITING_MANY.format({
                        first: e[0].userNick,
                        second: e[1].userNick,
                        numOthers: t
                    });
                })(n)
            })
        ]
    });
}
function x(e) {
    let { channel: t, onContinueClick: n } = e,
        a = (0, s.e7)([m.Z], () => m.Z.can(p.yP, t), [t]),
        r = t.guild_id,
        { canCreateGuildEvent: o } = (0, h.XJ)(t),
        x = (0, f.Z)(t.id),
        { usersInSummary: S } = (0, _.Z)(t.id);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(E.Z, {
                children: (0, i.jsx)('div', {
                    className: C.iconBackground,
                    children: (0, i.jsx)(l.StageIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 40,
                        height: 40,
                        className: C.icon
                    })
                })
            }),
            (0, i.jsxs)('div', {
                className: C.headerContainer,
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: C.__invalid_title,
                        variant: 'heading-xl/semibold',
                        children: g.Z.Messages.STAGE_START_PROMPT_TITLE_MODERATOR
                    }),
                    (0, i.jsx)(l.Text, {
                        className: C.subtitle,
                        variant: 'text-sm/normal',
                        children: g.Z.Messages.STAGE_START_PROMPT_SUBTITLE
                    })
                ]
            }),
            x ? null : (0, i.jsx)(u.Z, { channelId: t.id }),
            a
                ? (0, i.jsx)(d.Z, {
                      className: C.eventPrompt,
                      channel: t
                  })
                : null,
            o
                ? (0, i.jsx)(c.Z, {
                      className: C.eventPrompt,
                      guildId: r
                  })
                : null,
            (a || S.length > 0) && (0, i.jsx)('hr', { className: C.separator }),
            a ? (0, i.jsx)(I, { onClick: n }) : null,
            (0, i.jsx)(T, { channel: t })
        ]
    });
}
