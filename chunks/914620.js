t.d(n, {
    Z: function () {
        return c;
    }
});
var l = t(200651),
    i = t(192379),
    r = t(481060),
    a = t(934269),
    s = t(910200),
    o = t(37633);
function c(e) {
    let { guildId: n, setPopoutRef: t } = e,
        { guildProfile: c, fetchGuildProfile: u } = (0, a.u)(n),
        d = i.useRef(null);
    i.useEffect(() => {
        u();
    }, [u]),
        i.useEffect(() => {
            null == t || t(null == d ? void 0 : d.current);
        }, [d, t]);
    let h = null;
    return (
        (h =
            null == c
                ? (0, l.jsx)('div', {
                      className: o.container,
                      children: (0, l.jsx)(r.Spinner, {})
                  })
                : (0, l.jsx)('div', {
                      className: o.container,
                      children: (0, l.jsx)(s.Z, { profile: c })
                  })),
        (0, l.jsx)(r.Dialog, {
            ref: d,
            'aria-label': null == c ? void 0 : c.name,
            children: h
        })
    );
}
