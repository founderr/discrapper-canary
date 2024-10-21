s.d(n, {
    Z: function () {
        return u;
    }
}),
    s(47120);
var t = s(200651),
    l = s(192379),
    i = s(16084),
    r = s(86040),
    a = s(51499),
    c = s(614277),
    o = s(59023);
function u() {
    let [e, n] = l.useState(!1),
        s = async () => {
            n(!0), await (0, i.xA)();
        };
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(a.Z, {}),
            (0, t.jsx)(c.C3, {
                children: (0, t.jsx)(r.C, {
                    className: o.body,
                    isEmailResent: e,
                    resendEmail: s
                })
            }),
            (0, t.jsx)(c.O3, { children: (0, t.jsx)(r.N, {}) })
        ]
    });
}
