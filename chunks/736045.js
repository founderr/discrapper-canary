r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(314897),
    a = r(592125),
    s = r(979651);
function o() {
    let e = s.Z.getVoiceStateForSession(i.default.getId(), i.default.getSessionId()),
        n = null == e ? void 0 : e.channelId;
    return a.Z.getChannel(n);
}
