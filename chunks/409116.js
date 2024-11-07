n.d(t, {
    F: function () {
        return u;
    }
}),
    n(757143);
var r = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    i = n(481060),
    l = n(937615),
    o = n(884697),
    c = n(747157);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: n, currency: a },
                renderPrice: u,
                icon: m,
                className: p,
                discount: f = o.f_,
                variant: h = 'heading-md/semibold'
            } = e,
            g = d((0, l.T4)(n, a)),
            C =
                f !== o.f_ && f.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              g,
                              (0, r.jsx)(i.Heading, {
                                  variant: h,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(f.discountPercentage, '%)')
                              })
                          ]
                      })
                    : g;
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(i.Heading, {
                variant: h,
                className: s()(c.container, p),
                children: [m, null !== (t = null == u ? void 0 : u(C)) && void 0 !== t ? t : C]
            })
        });
    };
