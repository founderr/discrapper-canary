n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    a = n(89182),
    s = n(706454),
    o = n(164991),
    c = n(783393),
    d = n(112471),
    u = n(746728),
    h = n(388032),
    m = n(971766);
function p(e) {
    let { count: t, categoryId: n } = e,
        r = t.toLocaleString(s.default.locale),
        a = (0, c.E)({ categoryId: n });
    return (0, i.jsxs)('div', {
        className: m.label,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: a
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: r
            })
        ]
    });
}
function g(e) {
    let { loadId: t } = e,
        n = o.Z.useField('categoryId'),
        s = (0, d.q)(),
        g = (0, c.E)({ categoryId: n }),
        f = r.useCallback(
            (e) => {
                (0, u.I)({
                    loadId: t,
                    categoryId: Number(e)
                });
            },
            [t]
        ),
        _ = r.useMemo(
            () =>
                null == s
                    ? []
                    : s.map((e) => {
                          let [t, n] = e;
                          return {
                              id: ''.concat(t),
                              label: (0, i.jsx)(p, {
                                  categoryId: t,
                                  count: n
                              })
                          };
                      }),
            [s]
        );
    return null == s
        ? null
        : (0, i.jsxs)('div', {
              className: m.container,
              children: [
                  (0, i.jsx)(l.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-secondary',
                      children: h.intl.string(h.t.f09BQE)
                  }),
                  (0, i.jsx)(a.Z, {
                      className: m.filter,
                      items: _,
                      title: g,
                      onSelect: f,
                      selected: ''.concat(n),
                      'aria-label': h.intl.string(h.t.Ng5cTE)
                  })
              ]
          });
}
