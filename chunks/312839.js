n.d(t, {
    P: function () {
        return d;
    },
    R: function () {
        return c;
    }
});
var i = n(13245),
    r = n(556296),
    s = n(237997),
    l = n(13140),
    a = n(981631),
    o = n(987650);
function c(e, t) {
    return {
        trackView() {
            i.Z.track(a.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, o.bv.Viewed);
        },
        trackClick(n) {
            let r = s.Z.isInstanceUILocked() ? a.Sbl.LOCKED_OVERLAY : a.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(a.rMx.NOTIFICATION_CLICKED, {
                ...t,
                location: r,
                action_type: n
            }),
                i.Z.notificationEvent(e, o.bv.Clicked);
        }
    };
}
function d() {
    let e = r.Z.getOverlayKeybind();
    return null != e ? (0, l.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
