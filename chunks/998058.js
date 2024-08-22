n.d(a, {
    i: function () {
        return i;
    }
});
var s = n(544891),
    t = n(570140),
    r = n(881052),
    o = n(981631);
let i = async (e) => {
    try {
        var a;
        let n = await s.tn.get({ url: o.ANM.SIMILAR_GAMES(e) }),
            r = (null !== (a = n.body.similar_games) && void 0 !== a ? a : []).filter((a) => a !== e);
        t.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: r
        });
    } catch (e) {
        throw new r.Hx(e);
    }
};
