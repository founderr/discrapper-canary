r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(131704),
    a = r(592125),
    s = r(979651);
function o(e) {
    var n;
    let { channelId: r, userId: o, activity: l } = e,
        u = a.Z.getChannel(r),
        c = (null == l ? void 0 : l.session_id) == null || (null != u && (0, i.Qm)(u.type)) ? r : null === (n = s.Z.getVoiceStateForSession(o, null == l ? void 0 : l.session_id)) || void 0 === n ? void 0 : n.channelId;
    return null != c ? c : void 0;
}
