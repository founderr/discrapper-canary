var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(894653),
    s = n(322665),
    o = n(17845),
    c = n(374939),
    d = n(283293),
    u = n(493646),
    h = n(292191),
    m = n(683544),
    p = n(863375);
t.Z = function (e) {
    var t;
    let { tabId: n, onSelectApplication: g, onScroll: f } = e,
        _ = r.useRef(null),
        E = r.useCallback(() => {
            var e;
            null === (e = _.current) || void 0 === e || e.scrollTo({ to: 0 });
        }, []),
        I = (0, l.e7)([a.Z], () => a.Z.getCategories()),
        C = r.useMemo(() => I.find((e) => e.id === n), [I, n]),
        v = r.useMemo(() => (null != C ? (0, u.v)(C) : ''), [C]);
    return (0, i.jsxs)(d.Z, {
        onScroll: f,
        ref: _,
        children: [
            (0, i.jsx)(o.Z, {
                title: null !== (t = null == C ? void 0 : C.name) && void 0 !== t ? t : '',
                description: v,
                children: (0, i.jsx)(s.Z, {})
            }),
            (0, i.jsx)(c.Z, {
                children:
                    null == C
                        ? (0, i.jsx)('div', {
                              className: p.errorContainer,
                              children: (0, i.jsx)(h.Z, { className: p.error })
                          })
                        : (0, i.jsx)(m.Z, {
                              categoryId: C.id,
                              onSelectApplication: g,
                              resetScroll: E
                          })
            })
        ]
    });
};
