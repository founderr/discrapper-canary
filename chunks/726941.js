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
    let { tabId: t, onScroll: n } = e,
        m = (0, s.e7)([r.Z], () => r.Z.getCategories()),
        I = a.useMemo(() => m.find((e) => e.id === t), [m, t]),
        p = a.useMemo(() => {
            var e;
            return [null !== (e = null == I ? void 0 : I.name) && void 0 !== e ? e : '', E.Z.Messages.GLOBAL_DISCOVERY_APPS_CATEGORY_TITLE_END];
        }, [I]);
    return (0, i.jsxs)(d.Z, {
        onScroll: n,
        children: [
            (0, i.jsx)(o.Z, {
                title: p,
                description: '',
                children: (0, i.jsx)(l.Z, {})
            }),
            (0, i.jsx)(c.Z, {
                children:
                    null == I
                        ? (0, i.jsx)('div', {
                              className: h.errorContainer,
                              children: (0, i.jsx)(u.Z, { className: h.error })
                          })
                        : (0, i.jsx)(_.Z, { categoryId: I.id })
            })
        ]
    });
};
