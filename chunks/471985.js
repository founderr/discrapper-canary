t.d(n, {
    Z: function () {
        return o;
    }
});
var r = t(831565),
    i = t(282421);
function o(e) {
    let n = (0, r.v)({
            location: e,
            autoTrackExposure: !1
        }),
        { enabled: t } = i.B.useExperiment({ location: e }, { autoTrackExposure: !1 });
    return t || n;
}
