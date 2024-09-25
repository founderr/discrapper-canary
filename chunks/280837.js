n.d(t, {
    O: function () {
        return c;
    },
    a: function () {
        return d;
    }
});
var r = n(47120);
var i = n(544891),
    a = n(570140),
    o = n(19780),
    s = n(823379),
    l = n(41776),
    u = n(981631);
async function c(e) {
    let t = l.Z.lurkingGuildIds().filter((t) => !e.includes(t));
    0 !== t.length &&
        (a.Z.dispatch({
            type: 'GUILD_STOP_LURKING',
            ignoredGuildIds: e
        }),
        await Promise.all(
            t.map(async (e) => {
                let t = l.Z.getLurkingSource();
                try {
                    await i.tn.del({
                        url: u.ANM.GUILD_LEAVE(e),
                        body: { lurking: !0 },
                        oldFormErrors: !0
                    });
                } catch (n) {
                    a.Z.dispatch({
                        type: 'GUILD_STOP_LURKING_FAILURE',
                        lurkingGuildId: e,
                        lurkingSource: t
                    });
                }
            })
        ));
}
async function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = l.Z.lurkingGuildIds();
    if (0 === t.length || !(null == e || !t.includes(e))) return;
    let n = [e, o.Z.getGuildId()].filter(s.lm);
    await c(n);
}
