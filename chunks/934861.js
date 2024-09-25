s.d(n, {
    c: function () {
        return a;
    },
    v: function () {
        return c;
    }
});
var t = s(735250);
s(470079);
var i = s(481060),
    o = s(493683),
    l = s(475413),
    r = s(689938);
function a(e) {
    let { userId: n, onClose: s, ...a } = e;
    return (0, t.jsx)(l.tG, {
        action: 'SEND_MESSAGE',
        icon: i.ChatIcon,
        text: r.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            o.Z.openPrivateChannel(n), null == s || s();
        },
        ...a
    });
}
function c(e) {
    let { userId: n, onClose: s, ...a } = e;
    return (0, t.jsx)(l.ef, {
        action: 'SEND_MESSAGE',
        icon: i.ChatIcon,
        tooltipText: r.Z.Messages.USER_PROFILE_MESSAGE,
        onClick: () => {
            o.Z.openPrivateChannel(n), null == s || s();
        },
        ...a
    });
}
