l.d(n, {
    Z: function () {
        return c;
    }
});
var t = l(499254),
    i = l(827498),
    r = l(835473),
    a = l(541716),
    s = l(561308),
    o = l(701488),
    u = l(388032);
function c(e) {
    let { entry: n } = e,
        l = (0, r.q)(n.extra.application_id),
        c = null == l ? void 0 : l.getIconURL(o.Si.LARGE),
        d = n.extra.activity_name,
        m = (0, s.Jg)(n) ? u.t.vPg1JS : u.t.rPqqtr,
        p = {
            onClick: () => {
                t.__(i._b.TEXT, a.I.NORMAL, { applicationId: n.extra.application_id });
            },
            ariaDescription: u.intl.formatToPlainString(u.t.NTHttL, { title: d })
        };
    return {
        thumbnailUrl: c,
        title: d,
        titleClickable: p,
        thumbnailClickable: p,
        userDescription: m
    };
}
