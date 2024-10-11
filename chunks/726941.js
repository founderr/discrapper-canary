var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(894653),
    l = n(322665),
    o = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(292191),
    _ = n(683544),
    E = n(689938),
    h = n(624849);
t.Z = function (e) {
    let { tabId: t, onSelectApplication: n, onScroll: m } = e,
        I = (0, s.e7)([r.Z], () => r.Z.getCategories()),
        p = a.useMemo(() => I.find((e) => e.id === t), [I, t]),
        g = a.useMemo(() => {
            var e;
            return [null !== (e = null == p ? void 0 : p.name) && void 0 !== e ? e : '', E.Z.Messages.GLOBAL_DISCOVERY_APPS_CATEGORY_TITLE_END];
        }, [p]);
    return (0, i.jsxs)(d.Z, {
        onScroll: m,
        children: [
            (0, i.jsx)(o.Z, {
                title: g,
                description: '',
                children: (0, i.jsx)(l.Z, {})
            }),
            (0, i.jsx)(c.Z, {
                children:
                    null == p
                        ? (0, i.jsx)('div', {
                              className: h.errorContainer,
                              children: (0, i.jsx)(u.Z, { className: h.error })
                          })
                        : (0, i.jsx)(_.Z, {
                              categoryId: p.id,
                              onSelectApplication: n
                          })
            })
        ]
    });
};
