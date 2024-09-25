n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(47120);
var i = n(735250);
n(470079);
var a = n(481060),
    o = n(295474),
    s = n(689938),
    l = n(569252);
function u(e) {
    let { guildId: t, analyticsLocations: n, analyticsLocation: r } = e,
        [u, c] = (0, o.ww)({
            guildId: t,
            analyticsLocations: n,
            analyticsLocation: r,
            openWithoutBackstack: !0
        }),
        d = c ? s.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE : s.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_NO_PERMS,
        _ = c ? s.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_CTA : s.Z.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_ACCOUNT_USERNAME_CTA;
    return (0, i.jsxs)(a.Notice, {
        color: a.NoticeColors.CUSTOM,
        className: l.quarantineNotice,
        children: [
            d,
            (0, i.jsx)(a.NoticeButton, {
                onClick: u,
                children: _
            })
        ]
    });
}
