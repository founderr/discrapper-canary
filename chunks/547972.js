r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(230711),
    a = r(202527),
    s = r(332325),
    o = r(981631);
function l(e) {
    switch (e) {
        case s.Z.MY_GAMES:
            return o.oAB.REGISTERED_GAMES;
        case s.Z.CLIPS:
            return o.oAB.CLIPS;
        case s.Z.OVERLAY:
            return o.oAB.OVERLAY;
        case s.Z.ACTIVITY_PRIVACY:
            return o.oAB.ACTIVITY_PRIVACY;
    }
}
function u(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { shouldMergeGameSettings: r } = a.b.getCurrentConfig({ location: 'navigator' }, { autoTrackExposure: !1 });
    r ? i.Z.open(o.oAB.GAMES, e, n) : i.Z.open(l(e), null, n);
}
