n.d(t, {
    B: function () {
        return r;
    }
}),
    n(653041),
    n(47120);
var i = n(658722),
    l = n.n(i);
function r(e, t, n) {
    if ('' === n) return e;
    let i = n.toLowerCase(),
        r = [];
    for (let a of e) {
        let { id: e, names: o } = t(a);
        if (e === n) return [a];
        o.some((e) => l()(i, e.toLowerCase())) && r.push(a);
    }
    return r;
}
