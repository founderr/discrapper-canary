n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(442837),
    r = n(314897),
    a = n(944486),
    l = n(88751);
function s(e) {
    return (0, i.e7)(
        [r.default, a.Z, l.ZP],
        () => {
            let t = r.default.getId();
            return a.Z.getVoiceChannelId() === e ? l.ZP.getPermissionsForUser(t, e) : null;
        },
        [e]
    );
}
