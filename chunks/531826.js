r.d(n, {
    ZP: function () {
        return h;
    },
    jA: function () {
        return m;
    },
    sU: function () {
        return g;
    }
});
var i = r(789020);
var a = r(442837),
    s = r(812206),
    o = r(522474),
    l = r(630388),
    u = r(636449),
    c = r(317381),
    d = r(917107),
    f = r(918559),
    _ = r(981631);
function h(e) {
    var n;
    let { application: r, channelId: i } = e;
    if (null != r) {
        if ((0, l.yE)(null !== (n = r.flags) && void 0 !== n ? n : 0, _.udG.EMBEDDED)) {
            if (o.Z.getWindowOpen(_.KJ3.ACTIVITY_POPOUT) && c.ZP.getActivityPanelMode() === f.Ez.ACTIVITY_POPOUT_WINDOW) return _.KJ3.ACTIVITY_POPOUT;
            if (o.Z.getWindowOpen(_.KJ3.CHANNEL_CALL_POPOUT) && (0, d.Z)(i) && !(0, u.R)()) return _.KJ3.CHANNEL_CALL_POPOUT;
        }
    }
}
function p(e) {
    let { channelId: n, EmbeddedActivitiesStore: r, ApplicationStore: i } = e,
        a = r.getSelfEmbeddedActivityForChannel(n),
        s = i.getApplication(null == a ? void 0 : a.applicationId);
    if (null != s)
        return h({
            application: s,
            channelId: n
        });
}
function m(e) {
    let { applicationId: n } = e,
        r = c.ZP.getCurrentEmbeddedActivity();
    if (null == r || r.applicationId !== n) return;
    let i = s.Z.getApplication(n);
    if (null != i)
        return h({
            application: i,
            channelId: r.channelId
        });
}
function g(e) {
    let { channelId: n } = e;
    return (0, a.e7)([o.Z, c.ZP, s.Z], () => {
        let e = p({
            channelId: null != n ? n : c.ZP.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: c.ZP,
            ApplicationStore: s.Z
        });
        return null != e ? o.Z.getWindow(e) : void 0;
    });
}
