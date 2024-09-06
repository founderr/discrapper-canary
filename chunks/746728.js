n.d(t, {
    I: function () {
        return I;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(731965),
    c = n(481060),
    d = n(706454),
    u = n(783393),
    _ = n(859921),
    h = n(416771),
    E = n(112471),
    m = n(233392);
function I(e) {
    var t;
    let { categoryId: n, loadId: i } = e;
    (0, o.j)(() => _.B.setState({ searchCategoryId: n }));
    let a = _.B.getState();
    (0, h.y)({
        loadId: i,
        categoryId: n,
        offset: 0,
        searchQuery: a.searchQuery,
        languageCode: null !== (t = a.searchLanguageCode) && void 0 !== t ? t : (0, h.X)()
    });
}
function g(e) {
    let { loadId: t, categoryId: n, count: s } = e,
        o = a.useCallback(() => {
            I({
                categoryId: n,
                loadId: t
            });
        }, [n, t]),
        h =
            (0, _.B)((e) => {
                let { searchCategoryId: t } = e;
                return t;
            }, l.Z) === n,
        E = s.toLocaleString(d.default.locale),
        g = (0, u.E)({ categoryId: n });
    return (0, i.jsxs)(c.Clickable, {
        onClick: o,
        className: r()(m.category, { [m.selected]: h }),
        children: [
            (0, i.jsx)(c.Text, {
                className: m.name,
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: g
            }),
            (0, i.jsx)(c.Text, {
                className: m.count,
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: E
            })
        ]
    });
}
t.Z = function (e) {
    let { loadId: t } = e,
        n = (0, E.q)();
    return null == n
        ? null
        : (0, i.jsx)('div', {
              className: m.categories,
              children: n.map((e) => {
                  let [n, a] = e;
                  return (0, i.jsx)(
                      g,
                      {
                          loadId: t,
                          categoryId: n,
                          count: a
                      },
                      n
                  );
              })
          });
};
