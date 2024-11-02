t.d(n, {
    C: function () {
        return a;
    },
    Y: function () {
        return o;
    }
});
var i = t(442837),
    l = t(496675),
    r = t(981631);
function a(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
    return null != e && null != e.linkedLobby && n.can(r.Plq.MANAGE_CHANNELS, e) && n.can(r.Plq.VIEW_CHANNEL, e) && n.can(r.Plq.SEND_MESSAGES, e);
}
function o(e) {
    return (0, i.e7)([l.Z], () => a(e, l.Z));
}
