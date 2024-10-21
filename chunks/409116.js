s.d(t, {
    F: function () {
        return u;
    }
}),
    s(757143);
var a = s(200651);
s(192379);
var r = s(120356),
    n = s.n(r),
    i = s(481060),
    l = s(937615),
    o = s(884697),
    c = s(747157);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: s, currency: r },
                renderPrice: u,
                icon: m,
                className: C,
                discount: f = o.f_,
                variant: p = 'heading-md/semibold'
            } = e,
            h = d((0, l.T4)(s, r)),
            g =
                f !== o.f_ && f.discountPercentage >= 5
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              h,
                              (0, a.jsx)(i.Heading, {
                                  variant: p,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(f.discountPercentage, '%)')
                              })
                          ]
                      })
                    : h;
        return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(i.Heading, {
                variant: p,
                className: n()(c.container, C),
                children: [m, null !== (t = null == u ? void 0 : u(g)) && void 0 !== t ? t : g]
            })
        });
    };
