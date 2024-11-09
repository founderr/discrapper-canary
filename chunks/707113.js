t.d(n, {
    Z: function () {
        return N;
    }
});
var i = t(200651),
    l = t(192379),
    o = t(120356),
    r = t.n(o),
    a = t(100621),
    s = t(399606),
    d = t(481060),
    c = t(201070),
    u = t(893966),
    x = t(472596),
    h = t(598948),
    _ = t(428936),
    g = t(41586),
    C = t(168586);
function I(e) {
    let { guild: n } = e,
        t = (0, c.$j)(n.id),
        l = (0, d.useSpring)({
            height: t ? 3 : 0,
            config: a.config.stiff
        });
    return (0, i.jsx)('div', {
        className: C.loaderContainer,
        children: (0, i.jsx)(a.animated.div, {
            className: C.loaderBar,
            style: l
        })
    });
}
function N(e) {
    let { guild: n, className: t, onPageChange: o, onMemberSelect: a } = e,
        N = n.id,
        f = (0, s.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(N), [N]),
        m = (0, c.$j)(N),
        T = (0, c.M3)(N),
        E = l.useCallback(
            (e) => {
                if (null != e) null == a || a(e);
            },
            [a]
        ),
        S = (0, x.xb)(T, m, f),
        j = l.useRef(null),
        v = l.useRef(null),
        p = l.useCallback(() => {
            var e;
            null === (e = j.current) || void 0 === e || e.resetSearchText();
        }, []);
    return (0, i.jsx)('div', {
        className: r()(C.mainTableContainer, t),
        children: (0, i.jsxs)(d.AdvancedScroller, {
            className: r()(C.horizatonalScroller),
            ref: v,
            orientation: 'horizontal',
            children: [
                (0, i.jsx)(g.Z, {
                    guild: n,
                    ref: j
                }),
                (0, i.jsx)(I, { guild: n }),
                (0, i.jsx)(h.Z, {
                    guild: n,
                    onSelectRow: E,
                    searchState: S,
                    onResetForNewMembers: p
                }),
                S !== x.po.SUCCESS_STILL_INDEXING &&
                    (0, i.jsx)(_.Z, {
                        guildId: n.id,
                        onPageChange: o
                    })
            ]
        })
    });
}
