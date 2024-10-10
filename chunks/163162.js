r.d(t, {
    Wz: function () {
        return s;
    },
    m9: function () {
        return E;
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
            let E = function () {
                let o = Array.prototype.slice.call(arguments);
                try {
                    _ && 'function' == typeof _ && _.apply(this, arguments);
                    let n = o.map((t) => e(t, r));
                    return t.apply(this, n);
                } catch (e) {
                    throw (
                        (c++,
                        setTimeout(() => {
                            c--;
                        }),
                        (0, n.$e)((t) => {
                            t.addEventProcessor(
                                (e) => (
                                    r.mechanism && ((0, i.Db)(e, void 0, void 0), (0, i.EG)(e, r.mechanism)),
                                    (e.extra = {
                                        ...e.extra,
                                        arguments: o
                                    }),
                                    e
                                )
                            ),
                                (0, a.Tb)(e);
                        }),
                        e)
                    );
                }
            };
            try {
                for (let e in t) Object.prototype.hasOwnProperty.call(t, e) && (E[e] = t[e]);
            } catch (e) {}
            (0, o.$Q)(E, t), (0, o.xp)(t, '__sentry_wrapped__', E);
            try {
                Object.getOwnPropertyDescriptor(E, 'name').configurable && Object.defineProperty(E, 'name', { get: () => t.name });
            } catch (e) {}
            return E;
        };
    }
});
var n = r(263449),
    a = r(233517),
    _ = r(899517),
    o = r(370336),
    i = r(394798);
let E = _.n,
    c = 0;
function s() {
    return c > 0;
}
