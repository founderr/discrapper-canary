n.d(t, {
    Xj: function () {
        return g;
    },
    fq: function () {
        return E;
    },
    rR: function () {
        return v;
    }
}),
    n(47120);
var r = n(192379),
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(726542),
    l = n(487576),
    u = n(553795),
    c = n(594174),
    d = n(70956),
    f = n(981631),
    _ = n(420212);
let h = { [f.ABu.INSTAGRAM]: ['1036753656588017764'] },
    p = new Map([[f.ABu.INSTAGRAM, new Date(2023, 1, 18).getTime()]]),
    m = 30 * d.Z.Millis.DAY;
function g(e) {
    let { forUserProfile: t } = e,
        n = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        r = l.c.useExperiment({ location: 'f2f7ef_1' }, { autoTrackExposure: !1 }).allowPlayStationStaging;
    return (e) => {
        var i;
        return e.type === f.ABu.PLAYSTATION_STAGING ? r : !!(void 0 !== n && (null === (i = h[e.type]) || void 0 === i ? void 0 : i.includes(n.id))) || !!t || e.enabled;
    };
}
function E() {
    let e = (0, s.e7)([u.Z], () => u.Z.getAccounts()),
        t = g({ forUserProfile: !1 }),
        n = r.useMemo(() => {
            let t = new Set();
            return e.forEach((e) => t.add(e.type)), t;
        }, [e]);
    return a().sortBy(o.Z.filter(t), [
        (e) => {
            var t;
            return !(p.has(e.type) && Date.now() < (null !== (t = p.get(e.type)) && void 0 !== t ? t : 0) + m);
        },
        (e) => n.has(e.type),
        (e) => e.hasMetadata,
        (e) => !f.vbS.has(e.type),
        (e) => e.name
    ]);
}
function v(e) {
    let [t, n] = r.useState(!1);
    function i(e) {
        let { key: t } = e;
        t === _.vn.SHIFT && n(!0);
    }
    function a(e) {
        let { key: t } = e;
        t === _.vn.SHIFT && n(!1);
    }
    return (r.useEffect(
        () => (
            window.addEventListener('keydown', i),
            window.addEventListener('keyup', a),
            () => {
                window.removeEventListener('keydown', i), window.removeEventListener('keyup', a);
            }
        ),
        []
    ),
    t && e === f.ABu.TWITTER)
        ? f.ABu.TWITTER_LEGACY
        : e;
}
