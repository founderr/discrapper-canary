var r = n(147018),
    i = n(161581),
    a = n(4340),
    s = n(325008),
    o = TypeError,
    l = Object.defineProperty,
    u = i.self !== i;
try {
    if (s) {
        var c = Object.getOwnPropertyDescriptor(i, 'self');
        (u || !c || !c.get || !c.enumerable) &&
            a(i, 'self', {
                get: function () {
                    return i;
                },
                set: function (e) {
                    if (this !== i) throw o('Illegal invocation');
                    l(i, 'self', {
                        value: e,
                        writable: !0,
                        configurable: !0,
                        enumerable: !0
                    });
                },
                configurable: !0,
                enumerable: !0
            });
    } else
        r(
            {
                global: !0,
                simple: !0,
                forced: u
            },
            { self: i }
        );
} catch (e) {}
