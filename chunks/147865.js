n.d(t, {
    ZP: function () {
        return i;
    },
    lY: function () {
        return a;
    }
});
var r = n(689938);
function i(e) {
    return e > 0 ? r.Z.Messages.EMBEDDED_ACTIVITIES_MAX_PARTICIPANTS.format({ count: e }) : r.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS;
}
function a(e) {
    return e > 0 ? '1-'.concat(e) : r.Z.Messages.EMBEDDED_ACTIVITIES_UNLIMITED_PARTICIPANTS_SHORT;
}
