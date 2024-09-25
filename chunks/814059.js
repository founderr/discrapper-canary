n.d(t, {
    n: function () {
        return s;
    }
});
var a = n(913527),
    l = n.n(a),
    i = n(70956),
    r = n(689938);
let s = (e) => {
    let t = Math.max(0, l()(e).diff(l()(), 's'));
    if (t < i.Z.Seconds.DAY) {
        let e = Math.round(t / i.Z.Seconds.HOUR);
        return r.Z.Messages.LEADERBOARD_INTERVAL_END_DAYS_LEFT.format({ count: e });
    }
    {
        let e = Math.round(t / i.Z.Seconds.DAY);
        return r.Z.Messages.LEADERBOARD_INTERVAL_END_DAYS_LEFT.format({ count: e });
    }
};
