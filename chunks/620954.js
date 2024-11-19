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
    r = n(237997),
    o = n(13140),
    a = n(145597),
    s = n(987650),
    u = n(981631);
function c(e, t) {
    return {
        trackView() {
            i.Z.track(u.rMx.NOTIFICATION_VIEWED, t), i.Z.notificationEvent(e, s.bv.Viewed);
        },
        trackClick(n) {
            let l = r.Z.isLocked((0, a.QF)()) ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY;
            i.Z.track(u.rMx.NOTIFICATION_CLICKED, {
                ...t,
                location: l,
                action_type: n
            }),
                i.Z.notificationEvent(e, s.bv.Clicked);
        }
    };
}
function d() {
    let e = l.Z.getOverlayKeybind();
    return null != e ? (0, o.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
