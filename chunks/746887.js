e.d(t, {
    u: function () {
        return s;
    }
});
var i = e(211739),
    o = e(680089),
    r = e(984933),
    l = e(914010),
    d = e(981631);
let s = {
    binds: ['mod+shift+a'],
    comboKeysBindGlobal: !0,
    action() {
        let n = l.Z.getGuildId();
        return (
            null != n &&
            (r.ZP.getChannels(n)[d.d4z.GUILD_CATEGORY].some((n) => {
                let { channel: t } = n;
                return 'null' !== t.id && !o.Z.isCollapsed(t.id);
            })
                ? (0, i.N5)(n)
                : (0, i.lc)(n),
            !1)
        );
    }
};
