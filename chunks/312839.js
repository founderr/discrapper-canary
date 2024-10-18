n.d(t, {
    P: function () {
        return d;
    },
    R: function () {
        return c;
    }
});
var i = n(13245),
    s = n(556296),
    r = n(237997),
    a = n(13140),
    o = n(981631),
    l = n(987650);
function c(e, t) {
    return {
        trackView() {
            i.Z.track(o.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, l.bv.Viewed);
        },
        trackClick(n) {
            let s = r.Z.isInstanceUILocked() ? o.Sbl.LOCKED_OVERLAY : o.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(o.rMx.NOTIFICATION_CLICKED, {
                ...t,
                location: s,
                action_type: n
            }),
                i.Z.notificationEvent(e, l.bv.Clicked);
        }
    };
}
function d() {
    let e = s.Z.getOverlayKeybind();
    return null != e ? (0, a.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
