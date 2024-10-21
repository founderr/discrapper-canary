n.d(t, {
    z6: function () {
        return g;
    }
}),
    n(789020),
    n(653041);
var r,
    i,
    a = n(192379),
    s = n(512722),
    o = n.n(s),
    l = n(683076),
    u = n(442837),
    c = n(224706),
    d = n(812206),
    _ = n(835473),
    E = n(669764),
    f = n(626135),
    h = n(630388),
    p = n(539746),
    I = n(981631);
((i = r || (r = {})).NoMatch = 'no match'), (i.NSFW = 'nsfw'), (i.NoSummary = 'no summary'), (i.NoReleaseDate = 'no release date'), (i.NoCoverImage = 'no cover image'), (i.Disabled = 'profile disabled');
let m = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            r = arguments.length > 3 ? arguments[3] : void 0;
        f.default.track(I.rMx.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: t,
            rejection_reason: n,
            source: r
        });
    },
    T = (e, t) => {
        let n = [];
        return null == e || null == t ? ['no match'] : ((0, h.yE)(t.flags, I.udG.GAME_PROFILE_DISABLED) && n.push('profile disabled'), e.themes.includes(l.i.EROTIC) && n.push('nsfw'), (null == e.summary || 0 === e.summary.length) && n.push('no summary'), (null == e.summary || 0 === e.summary.length) && n.push('no summary'), n);
    },
    S = (e, t) => 0 === T(e, t).length,
    g = (e) => {
        let t = E.Z.getGame(e);
        return S(t, d.Z.getApplication(e));
    };
t.ZP = (e) => {
    let { location: t, applicationId: n = '', autoTrackExposure: r = !0, source: i, trackEntryPointImpression: s = !0 } = e,
        l = a.useRef(!1),
        d = (0, p.xG)(t, r);
    a.useEffect(() => {
        d && null != n && '' !== n && c.Z.getDetectableGamesSupplemental([n]);
    }, [n, d]);
    let f = (0, u.e7)([E.Z], () => E.Z.getGame(n)),
        h = (0, _.q)(n),
        I = a.useMemo(() => (null != f && null != h ? S(f, h) : null), [h, f]);
    return (
        a.useEffect(() => {
            !l.current && d && s && !1 === E.Z.isFetching(n) && null != f && null != I && (o()(null != i, 'Cannot track a Game Profile Entry Point Impressions without a source.'), m(I, n, T(f), i), (l.current = !0));
        }, [I, n, d, f, i, s]),
        {
            shouldOpenGameProfile: d && !0 === I,
            applicationId: n
        }
    );
};
