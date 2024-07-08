n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250);
n(470079);
var i = n(481060), a = n(493683), o = n(785717), s = n(505737), l = n(993409), u = n(689938);
function c(e) {
    let {
            user: t,
            guildId: n,
            onClose: c,
            ...d
        } = e, {trackUserProfileAction: _} = (0, o.KZ)();
    return (0, s.Z)(t.id, n) ? (0, r.jsx)(l.Z, {
        icon: i.ChatIcon,
        text: u.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            _({ action: 'SEND_MESSAGE' }), a.Z.openPrivateChannel(t.id), null == c || c();
        },
        ...d
    }) : null;
}
