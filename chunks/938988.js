var r = n(67867),
    i = n(96403),
    a = n(511364),
    o = n(982665),
    s = n(141603),
    l = n(349446).f,
    u = n(937443),
    c = n(777628),
    d = n(497308),
    _ = n(348343),
    E = n(718380),
    f = !1,
    h = _('meta'),
    p = 0,
    m = function (e) {
        l(e, h, {
            value: {
                objectID: 'O' + p++,
                weakData: {}
            }
        });
    },
    I = function (e, t) {
        if (!o(e)) return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e;
        if (!s(e, h)) {
            if (!d(e)) return 'F';
            if (!t) return 'E';
            m(e);
        }
        return e[h].objectID;
    },
    T = function (e, t) {
        if (!s(e, h)) {
            if (!d(e)) return !0;
            if (!t) return !1;
            m(e);
        }
        return e[h].weakData;
    },
    g = function (e) {
        return E && f && d(e) && !s(e, h) && m(e), e;
    },
    S = function () {
        (A.enable = function () {}), (f = !0);
        var e = u.f,
            t = i([].splice),
            n = {};
        (n[h] = 1),
            e(n).length &&
                ((u.f = function (n) {
                    for (var r = e(n), i = 0, a = r.length; i < a; i++)
                        if (r[i] === h) {
                            t(r, i, 1);
                            break;
                        }
                    return r;
                }),
                r(
                    {
                        target: 'Object',
                        stat: !0,
                        forced: !0
                    },
                    { getOwnPropertyNames: c.f }
                ));
    },
    A = (e.exports = {
        enable: S,
        fastKey: I,
        getWeakData: T,
        onFreeze: g
    });
a[h] = !0;
