r.d(n, {
    Xj: function () {
        return v;
    },
    fq: function () {
        return I;
    },
    rR: function () {
        return b;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(392711),
    o = r.n(s),
    l = r(442837),
    u = r(726542),
    c = r(487576),
    d = r(553795),
    f = r(594174),
    _ = r(70956),
    h = r(981631),
    p = r(420212);
let m = { [h.ABu.INSTAGRAM]: ['1036753656588017764'] },
    g = new Map([[h.ABu.INSTAGRAM, new Date(2023, 1, 18).getTime()]]),
    E = 30 * _.Z.Millis.DAY;
function v(e) {
    let { forUserProfile: n } = e,
        r = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
        i = c.c.useExperiment({ location: 'f2f7ef_1' }, { autoTrackExposure: !1 }).allowPlayStationStaging;
    return (e) => {
        var a;
        return e.type === h.ABu.PLAYSTATION_STAGING ? i : !!(void 0 !== r && (null === (a = m[e.type]) || void 0 === a ? void 0 : a.includes(r.id))) || !!n || e.enabled;
    };
}
function I() {
    let e = (0, l.e7)([d.Z], () => d.Z.getAccounts()),
        n = v({ forUserProfile: !1 }),
        r = a.useMemo(() => {
            let n = new Set();
            return e.forEach((e) => n.add(e.type)), n;
        }, [e]);
    return a.useMemo(
        () =>
            o().sortBy(u.Z.filter(n), [
                (e) => {
                    var n;
                    return !(g.has(e.type) && Date.now() < (null !== (n = g.get(e.type)) && void 0 !== n ? n : 0) + E);
                },
                (e) => r.has(e.type),
                (e) => e.hasMetadata,
                (e) => !h.vbS.has(e.type),
                (e) => e.name
            ]),
        [r, n]
    );
}
let T = new Map([
    [h.ABu.PLAYSTATION, 2],
    [h.ABu.XBOX, 2],
    [h.ABu.SPOTIFY, 1],
    [h.ABu.STEAM, 1],
    [h.ABu.TWITCH, 1]
]);
function b(e) {
    let [n, r] = a.useState(!1);
    function i(e) {
        let { key: n } = e;
        n === p.vn.SHIFT && r(!0);
    }
    function s(e) {
        let { key: n } = e;
        n === p.vn.SHIFT && r(!1);
    }
    return (a.useEffect(
        () => (
            window.addEventListener('keydown', i),
            window.addEventListener('keyup', s),
            () => {
                window.removeEventListener('keydown', i), window.removeEventListener('keyup', s);
            }
        ),
        []
    ),
    n && e === h.ABu.TWITTER)
        ? h.ABu.TWITTER_LEGACY
        : e;
}
