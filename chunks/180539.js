n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var s = n(442837),
    a = n(481060),
    l = n(816782),
    r = n(221292),
    o = n(687158),
    c = n(646915),
    u = n(433355),
    d = n(665149),
    h = n(981631),
    p = n(689938);
function m(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        m = (0, s.e7)([u.ZP], () => u.ZP.getSection(t.id, null == t ? void 0 : t.isDM())),
        _ = (0, o.ZP)(t.getRecipientId()),
        f = (0, c.Z)(),
        E = m === h.ULH.PROFILE && !f;
    return (0, i.jsx)(d.JO, {
        disabled: f || n,
        tooltip: f || n ? p.Z.Messages.SHOW_USER_PROFILE_UNAVAILABLE : E ? p.Z.Messages.HIDE_USER_PROFILE : p.Z.Messages.SHOW_USER_PROFILE,
        icon: a.UserCircleStatusIcon,
        onClick: () => {
            (0, r.TY)({
                displayProfile: _,
                isProfileOpen: !E
            }),
                l.Z.toggleProfilePanelSection();
        },
        selected: E && !f && !n
    });
}
