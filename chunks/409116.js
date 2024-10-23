r.d(t, {
    F: function () {
        return u;
    }
}),
    r(757143);
var s = r(200651);
r(192379);
var n = r(120356),
    a = r.n(n),
    i = r(481060),
    l = r(937615),
    o = r(884697),
    c = r(747157);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: r, currency: n },
                renderPrice: u,
                icon: m,
                className: f,
                discount: p = o.f_,
                variant: C = 'heading-md/semibold'
            } = e,
            h = d((0, l.T4)(r, n)),
            g =
                p !== o.f_ && p.discountPercentage >= 5
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              h,
                              (0, s.jsx)(i.Heading, {
                                  variant: C,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(p.discountPercentage, '%)')
                              })
                          ]
                      })
                    : h;
        return (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)(i.Heading, {
                variant: C,
                className: a()(c.container, f),
                children: [m, null !== (t = null == u ? void 0 : u(g)) && void 0 !== t ? t : g]
            })
        });
    };
