r.d(n, {
    Z: function () {
        return h;
    },
    y: function () {
        return i;
    }
});
var i,
    a = r(627341);
var s = r(192379),
    o = r(278074),
    l = r(442837),
    u = r(594174),
    c = r(74538),
    d = r(125900),
    f = r(710111),
    _ = r(388032);
function h(e, n, r, i) {
    let a = e.guildId === f.X8,
        h = (0, l.e7)([u.default], () => c.ZP.canUseSoundboardEverywhere(u.default.getCurrentUser())),
        p = (0, d.V2)({ location: 'useSoundmojiGuildInfoData' }),
        m = e.guildId !== (null == n ? void 0 : n.guild_id),
        g = s.useMemo(() => (a || !p ? 2 : p && !h ? 1 : r || null == i ? 2 : 0), [a, h, p, r, i]);
    return {
        buttonType: g,
        description: s.useMemo(() => {
            let e = null != i;
            return (0, o.EQ)({
                hasSoundmojiPermissions: h,
                isInGuild: r,
                isGuildDiscoverable: e,
                isSoundFromDifferentGuild: m,
                canSendSoundmojis: p,
                isDefaultSound: a
            })
                .with({ canSendSoundmojis: !1 }, () => _.intl.string(_.t.x2kyyM))
                .with({ isDefaultSound: !0 }, () => _.intl.string(_.t.AabHen))
                .with(
                    {
                        isInGuild: !1,
                        isGuildDiscoverable: !1
                    },
                    () => _.intl.string(_.t.MRYt09)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1
                    },
                    () => _.intl.string(_.t.p17MQE)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0
                    },
                    () => _.intl.string(_.t.Lkbm5u)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !1,
                        isGuildDiscoverable: !0
                    },
                    () => _.intl.string(_.t.GTJmaW)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1
                    },
                    () => _.intl.string(_.t['sj/imZ'])
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0,
                        canSendSoundmojis: !0
                    },
                    () => _.intl.string(_.t['3Ru2//'])
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !1,
                        isGuildDiscoverable: !0
                    },
                    () => _.intl.string(_.t.qRkWhY)
                )
                .exhaustive();
        }, [a, i, h, r, m, p])
    };
}
!(function (e) {
    (e[(e.JOIN_GUILD = 0)] = 'JOIN_GUILD'), (e[(e.GET_NITRO = 1)] = 'GET_NITRO'), (e[(e.NONE = 2)] = 'NONE');
})(i || (i = {}));
