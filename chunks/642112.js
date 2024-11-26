r.d(t, {
    Z: function () {
        return _;
    }
});
var a = r(573736),
    n = r(886115);
function _(e, t, r = 250, _, i, c, s) {
    if (!c.exception || !c.exception.values || !s || !(0, a.V9)(s.originalException, Error)) return;
    let l = c.exception.values.length > 0 ? c.exception.values[c.exception.values.length - 1] : void 0;
    l &&
        (c.exception.values = (function (e, t) {
            return e.map((e) => (e.value && (e.value = (0, n.$G)(e.value, t)), e));
        })(
            (function e(t, r, n, _, i, c, s, l) {
                if (c.length >= n + 1) return c;
                let I = [...c];
                if ((0, a.V9)(_[i], Error)) {
                    o(s, l);
                    let a = t(r, _[i]),
                        c = I.length;
                    E(a, i, c, l), (I = e(t, r, n, _[i], i, [a, ...I], a, c));
                }
                return (
                    Array.isArray(_.errors) &&
                        _.errors.forEach((_, c) => {
                            if ((0, a.V9)(_, Error)) {
                                o(s, l);
                                let a = t(r, _),
                                    u = I.length;
                                E(a, `errors[${c}]`, u, l), (I = e(t, r, n, _, i, [a, ...I], a, u));
                            }
                        }),
                    I
                );
            })(e, t, i, s.originalException, _, c.exception.values, l, 0),
            r
        ));
}
function o(e, t) {
    (e.mechanism = e.mechanism || {
        type: 'generic',
        handled: !0
    }),
        (e.mechanism = {
            ...e.mechanism,
            ...('AggregateError' === e.type && { is_exception_group: !0 }),
            exception_id: t
        });
}
function E(e, t, r, a) {
    (e.mechanism = e.mechanism || {
        type: 'generic',
        handled: !0
    }),
        (e.mechanism = {
            ...e.mechanism,
            type: 'chained',
            source: t,
            exception_id: r,
            parent_id: a
        });
}
