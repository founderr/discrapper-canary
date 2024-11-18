t.d(n, {
    Z: function () {
        return N;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(120356),
    o = t.n(r),
    a = t(100621),
    s = t(399606),
    d = t(481060),
    c = t(201070),
    u = t(893966),
    x = t(472596),
    h = t(598948),
    _ = t(428936),
    g = t(41586),
    C = t(337550);
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
    let { guild: n, className: t, onPageChange: r, onMemberSelect: a } = e,
        N = n.id,
        f = (0, s.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(N), [N]),
        m = (0, c.$j)(N),
        E = (0, c.M3)(N),
        T = l.useCallback(
            (e) => {
                if (null != e) null == a || a(e);
            },
            [a]
        ),
        j = (0, x.xb)(E, m, f),
        S = l.useRef(null),
        v = l.useRef(null),
        p = l.useCallback(() => {
            var e;
            null === (e = S.current) || void 0 === e || e.resetSearchText();
        }, []);
    return (0, i.jsx)('div', {
        className: o()(C.mainTableContainer, t),
        children: (0, i.jsxs)(d.AdvancedScroller, {
            className: o()(C.horizatonalScroller),
            ref: v,
            orientation: 'horizontal',
            children: [
                (0, i.jsx)(g.Z, {
                    guild: n,
                    ref: S
                }),
                (0, i.jsx)(I, { guild: n }),
                (0, i.jsx)(h.Z, {
                    guild: n,
                    onSelectRow: T,
                    searchState: j,
                    onResetForNewMembers: p
                }),
                j !== x.po.SUCCESS_STILL_INDEXING &&
                    (0, i.jsx)(_.Z, {
                        guildId: n.id,
                        onPageChange: r
                    })
            ]
        })
    });
}
