r.d(n, {
    ZP: function () {
        return p;
    },
    jA: function () {
        return g;
    },
    sU: function () {
        return E;
    }
});
var i = r(789020);
var a = r(442837),
    s = r(812206),
    o = r(522474),
    l = r(630388),
    u = r(636449),
    c = r(317381),
    d = r(16609),
    f = r(917107),
    _ = r(918559),
    h = r(981631);
function p(e) {
    var n;
    let { application: r, channelId: i } = e;
    if (null != r) {
        if ((0, l.yE)(null !== (n = r.flags) && void 0 !== n ? n : 0, h.udG.EMBEDDED)) {
            if (o.Z.getWindowOpen(h.KJ3.ACTIVITY_POPOUT) && c.ZP.getActivityPanelMode() === _.Ez.ACTIVITY_POPOUT_WINDOW) return h.KJ3.ACTIVITY_POPOUT;
            if (o.Z.getWindowOpen(h.KJ3.CHANNEL_CALL_POPOUT) && (0, f.Z)(i) && !(0, u.R)()) return h.KJ3.CHANNEL_CALL_POPOUT;
        }
    }
}
function m(e) {
    let { channelId: n, EmbeddedActivitiesStore: r, ApplicationStore: i } = e,
        a = r.getSelfEmbeddedActivityForChannel(n),
        s = i.getApplication(null == a ? void 0 : a.applicationId);
    if (null != s)
        return p({
            application: s,
            channelId: n
        });
}
function g(e) {
    let { applicationId: n } = e,
        r = c.ZP.getCurrentEmbeddedActivity();
    if (null == r || r.applicationId !== n) return;
    let i = s.Z.getApplication(n);
    if (null != i)
        return p({
            application: i,
            channelId: (0, d.p)(r.location)
        });
}
function E(e) {
    let { channelId: n } = e;
    return (0, a.e7)([o.Z, c.ZP, s.Z], () => {
        let e = m({
            channelId: null != n ? n : c.ZP.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: c.ZP,
            ApplicationStore: s.Z
        });
        return null != e ? o.Z.getWindow(e) : void 0;
    });
}
