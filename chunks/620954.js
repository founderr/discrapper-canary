i.d(t, {
    P: function () {
        return c;
    },
    R: function () {
        return d;
    }
});
var n = i(13245),
    l = i(556296),
    o = i(237997),
    s = i(13140),
    r = i(145597),
    a = i(987650),
    u = i(981631);
function d(e, t) {
    return {
        trackView() {
            n.Z.track(u.rMx.NOTIFICATION_VIEWED, t), n.Z.notificationEvent(e, a.bv.Viewed);
        },
        trackClick(i) {
            let l = o.Z.isLocked((0, r.QF)()) ? u.Sbl.LOCKED_OVERLAY : u.Sbl.UNLOCKED_OVERLAY;
            n.Z.track(u.rMx.NOTIFICATION_CLICKED, {
                ...t,
                location: l,
                action_type: i
            }),
                n.Z.notificationEvent(e, a.bv.Clicked);
        }
    };
}
function c() {
    let e = l.Z.getOverlayKeybind();
    return null != e ? (0, s.BB)(e.shortcut, !0).split(' + ') : ['???'];
}
