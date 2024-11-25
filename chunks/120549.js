n.d(t, {
    V: function () {
        return _;
    },
    Z: function () {
        return f;
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
    u = n(89182),
    h = n(706454),
    m = n(388032),
    p = n(968654);
function g(e) {
    let { category: t, count: n, onSelectCategory: l, selected: s } = e,
        c = r.useCallback(() => {
            l(t.id);
        }, [t.id, l]),
        d = n.toLocaleString(h.default.locale);
    return (0, i.jsxs)(o.Clickable, {
        onClick: c,
        className: a()(p.category, { [p.selected]: s }),
        children: [
            (0, i.jsx)(o.Text, {
                className: p.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: t.name
            }),
            (0, i.jsx)(o.Text, {
                className: p.count,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: d
            })
        ]
    });
}
function f(e) {
    let { countsByCategory: t, onSelectCategory: n, selectedCategoryId: l } = e,
        a = (0, s.e7)([c.Z], () => c.Z.getCategories()),
        o = r.useMemo(
            () =>
                [(0, d.KQ)(), ...a].filter((e) => {
                    var n;
                    return (null !== (n = t[e.id]) && void 0 !== n ? n : 0) !== 0;
                }),
            [a, t]
        );
    return 0 === o.length
        ? null
        : (0, i.jsx)('div', {
              className: p.categories,
              children: o.map((e) => {
                  var r;
                  let a = e.id,
                      s = null !== (r = t[a]) && void 0 !== r ? r : 0;
                  return 0 !== s
                      ? (0, i.jsx)(
                            g,
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
function _(e) {
    var t;
    let { countsByCategory: n, onSelectCategory: l, selectedCategoryId: a } = e,
        h = (0, s.e7)([c.Z], () => c.Z.getCategories()),
        g = r.useMemo(
            () =>
                [(0, d.KQ)(), ...h].filter((e) => {
                    var t;
                    return (null !== (t = n[e.id]) && void 0 !== t ? t : 0) !== 0;
                }),
            [h, n]
        ),
        f = r.useMemo(
            () =>
                g.map((e) => ({
                    id: ''.concat(e.id),
                    label: (0, i.jsx)(u.iG, {
                        count: n[e.id],
                        name: e.name
                    })
                })),
            [g, n]
        ),
        _ = r.useCallback(
            (e) => {
                l(Number(e));
            },
            [l]
        ),
        E = r.useMemo(() => g.find((e) => e.id === a), [a, g]);
    return 0 === f.length
        ? null
        : (0, i.jsxs)('div', {
              className: p.container,
              children: [
                  (0, i.jsx)(o.Text, {
                      variant: 'text-sm/medium',
                      color: 'text-secondary',
                      children: m.intl.string(m.t.f09BQE)
                  }),
                  (0, i.jsx)(u.ZP, {
                      items: f,
                      title: null !== (t = null == E ? void 0 : E.name) && void 0 !== t ? t : '',
                      onSelect: _,
                      selected: ''.concat(a),
                      'aria-label': m.intl.string(m.t.WHdCwc),
                      variant: u.PA.FILLED
                  })
              ]
          });
}
