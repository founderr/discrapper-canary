r.d(n, {
    z6: function () {
        return y;
    }
});
var i,
    a = r(789020);
var s = r(653041);
var o = r(192379),
    l = r(512722),
    u = r.n(l),
    c = r(683076),
    d = r(442837),
    f = r(224706),
    _ = r(812206),
    h = r(835473),
    p = r(669764),
    m = r(626135),
    g = r(630388),
    E = r(539746),
    v = r(981631);
!(function (e) {
    (e.NoMatch = 'no match'), (e.NSFW = 'nsfw'), (e.NoSummary = 'no summary'), (e.NoReleaseDate = 'no release date'), (e.NoCoverImage = 'no cover image'), (e.Disabled = 'profile disabled');
})(i || (i = {}));
let I = function (e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
            i = arguments.length > 3 ? arguments[3] : void 0;
        m.default.track(v.rMx.GAME_PROFILE_ENTRY_POINT_AVAILABLE, {
            game_profile_available: e,
            application_id: n,
            rejection_reason: r,
            source: i
        });
    },
    T = (e, n) => {
        let r = [];
        return null == e || null == n ? ['no match'] : ((0, g.yE)(n.flags, v.udG.GAME_PROFILE_DISABLED) && r.push('profile disabled'), e.themes.includes(c.i.EROTIC) && r.push('nsfw'), (null == e.summary || 0 === e.summary.length) && r.push('no summary'), (null == e.summary || 0 === e.summary.length) && r.push('no summary'), r);
    },
    b = (e, n) => 0 === T(e, n).length,
    y = (e) => {
        let n = p.Z.getGame(e);
        return b(n, _.Z.getApplication(e));
    },
    S = (e) => {
        let { location: n, applicationId: r = '', autoTrackExposure: i = !0, source: a, trackEntryPointImpression: s = !0 } = e,
            l = o.useRef(!1),
            c = (0, E.xG)(n, i);
        o.useEffect(() => {
            c && null != r && '' !== r && f.Z.getDetectableGamesSupplemental([r]);
        }, [r, c]);
        let _ = (0, d.e7)([p.Z], () => p.Z.getGame(r)),
            m = (0, h.q)(r),
            g = o.useMemo(() => (null != _ && null != m ? b(_, m) : null), [m, _]);
        return (
            o.useEffect(() => {
                !l.current && c && s && !1 === p.Z.isFetching(r) && null != _ && null != g && (u()(null != a, 'Cannot track a Game Profile Entry Point Impressions without a source.'), I(g, r, T(_), a), (l.current = !0));
            }, [g, r, c, _, a, s]),
            {
                shouldOpenGameProfile: c && !0 === g,
                applicationId: r
            }
        );
    };
n.ZP = S;
