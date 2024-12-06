n.d(t, {
    Z: function () {
        return o;
    }
});
var r,
    i = n(695346),
    a = n(131951),
    s = n(36703);
function o(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (r = null === (t = i.kU.getSetting()) || void 0 === t ? void 0 : t.volume) && void 0 !== r ? r : 100,
        o = (0, s.P)(n) / 100;
    return Math.min(e * o * Math.min(a.Z.getOutputVolume() / 100, 1), 1);
}
