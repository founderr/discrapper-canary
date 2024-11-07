n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var l = n(442837),
    r = n(481060),
    a = n(816782),
    s = n(221292),
    o = n(687158),
    c = n(646915),
    d = n(433355),
    u = n(665149),
    h = n(981631),
    p = n(388032);
function m(e) {
    let { channel: t, showCallOrActivityPanel: n } = e,
        m = (0, l.e7)([d.ZP], () => d.ZP.getSection(t.id, null == t ? void 0 : t.isDM())),
        f = (0, o.ZP)(t.getRecipientId()),
        g = (0, c.Z)(),
        C = m === h.ULH.PROFILE && !g;
    return (0, i.jsx)(u.JO, {
        disabled: g || n,
        tooltip: g || n ? p.intl.string(p.t.YneDgI) : C ? p.intl.string(p.t.niD64e) : p.intl.string(p.t['+FAsHh']),
        icon: r.UserCircleStatusIcon,
        onClick: () => {
            (0, s.TY)({
                displayProfile: f,
                isProfileOpen: !C
            }),
                a.Z.toggleProfilePanelSection();
        },
        selected: C && !g && !n
    });
}
