r.d(t, {
    V: function () {
        return o;
    },
    y: function () {
        return _;
    }
});
var n = r(370336);
let a = '_sentryMetrics';
function _(e) {
    let t = e[a];
    if (!t) return;
    let r = {};
    for (let [, [e, a]] of t) (r[e] || (r[e] = [])).push((0, n.Jr)(a));
    return r;
}
function o(e, t, r, n, _, o, i) {
    let E = e[a] || (e[a] = new Map()),
        c = `${t}:${r}@${_}`,
        s = E.get(i);
    if (s) {
        let [, e] = s;
        E.set(i, [
            c,
            {
                min: Math.min(e.min, n),
                max: Math.max(e.max, n),
                count: (e.count += 1),
                sum: (e.sum += n),
                tags: e.tags
            }
        ]);
    } else
        E.set(i, [
            c,
            {
                min: n,
                max: n,
                count: 1,
                sum: n,
                tags: o
            }
        ]);
}
