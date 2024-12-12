r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(475179),
    a = r(812206),
    s = r(776862),
    o = r(703656),
    l = r(317381),
    u = r(531826),
    c = r(917107),
    d = r(981631);
function f(e, n) {
    let r = l.ZP.getSelfEmbeddedActivityForChannel(n),
        f = a.Z.getApplication(null == r ? void 0 : r.applicationId),
        _ = (0, u.ZP)({
            application: f,
            channelId: n
        });
    null == _ ? (0, o.uL)(d.Z5c.CHANNEL(e, n)) : (0, s.Z)(_);
    let h = l.ZP.getSelfEmbeddedActivityForChannel(n);
    null != h && (0, c.Z)(n) && (i.Z.selectParticipant(n, h.applicationId), i.Z.updateLayout(n, d.AEg.NO_CHAT));
}
