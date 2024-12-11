t.d(n, {
    Z: function () {
        return u;
    }
});
var l = t(499254),
    i = t(827498),
    r = t(835473),
    a = t(541716),
    o = t(561308),
    s = t(701488),
    c = t(388032);
function u(e) {
    let { entry: n } = e,
        t = (0, r.q)(n.extra.application_id),
        u = null == t ? void 0 : t.getIconURL(s.Si.LARGE),
        d = n.extra.activity_name,
        m = (0, o.Jg)(n) ? c.t.vPg1JS : c.t.rPqqtr,
        f = {
            onClick: () => {
                l.__(i._b.TEXT, a.Ie.NORMAL, { applicationId: n.extra.application_id });
            },
            ariaDescription: c.intl.formatToPlainString(c.t.NTHttL, { title: d })
        };
    return {
        thumbnailUrl: u,
        title: d,
        titleClickable: f,
        thumbnailClickable: f,
        userDescription: m
    };
}
