n.d(t, {
    F: function () {
        return u;
    }
}),
    n(757143);
var a = n(735250);
n(470079);
var r = n(120356),
    s = n.n(r),
    o = n(481060),
    i = n(937615),
    l = n(884697),
    c = n(222541);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: n, currency: r },
                renderPrice: u,
                icon: f,
                className: p,
                discount: g = l.f_,
                variant: C = 'heading-md/semibold'
            } = e,
            m = d((0, i.T4)(n, r)),
            _ =
                g !== l.f_ && g.discountPercentage >= 5
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              m,
                              (0, a.jsx)(o.Heading, {
                                  variant: C,
                                  color: 'text-positive',
                                  className: c.discount,
                                  children: ' (-'.concat(g.discountPercentage, '%)')
                              })
                          ]
                      })
                    : m;
        return (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)(o.Heading, {
                variant: C,
                className: s()(c.container, p),
                children: [f, null !== (t = null == u ? void 0 : u(_)) && void 0 !== t ? t : _]
            })
        });
    };
