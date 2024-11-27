n.d(t, {
    S: function () {
        return u;
    },
    t: function () {
        return d;
    }
});
var i = n(699516),
    r = n(626135),
    l = n(70956),
    a = n(869031),
    o = n(981631);
let s = l.Z.Millis.WEEK,
    c = l.Z.Millis.DAYS_30,
    u = () => {
        if (!(0, a.nZ)('block_user_feedback_utils')) return !1;
        let e = i.Z.getSinces();
        return Object.keys(e).some((t) => {
            let n = Date.now() - Date.parse(e[t]);
            return i.Z.isBlocked(t) && n > s && n < c;
        });
    },
    d = (e, t, n, i) => {
        r.default.track(o.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: i
        });
    };
