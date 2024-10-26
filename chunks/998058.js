n.d(t, {
    i: function () {
        return o;
    }
});
var a = n(544891),
    r = n(570140),
    s = n(881052),
    i = n(981631);
let o = async (e) => {
    try {
        var t;
        let n = await a.tn.get({ url: i.ANM.SIMILAR_GAMES(e) }),
            s = (null !== (t = n.body.similar_games) && void 0 !== t ? t : []).filter((t) => t !== e);
        r.Z.dispatch({
            type: 'GAME_PROFILE_GET_SIMILAR_GAMES_SUCCESS',
            applicationId: e,
            games: s
        });
    } catch (e) {
        throw new s.Hx(e);
    }
};
