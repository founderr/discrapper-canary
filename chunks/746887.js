t.d(n, {
    u: function () {
        return a;
    }
});
var i = t(211739),
    o = t(680089),
    l = t(984933),
    E = t(914010),
    r = t(981631);
let a = {
    binds: ['mod+shift+a'],
    comboKeysBindGlobal: !0,
    action() {
        let e = E.Z.getGuildId();
        return (
            null != e &&
            (l.ZP.getChannels(e)[r.d4z.GUILD_CATEGORY].some((e) => {
                let { channel: n } = e;
                return 'null' !== n.id && !o.Z.isCollapsed(n.id);
            })
                ? (0, i.N5)(e)
                : (0, i.lc)(e),
            !1)
        );
    }
};
