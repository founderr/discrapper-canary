n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(34674),
    r = n(823379),
    l = n(448021),
    o = n(24746),
    c = n(829499);
function d(e) {
    let { application: t } = e,
        n = a.useMemo(() => {
            var e, n, i;
            return null !== (i = (null !== (n = null === (e = t.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(s.RF).filter(r.lm)) && void 0 !== i ? i : [];
        }, [t]);
    return (0, i.jsxs)('div', {
        className: c.aboutContainer,
        children: [
            (0, i.jsx)(l.Z, {
                application: t,
                carouselItems: n
            }),
            (0, i.jsx)(o.Z, { application: t })
        ]
    });
}
