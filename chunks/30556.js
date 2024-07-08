i.d(n, {
    Z: function () {
        return c;
    }
});
var o = i(735250);
i(470079);
var s = i(481060), t = i(493683), l = i(785717), a = i(993409), r = i(689938);
function c(e) {
    let {
            user: n,
            onClose: i
        } = e, {trackUserProfileAction: c} = (0, l.KZ)();
    return (0, o.jsx)(a.Z, {
        variant: 'text',
        icon: s.ChatIcon,
        text: r.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            c({ action: 'SEND_MESSAGE' }), t.Z.openPrivateChannel(n.id), null == i || i();
        }
    });
}
