r.d(t, {
    Wz: function () {
        return s;
    },
    m9: function () {
        return i;
    },
    re: function () {
        return function e(t, r = {}, _) {
            if ('function' != typeof t) return t;
            try {
                let e = t.__sentry_wrapped__;
                if (e) return e;
                if ((0, o.HK)(t)) return t;
            } catch (e) {
                return t;
            }
            let i = function () {
                let o = Array.prototype.slice.call(arguments);
                try {
                    _ && 'function' == typeof _ && _.apply(this, arguments);
                    let a = o.map((t) => e(t, r));
                    return t.apply(this, a);
                } catch (e) {
                    throw (
                        (c++,
                        setTimeout(() => {
                            c--;
                        }),
                        (0, a.$e)((t) => {
                            t.addEventProcessor(
                                (e) => (
                                    r.mechanism && ((0, E.Db)(e, void 0, void 0), (0, E.EG)(e, r.mechanism)),
                                    (e.extra = {
                                        ...e.extra,
                                        arguments: o
                                    }),
                                    e
                                )
                            ),
                                (0, n.Tb)(e);
                        }),
                        e)
                    );
                }
            };
            try {
                for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (i[e] = t[e]);
            } catch (e) {}
            (0, o.$Q)(i, t), (0, o.xp)(t, '__sentry_wrapped__', i);
            try {
                Object.getOwnPropertyDescriptor(i, 'name').configurable && Object.defineProperty(i, 'name', { get: () => t.name });
            } catch (e) {}
            return i;
        };
    }
});
var a = r(263449),
    n = r(233517),
    _ = r(899517),
    o = r(370336),
    E = r(394798);
let i = _.n,
    c = 0;
function s() {
    return c > 0;
}
