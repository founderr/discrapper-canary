n.d(t, {
    W1: function () {
        return T;
    },
    z6: function () {
        return g;
    }
}),
    n(653041);
var r,
    i,
    a = n(470079),
    s = n(512722),
    o = n.n(s),
    l = n(392711),
    u = n.n(l),
    c = n(683076),
    d = n(442837),
    _ = n(224706),
    E = n(669764),
    f = n(626135),
    h = n(539746),
    p = n(981631);
((i = r || (r = {})).NoMatch = 'no match'), (i.NSFW = 'nsfw'), (i.NoSummary = 'no summary'), (i.NoReleaseDate = 'no release date'), (i.NoCoverImage = 'no cover image');
let I = u().throttle(function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0;
        f.default.track(p.rMx.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: t,
            rejection_reason: n,
            source: r
        });
    }, 2000),
    m = (e) => {
        let t = [];
        return null == e ? ['no match'] : (e.themes.includes(c.i.EROTIC) && t.push('nsfw'), (null == e.summary || 0 === e.summary.length) && t.push('no summary'), (null == e.summary || 0 === e.summary.length) && t.push('no summary'), (null == e.coverImageUrl || 0 === e.coverImageUrl.length) && t.push('no cover image'), t);
    },
    T = (e) => 0 === m(e).length,
    g = (e) => 0 === m(E.Z.getGame(e)).length;
t.ZP = (e) => {
    let { location: t, applicationId: n = '', autoTrackExposure: r = !0, source: i, trackEntryPointImpression: s = !0 } = e,
        l = (0, h.xG)(t, r);
    a.useEffect(() => {
        l && null != n && '' !== n && _.Z.getDetectableGamesSupplemental([n]);
    }, [n, l]);
    let u = (0, d.e7)([E.Z], () => E.Z.getGame(n)),
        c = a.useMemo(() => null != u && T(u), [u]);
    return (
        a.useEffect(() => {
            l && s && !1 === E.Z.isFetching(n) && (o()(null != i, 'Cannot track a Game Profile Entry Point Impressions without a source.'), I(c, n, m(u), i));
        }, [c, n, l, u, i, s]),
        {
            shouldOpenGameProfile: l && c,
            applicationId: n
        }
    );
};
