n.d(a, {
    i: function () {
        return l;
    }
});
var t = n(544891),
    i = n(570140),
    o = n(881052),
    r = n(981631);
let l = async (e) => {
    try {
        var a;
        let n = await t.tn.get({ url: r.ANM.SIMILAR_GAMES(e) }),
            o = (null !== (a = n.body.similar_games) && void 0 !== a ? a : []).filter((a) => a !== e);
        i.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: o
        });
    } catch (e) {
        throw new o.Hx(e);
    }
};
