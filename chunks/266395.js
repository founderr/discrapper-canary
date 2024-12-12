r.d(n, {
    PE: function () {
        return d;
    },
    a5: function () {
        return c;
    },
    rb: function () {
        return u;
    }
});
var i = r(15729),
    a = r(731965),
    s = r(585483),
    o = r(981631);
let l = Object.freeze({
        hasUnsubmittedChanges: !1,
        shouldShowWarning: !1
    }),
    u = (0, i.U)((e) => l),
    c = (e) => {
        (0, a.j)(() => u.setState({ hasUnsubmittedChanges: e }));
    },
    d = (e) => {
        (0, a.j)(() => u.setState({ shouldShowWarning: e })), e && s.S.dispatch(o.CkL.EMPHASIZE_NOTICE);
    };
