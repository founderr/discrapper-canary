n.d(t, {
    z: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(239091),
    o = n(430824),
    s = n(594174),
    l = n(74538);
function u(e, t, i, o) {
    let u = s.default.getCurrentUser();
    (null != t || l.ZP.canUseCustomCallSounds(u)) &&
        (0, a.jW)(e, async () => {
            let { default: e } = await n.e('2356').then(n.bind(n, 876308));
            return (n) =>
                (0, r.jsx)(e, {
                    ...n,
                    soundGuild: t,
                    activeCallGuildId: o,
                    sound: i
                });
        });
}
function c(e, t) {
    return i.useCallback(
        (n) => {
            n.stopPropagation();
            let r = o.Z.getGuild(e.guildId),
                i = s.default.getCurrentUser();
            (null != r || l.ZP.canUseCustomCallSounds(i)) && u(n, r, e, t);
        },
        [e, t]
    );
}
