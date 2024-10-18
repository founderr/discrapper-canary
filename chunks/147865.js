n.d(e, {
    ZP: function () {
        return o;
    },
    lY: function () {
        return r;
    }
});
var a = n(689938);
function o(t) {
    return t > 0 ? a.Z.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({ count: t }) : a.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS;
}
function r(t) {
    return t > 0 ? '1-'.concat(t) : a.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS_SHORT;
}
