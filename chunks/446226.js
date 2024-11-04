e.d(n, {
    Z: function () {
        return d;
    }
});
var i = e(442837),
    l = e(314897),
    r = e(979651),
    a = e(258609);
function d() {
    return (0, i.e7)(
        [l.default, r.Z, a.Z],
        () => {
            var t;
            let n = l.default.getId(),
                e = a.Z.getRemoteSessionId();
            return null !== (t = r.Z.getVoiceStateForSession(n, e)) && void 0 !== t ? t : void 0;
        },
        []
    );
}
