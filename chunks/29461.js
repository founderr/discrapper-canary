var r,
    i,
    a,
    o = n(723455),
    s = n(668530),
    l = n(982665),
    u = n(948634),
    c = n(141603),
    d = n(980277),
    _ = n(964653),
    E = n(511364),
    f = 'Object already initialized',
    h = s.TypeError,
    p = s.WeakMap,
    m = function (e) {
        return a(e) ? i(e) : r(e, {});
    },
    I = function (e) {
        return function (t) {
            var n;
            if (!l(t) || (n = i(t)).type !== e) throw new h('Incompatible receiver, ' + e + ' required');
            return n;
        };
    };
if (o || d.state) {
    var T = d.state || (d.state = new p());
    (T.get = T.get),
        (T.has = T.has),
        (T.set = T.set),
        (r = function (e, t) {
            if (T.has(e)) throw new h(f);
            return (t.facade = e), T.set(e, t), t;
        }),
        (i = function (e) {
            return T.get(e) || {};
        }),
        (a = function (e) {
            return T.has(e);
        });
} else {
    var g = _('state');
    (E[g] = !0),
        (r = function (e, t) {
            if (c(e, g)) throw new h(f);
            return (t.facade = e), u(e, g, t), t;
        }),
        (i = function (e) {
            return c(e, g) ? e[g] : {};
        }),
        (a = function (e) {
            return c(e, g);
        });
}
e.exports = {
    set: r,
    get: i,
    has: a,
    enforce: m,
    getterFor: I
};
