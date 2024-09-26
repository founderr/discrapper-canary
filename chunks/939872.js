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
    c = n(689938),
    u = n(673823);
let d = (e) => {
    let { onClose: t, listing: n, guildId: d } = e,
        h = (0, i.e7)([a.Z], () => a.Z.getGuild(d), [d]),
        _ = (0, o.Z)({
            listing: n,
            guildId: d
        });
    return (0, r.jsxs)('div', {
        className: u.confirmationContainer,
        children: [
            (0, r.jsx)(l.Heading, {
                className: u.confirmationHeader,
                variant: 'heading-lg/extrabold',
                children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_TITLE.format({
                    serverName: null == h ? void 0 : h.toString(),
                    tierName: n.name
                })
            }),
            !_.isEmpty() &&
                (0, r.jsx)(l.Text, {
                    className: u.confirmationSubtitle,
                    variant: 'text-sm/normal',
                    color: 'header-secondary',
                    children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_SUBTITLE.format({ benefits: _.asString() })
                }),
            (0, r.jsx)(l.Button, {
                className: u.openDiscordButton,
                onClick: () => (0, s.Z)('role_sub_mweb_success_modal'),
                children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_OPEN_DISCORD_BUTTON
            }),
            (0, r.jsx)(l.Button, {
                className: u.doneButton,
                look: l.Button.Looks.BLANK,
                onClick: () => t(!0),
                children: c.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_LITE_DONE_BUTTON
            })
        ]
    });
};
