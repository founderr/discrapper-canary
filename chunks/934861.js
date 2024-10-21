t.d(n, {
    c: function () {
        return c;
    },
    v: function () {
        return a;
    }
});
var i = t(200651);
t(192379);
var s = t(481060),
    o = t(493683),
    l = t(475413),
    r = t(689938);
function c(e) {
    let { userId: n, onClose: t, ...c } = e;
    return (0, i.jsx)(l.tG, {
        action: 'SEND_MESSAGE',
        icon: s.ChatIcon,
        text: r.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            o.Z.openPrivateChannel(n), null == t || t();
        },
        ...c
    });
}
function a(e) {
    let { userId: n, onClose: t, ...c } = e;
    return (0, i.jsx)(l.ef, {
        action: 'SEND_MESSAGE',
        icon: s.ChatIcon,
        tooltipText: r.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            o.Z.openPrivateChannel(n), null == t || t();
        },
        ...c
    });
}
