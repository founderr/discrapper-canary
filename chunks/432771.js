n.d(t, {
    c: function () {
        return s;
    }
});
var i = n(913527),
    l = n.n(i),
    r = n(709054);
let s = (e) => {
    let t = r.default.extractTimestamp(e);
    return !l()().isBefore(l()(t).add(l().duration(15, 'days')));
};
