n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(894653),
    d = n(34674),
    u = n(706454),
    _ = n(93651);
function E(e) {
    let { category: t, count: n, onSelectCategory: s, selected: l } = e,
        c = a.useCallback(() => {
            s(t.id);
        }, [t.id, s]),
        d = n.toLocaleString(u.default.locale);
    return (0, i.jsxs)(o.Clickable, {
        onClick: c,
        className: r()(_.category, { [_.selected]: l }),
        children: [
            (0, i.jsx)(o.Text, {
                className: _.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: t.name
            }),
            (0, i.jsx)(o.Text, {
                className: _.count,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: d
            })
        ]
    });
}
function h(e) {
    let { countsByCategory: t, onSelectCategory: n, selectedCategoryId: s } = e,
        r = (0, l.e7)([c.Z], () => c.Z.getCategories()),
        o = a.useMemo(() => [(0, d.KQ)(), ...r], [r]);
    return (0, i.jsx)('div', {
        className: _.categories,
        children: o.map((e) => {
            var a;
            let r = e.id,
                l = null !== (a = t[r]) && void 0 !== a ? a : 0;
            return 0 !== l
                ? (0, i.jsx)(
                      E,
                      {
                          category: e,
                          count: l,
                          selected: r === s,
                          onSelectCategory: n
                      },
                      r
                  )
                : null;
        })
    });
}
