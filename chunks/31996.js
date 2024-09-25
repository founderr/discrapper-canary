n.d(t, {
    Q: function () {
        return c;
    }
});
var r = n(47120);
var i = n(544891),
    a = n(570140),
    o = n(430824),
    s = n(356264),
    l = n(981631);
let u = new Set();
async function c(e) {
    if (null == o.Z.getGuild(e) && null == s.Z.getGuildOrStatus(e)) {
        if (!u.has(e)) {
            a.Z.dispatch({
                type: 'BASIC_GUILD_FETCH',
                guildId: e
            }),
                u.add(e);
            try {
                let t = (await i.tn.get({ url: l.ANM.GUILD_BASIC(e) })).body;
                a.Z.dispatch({
                    type: 'BASIC_GUILD_FETCH_SUCCESS',
                    guildId: e,
                    guildInfo: t
                });
            } catch (t) {
                a.Z.dispatch({
                    type: 'BASIC_GUILD_FETCH_FAILURE',
                    guildId: e
                });
            } finally {
                u.delete(e);
            }
        }
    }
}
