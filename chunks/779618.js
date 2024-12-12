r.d(n, {
    Z: function () {
        return o;
    }
});
var i = r(358085),
    a = r(924557),
    s = r(65154);
function o(e) {
    let { ignorePlatformRestriction: n } = a.NV.getCurrentConfig({ location: 'isClipsClientCapable' }, { autoTrackExposure: !1 });
    return n || (i.isDesktop() && e.getMediaEngine().supports(s.AN.CLIPS));
}
