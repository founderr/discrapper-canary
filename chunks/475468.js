t.d(n, {
    K: function () {
        return o;
    },
    z: function () {
        return u;
    }
});
var l = t(481060),
    i = t(475179),
    r = t(925549),
    a = t(905423),
    s = t(981631);
function o(e, n) {
    let t = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!(0, l.hasAnyModalOpen)()) t && r.Z.channelListScrollTo(e, n), o && null != n && i.Z.updateChatOpen(n, !0), a.Z.getState().updatePath(s.Z5c.CHANNEL(e, n));
}
function u(e) {
    if (!(0, l.hasAnyModalOpen)()) a.Z.getState().updatePath(e);
}
