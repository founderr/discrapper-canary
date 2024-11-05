n.d(t, {
    Z: function () {
        return s;
    }
});
var r = n(697426),
    i = n(375954),
    a = n(710111);
function s(e, t, n) {
    var s, o;
    let l = i.Z.getMessage(e, t),
        u = null == l ? void 0 : null === (s = l.soundboardSounds) || void 0 === s ? void 0 : s.find((e) => e.sound_id === n);
    if (null != u) return (0, r.o3)(u, null !== (o = u.guild_id) && void 0 !== o ? o : a.X8);
}
