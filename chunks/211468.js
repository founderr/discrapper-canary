r.d(t, {
    dO: function () {
        return E;
    },
    pq: function () {
        return u;
    }
}),
    r(47120);
var n = r(688619),
    a = r.n(n);
function _(e, t, r) {
    let [n, a] = e,
        [_, o] = t,
        E = (n + a) / 2;
    return r === E ? E : r < E ? _ + ((r - n) / (E - n)) * (E - _) : E + ((r - E) / (a - E)) * (o - E);
}
let o = [0, 2];
function E(e, t, r) {
    let n = a()(e);
    if ('background' !== t) return n.set('hsl.s', '*'.concat(r)).hex();
    {
        let e = (function (e, t, r) {
            let [n, a] = e,
                [_, o] = t;
            return _ + ((r - n) / (a - n)) * (o - _);
        })([0, 1], [0.25, 1], r);
        return n.set('hsl.s', '*'.concat(e)).hex();
    }
}
let i = [1.3, 0.7],
    c = [0.98, 1],
    s = [0.75, 1.5],
    l = [1.45, 0.45];
function u(e, t, r, n) {
    switch (t) {
        case 'background':
        case 'border':
            return a()(e)
                .set('hsl.l', '*'.concat(_(o, 'light' === r ? c : i, n)))
                .hex();
        case 'text':
            return a()(e)
                .set('hsl.l', '*'.concat(_(o, 'light' === r ? l : s, n)))
                .hex();
        default:
            return e;
    }
}
