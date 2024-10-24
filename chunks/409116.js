n.d(t, {
    F: function () {
        return u;
    }
}),
    n(757143);
var r = n(200651);
n(192379);
var s = n(120356),
    a = n.n(s),
    i = n(481060),
    l = n(937615),
    o = n(884697),
    c = n(747157);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: n, currency: s },
                renderPrice: u,
                icon: m,
                className: f,
                discount: p = o.f_,
                variant: C = 'heading-md/semibold'
            } = e,
            h = d((0, l.T4)(n, s)),
            g =
                p !== o.f_ && p.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              h,
                              (0, r.jsx)(i.Heading, {
                                  variant: C,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(p.discountPercentage, '%)')
                              })
                          ]
                      })
                    : h;
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(i.Heading, {
                variant: C,
                className: a()(c.container, f),
                children: [m, null !== (t = null == u ? void 0 : u(g)) && void 0 !== t ? t : g]
            })
        });
    };
