n.d(t, {
    K: function () {
        return l;
    },
    z: function () {
        return u;
    }
});
var r = n(481060),
    i = n(475179),
    a = n(925549),
    o = n(905423),
    s = n(981631);
function l(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!(0, r.hasAnyModalOpen)()) n && a.Z.channelListScrollTo(e, t), l && null != t && i.Z.updateChatOpen(t, !0), o.Z.getState().updatePath(s.Z5c.CHANNEL(e, t));
}
function u(e) {
    if (!(0, r.hasAnyModalOpen)()) o.Z.getState().updatePath(e);
}
