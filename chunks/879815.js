n.d(t, {
    Z: function () {
        return o;
    }
});
var r = n(442837),
    l = n(314897),
    i = n(131951),
    a = n(979651);
function o(e) {
    return (0, r.cj)(
        [a.Z, i.Z, l.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.Z,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l.default,
                    u = null != e ? n.getVoiceState(e.getGuildId(), o.getId()) : null;
                return {
                    selfDeaf: r.isSelfDeaf(),
                    deaf: null !== (t = null == u ? void 0 : u.deaf) && void 0 !== t && t
                };
            })(e, a.Z, i.Z, l.default),
        [e]
    );
}
