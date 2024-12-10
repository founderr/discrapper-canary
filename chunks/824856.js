n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(561537),
    o = n(269210),
    c = n(481060),
    d = n(58385),
    u = n(889989),
    m = n(937615),
    h = n(624138),
    g = n(150414),
    p = n(993553),
    x = n(525981);
function S(e) {
    let { cta: t, storeListing: n, className: r } = e,
        { applicationId: S, benefits: T, description: E } = n,
        C = s.useMemo(() => (null == n.thumbnail ? null : (0, g.q)(S, n.thumbnail, 256)), [S, n.thumbnail]),
        { data: _ } = (0, d.X)(n.skuId),
        f = s.useMemo(() => {
            if (null == _ || 0 === _.length) return null;
            let e = _[0];
            return (0, m.xg)(e);
        }, [_]);
    return null == f
        ? null
        : (0, i.jsxs)(a.l, {
              className: l()(x.wrapper, r),
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: x.headerTitle,
                          children: [
                              null != C &&
                                  (0, i.jsx)(c.Image, {
                                      src: C.href,
                                      imageClassName: x.subscriptionImg,
                                      width: 48,
                                      height: 48
                                  }),
                              (0, i.jsxs)('div', {
                                  children: [
                                      (0, i.jsx)(c.Heading, {
                                          variant: 'heading-md/bold',
                                          children: n.summary
                                      }),
                                      (0, i.jsx)(c.Text, {
                                          variant: 'text-md/medium',
                                          children: f
                                      })
                                  ]
                              })
                          ]
                      }),
                      t
                  ]
              }),
              children: [
                  !(0, h.Ew)(E) &&
                      (0, i.jsx)('div', {
                          className: x.description,
                          children: (0, i.jsx)(p.Z, {
                              variant: 'text-sm/medium',
                              children: E
                          })
                      }),
                  null != T &&
                      T.length > 0 &&
                      (0, i.jsx)('div', {
                          className: x.benefits,
                          children: T.map((e) => {
                              let { id: t, name: n, description: s, icon: r } = e;
                              return (0, i.jsx)(
                                  o.Gm,
                                  {
                                      header: n,
                                      icon: (0, u.n)(S, r),
                                      description: s
                                  },
                                  t
                              );
                          })
                      })
              ]
          });
}
