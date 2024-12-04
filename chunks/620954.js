n.d(t, {
    P: function () {
        return d;
    },
    R: function () {
        return c;
    }
});
var i = n(13245),
    l = n(556296),
    o = n(237997),
    r = n(13140),
    s = n(145597),
    a = n(987650),
    u = n(981631);
function c(e, t) {
    return {
        trackView() {
            i.Z.track(u.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, a.bv.Viewed);
        },
        trackClick(n) {
            let l = o.Z.isLocked((0, s.QF)()) ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(u.rMx.NOTIFICATION_CLICKED, {
                ...t,
                location: l,
                action_type: n
            }),
                i.Z.notificationEvent(e, a.bv.Clicked);
        }
    };
}
function d() {
    let e = l.Z.getOverlayKeybind();
    return null != e ? (0, r.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
