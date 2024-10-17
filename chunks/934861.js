t.d(n, {
    c: function () {
        return r;
    },
    v: function () {
        return a;
    }
});
var o = t(735250);
t(470079);
var i = t(481060),
    s = t(493683),
    l = t(475413),
    c = t(689938);
function r(e) {
    let { userId: n, onClose: t, ...r } = e;
    return (0, o.jsx)(l.tG, {
        action: 'SEND_MESSAGE',
        icon: i.ChatIcon,
        text: c.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            s.Z.openPrivateChannel(n), null == t || t();
        },
        ...r
    });
}
function a(e) {
    let { userId: n, onClose: t, ...r } = e;
    return (0, o.jsx)(l.ef, {
        action: 'SEND_MESSAGE',
        icon: i.ChatIcon,
        tooltipText: c.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            s.Z.openPrivateChannel(n), null == t || t();
        },
        ...r
    });
}
