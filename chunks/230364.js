var n = r(581031),
    a = r(936940),
    o = r(354848),
    i = r(740362),
    _ = r(325008),
    E = r(539459).CONFIGURABLE,
    s = r(943329),
    c = r(644659),
    I = c.enforce,
    u = c.get,
    l = String,
    R = Object.defineProperty,
    A = n(''.slice),
    T = n(''.replace),
    d = n([].join),
    N =
        _ &&
        !a(function () {
            return 8 !== R(function () {}, 'length', { value: 8 }).length;
        }),
    p = String(String).split('String'),
    O = (e.exports = function (e, t, r) {
        'Symbol(' === A(l(t), 0, 7) && (t = '[' + T(l(t), /^Symbol\(([^)]*)\)/, '$1') + ']'),
            r && r.getter && (t = 'get ' + t),
            r && r.setter && (t = 'set ' + t),
            (!i(e, 'name') || (E && e.name !== t)) &&
                (_
                    ? R(e, 'name', {
                          value: t,
                          configurable: !0
                      })
                    : (e.name = t)),
            N && r && i(r, 'arity') && e.length !== r.arity && R(e, 'length', { value: r.arity });
        try {
            r && i(r, 'constructor') && r.constructor ? _ && R(e, 'prototype', { writable: !1 }) : e.prototype && (e.prototype = void 0);
        } catch (e) {}
        var n = I(e);
        return !i(n, 'source') && (n.source = d(p, 'string' == typeof t ? t : '')), e;
    });
Function.prototype.toString = O(function () {
    return (o(this) && u(this).source) || s(this);
}, 'toString');
