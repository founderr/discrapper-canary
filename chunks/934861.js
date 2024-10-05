t.d(n, {
    c: function () {
        return c;
    },
    v: function () {
        return a;
    }
});
var s = t(735250);
t(470079);
var i = t(481060),
    o = t(493683),
    l = t(475413),
    r = t(689938);
function c(e) {
    let { userId: n, onClose: t, ...c } = e;
    return (0, s.jsx)(l.tG, {
        action: 'SEND_MESSAGE',
        icon: i.ChatIcon,
        text: r.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            o.Z.openPrivateChannel(n), null == t || t();
        },
        ...c
    });
}
function a(e) {
    let { userId: n, onClose: t, ...c } = e;
    return (0, s.jsx)(l.ef, {
        action: 'SEND_MESSAGE',
        icon: i.ChatIcon,
        tooltipText: r.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            o.Z.openPrivateChannel(n), null == t || t();
        },
        ...c
    });
}
