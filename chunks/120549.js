n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(894653),
    d = n(34674),
    u = n(706454),
    h = n(595615);
function m(e) {
    let { category: t, count: n, onSelectCategory: l, selected: s } = e,
        c = r.useCallback(() => {
            l(t.id);
        }, [t.id, l]),
        d = n.toLocaleString(u.default.locale);
    return (0, i.jsxs)(o.Clickable, {
        onClick: c,
        className: a()(h.category, { [h.selected]: s }),
        children: [
            (0, i.jsx)(o.Text, {
                className: h.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: t.name
            }),
            (0, i.jsx)(o.Text, {
                className: h.count,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: d
            })
        ]
    });
}
function p(e) {
    let { countsByCategory: t, onSelectCategory: n, selectedCategoryId: l } = e,
        a = (0, s.e7)([c.Z], () => c.Z.getCategories()),
        o = r.useMemo(() => [(0, d.KQ)(), ...a], [a]);
    return (0, i.jsx)('div', {
        className: h.categories,
        children: o.map((e) => {
            var r;
            let a = e.id,
                s = null !== (r = t[a]) && void 0 !== r ? r : 0;
            return 0 !== s
                ? (0, i.jsx)(
                      m,
                      {
                          category: e,
                          count: s,
                          selected: a === l,
                          onSelectCategory: n
                      },
                      a
                  )
                : null;
        })
    });
}
