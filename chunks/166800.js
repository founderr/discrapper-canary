r.d(t, {
    q: function () {
        return _;
    }
});
var a = r(226377),
    n = r(91647);
let _ = {
    increment: function (e, t = 1, r) {
        a.q.increment(n.P, e, t, r);
    },
    distribution: function (e, t, r) {
        a.q.distribution(n.P, e, t, r);
    },
    set: function (e, t, r) {
        a.q.set(n.P, e, t, r);
    },
    gauge: function (e, t, r) {
        a.q.gauge(n.P, e, t, r);
    },
    timing: function (e, t, r = 'second', _) {
        return a.q.timing(n.P, e, t, r, _);
    }
};
