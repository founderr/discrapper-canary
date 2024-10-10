t.d(n, {
    i: function () {
        return o;
    }
});
var a = t(544891),
    r = t(570140),
    s = t(881052),
    i = t(981631);
let o = async (e) => {
    try {
        var n;
        let t = await a.tn.get({ url: i.ANM.SIMILAR_GAMES(e) }),
            s = (null !== (n = t.body.similar_games) && void 0 !== n ? n : []).filter((n) => n !== e);
        r.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: s
        });
    } catch (e) {
        throw new s.Hx(e);
    }
};
