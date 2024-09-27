var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(894653),
    l = n(322665),
    o = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(689938);
t.Z = function (e) {
    let { tabId: t } = e,
        n = (0, s.e7)([r.Z], () => r.Z.getCategories()),
        _ = a.useMemo(() => {
            var e, i;
            return [null !== (i = null === (e = n.find((e) => e.id === t)) || void 0 === e ? void 0 : e.name) && void 0 !== i ? i : '', u.Z.Messages.GLOBAL_DISCOVERY_APPS_CATEGORY_TITLE_END];
        }, [n, t]);
    return (0, i.jsxs)(d.Z, {
        onScroll: () => {},
        children: [
            (0, i.jsx)(o.Z, {
                title: _,
                description: '',
                children: (0, i.jsx)(l.Z, {})
            }),
            (0, i.jsx)(c.Z, { children: null })
        ]
    });
};
