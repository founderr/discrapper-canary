n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(475179),
    i = n(812206),
    a = n(776862),
    s = n(703656),
    o = n(317381),
    l = n(486003),
    u = n(917107),
    c = n(981631);
function d(e, t) {
    let n = o.ZP.getSelfEmbeddedActivityForChannel(t),
        d = i.Z.getApplication(null == n ? void 0 : n.applicationId),
        f = (0, l.ZP)({
            application: d,
            channelId: t
        });
    null == f ? (0, s.uL)(c.Z5c.CHANNEL(e, t)) : (0, a.Z)(f);
    let _ = o.ZP.getSelfEmbeddedActivityForChannel(t);
    null != _ && (0, u.Z)(t) && (r.Z.selectParticipant(t, _.applicationId), r.Z.updateLayout(t, c.AEg.NO_CHAT));
}
