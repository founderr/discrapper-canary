s.d(n, {
    c: function () {
        return c;
    },
    v: function () {
        return a;
    }
});
var t = s(735250);
s(470079);
var i = s(481060),
    l = s(493683),
    o = s(475413),
    r = s(689938);
function c(e) {
    let { userId: n, onClose: s, ...c } = e;
    return (0, t.jsx)(o.tG, {
        action: 'SEND_MESSAGE',
        icon: i.ChatIcon,
        text: r.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            l.Z.openPrivateChannel(n), null == s || s();
        },
        ...c
    });
}
function a(e) {
    let { userId: n, onClose: s, ...c } = e;
    return (0, t.jsx)(o.ef, {
        action: 'SEND_MESSAGE',
        icon: i.ChatIcon,
        tooltipText: r.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            l.Z.openPrivateChannel(n), null == s || s();
        },
        ...c
    });
}
