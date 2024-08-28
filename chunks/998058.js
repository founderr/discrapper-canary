n.d(a, {
    i: function () {
        return i;
    }
});
var s = n(544891),
    r = n(570140),
    t = n(881052),
    o = n(981631);
let i = async (e) => {
    try {
        var a;
        let n = await s.tn.get({ url: o.ANM.SIMILAR_GAMES(e) }),
            t = (null !== (a = n.body.similar_games) && void 0 !== a ? a : []).filter((a) => a !== e);
        r.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: t
        });
    } catch (e) {
        throw new t.Hx(e);
    }
};
