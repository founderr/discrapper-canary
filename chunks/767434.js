n.d(t, {
    Z: function () {
        return _;
    },
    y: function () {
        return r;
    }
}),
    n(627341);
var r,
    i,
    a = n(192379),
    s = n(278074),
    o = n(442837),
    l = n(594174),
    u = n(74538),
    c = n(125900),
    d = n(710111),
    f = n(388032);
function _(e, t, n, r) {
    let i = e.guildId === d.X8,
        _ = (0, o.e7)([l.default], () => u.ZP.canUseSoundboardEverywhere(l.default.getCurrentUser())),
        p = (0, c.V)({ location: 'useSoundmojiGuildInfoData' }),
        h = e.guildId !== (null == t ? void 0 : t.guild_id),
        m = a.useMemo(() => (i || !p ? 2 : p && !_ ? 1 : n || null == r ? 2 : 0), [i, _, p, n, r]);
    return {
        buttonType: m,
        description: a.useMemo(() => {
            let e = null != r;
            return (0, s.EQ)({
                hasSoundmojiPermissions: _,
                isInGuild: n,
                isGuildDiscoverable: e,
                isSoundFromDifferentGuild: h,
                canSendSoundmojis: p,
                isDefaultSound: i
            })
                .with({ canSendSoundmojis: !1 }, () => f.intl.string(f.t.x2kyyM))
                .with({ isDefaultSound: !0 }, () => f.intl.string(f.t.AabHen))
                .with(
                    {
                        isInGuild: !1,
                        isGuildDiscoverable: !1
                    },
                    () => f.intl.string(f.t.MRYt09)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1
                    },
                    () => f.intl.string(f.t.p17MQE)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0
                    },
                    () => f.intl.string(f.t.Lkbm5u)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !1,
                        isGuildDiscoverable: !0
                    },
                    () => f.intl.string(f.t.GTJmaW)
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1
                    },
                    () => f.intl.string(f.t['sj/imZ'])
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0,
                        canSendSoundmojis: !0
                    },
                    () => f.intl.string(f.t['3Ru2//'])
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !1,
                        isGuildDiscoverable: !0
                    },
                    () => f.intl.string(f.t.qRkWhY)
                )
                .exhaustive();
        }, [i, r, _, n, h, p])
    };
}
((i = r || (r = {}))[(i.JOIN_GUILD = 0)] = 'JOIN_GUILD'), (i[(i.GET_NITRO = 1)] = 'GET_NITRO'), (i[(i.NONE = 2)] = 'NONE');
