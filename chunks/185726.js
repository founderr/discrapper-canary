var r = n(729605),
    i = n(501953),
    a = n(519723),
    o = n(29461),
    s = n(349446).f,
    l = n(790142),
    u = n(215645),
    c = n(414629),
    d = n(447631),
    _ = 'Array Iterator',
    E = o.set,
    f = o.getterFor(_);
e.exports = l(
    Array,
    'Array',
    function (e, t) {
        E(this, {
            type: _,
            target: r(e),
            index: 0,
            kind: t
        });
    },
    function () {
        var e = f(this),
            t = e.target,
            n = e.index++;
        if (!t || n >= t.length) return (e.target = void 0), u(void 0, !0);
        switch (e.kind) {
            case 'keys':
                return u(n, !1);
            case 'values':
                return u(t[n], !1);
        }
        return u([n, t[n]], !1);
    },
    'values'
);
var h = (a.Arguments = a.Array);
if ((i('keys'), i('values'), i('entries'), !c && d && 'values' !== h.name))
    try {
        s(h, 'name', { value: 'values' });
    } catch (e) {}
