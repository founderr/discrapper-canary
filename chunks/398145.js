t.d(n, {
    Z: function () {
        return s;
    }
}),
    t(627341);
var i = t(278074),
    l = t(200634),
    o = t(228168),
    r = t(388032);
function s(e) {
    var n;
    let t = null === (n = (0, l.Z)(e.id, !0).mutualGuilds) || void 0 === n ? void 0 : n.length;
    return [
        {
            section: o.oh.BOT_INFO,
            text: r.intl.string(r.t.jGoPJS)
        },
        {
            section: o.oh.MUTUAL_GUILDS,
            text: (0, i.EQ)(t)
                .with(void 0, () => r.intl.string(r.t['4lTDZm']))
                .with(0, () => r.intl.string(r.t.jpY0X1))
                .otherwise((e) => r.intl.formatToPlainString(r.t.eE3oen, { count: e }))
        },
        {
            section: o.oh.BOT_DATA_ACCESS,
            text: r.intl.string(r.t.WstFb2)
        }
    ];
}
