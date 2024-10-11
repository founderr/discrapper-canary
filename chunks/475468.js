n.d(t, {
    K: function () {
        return c;
    },
    z: function () {
        return u;
    }
});
var i = n(481060),
    r = n(475179),
    o = n(925549),
    l = n(905423),
    a = n(981631);
function c(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!(0, i.hasAnyModalOpen)()) n && o.Z.channelListScrollTo(e, t), c && null != t && r.Z.updateChatOpen(t, !0), l.Z.getState().updatePath(a.Z5c.CHANNEL(e, t));
}
function u(e) {
    if (!(0, i.hasAnyModalOpen)()) l.Z.getState().updatePath(e);
}
