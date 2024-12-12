r.d(n, {
    C4: function () {
        return o;
    },
    RF: function () {
        return s;
    },
    yV: function () {
        return l;
    }
});
var i = r(352981),
    a = r(732845);
function s(e, n) {
    let { enabled: r } = a.x.useExperiment({ location: n }),
        s = (0, i.y)(e, n);
    return r && s;
}
function o(e, n) {
    let { enabled: r } = a.x.getCurrentConfig({ location: n }),
        s = (0, i.p)(e, n);
    return r && s;
}
function l(e) {
    let { enabled: n } = a.a.useExperiment({ location: e });
    return n;
}
