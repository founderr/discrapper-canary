var r = n(690244)('%TypeError%'),
    i = n(116298),
    a = n(125179),
    s = n(395238),
    o = n(441596),
    l = n(75150),
    u = n(860438),
    c = n(465555),
    d = n(828148),
    f = n(148309),
    _ = n(632384);
e.exports = function (e, t, n, h, p) {
    var m,
        g,
        E = _(e);
    if ('Undefined' !== E && 'Object' !== E) throw new r('Assertion failed: O must be undefined or an Object');
    if (!d(t)) throw new r('Assertion failed: P must be a Property Key');
    if ('Boolean' !== _(n)) throw new r('Assertion failed: extensible must be a Boolean');
    if (
        !s(
            {
                Type: _,
                IsDataDescriptor: u,
                IsAccessorDescriptor: l
            },
            h
        )
    )
        throw new r('Assertion failed: Desc must be a Property Descriptor');
    if (
        'Undefined' !== _(p) &&
        !s(
            {
                Type: _,
                IsDataDescriptor: u,
                IsAccessorDescriptor: l
            },
            p
        )
    )
        throw new r('Assertion failed: current must be a Property Descriptor, or undefined');
    if ('Undefined' === _(p))
        return (
            !!n &&
            ('Undefined' === E ||
                (l(h)
                    ? i(u, f, o, e, t, h)
                    : i(u, f, o, e, t, {
                          '[[Configurable]]': !!h['[[Configurable]]'],
                          '[[Enumerable]]': !!h['[[Enumerable]]'],
                          '[[Value]]': h['[[Value]]'],
                          '[[Writable]]': !!h['[[Writable]]']
                      })))
        );
    if (
        !a(
            {
                IsAccessorDescriptor: l,
                IsDataDescriptor: u
            },
            p
        )
    )
        throw new r('`current`, when present, must be a fully populated and valid Property Descriptor');
    if (!p['[[Configurable]]']) {
        if (('[[Configurable]]' in h && h['[[Configurable]]']) || ('[[Enumerable]]' in h && !f(h['[[Enumerable]]'], p['[[Enumerable]]'])) || (!c(h) && !f(l(h), l(p)))) return !1;
        if (l(p)) {
            if (('[[Get]]' in h && !f(h['[[Get]]'], p['[[Get]]'])) || ('[[Set]]' in h && !f(h['[[Set]]'], p['[[Set]]']))) return !1;
        } else if (!p['[[Writable]]'] && (('[[Writable]]' in h && h['[[Writable]]']) || ('[[Value]]' in h && !f(h['[[Value]]'], p['[[Value]]'])))) return !1;
    }
    if ('Undefined' !== E)
        return u(p) && l(h)
            ? ((m = ('[[Configurable]]' in h ? h : p)['[[Configurable]]']),
              i(u, f, o, e, t, {
                  '[[Configurable]]': !!m,
                  '[[Enumerable]]': !!(g = ('[[Enumerable]]' in h ? h : p)['[[Enumerable]]']),
                  '[[Get]]': ('[[Get]]' in h ? h : p)['[[Get]]'],
                  '[[Set]]': ('[[Set]]' in h ? h : p)['[[Set]]']
              }))
            : l(p) && u(h)
              ? ((m = ('[[Configurable]]' in h ? h : p)['[[Configurable]]']),
                i(u, f, o, e, t, {
                    '[[Configurable]]': !!m,
                    '[[Enumerable]]': !!(g = ('[[Enumerable]]' in h ? h : p)['[[Enumerable]]']),
                    '[[Value]]': ('[[Value]]' in h ? h : p)['[[Value]]'],
                    '[[Writable]]': !!('[[Writable]]' in h ? h : p)['[[Writable]]']
                }))
              : i(u, f, o, e, t, h);
    return !0;
};
