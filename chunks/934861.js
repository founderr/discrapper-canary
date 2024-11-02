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
var l = t(481060),
    o = t(493683),
    s = t(475413),
    r = t(388032);
function c(e) {
    let { userId: n, onClose: t, ...c } = e;
    return (0, i.jsx)(s.tG, {
        action: 'SEND_MESSAGE',
        icon: l.ChatIcon,
        text: r.intl.string(r.t.zROXER),
        onClick: () => {
            o.Z.openPrivateChannel(n), null == t || t();
        },
        ...c
    });
}
function a(e) {
    let { userId: n, onClose: t, ...c } = e;
    return (0, i.jsx)(s.ef, {
        action: 'SEND_MESSAGE',
        icon: l.ChatIcon,
        tooltipText: r.intl.string(r.t.zROXER),
        onClick: () => {
            o.Z.openPrivateChannel(n), null == t || t();
        },
        ...c
    });
}
