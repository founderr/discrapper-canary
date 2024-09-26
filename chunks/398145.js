s.d(n, {
    Z: function () {
        return r;
    }
}),
    s(627341);
var t = s(278074),
    i = s(200634),
    l = s(228168),
    o = s(689938);
function r(e) {
    var n;
    let s = null === (n = (0, i.Z)(e.id, !0).mutualGuilds) || void 0 === n ? void 0 : n.length;
    return [
        {
            section: l.oh.BOT_INFO,
            text: o.Z.Messages.USER_PROFILE_ABOUT_ME
        },
        {
            section: l.oh.MUTUAL_GUILDS,
            text: (0, t.EQ)(s)
                .with(void 0, () => o.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER)
                .with(0, () => o.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS)
                .otherwise((e) => o.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }))
        },
        {
            section: l.oh.BOT_DATA_ACCESS,
            text: o.Z.Messages.BOTS_DATA_ACCESS_TAB
        }
    ];
}
