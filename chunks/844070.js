n.d(t, {
    T: function () {
        return d;
    },
    z: function () {
        return f;
    }
});
var r = n(493683),
    i = n(758059),
    a = n(292556),
    s = n(703656),
    o = n(768581),
    l = n(981631),
    u = n(388032);
function c(e, t, n) {
    a.default.showNotification(
        o.ZP.getUserAvatarURL(e),
        e.username,
        t,
        {},
        {
            omitViewTracking: !0,
            omitClickTracking: !0,
            tag: e.id,
            onClick: n
        }
    );
}
function d(e) {
    c(e, u.intl.string(u.t['t3+Af3']), () => {
        {
            let { openUserProfileModal: t } = n(171368);
            t({ userId: e.id });
        }
        (0, s.uL)(l.Z5c.FRIENDS), i.Z.setSection(l.pJs.PENDING);
    });
}
function f(e) {
    c(e, u.intl.string(u.t.MYr3KS), () => {
        r.Z.openPrivateChannel(e.id);
    });
}
