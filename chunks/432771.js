n.d(t, {
    c: function () {
        return r;
    }
});
var i = n(913527),
    l = n.n(i),
    a = n(709054);
let r = (e) => {
    let t = a.default.extractTimestamp(e);
    return !l()().isBefore(l()(t).add(l().duration(15, 'days')));
};
