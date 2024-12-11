t.d(n, {
    Z: function () {
        return j;
    }
});
var l = t(200651),
    r = t(192379),
    i = t(120356),
    a = t.n(i),
    o = t(752877),
    s = t(399606),
    c = t(481060),
    d = t(201070),
    u = t(893966),
    x = t(472596),
    m = t(598948),
    h = t(428936),
    b = t(41586),
    _ = t(676391);
function C(e) {
    let { guild: n } = e,
        t = (0, d.$j)(n.id),
        r = (0, c.useSpring)({
            height: t ? 3 : 0,
            config: o.config.stiff
        });
    return (0, l.jsx)('div', {
        className: _.loaderContainer,
        children: (0, l.jsx)(o.animated.div, {
            className: _.loaderBar,
            style: r
        })
    });
}
function j(e) {
    let { guild: n, className: t, onPageChange: i, onMemberSelect: o } = e,
        j = n.id,
        g = (0, s.e7)([u.Z], () => u.Z.getEstimatedMemberSearchCountByGuildId(j), [j]),
        f = (0, d.$j)(j),
        v = (0, d.M3)(j),
        p = r.useCallback(
            (e) => {
                if (null != e) null == o || o(e);
            },
            [o]
        ),
        N = (0, x.xb)(v, f, g),
        S = r.useRef(null),
        T = r.useRef(null),
        E = r.useCallback(() => {
            var e;
            null === (e = S.current) || void 0 === e || e.resetSearchText();
        }, []);
    return (0, l.jsx)('div', {
        className: a()(_.mainTableContainer, t),
        children: (0, l.jsxs)(c.AdvancedScroller, {
            className: a()(_.horizatonalScroller),
            ref: T,
            orientation: 'horizontal',
            children: [
                (0, l.jsx)(b.Z, {
                    guild: n,
                    ref: S
                }),
                (0, l.jsx)(C, { guild: n }),
                (0, l.jsx)(m.Z, {
                    guild: n,
                    onSelectRow: p,
                    searchState: N,
                    onResetForNewMembers: E
                }),
                N !== x.po.SUCCESS_STILL_INDEXING &&
                    (0, l.jsx)(h.Z, {
                        guildId: n.id,
                        onPageChange: i
                    })
            ]
        })
    });
}
