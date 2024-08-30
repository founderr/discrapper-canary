l.d(n, {
    Z: function () {
        return c;
    }
});
var t = l(499254),
    r = l(827498),
    i = l(835473),
    a = l(541716),
    s = l(561308),
    u = l(701488),
    o = l(689938);
function c(e) {
    let { entry: n } = e,
        l = (0, i.q)(n.extra.application_id),
        c = null == l ? void 0 : l.getIconURL(u.Si.LARGE),
        d = n.extra.activity_name,
        m = (0, s.kr)(n) && !(0, s.n2)(n) ? o.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : o.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
        p = {
            onClick: () => {
                t._(r._b.TEXT, a.I.NORMAL, { applicationId: n.extra.application_id });
            },
            ariaDescription: o.Z.Messages.CONTENT_INVENTORY_OPEN_ACTIVITY_A11Y_DESCRIPTION.format({ title: d })
        };
    return {
        thumbnailUrl: c,
        title: d,
        titleClickable: p,
        thumbnailClickable: p,
        userDescription: m
    };
}
