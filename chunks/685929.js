n.d(t, {
    C: function () {
        return a;
    },
    Y: function () {
        return o;
    }
});
var i = n(442837),
    l = n(496675),
    r = n(981631);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Z;
    return null != e && null != e.linkedLobby && t.can(r.Plq.MANAGE_CHANNELS, e) && t.can(r.Plq.VIEW_CHANNEL, e) && t.can(r.Plq.SEND_MESSAGES, e);
}
function o(e) {
    return (0, i.e7)([l.Z], () => a(e, l.Z));
}
