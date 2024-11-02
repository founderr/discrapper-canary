n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(442837),
    o = n(314897),
    a = n(351780),
    s = n(843693);
function l(e, t) {
    return e === t || ((null == e ? void 0 : e.channelId) === (null == t ? void 0 : t.channelId) && (null == e ? void 0 : e.value) === (null == t ? void 0 : t.value) && (null == e ? void 0 : e.multiplier) === (null == t ? void 0 : t.multiplier) && !0);
}
function r(e) {
    let t = (0, i.e7)([a.Z], () => !!a.Z.isEnabled() && a.Z.combosEnabled);
    return (0, i.e7)([s.ZP, o.default], () => (t ? s.ZP.getUserCombo(o.default.getId(), e) : void 0), [e, t], l);
}
