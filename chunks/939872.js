n.d(t, {
    m: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(442837),
    l = n(481060),
    s = n(17894),
    a = n(430824),
    o = n(313550),
    u = n(689938),
    c = n(673823);
let d = (e) => {
    let { onClose: t, listing: n, guildId: d } = e,
        h = (0, i.e7)([a.Z], () => a.Z.getGuild(d), [d]),
        _ = (0, o.Z)({
            listing: n,
            guildId: d
        });
    return (0, r.jsxs)('div', {
        className: c.confirmationContainer,
        children: [
            (0, r.jsx)(l.Heading, {
                className: c.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE.format({
                    serverName: null == h ? void 0 : h.toString(),
                    tierName: n.name
                })
            }),
            !_.isEmpty() &&
                (0, r.jsx)(l.Text, {
                    className: c.confirmationSubtitle,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({ benefits: _.asString() })
                }),
            (0, r.jsx)(l.Button, {
                className: c.openDiscordButton,
                onClick: () => (0, s.Z)('role_sub_mweb_success_modal'),
                children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
            }),
            (0, r.jsx)(l.Button, {
                className: c.doneButton,
                look: l.Button.Looks.BLANK,
                onClick: () => t(!0),
                children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
            })
        ]
    });
};
