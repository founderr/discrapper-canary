r.d(t, {
    dO: function () {
        return E;
    },
    pq: function () {
        return I;
    }
}),
    r(47120);
var a = r(688619),
    n = r.n(a);
function _(e, t, r) {
    let [a, n] = e,
        [_, o] = t,
        E = (a + n) / 2;
    return r === E ? E : r < E ? _ + ((r - a) / (E - a)) * (E - _) : E + ((r - E) / (n - E)) * (o - E);
}
let o = [0, 2];
function E(e, t, r) {
    let a = n()(e);
    if ('background' !== t) return a.set('hsl.s', '*'.concat(r)).hex();
    {
        let e = (function (e, t, r) {
            let [a, n] = e,
                [_, o] = t;
            return _ + ((r - a) / (n - a)) * (o - _);
        })([0, 1], [0.25, 1], r);
        return a.set('hsl.s', '*'.concat(e)).hex();
    }
}
let i = [1.3, 0.7],
    c = [0.98, 1],
    s = [0.75, 1.5],
    l = [1.45, 0.45];
function I(e, t, r, a) {
    switch (t) {
        case 'background':
        case 'border':
            return n()(e)
                .set('hsl.l', '*'.concat(_(o, 'light' === r ? c : i, a)))
                .hex();
        case 'text':
            return n()(e)
                .set('hsl.l', '*'.concat(_(o, 'light' === r ? l : s, a)))
                .hex();
        default:
            return e;
    }
}
