n.d(t, {
    n: function () {
        return s;
    }
});
var r = n(913527),
    i = n.n(r),
    a = n(70956),
    o = n(689938);
let s = (e) => {
    let t = Math.max(0, i()(e).diff(i()(), 's'));
    if (t < a.Z.Seconds.DAY) {
        let e = Math.round(t / a.Z.Seconds.HOUR);
        return o.Z.Messages.LEADERBOARD_INTERVAL_END_HOURS_LEFT.format({ count: e });
    }
    {
        let e = Math.round(t / a.Z.Seconds.DAY);
        return o.Z.Messages.LEADERBOARD_INTERVAL_END_DAYS_LEFT.format({ count: e });
    }
};
