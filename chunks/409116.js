n.d(t, {
    F: function () {
        return u;
    }
}),
    n(757143);
var r = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    i = n(481060),
    o = n(937615),
    l = n(884697),
    c = n(222541);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: n, currency: s },
                renderPrice: u,
                icon: f,
                className: p,
                discount: g = l.f_,
                variant: C = 'heading-md/semibold'
            } = e,
            m = d((0, o.T4)(n, s)),
            _ =
                g !== l.f_ && g.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              m,
                              (0, r.jsx)(i.Heading, {
                                  variant: C,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(g.discountPercentage, '%)')
                              })
                          ]
                      })
                    : m;
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(i.Heading, {
                variant: C,
                className: a()(c.container, p),
                children: [f, null !== (t = null == u ? void 0 : u(_)) && void 0 !== t ? t : _]
            })
        });
    };
