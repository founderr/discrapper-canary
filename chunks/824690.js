r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(695346),
    o = r(36703);
function l() {
    let [e, n] = a.useState(s.AY.getSetting());
    return {
        volume: e,
        onVolumeChange: a.useCallback((e) => {
            let r = (0, o.A)(e);
            n(r), s.AY.updateSetting(r);
        }, [])
    };
}
