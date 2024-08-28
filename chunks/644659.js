var n,
    a,
    o,
    i = r(197047),
    _ = r(161581),
    E = r(622281),
    s = r(251069),
    c = r(740362),
    I = r(801127),
    u = r(883539),
    l = r(624906),
    R = 'Object already initialized',
    A = _.TypeError,
    T = _.WeakMap;
if (i || I.state) {
    var d = I.state || (I.state = new T());
    (d.get = d.get),
        (d.has = d.has),
        (d.set = d.set),
        (n = function (e, t) {
            if (d.has(e)) throw A(R);
            return (t.facade = e), d.set(e, t), t;
        }),
        (a = function (e) {
            return d.get(e) || {};
        }),
        (o = function (e) {
            return d.has(e);
        });
} else {
    var N = u('state');
    (l[N] = !0),
        (n = function (e, t) {
            if (c(e, N)) throw A(R);
            return (t.facade = e), s(e, N, t), t;
        }),
        (a = function (e) {
            return c(e, N) ? e[N] : {};
        }),
        (o = function (e) {
            return c(e, N);
        });
}
e.exports = {
    set: n,
    get: a,
    has: o,
    enforce: function (e) {
        return o(e) ? a(e) : n(e, {});
    },
    getterFor: function (e) {
        return function (t) {
            var r;
            if (!E(t) || (r = a(t)).type !== e) throw A('Incompatible receiver, ' + e + ' required');
            return r;
        };
    }
};
