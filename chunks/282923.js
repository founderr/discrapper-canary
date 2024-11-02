t.d(n, {
    B: function () {
        return r;
    }
}),
    t(653041),
    t(47120);
var i = t(658722),
    l = t.n(i);
function r(e, n, t) {
    if ('' === t) return e;
    let i = t.toLowerCase(),
        r = [];
    for (let a of e) {
        let { id: e, names: o } = n(a);
        if (e === t) return [a];
        o.some((e) => l()(i, e.toLowerCase())) && r.push(a);
    }
    return r;
}
