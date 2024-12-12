r.d(n, {
    dO: function () {
        return c;
    },
    pq: function () {
        return p;
    }
});
var i = r(47120);
var a = r(688619),
    s = r.n(a);
function o(e, n, r) {
    let [i, a] = e,
        [s, o] = n,
        l = (i + a) / 2,
        u = l;
    return r === l ? u : r < l ? s + ((r - i) / (l - i)) * (u - s) : u + ((r - l) / (a - l)) * (o - u);
}
function l(e, n, r) {
    let [i, a] = e,
        [s, o] = n;
    return s + ((r - i) / (a - i)) * (o - s);
}
let u = [0, 2];
function c(e, n, r) {
    let i = s()(e);
    if ('background' !== n) return i.set('hsl.s', '*'.concat(r)).hex();
    {
        let e = l([0, 1], [0.25, 1], r);
        return i.set('hsl.s', '*'.concat(e)).hex();
    }
}
let d = [1.3, 0.7],
    f = [0.98, 1],
    _ = [0.75, 1.5],
    h = [1.45, 0.45];
function p(e, n, r, i) {
    switch (n) {
        case 'background':
        case 'border':
            return s()(e)
                .set('hsl.l', '*'.concat(o(u, 'light' === r ? f : d, i)))
                .hex();
        case 'text':
            return s()(e)
                .set('hsl.l', '*'.concat(o(u, 'light' === r ? h : _, i)))
                .hex();
        default:
            return e;
    }
}
