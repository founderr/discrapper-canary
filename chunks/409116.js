n.d(t, {
    F: function () {
        return u;
    }
}),
    n(757143);
var r = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    o = n(481060),
    i = n(937615),
    c = n(884697),
    l = n(222541);
let d = (e) => (e.length > 5 ? e.replace(/\.00$/, '') : e),
    u = (e) => {
        var t;
        let {
                price: { amount: n, currency: a },
                renderPrice: u,
                icon: f,
                className: p,
                discount: g = c.f_,
                variant: C = 'heading-md/semibold'
            } = e,
            m = d((0, i.T4)(n, a)),
            _ =
                g !== c.f_ && g.discountPercentage >= 5
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              m,
                              (0, r.jsx)(o.Heading, {
                                  variant: C,
                                  color: 'text-positive',
                                  className: l.discount,
                                  children: ' (-'.concat(g.discountPercentage, '%)')
                              })
                          ]
                      })
                    : m;
        return (0, r.jsx)(r.Fragment, {
            children: (0, r.jsxs)(o.Heading, {
                variant: C,
                className: s()(l.container, p),
                children: [f, null !== (t = null == u ? void 0 : u(_)) && void 0 !== t ? t : _]
            })
        });
    };
