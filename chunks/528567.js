n.d(t, {
    C: function () {
        return s;
    },
    s: function () {
        return o;
    }
});
var r = n(939639),
    i = n(99815),
    a = n(689938);
function s(e) {
    var t;
    return null !==
        (t = {
            [i.E.LOL_TOTAL_KILLS]: a.Z.Messages.LEADERBOARD_STATISTIC_NAME_LOL_TOTAL_KILLS,
            [i.E.LOL_TOTAL_DEATHS]: a.Z.Messages.LEADERBOARD_STATISTIC_NAME_LOL_TOTAL_DEATHS,
            [i.E.LOL_TOTAL_ASSISTS]: a.Z.Messages.LEADERBOARD_STATISTIC_NAME_LOL_TOTAL_ASSISTS,
            [i.E.LOL_TOTAL_DAMAGE_DEALT]: a.Z.Messages.LEADERBOARD_STATISTIC_NAME_LOL_TOTAL_DAMAGE_DEALT,
            [i.E.LOL_TOTAL_DAMAGE_TAKEN]: a.Z.Messages.LEADERBOARD_STATISTIC_NAME_LOL_TOTAL_DAMAGE_TAKEN,
            [i.E.LOL_TOTAL_WINS]: a.Z.Messages.LEADERBOARD_STATISTIC_NAME_LOL_TOTAL_WINS,
            [i.E.LOL_MAX_CREEP_SCORE]: a.Z.Messages.LEADERBOARD_STATISTIC_NAME_LOL_MAX_CREEP_SCORE
        }[e]) && void 0 !== t
        ? t
        : a.Z.Messages.LEADERBOARD_STATISTIC_NAME_UNKNOWN;
}
function o(e) {
    let { statisticId: t, sortDesc: n, aggregationType: i } = e,
        o = s(t);
    if (i === r.k.MAX) return n ? a.Z.Messages.LEADERBOARD_STATISTIC_NAME_MAX_VALUE.format({ statisticName: o }) : a.Z.Messages.LEADERBOARD_STATISTIC_NAME_MIN_VALUE.format({ statisticName: o });
    return n ? a.Z.Messages.LEADERBOARD_STATISTIC_NAME_MOST_VALUE.format({ statisticName: o }) : a.Z.Messages.LEADERBOARD_STATISTIC_NAME_LEAST_VALUE.format({ statisticName: o });
}
