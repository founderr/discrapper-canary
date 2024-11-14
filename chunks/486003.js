n.d(t, {
    ZP: function () {
        return f;
    },
    sU: function () {
        return _;
    }
}),
    n(789020);
var r = n(442837),
    i = n(812206),
    a = n(928518),
    s = n(630388),
    o = n(317381),
    l = n(316253),
    u = n(917107),
    c = n(918559),
    d = n(981631);
function f(e) {
    var t;
    let { application: n, channelId: r } = e;
    if (null != n) {
        if ((0, s.yE)(null !== (t = n.flags) && void 0 !== t ? t : 0, d.udG.EMBEDDED)) {
            if (a.Z.getWindowOpen(d.KJ3.ACTIVITY_POPOUT) && o.ZP.getActivityPanelMode() === c.Ez.ACTIVITY_POPOUT_WINDOW) return d.KJ3.ACTIVITY_POPOUT;
            if (a.Z.getWindowOpen(d.KJ3.CHANNEL_CALL_POPOUT) && (0, u.Z)(r) && !(0, l.Z)()) return d.KJ3.CHANNEL_CALL_POPOUT;
        }
    }
}
function _(e) {
    let { channelId: t } = e;
    return (0, r.e7)([a.Z, o.ZP, i.Z], () => {
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
            channelId: null != t ? t : o.ZP.getConnectedActivityChannelId(),
            EmbeddedActivitiesStore: o.ZP,
            ApplicationStore: i.Z
        });
        return null != e ? a.Z.getWindow(e) : void 0;
    });
}
