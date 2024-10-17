t.d(n, {
    Z: function () {
        return c;
    }
}),
    t(627341);
var o = t(278074),
    i = t(200634),
    s = t(228168),
    l = t(689938);
function c(e) {
    var n;
    let t = null === (n = (0, i.Z)(e.id, !0).mutualGuilds) || void 0 === n ? void 0 : n.length;
    return [
        {
            section: s.oh.BOT_INFO,
            text: l.Z.Messages.USER_PROFILE_ABOUT_ME
        },
        {
            section: s.oh.MUTUAL_GUILDS,
            text: (0, o.EQ)(t)
                .with(void 0, () => l.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER)
                .with(0, () => l.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS)
                .otherwise((e) => l.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }))
        },
        {
            section: s.oh.BOT_DATA_ACCESS,
            text: l.Z.Messages.BOTS_DATA_ACCESS_TAB
        }
    ];
}
