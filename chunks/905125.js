var i = r(690244)('%TypeError%'),
    a = r(116298),
    s = r(125179),
    o = r(395238),
    l = r(441596),
    u = r(75150),
    c = r(860438),
    d = r(465555),
    f = r(828148),
    _ = r(148309),
    h = r(632384);
e.exports = function (e, n, r, p, m) {
    var g,
        E,
        v = h(e);
    if ('Undefined' !== v && 'Object' !== v) throw new i('Assertion failed: O must be undefined or an Object');
    if (!f(n)) throw new i('Assertion failed: P must be a Property Key');
    if ('Boolean' !== h(r)) throw new i('Assertion failed: extensible must be a Boolean');
    if (
        !o(
            {
                Type: h,
                IsDataDescriptor: c,
                IsAccessorDescriptor: u
            },
            p
        )
    )
        throw new i('Assertion failed: Desc must be a Property Descriptor');
    if (
        'Undefined' !== h(m) &&
        !o(
            {
                Type: h,
                IsDataDescriptor: c,
                IsAccessorDescriptor: u
            },
            m
        )
    )
        throw new i('Assertion failed: current must be a Property Descriptor, or undefined');
    if ('Undefined' === h(m))
        return (
            !!r &&
            ('Undefined' === v ||
                (u(p)
                    ? a(c, _, l, e, n, p)
                    : a(c, _, l, e, n, {
                          '[[Configurable]]': !!p['[[Configurable]]'],
                          '[[Enumerable]]': !!p['[[Enumerable]]'],
                          '[[Value]]': p['[[Value]]'],
                          '[[Writable]]': !!p['[[Writable]]']
                      })))
        );
    if (
        !s(
            {
                IsAccessorDescriptor: u,
                IsDataDescriptor: c
            },
            m
        )
    )
        throw new i('`current`, when present, must be a fully populated and valid Property Descriptor');
    if (!m['[[Configurable]]']) {
        if (('[[Configurable]]' in p && p['[[Configurable]]']) || ('[[Enumerable]]' in p && !_(p['[[Enumerable]]'], m['[[Enumerable]]'])) || (!d(p) && !_(u(p), u(m)))) return !1;
        if (u(m)) {
            if (('[[Get]]' in p && !_(p['[[Get]]'], m['[[Get]]'])) || ('[[Set]]' in p && !_(p['[[Set]]'], m['[[Set]]']))) return !1;
        } else if (!m['[[Writable]]'] && (('[[Writable]]' in p && p['[[Writable]]']) || ('[[Value]]' in p && !_(p['[[Value]]'], m['[[Value]]'])))) return !1;
    }
    if ('Undefined' !== v)
        return c(m) && u(p)
            ? ((g = ('[[Configurable]]' in p ? p : m)['[[Configurable]]']),
              a(c, _, l, e, n, {
                  '[[Configurable]]': !!g,
                  '[[Enumerable]]': !!(E = ('[[Enumerable]]' in p ? p : m)['[[Enumerable]]']),
                  '[[Get]]': ('[[Get]]' in p ? p : m)['[[Get]]'],
                  '[[Set]]': ('[[Set]]' in p ? p : m)['[[Set]]']
              }))
            : u(m) && c(p)
              ? ((g = ('[[Configurable]]' in p ? p : m)['[[Configurable]]']),
                a(c, _, l, e, n, {
                    '[[Configurable]]': !!g,
                    '[[Enumerable]]': !!(E = ('[[Enumerable]]' in p ? p : m)['[[Enumerable]]']),
                    '[[Value]]': ('[[Value]]' in p ? p : m)['[[Value]]'],
                    '[[Writable]]': !!('[[Writable]]' in p ? p : m)['[[Writable]]']
                }))
              : a(c, _, l, e, n, p);
    return !0;
};
