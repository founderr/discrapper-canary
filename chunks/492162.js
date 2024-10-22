n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(442837),
    l = n(592125),
    a = n(938475),
    r = n(853856),
    s = n(981631);
function o(e) {
    return (0, i.cj)(
        [a.ZP, l.Z, r.Z],
        () => {
            if (e !== s.I_8) return a.ZP.getVoiceStates(e);
            let t = r.Z.getFavoriteChannels(),
                n = {};
            for (let e in t) {
                let t = l.Z.getChannel(e);
                null != t && (n[e] = a.ZP.getVoiceStatesForChannel(t));
            }
            return n;
        },
        [e]
    );
}
