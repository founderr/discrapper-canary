n.d(t, {
    ZP: function () {
        return f;
    },
    jA: function () {
        return _;
    },
    sU: function () {
        return p;
    }
}),
    n(789020);
var r = n(442837),
    i = n(812206),
    a = n(522474),
    s = n(630388),
    o = n(636449),
    l = n(317381),
    u = n(917107),
    c = n(918559),
    d = n(981631);
function f(e) {
    var t;
    let { application: n, channelId: r } = e;
    if (null != n) {
        if ((0, s.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, d.udG.EMBEDDED)) {
            if (a.Z.getWindowOpen(d.KJ3.ACTIVITY_POPOUT) && l.ZP.getActivityPanelMode() === c.Ez.ACTIVITY_POPOUT_WINDOW) return d.KJ3.ACTIVITY_POPOUT;
            if (a.Z.getWindowOpen(d.KJ3.CHANNEL_CALL_POPOUT) && (0, u.Z)(r) && !(0, o.R)()) return d.KJ3.CHANNEL_CALL_POPOUT;
        }
    }
}
function _(e) {
    let { applicationId: t } = e,
        n = l.ZP.getCurrentEmbeddedActivity();
    if (null == n || n.applicationId !== t) return;
    let r = i.Z.getApplication(t);
    if (null != r)
        return f({
            application: r,
            channelId: n.channelId
        });
}
function p(e) {
    let { channelId: t } = e;
    return (0, r.e7)([a.Z, l.ZP, i.Z], () => {
        let e = (function (e) {
            let { channelId: t, EmbeddedActivitiesStore: n, ApplicationStore: r } = e,
                i = n.getSelfEmbeddedActivityForChannel(t),
                a = r.getApplication(null == i ? void 0 : i.applicationId);
            if (null != a)
                return f({
                    application: a,
                    channelId: t
                });
        })({
            channelId: null != t ? t : l.ZP.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: l.ZP,
            ApplicationStore: i.Z
        });
        return null != e ? a.Z.getWindow(e) : void 0;
    });
}
