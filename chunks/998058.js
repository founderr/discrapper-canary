n.d(a, {
    i: function () {
        return l;
    }
});
var t = n(544891),
    i = n(570140),
    r = n(881052),
    o = n(981631);
let l = async (e) => {
    try {
        var a;
        let n = await t.tn.get({ url: o.ANM.SIMILAR_GAMES(e) }),
            r = (null !== (a = n.body.similar_games) && void 0 !== a ? a : []).filter((a) => a !== e);
        i.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: r
        });
    } catch (e) {
        throw new r.Hx(e);
    }
};
