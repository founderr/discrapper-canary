t.d(n, {
    M: function () {
        return o;
    }
}),
    t(724458);
var r = t(544891),
    a = t(981631);
let i = (e) =>
    e.reduce(
        (e, n) => (
            (e[n.game_application_id] = {
                level: n.activity_level,
                score: n.activity_score
            }),
            e
        ),
        {}
    );
async function o(e) {
    return i((await r.tn.get({ url: a.ANM.GUILD_TOP_GAMES(e) })).body.top_games);
}
