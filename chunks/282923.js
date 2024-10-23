t.d(n, {
    B: function () {
        return l;
    }
}),
    t(653041),
    t(47120);
var i = t(658722),
    a = t.n(i);
function l(e, n, t) {
    if ('' === t) return e;
    let i = t.toLowerCase(),
        l = [];
    for (let s of e) {
        let { id: e, names: o } = n(s);
        if (e === t) return [s];
        o.some((e) => a()(i, e.toLowerCase())) && l.push(s);
    }
    return l;
}
