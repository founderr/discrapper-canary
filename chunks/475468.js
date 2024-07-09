n.d(t, {
    K: function () {
        return o;
    },
    z: function () {
        return c;
    }
});
var i = n(481060), a = n(475179), s = n(925549), r = n(905423), l = n(981631);
function o(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2], o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!(0, i.hasAnyModalOpen)())
        n && s.Z.channelListScrollTo(e, t), o && null != t && a.Z.updateChatOpen(t, !0), r.Z.getState().updatePath(l.Z5c.CHANNEL(e, t));
}
function c(e) {
    if (!(0, i.hasAnyModalOpen)())
        r.Z.getState().updatePath(e);
}
