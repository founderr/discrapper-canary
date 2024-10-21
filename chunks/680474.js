n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651),
    a = n(192379),
    s = n(34674),
    r = n(823379),
    l = n(448021),
    o = n(215453),
    c = n(24746),
    d = n(829499);
function u(e) {
    let { application: t } = e,
        n = a.useMemo(() => {
            var e, n, i;
            return null !== (i = (null !== (n = null === (e = t.directory_entry) || void 0 === e ? void 0 : e.carousel_items) && void 0 !== n ? n : []).map(s.RF).filter(r.lm)) && void 0 !== i ? i : [];
        }, [t]);
    return (0, i.jsxs)('div', {
        className: d.aboutContainer,
        children: [
            (0, i.jsx)(l.Z, {
                application: t,
                carouselItems: n
            }),
            (0, i.jsx)(c.Z, { application: t }),
            (0, i.jsx)(o.Z, { application: t })
        ]
    });
}
