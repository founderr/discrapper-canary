t.d(s, {
    Z: function () {
        return N;
    }
});
var n = t(200651),
    a = t(192379),
    i = t(120356),
    r = t.n(i),
    o = t(561537),
    l = t(269210),
    c = t(481060),
    d = t(58385),
    _ = t(889989),
    u = t(937615),
    E = t(624138),
    T = t(150414),
    S = t(993553),
    I = t(319978);
function N(e) {
    let { cta: s, storeListing: t, className: i } = e,
        { applicationId: N, benefits: m, description: A } = t,
        C = a.useMemo(() => (null == t.thumbnail ? null : (0, T.q)(N, t.thumbnail, 256)), [N, t.thumbnail]),
        { data: g } = (0, d.X)(t.skuId),
        h = a.useMemo(() => {
            if (null == g || 0 === g.length) return null;
            let e = g[0];
            return (0, u.xg)(e);
        }, [g]);
    return null == h
        ? null
        : (0, n.jsxs)(o.l, {
              className: r()(I.wrapper, i),
              header: (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsxs)('div', {
                          className: I.headerTitle,
                          children: [
                              null != C &&
                                  (0, n.jsx)(c.Image, {
                                      src: C.href,
                                      imageClassName: I.subscriptionImg,
                                      width: 48,
                                      height: 48
                                  }),
                              (0, n.jsxs)('div', {
                                  children: [
                                      (0, n.jsx)(c.Heading, {
                                          variant: 'heading-md/bold',
                                          children: t.summary
                                      }),
                                      (0, n.jsx)(c.Text, {
                                          variant: 'text-md/medium',
                                          children: h
                                      })
                                  ]
                              })
                          ]
                      }),
                      s
                  ]
              }),
              children: [
                  !(0, E.Ew)(A) &&
                      (0, n.jsx)('div', {
                          className: I.description,
                          children: (0, n.jsx)(S.Z, {
                              variant: 'text-sm/medium',
                              children: A
                          })
                      }),
                  null != m &&
                      m.length > 0 &&
                      (0, n.jsx)('div', {
                          className: I.benefits,
                          children: m.map((e) => {
                              let { id: s, name: t, description: a, icon: i } = e;
                              return (0, n.jsx)(
                                  l.G,
                                  {
                                      name: t,
                                      icon: (0, _.n)(N, i),
                                      description: a
                                  },
                                  s
                              );
                          })
                      })
              ]
          });
}
