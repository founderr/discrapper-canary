t.d(n, {
    u: function () {
        return r;
    }
});
var l = t(211739),
    i = t(680089),
    o = t(984933),
    a = t(914010),
    u = t(981631);
let r = {
    binds: ['mod+shift+a'],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.Z.getGuildId();
        return (
            null != e &&
            (o.ZP.getChannels(e)[u.d4z.GUILD_CATEGORY].some((e) => {
                let { channel: n } = e;
                return 'null' !== n.id && !i.Z.isCollapsed(n.id);
            })
                ? (0, l.N5)(e)
                : (0, l.lc)(e),
            !1)
        );
    }
};
