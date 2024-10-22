r.d(t, {
    x: function () {
        return l;
    }
});
var s = r(512722),
    n = r.n(s),
    a = r(442837),
    i = r(594174);
let l = () => {
    let e = (0, a.e7)([i.default], () => i.default.getCurrentUser());
    return n()(null != e, 'user has signed in before accessing shop'), e;
};
