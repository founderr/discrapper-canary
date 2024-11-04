n.d(t, {
    T: function () {
        return s;
    }
}),
    n(733860);
var i = n(392711),
    l = n.n(i),
    r = n(823379);
function s(e, t) {
    return l()(e)
        .map(t.getUser)
        .unshift(t.getCurrentUser())
        .filter(r.lm)
        .sortBy((e) => e.username.toLowerCase())
        .value();
}
