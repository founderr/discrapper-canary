n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var r = n(192379),
    i = n(695346),
    a = n(36703);
function s() {
    let [e, t] = r.useState(i.AY.getSetting());
    return {
        volume: e,
        onVolumeChange: r.useCallback((e) => {
            let n = (0, a.A)(e);
            t(n), i.AY.updateSetting(n);
        }, [])
    };
}
