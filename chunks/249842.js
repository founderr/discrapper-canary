s.d(l, {
    P: function () {
        return n;
    }
});
var a = s(544891),
    t = s(570140),
    i = s(981631);
async function n(e) {
    t.Z.dispatch({
        type: 'GUILD_POPOUT_FETCH_START',
        guildId: e
    });
    try {
        let l = await a.tn.get({
            url: i.ANM.GUILD_PREVIEW(e),
            oldFormErrors: !0
        });
        t.Z.dispatch({
            type: 'GUILD_POPOUT_FETCH_SUCCESS',
            guildId: e,
            guild: l.body
        });
    } catch (l) {
        t.Z.dispatch({
            type: 'GUILD_POPOUT_FETCH_FAILURE',
            guildId: e
        });
    }
}
