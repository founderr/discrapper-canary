r.d(t, {
    V: function () {
        return o;
    },
    y: function () {
        return _;
    }
});
var a = r(370336);
let n = '_sentryMetrics';
function _(e) {
    let t = e[n];
    if (!t) return;
    let r = {};
    for (let [, [e, n]] of t) (r[e] || (r[e] = [])).push((0, a.Jr)(n));
    return r;
}
function o(e, t, r, a, _, o, E) {
    let i = e[n] || (e[n] = new Map()),
        c = `${t}:${r}@${_}`,
        s = i.get(E);
    if (s) {
        let [, e] = s;
        i.set(E, [
            c,
            {
                min: Math.min(e.min, a),
                max: Math.max(e.max, a),
                count: (e.count += 1),
                sum: (e.sum += a),
                tags: e.tags
            }
        ]);
    } else
        i.set(E, [
            c,
            {
                min: a,
                max: a,
                count: 1,
                sum: a,
                tags: o
            }
        ]);
}
