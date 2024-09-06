n.d(t, {
    c: function () {
        return l;
    }
});
var i = n(913527),
    s = n.n(i),
    a = n(709054);
let l = (e) => {
    let t = a.default.extractTimestamp(e);
    return !s()().isBefore(s()(t).add(s().duration(15, 'days')));
};
