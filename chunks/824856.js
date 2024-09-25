t.d(s, {
    Z: function () {
        return E;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(561537),
    r = t(269210),
    o = t(481060),
    l = t(58385),
    c = t(889989),
    d = t(937615),
    _ = t(150414),
    u = t(319978);
function E(e) {
    let { cta: s, storeListing: t } = e,
        { applicationId: E, benefits: T, description: S } = t,
        I = a.useMemo(() => (null == t.thumbnail ? null : (0, _.q)(E, t.thumbnail, 256)), [E, t.thumbnail]),
        { data: N } = (0, l.X)(t.skuId),
        A = a.useMemo(() => {
            if (null == N || 0 === N.length) return null;
            let e = N[0];
            return (0, d.xg)(e);
        }, [N]);
    return null == A
        ? null
        : (0, n.jsxs)(i.l, {
              className: u.wrapper,
              header: (0, n.jsxs)(n.Fragment, {
                  children: [
                      (0, n.jsxs)('div', {
                          className: u.headerTitle,
                          children: [
                              null != I &&
                                  (0, n.jsx)(o.Image, {
                                      src: I.href,
                                      imageClassName: u.subscriptionImg,
                                      width: 48,
                                      height: 48
                                  }),
                              (0, n.jsxs)('div', {
                                  children: [
                                      (0, n.jsx)(o.Heading, {
                                          variant: 'heading-md/bold',
                                          children: t.summary
                                      }),
                                      (0, n.jsx)(o.Text, {
                                          variant: 'text-md/medium',
                                          children: A
                                      })
                                  ]
                              })
                          ]
                      }),
                      s
                  ]
              }),
              children: [
                  '' !== S &&
                      (0, n.jsx)('div', {
                          className: u.description,
                          children: (0, n.jsx)(o.Text, {
                              variant: 'text-sm/medium',
                              children: S
                          })
                      }),
                  null != T &&
                      (0, n.jsx)('div', {
                          className: u.benefits,
                          children: T.map((e) => {
                              let { id: s, name: t, description: a, icon: i } = e;
                              return (0, n.jsx)(
                                  r.G,
                                  {
                                      name: t,
                                      icon: (0, c.n)(E, i),
                                      description: a
                                  },
                                  s
                              );
                          })
                      })
              ]
          });
}
