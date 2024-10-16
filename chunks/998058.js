a.d(n, {
    i: function () {
        return o;
    }
});
var t = a(544891),
    r = a(570140),
    s = a(881052),
    i = a(981631);
let o = async (e) => {
    try {
        var n;
        let a = await t.tn.get({ url: i.ANM.SIMILAR_GAMES(e) }),
            s = (null !== (n = a.body.similar_games) && void 0 !== n ? n : []).filter((n) => n !== e);
        r.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: s
        });
    } catch (e) {
        throw new s.Hx(e);
    }
};
