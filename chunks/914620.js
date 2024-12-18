t.d(n, {
    Z: function () {
        return d;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(120356),
    a = t.n(r),
    s = t(481060),
    o = t(934269),
    c = t(910200),
    u = t(37633);
function d(e) {
    let { guildId: n, setPopoutRef: t } = e,
        { guildProfile: r, fetchGuildProfile: d } = (0, o.u)(n),
        h = i.useRef(null);
    i.useEffect(() => {
        d();
    }, [d]),
        i.useEffect(() => {
            null == t || t(null == h ? void 0 : h.current);
        }, [h, t]);
    let m = null;
    return (
        (m =
            null == r
                ? (0, l.jsx)('div', {
                      className: a()(u.container, u.spinnerContainer),
                      children: (0, l.jsx)(s.Spinner, {})
                  })
                : (0, l.jsx)('div', {
                      className: u.container,
                      children: (0, l.jsx)(c.Z, { profile: r })
                  })),
        (0, l.jsx)(s.Dialog, {
            ref: h,
            'aria-label': null == r ? void 0 : r.name,
            children: m
        })
    );
}
