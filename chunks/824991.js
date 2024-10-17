n.d(t, {
    To: function () {
        return m;
    },
    Xu: function () {
        return g;
    },
    ZP: function () {
        return C;
    },
    aF: function () {
        return _;
    }
});
var i = n(735250),
    l = n(470079),
    r = n(481060),
    a = n(100527),
    s = n(428695),
    o = n(703656),
    c = n(970606),
    u = n(308083),
    d = n(981631),
    h = n(921944),
    p = n(689938),
    f = n(737116);
function _(e) {
    let { title: t } = e;
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsx)(r.Heading, {
            variant: 'heading-md/semibold',
            color: 'header-primary',
            className: f.title,
            children: t
        })
    });
}
function m(e) {
    let { message: t } = e;
    return (0, i.jsx)(r.Text, {
        variant: 'text-xs/normal',
        color: 'text-muted',
        className: f.message,
        children: t
    });
}
function g(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(r.Button, {
        fullWidth: !0,
        look: r.ButtonLooks.FILLED,
        size: r.ButtonSizes.SMALL,
        color: r.ButtonColors.BRAND,
        className: f.button,
        onClick: t,
        children: (0, i.jsx)(r.Text, {
            variant: 'text-sm/semibold',
            color: 'always-white',
            children: p.Z.Messages.CHECK_IT_OUT
        })
    });
}
function C(e) {
    let { guild: t, markAsDismissed: n, defaultGameId: r } = e;
    l.useEffect(() => {
        (0, c.TE)({
            guildId: t.id,
            location: a.Z.GUILD_CHANNEL_LIST
        });
    }, [t.id]);
    let C = r === u.xn ? p.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_GENSHIN_TITLE : r === u.nJ ? p.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_VALORANT_TITLE : p.Z.Messages.RAPIDASH_CHANNEL_LIST_ADMIN_UPSELL_TITLE,
        I = l.useCallback(() => (0, i.jsx)(m, { message: p.Z.Messages.CLAN_CHANNEL_LIST_ADMIN_UPSELL_MESSAGE }), []),
        E = l.useCallback(() => (0, i.jsx)(_, { title: C }), [C]),
        N = l.useCallback(() => {
            (0, c._9)({
                guildId: t.id,
                location: a.Z.GUILD_CHANNEL_LIST
            }),
                (0, o.uL)(d.Z5c.GUILD_DISCOVERY);
        }, [t.id]),
        x = l.useCallback(() => (0, i.jsx)(g, { onClick: N }), [N]);
    return (0, i.jsx)(s.Z, {
        className: f.notice,
        guild: t,
        onDismissed: () => n(h.L.DISMISS),
        title: E,
        message: I,
        cta: x,
        trackingSource: d.PsQ.CLAN_ADMIN_UPSELL,
        type: d.vID.CLAN_ADMIN_UPSELL
    });
}
