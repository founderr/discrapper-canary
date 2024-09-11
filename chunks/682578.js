t.d(s, {
    J: function () {
        return o;
    }
});
var n = t(512722),
    a = t.n(n),
    i = t(442837),
    r = t(594174);
let o = () =>
    (0, i.e7)([r.default], () => {
        let e = r.default.getCurrentUser();
        return a()(null != e, 'useNSFWAllowed hook: currentUser cannot be undefined'), e.nsfwAllowed;
    });
