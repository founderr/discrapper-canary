t.d(n, {
    P: function () {
        return a;
    }
});
var l = t(544891),
    i = t(570140),
    r = t(981631);
async function a(e) {
    i.Z.dispatch({
        type: 'GUILD_POPOUT_FETCH_START',
        guildId: e
    });
    try {
        let n = await l.tn.get({
            url: r.ANM.GUILD_PREVIEW(e),
            oldFormErrors: !0,
            rejectWithError: !0
        });
        i.Z.dispatch({
            type: 'GUILD_POPOUT_FETCH_SUCCESS',
            guildId: e,
            guild: n.body
        });
    } catch (n) {
        i.Z.dispatch({
            type: 'GUILD_POPOUT_FETCH_FAILURE',
            guildId: e
        });
    }
}
