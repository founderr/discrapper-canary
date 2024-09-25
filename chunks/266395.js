n.d(t, {
    PE: function () {
        return c;
    },
    a5: function () {
        return u;
    },
    rb: function () {
        return l;
    }
});
var r = n(652874),
    i = n(731965),
    a = n(585483),
    o = n(981631);
let s = Object.freeze({
        hasUnsubmittedChanges: !1,
        shouldShowWarning: !1
    }),
    l = (0, r.Z)((e) => s),
    u = (e) => {
        (0, i.j)(() => l.setState({ hasUnsubmittedChanges: e }));
    },
    c = (e) => {
        (0, i.j)(() => l.setState({ shouldShowWarning: e })), e && a.S.dispatch(o.CkL.EMPHASIZE_NOTICE);
    };
