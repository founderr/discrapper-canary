n.d(t, {
    Xj: function () {
        return I;
    },
    fq: function () {
        return T;
    },
    rR: function () {
        return g;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(392711),
    o = n.n(a),
    s = n(442837),
    l = n(726542),
    u = n(487576),
    c = n(553795),
    d = n(594174),
    _ = n(70956),
    E = n(981631),
    f = n(420212);
let h = { [E.ABu.INSTAGRAM]: ['1036753656588017764'] },
    p = new Map([[E.ABu.INSTAGRAM, new Date(2023, 1, 18).getTime()]]),
    m = 30 * _.Z.Millis.DAY;
function I(e) {
    let { forUserProfile: t } = e,
        n = (0, s.e7)([d.default], () => d.default.getCurrentUser()),
        r = u.c.useExperiment({ location: 'f2f7ef_1' }, { autoTrackExposure: !1 }).allowPlayStationStaging;
    return (e) => {
        var i;
        return e.type === E.ABu.PLAYSTATION_STAGING ? r : !!(void 0 !== n && (null === (i = h[e.type]) || void 0 === i ? void 0 : i.includes(n.id))) || !!t || e.enabled;
    };
}
function T() {
    let e = (0, s.e7)([c.Z], () => c.Z.getAccounts()),
        t = I({ forUserProfile: !1 }),
        n = i.useMemo(() => {
            let t = new Set();
            return e.forEach((e) => t.add(e.type)), t;
        }, [e]);
    return o().sortBy(l.Z.filter(t), [
        (e) => {
            var t;
            return !(p.has(e.type) && Date.now() < (null !== (t = p.get(e.type)) && void 0 !== t ? t : 0) + m);
        },
        (e) => n.has(e.type),
        (e) => e.hasMetadata,
        (e) => !E.vbS.has(e.type),
        (e) => e.name
    ]);
}
function g(e) {
    let [t, n] = i.useState(!1);
    function r(e) {
        let { key: t } = e;
        t === f.vn.SHIFT && n(!0);
    }
    function a(e) {
        let { key: t } = e;
        t === f.vn.SHIFT && n(!1);
    }
    return (i.useEffect(
        () => (
            window.addEventListener('keydown', r),
            window.addEventListener('keyup', a),
            () => {
                window.removeEventListener('keydown', r), window.removeEventListener('keyup', a);
            }
        ),
        []
    ),
    t && e === E.ABu.TWITTER)
        ? E.ABu.TWITTER_LEGACY
        : e;
}
