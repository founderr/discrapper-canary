var n = r(299623),
    a = r(345374),
    o = r(874652),
    i = r(644659),
    _ = r(97131).f,
    E = r(828114),
    s = r(535586),
    c = r(992051),
    I = r(325008),
    u = 'Array Iterator',
    l = i.set,
    R = i.getterFor(u);
e.exports = E(
    Array,
    'Array',
    function (e, t) {
        l(this, {
            type: u,
            target: n(e),
            index: 0,
            kind: t
        });
    },
    function () {
        var e = R(this),
            t = e.target,
            r = e.kind,
            n = e.index++;
        if (!t || n >= t.length) return (e.target = void 0), s(void 0, !0);
        switch (r) {
            case 'keys':
                return s(n, !1);
            case 'values':
                return s(t[n], !1);
        }
        return s([n, t[n]], !1);
    },
    'values'
);
var A = (o.Arguments = o.Array);
if ((a('keys'), a('values'), a('entries'), !c && I && 'values' !== A.name))
    try {
        _(A, 'name', { value: 'values' });
    } catch (e) {}
