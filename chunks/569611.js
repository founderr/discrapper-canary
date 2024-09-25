n.d(t, {
    Hj: function () {
        return c;
    },
    Pz: function () {
        return E;
    },
    ZH: function () {
        return d;
    }
});
var r = n(653041);
var i = n(411104);
var a = n(47120);
var o = n(427786),
    s = n.n(o);
let l = 5000,
    u = new (s())(l);
function c(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    let i = _(n);
    for (
        'string' == typeof e
            ? u.push({
                  time: Date.now(),
                  category: e,
                  message: i
              })
            : u.push({
                  time: Date.now(),
                  category: e.name,
                  timing: e.timing,
                  message: i
              });
        u.length > l;

    )
        u.shift();
}
function d() {
    u.clear();
}
function _(e) {
    let t = '';
    for (let n of e) {
        let e = typeof n;
        'string' === e || 'number' === e || 'boolean' === e ? (t += n + ' ') : n instanceof Error ? (t += n.message + '\n' + n.stack + ' ') : (t += JSON.stringify(n) + ' ');
    }
    return t;
}
function E(e) {
    return u
        .toArray()
        .filter((t) => null == e || e.includes(t.category))
        .map((e) => {
            let t = [];
            return t.push(new Date(e.time).toISOString()), null != e.timing && t.push(e.timing), t.push(e.category, e.message), t.join(' -> ');
        })
        .join('\n');
}
