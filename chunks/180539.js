n.d(t, {
    Z: function () {
        return p;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    s = n(816782),
    a = n(221292),
    o = n(687158),
    c = n(646915),
    u = n(433355),
    d = n(665149),
    h = n(981631),
    m = n(388032);
function p(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        p = (0, l.e7)([u.ZP], () => u.ZP.getSection(t.id, null == t ? void 0 : t.isDM())),
        f = (0, o.ZP)(t.getRecipientId()),
        g = (0, c.Z)(),
        C = p === h.ULH.PROFILE && !g;
    return (0, i.jsx)(d.JO, {
        disabled: g || n,
        tooltip: g || n ? m.intl.string(m.t.YneDgI) : C ? m.intl.string(m.t.niD64e) : m.intl.string(m.t['+FAsHh']),
        icon: r.UserCircleStatusIcon,
        onClick: () => {
            (0, a.TY)({
                displayProfile: f,
                isProfileOpen: !C
            }),
                s.Z.toggleProfilePanelSection();
        },
        selected: C && !g && !n
    });
}
