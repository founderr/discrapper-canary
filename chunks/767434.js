n.d(t, {
    Z: function () {
        return f;
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
    d = n(710111);
function f(e, t, n, r) {
    let i = e.guildId === d.X8,
        f = (0, o.e7)([l.default], () => u.ZP.canUseSoundboardEverywhere(l.default.getCurrentUser())),
        _ = (0, c.V)({ location: 'useSoundmojiGuildInfoData' }),
        p = e.guildId !== (null == t ? void 0 : t.guild_id),
        h = a.useMemo(() => (i || !_ ? 2 : _ && !f ? 1 : n || null == r ? 2 : 0), [i, f, _, n, r]);
    return {
        buttonType: h,
        description: a.useMemo(() => {
            if (i) return 'A default soundmoji. You can use this soundmoji everywhere on Discord.';
            let e = null != r;
            return (0, s.EQ)({
                hasSoundmojiPermissions: f,
                isInGuild: n,
                isGuildDiscoverable: e,
                isSoundFromDifferentGuild: p,
                canSendSoundmojis: _
            })
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1
                    },
                    () => 'This soundmoji is from this server'
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0
                    },
                    () => 'This soundmoji is from one of your servers'
                )
                .with(
                    {
                        isInGuild: !1,
                        isGuildDiscoverable: !1
                    },
                    () => 'This soundmoji is from a server that is either invite-only or unavailable'
                )
                .with(
                    {
                        hasSoundmojiPermissions: !0,
                        isInGuild: !1,
                        isGuildDiscoverable: !0
                    },
                    () => 'Want to use this soundmoji everywhere? Join the server.'
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !1,
                        isGuildDiscoverable: !0,
                        canSendSoundmojis: !0
                    },
                    () => 'Want to use this soundmoji everywhere? Get Nitro and join this server'
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !1,
                        isGuildDiscoverable: !0,
                        canSendSoundmojis: !1
                    },
                    () => 'You can`t send soundmojis right now'
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1,
                        canSendSoundmojis: !0
                    },
                    () => 'The soundmoji is from this server. Get Nitro to use it everywhere.'
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !1,
                        canSendSoundmojis: !1
                    },
                    () => 'You can`t send soundmojis right now'
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0,
                        canSendSoundmojis: !0
                    },
                    () => 'This soundmoji is from one of your servers. Get Nitro to use it everywhere.'
                )
                .with(
                    {
                        hasSoundmojiPermissions: !1,
                        isInGuild: !0,
                        isSoundFromDifferentGuild: !0,
                        canSendSoundmojis: !1
                    },
                    () => 'You can`t send soundmojis right now'
                )
                .exhaustive();
        }, [i, r, f, n, p, _])
    };
}
((i = r || (r = {}))[(i.JOIN_GUILD = 0)] = 'JOIN_GUILD'), (i[(i.GET_NITRO = 1)] = 'GET_NITRO'), (i[(i.NONE = 2)] = 'NONE');
