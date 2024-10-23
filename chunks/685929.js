t.d(n, {
    C: function () {
        return s;
    },
    Y: function () {
        return o;
    }
});
var i = t(442837),
    a = t(496675),
    l = t(981631);
function s(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z;
    return null != e && null != e.linkedLobby && n.can(l.Plq.MANAGE_CHANNELS, e) && n.can(l.Plq.VIEW_CHANNEL, e) && n.can(l.Plq.SEND_MESSAGES, e);
}
function o(e) {
    return (0, i.e7)([a.Z], () => s(e, a.Z));
}
