n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(493683), o = n(785717), s = n(993409), l = n(689938);
function u(e) {
    let {
            user: t,
            onClose: n,
            ...u
        } = e, {trackUserProfileAction: c} = (0, o.KZ)();
    return (0, r.jsx)(s.Z, {
        icon: i.ChatIcon,
        text: l.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            c({ action: 'SEND_MESSAGE' }), a.Z.openPrivateChannel(t.id), null == n || n();
        },
        ...u
    });
}
