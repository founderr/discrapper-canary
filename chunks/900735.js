n.d(t, {
    S: function () {
        return u;
    },
    t: function () {
        return d;
    }
});
var a = n(699516),
    s = n(626135),
    l = n(70956),
    o = n(869031),
    r = n(981631);
let i = 2 * l.Z.Millis.WEEK,
    c = 4 * l.Z.Millis.WEEK,
    u = () => {
        let e = a.Z.getSinces();
        return (
            !!Object.keys(e).some((t) => {
                let n = Date.now() - Date.parse(e[t]);
                return a.Z.isBlocked(t) && n > i && n < c;
            }) && (0, o.nZ)('block_user_feedback_utils')
        );
    },
    d = (e, t, n, a) => {
        s.default.track(r.rMx.BLOCK_USER_FEEDBACK_SUBMITTED, {
            rating: e,
            feedback: t,
            reason: n,
            skipped: a
        });
    };
