n.d(a, {
    i: function () {
        return l;
    }
});
var t = n(544891),
    o = n(570140),
    i = n(881052),
    r = n(981631);
let l = async (e) => {
    try {
        var a;
        let n = await t.tn.get({ url: r.ANM.SIMILAR_GAMES(e) }),
            i = (null !== (a = n.body.similar_games) && void 0 !== a ? a : []).filter((a) => a !== e);
        o.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: i
        });
    } catch (e) {
        throw new i.Hx(e);
    }
};
