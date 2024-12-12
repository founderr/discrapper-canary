t.d(n, {
    Z: function () {
        return g;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(752877),
    o = t(399606),
    c = t(481060),
    d = t(201070),
    u = t(893966),
    m = t(472596),
    x = t(598948),
    h = t(428936),
    b = t(41586),
    C = t(676391);
function j(e) {
    let { guild: n } = e,
        t = (0, d.$j)(n.id),
        i = (0, c.useSpring)({
            height: t ? 3 : 0,
            config: s.config.stiff
        });
    return (0, l.jsx)('div', {
        className: C.loaderContainer,
        children: (0, l.jsx)(s.animated.div, {
            className: C.loaderBar,
            style: i
        })
    });
}
function g(e) {
    let { guild: n, className: t, onPageChange: r, onMemberSelect: s } = e,
        g = n.id,
        f = (0, o.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(g), [g]),
        v = (0, d.$j)(g),
        N = (0, d.M3)(g),
        _ = i.useCallback(
            (e) => {
                if (null != e) null == s || s(e);
            },
            [s]
        ),
        E = (0, m.xb)(N, v, f),
        T = i.useRef(null),
        I = i.useRef(null),
        S = i.useCallback(() => {
            var e;
            null === (e = T.current) || void 0 === e || e.resetSearchText();
        }, []);
    return (0, l.jsx)('div', {
        className: a()(C.mainTableContainer, t),
        children: (0, l.jsxs)(c.AdvancedScroller, {
            className: a()(C.horizatonalScroller),
            ref: I,
            orientation: 'horizontal',
            children: [
                (0, l.jsx)(b.Z, {
                    guild: n,
                    ref: T
                }),
                (0, l.jsx)(j, { guild: n }),
                (0, l.jsx)(x.Z, {
                    guild: n,
                    onSelectRow: _,
                    searchState: E,
                    onResetForNewMembers: S
                }),
                E !== m.po.SUCCESS_STILL_INDEXING &&
                    (0, l.jsx)(h.Z, {
                        guildId: n.id,
                        onPageChange: r
                    })
            ]
        })
    });
}
