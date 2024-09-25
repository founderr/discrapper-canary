n.d(t, {
    cO: function () {
        return l;
    },
    eb: function () {
        return r;
    },
    kl: function () {
        return u;
    }
});
var r,
    i = n(700785),
    a = n(74538),
    o = n(378233),
    s = n(981631);
!(function (e) {
    (e[(e.SENDABLE = 0)] = 'SENDABLE'), (e[(e.SENDABLE_WITH_PREMIUM = 1)] = 'SENDABLE_WITH_PREMIUM'), (e[(e.NONSENDABLE = 2)] = 'NONSENDABLE'), (e[(e.SENDABLE_WITH_BOOSTED_GUILD = 3)] = 'SENDABLE_WITH_BOOSTED_GUILD');
})(r || (r = {}));
let l = (e, t, n) => {
        if (null == t) return 2;
        let r = a.ZP.canUseCustomStickersEverywhere(t);
        if ((0, o.jl)(e)) return 0;
        if ((0, o.J8)(e) && null != n)
            return e.available
                ? null != n.guild_id && '' !== n.guild_id && n.guild_id === e.guild_id
                    ? 0
                    : null == n.guild_id ||
                        i.BT({
                            permission: s.Plq.USE_EXTERNAL_STICKERS,
                            user: t,
                            context: n
                        })
                      ? r
                          ? 0
                          : 1
                      : 2
                : 3;
        return 2;
    },
    u = (e, t, n) => 0 === l(e, t, n);
