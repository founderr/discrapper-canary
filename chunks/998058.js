n.d(t, {
    i: function () {
        return o;
    }
});
var r = n(544891),
    i = n(570140),
    a = n(881052),
    l = n(981631);
let o = async (e) => {
    try {
        var t;
        let n = await r.tn.get({ url: l.ANM.SIMILAR_GAMES(e) }),
            a = (null !== (t = n.body.similar_games) && void 0 !== t ? t : []).filter((t) => t !== e);
        i.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: a
        });
    } catch (e) {
        throw new a.Hx(e);
    }
};
