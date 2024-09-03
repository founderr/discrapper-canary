n.d(a, {
    i: function () {
        return o;
    }
});
var t = n(544891),
    r = n(570140),
    s = n(881052),
    i = n(981631);
let o = async (e) => {
    try {
        var a;
        let n = await t.tn.get({ url: i.ANM.SIMILAR_GAMES(e) }),
            s = (null !== (a = n.body.similar_games) && void 0 !== a ? a : []).filter((a) => a !== e);
        r.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: s
        });
    } catch (e) {
        throw new s.Hx(e);
    }
};
