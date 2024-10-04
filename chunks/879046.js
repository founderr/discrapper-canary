n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(499254),
    i = n(827498),
    a = n(835473),
    o = n(541716),
    s = n(561308),
    l = n(701488),
    u = n(689938);
function c(e) {
    let { entry: t } = e,
        n = (0, a.q)(t.extra.application_id),
        c = null == n ? void 0 : n.getIconURL(l.Si.LARGE),
        d = t.extra.activity_name,
        _ = (0, s.kr)(t) && !(0, s.n2)(t) ? u.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING_V2 : u.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED_V2,
        E = {
            onClick: () => {
                r.__(i._b.TEXT, o.I.NORMAL, { applicationId: t.extra.application_id });
            },
            ariaDescription: u.Z.Messages.CONTENT_INVENTORY_OPEN_ACTIVITY_A11Y_DESCRIPTION.format({ title: d })
        };
    return {
        thumbnailUrl: c,
        title: d,
        titleClickable: E,
        thumbnailClickable: E,
        userDescription: _
    };
}
