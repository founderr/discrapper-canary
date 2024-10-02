a.d(n, {
    i: function () {
        return l;
    }
});
var t = a(544891),
    i = a(570140),
    o = a(881052),
    r = a(981631);
let l = async (e) => {
    try {
        var n;
        let a = await t.tn.get({ url: r.ANM.SIMILAR_GAMES(e) }),
            o = (null !== (n = a.body.similar_games) && void 0 !== n ? n : []).filter((n) => n !== e);
        i.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: o
        });
    } catch (e) {
        throw new o.Hx(e);
    }
};
