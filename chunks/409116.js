n.d(t, {
    F: function () {
        return u;
    }
}),
    n(757143);
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    s = n(481060),
    l = n(937615),
    o = n(884697),
    c = n(544986);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: n, currency: a },
                renderPrice: u,
                icon: m,
                className: p,
                discount: h = o.f_,
                variant: f = 'heading-md/semibold'
            } = e,
            g = d((0, l.T4)(n, a)),
            C =
                h !== o.f_ && h.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              g,
                              (0, r.jsx)(s.Heading, {
                                  variant: f,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(h.discountPercentage, '%)')
                              })
                          ]
                      })
                    : g;
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(s.Heading, {
                variant: f,
                className: i()(c.container, p),
                children: [m, null !== (t = null == u ? void 0 : u(C)) && void 0 !== t ? t : C]
            })
        });
    };
