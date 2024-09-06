n.d(t, {
    T: function () {
        return l;
    }
}),
    n(733860);
var i = n(392711),
    s = n.n(i),
    a = n(823379);
function l(e, t) {
    return s()(e)
        .map(t.getUser)
        .unshift(t.getCurrentUser())
        .filter(a.lm)
        .sortBy((e) => e.username.toLowerCase())
        .value();
}
