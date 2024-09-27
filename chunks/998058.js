n.d(a, {
    i: function () {
        return r;
    }
});
var t = n(544891),
    o = n(570140),
    i = n(881052),
    l = n(981631);
let r = async (e) => {
    try {
        var a;
        let n = await t.tn.get({ url: l.ANM.SIMILAR_GAMES(e) }),
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
