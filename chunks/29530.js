n.d(i, {
    Z: function () {
        return a;
    }
}), n(627341);
var l = n(278074), s = n(162267), t = n(228168), o = n(689938);
function a(e) {
    var i;
    let n = null === (i = (0, s.Z)(e.id, !0).mutualGuilds) || void 0 === i ? void 0 : i.length;
    return [
        {
            section: t.oh.BOT_INFO,
            text: o.Z.Messages.USER_PROFILE_ABOUT_ME
        },
        {
            section: t.oh.MUTUAL_GUILDS,
            text: (0, l.EQ)(n).with(void 0, () => o.Z.Messages.USER_PROFILE_MUTUAL_GUILDS_PLACEHOLDER).with(0, () => o.Z.Messages.USER_PROFILE_NO_MUTUAL_SERVERS).otherwise(e => o.Z.Messages.USER_PROFILE_MUTUAL_GUILDS.format({ count: e }))
        },
        {
            section: t.oh.BOT_DATA_ACCESS,
            text: o.Z.Messages.BOTS_DATA_ACCESS_TAB
        }
    ];
}
