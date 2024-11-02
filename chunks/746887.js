e.d(t, {
    u: function () {
        return a;
    }
});
var i = e(211739),
    l = e(680089),
    o = e(984933),
    r = e(914010),
    u = e(981631);
let a = {
    binds: ['mod+shift+a'],
    comboKeysBindGlobal: !0,
    action() {
        let n = r.Z.getGuildId();
        return (
            null != n &&
            (o.ZP.getChannels(n)[u.d4z.GUILD_CATEGORY].some((n) => {
                let { channel: t } = n;
                return 'null' !== t.id && !l.Z.isCollapsed(t.id);
            })
                ? (0, i.N5)(n)
                : (0, i.lc)(n),
            !1)
        );
    }
};
