r.d(t, {
    Z: function () {
        return _;
    }
});
var n = r(573736),
    a = r(886115);
function _(e, t, r = 250, _, i, c, s) {
    if (!c.exception || !c.exception.values || !s || !(0, n.V9)(s.originalException, Error)) return;
    let l = c.exception.values.length > 0 ? c.exception.values[c.exception.values.length - 1] : void 0;
    l &&
        (c.exception.values = (function (e, t) {
            return e.map((e) => (e.value && (e.value = (0, a.$G)(e.value, t)), e));
        })(
            (function e(t, r, a, _, i, c, s, l) {
                if (c.length >= a + 1) return c;
                let u = [...c];
                if ((0, n.V9)(_[i], Error)) {
                    o(s, l);
                    let n = t(r, _[i]),
                        c = u.length;
                    E(n, i, c, l), (u = e(t, r, a, _[i], i, [n, ...u], n, c));
                }
                return (
                    Array.isArray(_.errors) &&
                        _.errors.forEach((_, c) => {
                            if ((0, n.V9)(_, Error)) {
                                o(s, l);
                                let n = t(r, _),
                                    I = u.length;
                                E(n, `errors[${c}]`, I, l), (u = e(t, r, a, _, i, [n, ...u], n, I));
                            }
                        }),
                    u
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
function E(e, t, r, n) {
    (e.mechanism = e.mechanism || {
        type: 'generic',
        handled: !0
    }),
        (e.mechanism = {
            ...e.mechanism,
            type: 'chained',
            source: t,
            exception_id: r,
            parent_id: n
        });
}
