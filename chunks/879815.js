n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(442837),
    r = n(314897),
    l = n(131951),
    a = n(979651);
function o(e) {
    return (0, i.cj)(
        [a.Z, l.Z, r.default],
        () =>
            (function (e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Z,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.Z,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r.default,
                    s = null != e ? n.getVoiceState(e.getGuildId(), o.getId()) : null;
                return {
                    selfDeaf: i.isSelfDeaf(),
                    deaf: null !== (t = null == s ? void 0 : s.deaf) && void 0 !== t && t
                };
            })(e, a.Z, l.Z, r.default),
        [e]
    );
}
