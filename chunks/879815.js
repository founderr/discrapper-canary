n.d(t, {
    Z: function () {
        return a;
    }
});
var i = n(442837),
    r = n(314897),
    l = n(131951),
    o = n(979651);
function a(e) {
    return (0, i.cj)(
        [o.Z, l.Z, r.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Z,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
                    a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
                    s = null != e ? n.getVoiceState(e.getGuildId(), a.getId()) : null;
                return {
                    selfDeaf: i.isSelfDeaf(),
                    deaf: null !== (t = null == s ? void 0 : s.deaf) && void 0 !== t && t
                };
            })(e, o.Z, l.Z, r.default),
        [e]
    );
}
