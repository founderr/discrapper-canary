n.d(t, {
    Z: function () {
        return T;
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
    g = n(624138),
    h = n(150414),
    p = n(993553),
    x = n(525981);
function T(e) {
    let { cta: t, storeListing: n, className: r } = e,
        { applicationId: T, benefits: S, description: _ } = n,
        E = s.useMemo(() => (null == n.thumbnail ? null : (0, h.q)(T, n.thumbnail, 256)), [T, n.thumbnail]),
        { data: C } = (0, d.X)(n.skuId),
        f = s.useMemo(() => {
            if (null == C || 0 === C.length) return null;
            let e = C[0];
            return (0, m.xg)(e);
        }, [C]);
    return null == f
        ? null
        : (0, i.jsxs)(a.l, {
              className: l()(x.wrapper, r),
              header: (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsxs)('div', {
                          className: x.headerTitle,
                          children: [
                              null != E &&
                                  (0, i.jsx)(c.Image, {
                                      src: E.href,
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
                  !(0, g.Ew)(_) &&
                      (0, i.jsx)('div', {
                          className: x.description,
                          children: (0, i.jsx)(p.Z, {
                              variant: 'text-sm/medium',
                              children: _
                          })
                      }),
                  null != S &&
                      S.length > 0 &&
                      (0, i.jsx)('div', {
                          className: x.benefits,
                          children: S.map((e) => {
                              let { id: t, name: n, description: s, icon: r } = e;
                              return (0, i.jsx)(
                                  o.Gm,
                                  {
                                      header: n,
                                      icon: (0, u.n)(T, r),
                                      description: s
                                  },
                                  t
                              );
                          })
                      })
              ]
          });
}
