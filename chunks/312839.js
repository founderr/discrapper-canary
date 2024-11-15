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
    a = n(13140),
    l = n(981631),
    o = n(987650);
function c(e, t) {
    return {
        trackView() {
            i.Z.track(l.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, o.bv.Viewed);
        },
        trackClick(n) {
            let r = s.Z.isInstanceLocked() ? l.Sbl.LOCKED_OVERLAY : l.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(l.rMx.NOTIFICATION_CLICKED, {
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
    return null != e ? (0, a.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
