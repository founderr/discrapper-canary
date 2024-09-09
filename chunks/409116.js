r.d(t, {
    F: function () {
        return u;
    }
}),
    r(757143);
var a = r(735250);
r(470079);
var n = r(120356),
    s = r.n(n),
    i = r(481060),
    o = r(937615),
    l = r(884697),
    c = r(222541);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: r, currency: n },
                renderPrice: u,
                icon: f,
                className: p,
                discount: C = l.f_,
                variant: _ = 'heading-md/semibold'
            } = e,
            m = d((0, o.T4)(r, n)),
            g =
                C !== l.f_ && C.discountPercentage >= 5
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              m,
                              (0, a.jsx)(i.Heading, {
                                  variant: _,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(C.discountPercentage, '%)')
                              })
                          ]
                      })
                    : m;
        return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(i.Heading, {
                variant: _,
                className: s()(c.container, p),
                children: [f, null !== (t = null == u ? void 0 : u(g)) && void 0 !== t ? t : g]
            })
        });
    };
